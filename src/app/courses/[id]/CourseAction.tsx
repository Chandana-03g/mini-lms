// "use client";

// import { useEffect, useState } from "react";
// import { useSession } from "next-auth/react";
// import { useRouter, usePathname } from "next/navigation";

// export default function CourseActions({
//   courseId,
// }: {
//   courseId: string;
// }) {
//  const { data: session, status } = useSession();

//   const router = useRouter();
//   const pathname = usePathname();
// const [saved, setSaved] = useState(false);

//   const [enrolled, setEnrolled] = useState(false);
//   const [loading, setLoading] = useState(true);

//  useEffect(() => {
//       if (!courseId) {
//     setLoading(false);
//     return;
//   }
//   if (status === "loading") return;

//   if (!session) {
//     setEnrolled(false);
//     setLoading(false);
//     return;
//   }
// async function checkSaved() {
//   const res = await fetch(
//     `/api/check-saved?courseId=${courseId}`
//   );
//   const data = await res.json();
//   setSaved(data.saved);
// }

//  async function checkEnrollment() {
//   const res = await fetch(
//     `/api/check-enrollment?courseId=${courseId}`
//   );

//   if (!res.ok) {
//     setEnrolled(false);
//     setLoading(false);
//     return;
//   }

//   const data = (await res.json()) as { enrolled: boolean };
//   setEnrolled(data.enrolled);
//   setLoading(false);
// }


//   checkEnrollment();
// }, [status, session, courseId]);



//   // ENROLL
//   async function handleEnroll() {
//     if (!session) {
//       router.push(
//         `/login?callbackUrl=${encodeURIComponent(pathname)}`
//       );
//       return;
//     }

//     await fetch("/api/enroll", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ courseId }),
//     });

//     setEnrolled(true); // ✅ instantly update UI
//   }

//   // SAVE FOR LATER (unchanged)
// async function handleSave() {
//   if (!session) {
//     router.push(
//       `/login?callbackUrl=${encodeURIComponent(pathname)}`
//     );
//     return;
//   }

//   await fetch("/api/save", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ courseId }),
//   });

//   setSaved(true);
// }


// if (status === "loading" || loading) return null;


//   return (
//     <div className="bg-[#162235] p-6 rounded-2xl h-fit">
//       <button
//         onClick={handleEnroll}
//         disabled={enrolled}
//         className={`w-full py-3 rounded-xl font-semibold mb-4 ${
//           enrolled
//             ? "bg-green-600 cursor-not-allowed"
//             : "bg-purple-600"
//         }`}
//       >
//         {enrolled ? "Enrolled" : "Enroll Now"}
//       </button>

//       <div className="bg-[#162235] p-6 rounded-2xl h-fit">

//   {/* IF ENROLLED → SHOW GO TO COURSE */}
//   {enrolled ? (
//     <button
//       onClick={() => router.push(`/learn/${courseId}`)}
//       className="w-full bg-green-600 py-3 rounded-xl font-semibold"
//     >
//       Go to Course →
//     </button>
//   ) : (
//     <>
//       {/* ENROLL BUTTON */}
//       <button
//         onClick={handleEnroll}
//         className="w-full bg-purple-600 py-3 rounded-xl font-semibold mb-4"
//       >
//         Enroll Now
//       </button>

//       {/* SAVE BUTTON */}
//       <button
//         onClick={handleSave}
//         className="w-full border border-gray-500 py-3 rounded-xl font-semibold"
//       >
//         Save for Later
//       </button>
//     </>
//   )}

// </div>


//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";

export default function CourseActions({
  courseId,
  image,
  title,
}: {
  courseId: string;
  image?: string;
  title?: string;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const [enrolled, setEnrolled] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  /* ---------- CHECK STATUS ---------- */
  useEffect(() => {
    if (!courseId || status === "loading") return;

    if (!session) {
      setLoading(false);
      return;
    }

    async function checkStatus() {
      const [enrollRes, saveRes] = await Promise.all([
        fetch(`/api/check-enrollment?courseId=${courseId}`),
        fetch(`/api/check-saved?courseId=${courseId}`),
      ]);

      const enrollData = await enrollRes.json();
      const saveData = await saveRes.json();

      setEnrolled(enrollData.enrolled);
      setSaved(saveData.saved);
      setLoading(false);
    }

    checkStatus();
  }, [courseId, session, status]);

  /* ---------- ACTIONS ---------- */
  async function handleEnroll() {
    if (!session) {
      router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`);
      return;
    }

    await fetch("/api/enroll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ courseId }),
    });

    setEnrolled(true);
    setSaved(false);
  }

  async function handleSave() {
    if (!session) {
      router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`);
      return;
    }

    await fetch("/api/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ courseId }),
    });

    setSaved(true);
  }

  if (loading) return null;

return (
  <div className="bg-[#fafcff] rounded-2xl border border-black overflow-hidden shadow-xl">

    {/* IMAGE */}
    <div className="object-cover h-40 sm:h-44">
      <img
        src={image || "/courses/default.png"}
        alt={title || "Course image"}
        className="w-full h-full object-cover"
      />
    </div>

    {/* DIVIDER */}
    <div className="h-px bg-white/10" />

    {/* ACTIONS */}
<div className="p-4 space-y-3">

  {enrolled ? (
    <>
      <button
        disabled
        className="
          w-full bg-green-600 text-white
          py-2.5 rounded-lg font-semibold
          cursor-not-allowed
        "
      >
        Enrolled ✓
      </button>

      <button
        onClick={() => router.push(`/learn/${courseId}`)}
        className="
          w-full bg-green-700 text-white
          py-2.5 rounded-lg font-semibold
          transition-all duration-300
          hover:bg-green-800 hover:-translate-y-0.5
          active:scale-95
        "
      >
        Go to Course →
      </button>
    </>
  ) : (
    <>
      {/* ENROLL */}
      <button
        onClick={handleEnroll}
        className="
          w-full bg-purple-600 text-white
          py-2.5 rounded-lg font-semibold
          transition-all duration-300
          hover:bg-purple-700 hover:-translate-y-0.5
          hover:shadow-lg
          active:scale-95
        "
      >
        Enroll Now
      </button>

      {/* SAVE */}
      <button
        onClick={handleSave}
        className="
          w-full bg-purple-500 text-white
          py-2.5 rounded-lg font-semibold
          transition-all duration-300
          hover:bg-purple-600 hover:-translate-y-0.5
          hover:shadow-md
          active:scale-95
        "
      >
        {saved ? "Saved ✓" : "Save for Later"}
      </button>
    </>
  )}
</div>

  </div>
);


}

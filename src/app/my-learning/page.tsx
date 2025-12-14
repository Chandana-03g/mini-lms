import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default async function MyLearningPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  const enrollments = await prisma.enrollment.findMany({
    where: { userId: (session.user as any).id },
    include: { course: true },
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fde2f3] via-[#f3e8ff] to-[#d5aed3] px-4 sm:px-10 py-10  pt-24">
  <h1 className="text-2xl  text-gray-950 font-bold mb-8">My Learning</h1>

  {enrollments.length === 0 && (
    <p className="text-gray-600">No courses enrolled yet.</p>
  )}

  <div className="space-y-5 max-w-8xl">
    {enrollments.map((e) => {
      const completed = e.progress === 100;

      return (
        <div
          key={e.id}
          className="
            bg-white rounded-2xl shadow-md
            px-6 py-4
            flex flex-col md:flex-row
            md:items-center md:justify-between
            gap-6
          "
        >
          {/* LEFT: IMAGE + INFO */}
          <div className="flex items-center gap-5 flex-1">
            {/* IMAGE */}
            <div className="relative w-32 h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
              <Image
                src={e.course.image || "/placeholder.png"}
                alt={e.course.title}
                fill
                className="object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="w-full">
              <p className="font-semibold text-gray-900 text-base">
                {e.course.title}
              </p>

              <p className="text-sm text-gray-500 mb-2">
                {e.course.level}
              </p>

              {/* PROGRESS */}
              <div className="w-full max-w-sm bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full transition-all"
                  style={{ width: `${e.progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT: STATUS + ACTION */}
          <div className="flex items-center gap-5 justify-end">
            <span
              className={`px-4 py-1.5 rounded-full text-xs font-semibold ${
                completed
                  ? "bg-green-100 text-green-700"
                  : "bg-purple-100 text-purple-700"
              }`}
            >
              {completed ? "Completed" : "On Going"}
            </span>

            <Link
              href={`/learn/${e.course.id}`}
              className="text-sm font-semibold text-purple-700 hover:underline"
            >
              Continue →
            </Link>
          </div>
        </div>
      );
    })}
  </div>
</main>

  );
}

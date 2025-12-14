import Navbar from "@/app/components/Navbar";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function MyLearningPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  const enrollments = await prisma.enrollment.findMany({
   where: { userId: (session.user as any).id },

    include: { course: true },
  });

  return (
    <>
      

      <main className="bg-[#f0f0f0] min-h-screen text-gray-950 px-8 py-10">
        <h1 className="text-3xl font-bold mb-8 text-center md:text-left">
  My Learning
</h1>


        {enrollments.length === 0 && (
          <p className="text-gray-950 text-center md:text-left">No courses enrolled yet.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {enrollments.map((e) => (
            <div
              key={e.id}
              className="bg-white shadow-2xl border border-black p-6 rounded-2xl"
            >
              <h2 className="text-lg font-semibold mb-1">
                {e.course.title}
              </h2>

              <p className="text-sm text-gray-950 mb-4">
                {e.course.level}
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-300 rounded-full h-2 mb-2">
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: `${e.progress}%` }}
                />
              </div>

              <p className="text-s text-gray-950 mb-4">
                {e.progress}% completed
              </p>

              {/* Continue Learning */}
              <Link
                href={`/learn/${e.course.id}`}
                className="inline-block text-purple-800 hover:underline text-md font-bold"
              >
                Continue Learning →
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

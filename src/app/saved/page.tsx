import Navbar from "@/app/components/Navbar";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import CourseCard from "@/app/components/CourseCard";

export default async function SavedPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  const savedCourses = await prisma.savedCourse.findMany({
    where: { userId: session.user.id },
    include: { course: true },
  });

  return (
    <>
     
      <main className="bg-gradient-to-br from-[#fde2f3] via-[#f3e8ff] to-[#d5aed3] h-screen text-gray-900 px-8 py-10 t-20 pt-24">
        <h1 className="text-3xl font-bold mb-8 text-center md:text-left">
Saved Courses
</h1>


        {savedCourses.length === 0 && (
          <p className="text-gray-800 text-center md:text-left">
            No saved courses yet.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {savedCourses.map((s) => (
            <CourseCard
              key={s.course.id}
              {...s.course}
            />
          ))}
        </div>
      </main>
    </>
  );
}

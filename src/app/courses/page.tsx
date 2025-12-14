import Navbar from "../components/Navbar";
import { prisma } from "@/lib/prisma";
import CoursesGrid from "../components/CourseGrid";

export default async function CoursesPage() {
  const courses = await prisma.course.findMany({
    orderBy: { title: "asc" },
  });

  return (
    <>


      <main className="flex-1 bg-gradient-to-br from-[#fde2f3] via-[#f3e8ff] to-[#d5aed3] px-8 py-14 -mt-20 pt-28">

        {/* Header */}
       <section className="mb-8 max-w-xl mx-auto px-2 sm:px-0 text-center">
  <h1 className="text-4xl font-bold text-gray-950 mb-2">
    All Courses
  </h1>
  <p className="text-gray-800">
    Explore our full catalog of courses and find the perfect one for you
  </p>
</section>


        {/* Courses */}
        <CoursesGrid courses={courses} />
      </main>
    </>
  );
}

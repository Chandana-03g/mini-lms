import Navbar from "../components/Navbar";
import { prisma } from "@/lib/prisma";
import CoursesGrid from "../components/CourseGrid";

export default async function CoursesPage() {
  const courses = await prisma.course.findMany({
    orderBy: { title: "asc" },
  });

  return (
    <>


      <main className="min-h-screen bg-gradient-to-b from-[#fceefe] to-[#f8e2f8] px-8 py-14">
        {/* Header */}
        <section className="mb-8 max-w-xl mx-auto px-2 sm:px-0 text-center md:text-left">


          <h1 className="text-4xl font-bold text-gray-950 mb-2 ">
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

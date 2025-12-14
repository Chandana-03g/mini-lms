import { prisma } from "@/lib/prisma";
import CourseCard from "./CourseCard";
import Link from "next/link";

export default async function FeaturedCourses() {
  const featuredCourses = await prisma.course.findMany({
    where: { featured: true },
  });

  return (
    <section className="bg-white py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-950">
        Featured Courses
      </h2>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {featuredCourses.map((course) => (
          <CourseCard
            key={course.id}
            {...course}
            showFeaturedBadge={true}
          />
        ))}
      </div> */}

      <div className="relative overflow-hidden w-full py-4">
  <div className="flex w-max gap-4 animate-marquee">
    {[...featuredCourses, ...featuredCourses].map((course, index) => (
      <CourseCard
        key={`${course.id}-${index}`}
        id={course.id}
        title={course.title}
        level={course.level}
        featured={course.featured}
        image={course.image}
        variant="featured"
      />
    ))}
  </div>
</div>


      {/* View All Courses Button */}
      <div className="mt-12 flex justify-center">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 px-6 py-3 border border-purple-800 rounded-xl  text-purple-800 font-medium hover:bg-gray-100 transition"
        >
          View All Courses 
        </Link>
      </div>
    </section>
  );
}

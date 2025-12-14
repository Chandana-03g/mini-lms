"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";

type Course = {
  id: string;
  title: string;
  level: string;
  featured: boolean;
};

export default function CoursesGrid({ courses }: { courses: Course[] }) {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Search */}
      <div className="mb-8 max-w-xl mx-auto">

        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-2xl bg-white text-gray-950 placeholder-gray-500 outline-none  border-1 border-black"
        />
      </div>

      <p className="text-gray-950 mb-6">
        Showing {filteredCourses.length} courses
      </p>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">


        {filteredCourses.map((course) => (
          <CourseCard key={course.id} {...course} />


        ))}
      </div>
    </>
  );
}

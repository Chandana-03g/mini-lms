import Navbar from "@/app/components/Navbar";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import CourseAction from "./CourseAction";

export default async function CourseDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const course = await prisma.course.findUnique({
        where: { id },
        include: { modules: true },
    });

    if (!course) notFound();

    return (
        <>
          

      <main className="min-h-screen bg-gradient-to-b from-[#fceefe] to-[#f8e2f8] text-white px-4 sm:px-8 py-10">

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* LEFT */}
                    <div className="lg:col-span-2">
                        <h1 className="text-4xl font text-gray-950 text-bold mb-4">{course.title}</h1>

                        <span className="inline-block mb-6 px-4 py-1 rounded-full bg-purple-800 text-sm">
                            {course.level}
                        </span>

                        <section className="mb-10">
                            <h2 className="text-2xl text-gray-950 font-semibold mb-4">What you’ll learn</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-950">
                                {course.modules.slice(0, 6).map((m) => (
                                    <li key={m.id}>✔ {m.title}</li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl  text-gray-950 font-semibold mb-6">Course content</h2>

                            <div className="space-y-3">
                                {course.modules.map((m, i) => (
                                    <div key={m.id} className="bg-[#fefaff] text-gray-950 border border-black rounded-xl p-4">
                                        {i + 1}. {m.title}
                                    </div>
                                ))}
                            </div>

                    

                </section>
            </div>

            {/* RIGHT */}
            {course?.id && (
  <CourseAction
    courseId={course.id}
    image={course.image}
    title={course.title}
  />
)}

        </div >
      </main >
    </>
  );
}

"use client";

import { useState } from "react";

export default function LearnClient({
  modules,
  courseId,
  progress,
}: {
  modules: any[];
  courseId: string;
  progress: number;
}) {
  /* ---------- SAFETY GUARD ---------- */
  if (!modules || modules.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        No course content available.
      </div>
    );
  }

  /* ---------- STATE ---------- */
  const [currentIndex, setCurrentIndex] = useState(0);
  const completedCount = Math.floor((progress / 100) * modules.length);
  const [courseCompleted, setCourseCompleted] = useState(progress === 100);

  /* ---------- SAFE CURRENT MODULE ---------- */
  const safeIndex = Math.min(currentIndex, modules.length - 1);
  const currentModule = modules[safeIndex];
  const isLast = safeIndex === modules.length - 1;

  /* ---------- ACTIONS ---------- */
  async function nextModule() {
    const nextIndex = Math.min(currentIndex + 1, modules.length - 1);

    const newProgress = Math.round(
      ((nextIndex + 1) / modules.length) * 100
    );

    await fetch("/api/update-progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ courseId, progress: newProgress }),
    });

    setCurrentIndex(nextIndex);
  }

  async function markCompleted() {
    await fetch("/api/update-progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ courseId, progress: 100 }),
    });

    setCourseCompleted(true);
  }

  /* ---------- UI ---------- */
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fde2f3] via-[#f3e8ff] to-[#d5aed3] pt-4">

      <div className="flex flex-col md:flex-row">

        {/* LEFT – MODULE LIST */}
        <aside
          className="
            w-full md:w-72
            border-b md:border-b-0 md:border-r
            bg-[#fafafa]
            p-4 md:p-6
            space-y-2
          "
        >
          <h2 className="text-sm font-semibold text-gray-600 mb-4">
            Course Content
          </h2>

          {modules.map((m, i) => (
            <button
              key={m.id}
              onClick={() => setCurrentIndex(i)}
              className={`
                w-full text-left px-3 py-2 rounded-lg text-sm
                flex items-center gap-2
                transition-all duration-200
                ${
                  i === safeIndex
                    ? "bg-purple-100 text-purple-700 font-medium"
                    : "hover:bg-gray-100 text-gray-700"
                }
              `}
            >
              {i < completedCount && (
                <span className="text-green-500">✔</span>
              )}
              <span className="truncate">
                {i + 1}. {m.title}
              </span>
            </button>
          ))}
        </aside>

        {/* RIGHT – CONTENT */}
        <section className="flex-1 p-4 sm:p-6 md:p-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              {currentModule.title}
            </h1>

            <div className="border rounded-xl bg-white shadow-sm mb-8 overflow-hidden">
              {/* VIDEO */}
              {currentModule.videoUrl && (
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${
                      currentModule.videoUrl.split("/").pop()?.split("?")[0]
                    }`}
                    title={currentModule.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {/* NOTES */}
              <div className="p-4 sm:p-6">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {currentModule.notes}
                </p>
              </div>
            </div>

            {!isLast ? (
              <button
                onClick={nextModule}
                className="
                  bg-purple-600 text-white
                  px-6 py-3 rounded-lg font-semibold
                  transition-all duration-300
                  hover:bg-purple-700 hover:translate-x-1 hover:shadow-lg
                "
              >
                Next
              </button>
            ) : (
              <button
                onClick={markCompleted}
                disabled={courseCompleted}
                className={`px-6 py-3 rounded-lg font-semibold ${
                  courseCompleted
                    ? "bg-green-600 text-white cursor-not-allowed"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}
              >
                {courseCompleted ? "Completed ✓" : "Mark as Completed"}
              </button>
            )}
          </div>
        </section>

      </div>
    </main>
  );
}

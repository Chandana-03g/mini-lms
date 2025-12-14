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
  const [currentIndex, setCurrentIndex] = useState(0);

  const initialCompleted = Math.floor(
    (progress / 100) * modules.length
  );

  const [completedCount, setCompletedCount] =
    useState(initialCompleted);

  const [courseCompleted, setCourseCompleted] = useState(
    progress === 100
  );

  const currentModule = modules[currentIndex];
  const isLast = currentIndex === modules.length - 1;

  async function nextModule() {
    const newCompleted = Math.max(
      completedCount,
      currentIndex + 1
    );

    const newProgress = Math.round(
      (newCompleted / modules.length) * 100
    );

    await fetch("/api/update-progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ courseId, progress: newProgress }),
    });

    setCompletedCount(newCompleted);
    setCurrentIndex(currentIndex + 1);
  }

  async function markCompleted() {
    await fetch("/api/update-progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ courseId, progress: 100 }),
    });

    setCompletedCount(modules.length);
    setCourseCompleted(true);
  }

  return (
    <main className="min-h-screen bg-white flex border-t">

      {/* LEFT – MODULE LIST */}
      <aside className="w-1/4 min-w-[260px] border-r bg-[#fafafa] p-6 space-y-2">
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
                i === currentIndex
                  ? "bg-purple-100 text-purple-700 font-medium"
                  : "hover:bg-gray-100 text-gray-700"
              }
            `}
          >
            {i < completedCount && (
              <span className="text-green-500">✔</span>
            )}
            <span>{i + 1}. {m.title}</span>
          </button>
        ))}
      </aside>

      {/* RIGHT – CONTENT */}
      <section className="w-3/4 p-10">
        <div className="max-w-3xl">

          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {currentModule.title}
          </h1>

          <div className="border rounded-xl p-6 bg-white shadow-sm mb-10">
            <p className="text-gray-700 leading-relaxed">
              {currentModule.notes}
            </p>
          </div>

          {/* ACTION BUTTONS */}
          {!isLast ? (
            <button
              onClick={nextModule}
              className="
    bg-purple-600 text-white
    px-6 py-3 rounded-lg font-semibold

    transform-gpu
    transition-all duration-300 ease-out

    hover:bg-purple-700
    hover:translate-x-1
    hover:shadow-lg

    active:scale-95
  "
            >
              Next 
            </button>
          ) : (
            <button
              onClick={markCompleted}
              disabled={
                courseCompleted ||
                completedCount !== modules.length - 1
              }
              className={`
                px-6 py-3 rounded-lg font-semibold
                transition-all duration-200
                active:scale-95
                ${
                  courseCompleted
                    ? "bg-green-600 text-white cursor-not-allowed"
                    : completedCount === modules.length - 1
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }
              `}
            >
              {courseCompleted ? "Completed ✓" : "Mark as Completed"}
            </button>
          )}

        </div>
      </section>
    </main>
  );
}

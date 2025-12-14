import Navbar from "@/app/components/Navbar";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import LearnClient from "./LearnClient";

export default async function LearnPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  const { courseId } = await params; // ✅ FIX

  const enrollment = await prisma.enrollment.findUnique({
    where: {
      userId_courseId: {
        userId: session.user.id,
        courseId,
      },
    },
    include: {
      course: {
        include: {
          modules: true,
        },
      },
    },
  });

  if (!enrollment) redirect("/my-learning");

  return (
    <>
      <Navbar />
    <LearnClient
  modules={enrollment.course.modules}
  courseId={courseId}
  progress={enrollment.progress}
/>

    </>
  );
}

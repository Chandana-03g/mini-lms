import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { courseId, progress } = await req.json();

  await prisma.enrollment.update({
    where: {
      userId_courseId: {
        userId: (session.user as any).id,
        courseId,
      },
    },
    data: { progress },
  });

  return NextResponse.json({ success: true });
}

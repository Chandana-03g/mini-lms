import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/authOptions";

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    const { searchParams } = new URL(req.url);
    const courseId = searchParams.get("courseId");

    // ✅ Always return JSON
    if (!session || !session.user || !courseId) {
      return NextResponse.json({ enrolled: false });
    }

    const userId = session.user.id; // ✅ now typed correctly

    const enrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId,
        },
      },
    });

    return NextResponse.json({
      enrolled: Boolean(enrollment),
    });
  } catch (error) {
    console.error("CHECK ENROLLMENT ERROR:", error);
    return NextResponse.json({ enrolled: false });
  }
}

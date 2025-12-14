


// import { getServerSession } from "next-auth";
// import { prisma } from "@/lib/prisma";
// import { NextResponse } from "next/server";
// import { authOptions } from "@/lib/authOptions";

// export async function POST(req: Request) {
//   console.log("🚀 ENROLL API HIT");

//   const session = await getServerSession(authOptions);
//   console.log("SESSION:", session);

//   if (!session || !(session.user as any)?.id) {
//     console.log("❌ NO USER ID");
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   const { courseId } = await req.json();
//   console.log("COURSE ID:", courseId);

//   const enrollment = await prisma.enrollment.create({
//     data: {
//       userId: (session.user as any).id,
//       courseId,
//     },
//   });

//   console.log("✅ SAVED ENROLLMENT:", enrollment);

//   return NextResponse.json({ success: true });
// }


import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/authOptions";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { courseId } = await req.json();
  const userId = session.user.id;

  // 1️⃣ Enroll (upsert prevents duplicates)
  await prisma.enrollment.upsert({
    where: {
      userId_courseId: {
        userId,
        courseId,
      },
    },
    update: {},
    create: {
      userId,
      courseId,
    },
  });

  // 2️⃣ REMOVE from saved courses (IMPORTANT)
  await prisma.savedCourse.deleteMany({
    where: {
      userId,
      courseId,
    },
  });

  return NextResponse.json({ success: true });
}

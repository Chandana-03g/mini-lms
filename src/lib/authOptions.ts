import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: {},
        email: {},
        password: {},
        mode: {},
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("MISSING_FIELDS");
        }

        const { name, email, password, mode } = credentials;

        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (mode === "signup") {
          if (!name) throw new Error("MISSING_FIELDS");
          if (user) throw new Error("USER_EXISTS");

          const hashed = await bcrypt.hash(password, 10);

          const newUser = await prisma.user.create({
            data: { name, email, password: hashed },
          });

          return {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
          };
        }

        if (!user) throw new Error("USER_NOT_FOUND");

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) throw new Error("INVALID_PASSWORD");

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],

callbacks: {
  async jwt({ token, user }) {
    // runs at login
    if (user) {
      token.id = user.id;
    }
    return token;
  },

  async session({ session, token }) {
    if (session.user) {
      session.user.id = token.id as string;
    }
    return session;
  },
},




  pages: {
    signIn: "/login",
  },
};

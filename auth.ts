import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import bcryptjs from "bcryptjs";
import prisma from "@/app/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    /*   Credentials({
      async authorize(credentials) {
        try {
          const user = await prisma.user.findUnique({
            where: {
              username: credentials.username as string,
            },
            select: {
              username: true,
              id: true,
            },
          });
          return user;
        } catch (err) {
          return null;
        }
      },
    }), */
  ],
  /* callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username as string;
        session.user.id = token.username as string;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      if (new URL(url).origin === baseUrl) return url;
      Response.redirect(new URL("/", url));
      return baseUrl;
    },

    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnCollection = nextUrl.pathname.startsWith("/collection");
      console.log({ auth, isLoggedIn, isOnCollection });

      if (isOnCollection) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/", nextUrl));
      }
      return true;
    },
  }, */
  secret: process.env.NEXT_AUTH_SECRET,
  session: { strategy: "jwt" },
});

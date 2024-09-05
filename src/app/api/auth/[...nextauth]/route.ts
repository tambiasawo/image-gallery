import NextAuth from "next-auth";
import authOptions from "@/app/lib/authOptions";

const handler = NextAuth({
  ...authOptions,
});

export { handler as POST, handler as GET };

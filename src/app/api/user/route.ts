import prisma from "@/app/lib/prisma";
import { createSession } from "@/app/lib/session";
import { NextRequest } from "next/server";
import { signIn } from "../../../../auth";

export async function GET(req: NextRequest) {
  const username = req.nextUrl.searchParams.get("username");
  const password = req.nextUrl.searchParams.get("password");

  if (!username || !password) {
    return new Response(JSON.stringify("form details are required"), {
      status: 400,
    });
  }
  const isLoggedIn = await signIn("credentials", { username, password });
  console.log({ isLoggedIn });
  return isLoggedIn
}

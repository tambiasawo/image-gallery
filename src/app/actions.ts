"use client";
import { redirect } from "next/navigation";
import { createSession } from "./lib/session";
import { SignupFormSchema } from "./lib/definitions";
import bcryptjs from "bcryptjs";
import prisma from "./lib/prisma";

export const signup = async (prevState: any, formData: FormData) => {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { username, password } = validatedFields.data;
  if (username === "admin1" && password === "admin1") {
    const newUser = { id: String(Math.random() * 10), username, password };
    await createSession(newUser.id);
    redirect("/");
  }
};

/* 
export async function logout() {
  deleteSession();
  redirect("/");
}
 */

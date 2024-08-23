import { redirect } from "next/navigation";
import { createSession } from "./lib/session";
import { SignupFormSchema } from "./lib/definitions";
import bcryptjs from "bcryptjs";
import prisma from "./lib/prisma";
import { sql } from "@vercel/postgres";

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
  /*   const user = await prisma.user.findUnique({
    where: {
      username,
    },
    select: {
      username: true,
      password: true,
      id: true,
    },
  }); */
  const { rows } = await sql `SELECT * from user where username=${username}`;
  console.log({ rows });
  /*  if (user) {
    const hashedPassword = bcryptjs.compareSync(password, user.password);
    if (hashedPassword) {
      await createSession(user.id);
      redirect("/");
    }
  } */

  /* const newUser = await prisma.user.create({
    data: {
      username,
      password: bcryptjs.hashSync(password), // Make sure to hash the password before storing
    },
    select: {
      username: true,
      password: true,
      id: true,
    },
  });

  await createSession(newUser.id);
 */
  redirect("/");
};

/* 
export async function logout() {
  deleteSession();
  redirect("/");
}
 */

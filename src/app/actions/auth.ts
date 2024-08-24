import { redirect } from "next/navigation";
import bcryptjs from "bcryptjs";
import { SignupFormSchema } from "../lib/definitions";
import { createSession } from "../lib/session";
import prisma from "../lib/prisma";

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
  
  console.log({ validatedFields });
  console.log(process.env.NEXT_PUBLIC_NODE_ENV);

  const { username, password } = validatedFields.data;
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
    select: {
      username: true,
      password: true,
      id: true,
    },
  });

  if (user) {
    const hashedPassword = bcryptjs.compareSync(password, user.password);
    if (hashedPassword) {
      await createSession(String(user.id));
      redirect("/");
    }
  }

  //const newUser: any = await User.create(user);

  redirect("/");
};

/* 
export async function logout() {
  deleteSession();
  redirect("/");
}
 */

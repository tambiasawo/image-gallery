import { redirect } from "next/navigation";
import { SignupFormSchema, FormState } from "../lib/definitions";
import { createSession } from "../lib/session";
import { User } from "../utils/db/User.model";
import bcryptjs from "bcryptjs";
import connectDB from "../utils/db/dbConnect";

export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Call the provider or db to create a user...
  connectDB();
  console.log({ validatedFields });

  const { username, password } = validatedFields.data;
  console.log({ User });

  const existingUser = await User.findOne({ username });
  //if (!existingUser) throw new Error("Wrong credentials!");

  if (existingUser) {
    console.log({ existingUser });
    const checkPassword = bcryptjs.compareSync(password, existingUser.password);
    if (checkPassword) {
      await createSession(existingUser?.id);
      redirect("/");
    } else {
      return { message: "Wrong credentials. Please try again" };
    }
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);
  const user = new User({
    username,
    password: hashedPassword,
  });
  console.log({ user });

  const newUser: any = await User.create(user);
  if (!newUser) return { message: "An error occurred while creating" };

  await createSession(newUser?.id);
  redirect("/");
}

import { deleteSession } from "@/app/lib/session";

export async function logout() {
  deleteSession();
  redirect("/");
}

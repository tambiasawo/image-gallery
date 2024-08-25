import { redirect } from "next/navigation";
import bcryptjs from "bcryptjs";
import { SignupFormSchema } from "../lib/definitions";

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
  const user = await fetch(`/api/user?username=${username}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
  console.log({ user });

  if (user) {
    // const hashedPassword = bcryptjs.compareSync(password, user.password);
    // if (hashedPassword) {
    //await createSession(String(user.id));
    //await createSession(user.id);
    redirect("/");
  }

  //const newUser: any = await User.create(user);
};

/* 
export async function logout() {
  deleteSession();
  redirect("/");
}
 */



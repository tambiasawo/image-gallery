import { signIn, signOut } from "../../auth";
import { revalidatePath } from "next/cache";

/* export const authenticate = async (prevState: any, formData: FormData) => {
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
  /* 
  const { username, password } = validatedFields.data;
  try {
    const response = await fetch(
      `/api/user?username=${username}&password=${password}`
    );
    console.log("actions", { response });
    if (response.ok) {
      redirect("/");
    }
  } catch (error) {

    throw error;
  } */
export const GithubLoginAction = async (provider: string) => {
  try {
    await signIn(provider, { redirectTo: "/" }); // Ensure signIn is async
    revalidatePath("/"); // Revalidate the path after sign in
  } catch (error) {
    console.error("Error during GitHub login:", error);
    // Handle error or return an appropriate response
  }
};

export const credentialsLogin = async (credentials:any) => {
  console.log({ credentials });
  try {
    await signIn("credentials", credentials, { redirectTo: "/" }); // Ensure signIn is async
    revalidatePath("/"); // Revalidate the path after sign in
  } catch (error) {
    console.error("Error during GitHub login:", error);
    // Handle error or return an appropriate response
  }
};
// logout function should be async as it performs an asynchronous action
export const logout = async () => {
  try {
    await signOut({ redirectTo: "/" }); // Ensure signOut is async
    revalidatePath("/"); // Revalidate the path after sign out
  } catch (error) {
    console.error("Error during logout:", error);
    // Handle error or return an appropriate response
  }

  // if (response.ok) redirect("/");
};

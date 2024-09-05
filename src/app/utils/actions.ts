import { signIn } from "next-auth/react";
import { ITEMS_PER_PAGE } from "../lib/constants";

type Params = {
  imageType: string;
  orderBy: string;
  page: number;
};
export const getImages = async (
  searchValue: string,
  categoriesArray: Array<string>,
  params: Params
) => {
  const categories = categoriesArray?.join(",");
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${
        process.env.NEXT_PUBLIC_API_kEY
      }&q=${searchValue}&image_type=${
        params.imageType
      }&category=${categories}&order=${params.orderBy}&per_page=${48}&page=${
        params.page
      }`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Something wrong occurred");
    return err;
  }
};

export const authenticate = async (
  previousState: void | null,
  formValues: FormData
) => {
  //const router = useRouter();
  const username = formValues.get("username");
  const password = formValues.get("password");

  console.log({ username });

  try {
    const response = await signIn("credentials", {
      username: username,
      password: password,
      redirect: false,
    });
    if (!response?.error) {
      window.location.href = "/";
    } else {
      console.log("problem logging in");
    }
  } catch (e: any) {
    console.log(e.message);
  }
};

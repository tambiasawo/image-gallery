import { ITEMS_PER_PAGE } from "../lib/constants.d";

type Params = {
  imageType: string;
  orderBy: string;
  page: number;
};
const getImages = async (
  searchValue: string,
  categoriesArray: Array<string>,
  params: Params
) => {
  const categories = categoriesArray?.join(",");
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_API_kEY}&q=${searchValue}&image_type=${params.imageType}&category=${categories}&order=${params.orderBy}&per_page=${ITEMS_PER_PAGE}&page=${params.page}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Something wrong occurred");
    return err;
  }
};

export default getImages;

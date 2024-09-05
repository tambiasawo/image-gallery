"use client";
import { useQuery } from "@tanstack/react-query";
import { Category } from "../../lib/types";
import { getImages } from "../actions";

type Params = {
  searchValue: string;
  imageType: string;
  orderBy: string;
  checkedCategories: Category;
  page: number;
};
const useImages = (params: Params) => {
  const { searchValue, checkedCategories, ...rest } = params;
  const categoriesArray = Object.entries(checkedCategories)
    .map(([key, value]) => ({
      [key]: value,
    }))
    .reduce((acc: Array<string>, curr) => {
      if (Object.values(curr)[0]) {
        acc.push(Object.keys(curr)[0]);
      }
      return acc;
    }, []);
  const { data, isLoading, error } = useQuery({
    queryKey: ["images", params],
    queryFn: () => getImages(searchValue, categoriesArray, rest),
    staleTime: 0,
  });
  return { data, isLoading, error };
};

export default useImages;

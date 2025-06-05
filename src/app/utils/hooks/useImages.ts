"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Category } from "../../lib/types";
import { getImages } from "../actions";

type Params = {
  searchValue: string;
  imageType: string;
  orderBy: string;
  checkedCategories: Category;
};

const useImages = ({
  searchValue,
  imageType,
  orderBy,
  checkedCategories,
}: Params) => {
  const categoriesArray = Object.entries(checkedCategories)
    .filter(([, v]) => v)
    .map(([k]) => k);

  const fetchImages = async ({ pageParam = 1 }) => {
    return getImages(searchValue, categoriesArray, {
      imageType,
      orderBy,
      page: pageParam,
    });
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ["images", searchValue, imageType, orderBy, checkedCategories],
    queryFn: fetchImages,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage?.hits?.length < 20) return undefined; // no more pages
      return pages.length + 1;
    },
    staleTime: 0,
    initialPageParam: 1,
  });

  // Flatten results for easy use
  const allImages = data?.pages.flatMap((page) => page.hits) || [];

  return {
    data: { hits: allImages, totalHits: data?.pages[0]?.totalHits || 0 },
    isLoading,
    isFetchingNextPage,
    error,
    fetchNextPage,
    hasNextPage,
  };
};

export default useImages;

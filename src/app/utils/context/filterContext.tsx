import React from "react";
import { Category } from "../../lib/types";
type Filters = { searchValue: string; imageType: string; orderBy: string };

type FilterContext = {
  filters: Filters;
  categories: Category;
  checkedCategories: Category;
  count: number;
  handleFiltersChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClear: () => void;
  handleBlur: () => void;
};

export const FilterContext = React.createContext<FilterContext>({
  filters: { searchValue: "", imageType: "all", orderBy: "popular" },
  categories: {},
  checkedCategories: {},
  count: 0,
  handleChange: (e) => {},
  handleClear: () => {},
  handleFiltersChange: (e) => {},
  handleBlur: () => {},
});

export const useFilterContext = () => React.useContext(FilterContext);

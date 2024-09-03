"use client";

import React from "react";
import { FilterContext } from "../context/filterContext";
import { Category } from "../../lib/types";
export const FilterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [filters, setFilters] = React.useState({
    searchValue: "",
    imageType: "all",
    orderBy: "popular",
  });

  const [count, setCount] = React.useState<number>(0);
  const [categories, setCategories] = React.useState<Category>({
    buildings: false,
    education: false,
    sports: false,
    animals: false,
    places: false,
    people: false,
    science: false,
    nature: false,
    feelings: false,
    backgrounds: false,
    fashion: false,
    health: false,
    religion: false,
    computer: false,
    industry: false,
    food: false,
    music: false,
    business: false,
    travel: false,
    transportation: false,
  });
  const [checkedCategories, setCheckedCategories] = React.useState({
    ...categories,
  });

  const handleFiltersChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    []
  );

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCategories((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
      if (e.target.checked) {
        setCount((prev) => prev + 1);
      } else {
        setCount((prev) => prev - 1);
      }
    },
    []
  );

  const handleBlur = () => {
    setCheckedCategories(categories);
  };

  const handleClear = React.useCallback(() => {
    const checkedboxes: Category = { ...categories };

    for (const key in checkedboxes) {
      if (checkedboxes[key]) {
        checkedboxes[key] = false;
      }
    }
    setCategories(checkedboxes);
    setCount(0);
  }, []);

  return (
    <FilterContext.Provider
      value={{
        filters,
        categories,
        count,
        checkedCategories,
        handleChange,
        handleFiltersChange,
        handleClear,
        handleBlur,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

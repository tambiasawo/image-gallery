"use client";
import React from "react";
import Chip from "@mui/material/Chip";
import Menu from "@mui/material/Menu";
import { useFilterContext } from "../../utils/context/filterContext";

const Filters = () => {
  const {
    filters,
    categories,
    count,
    handleChange,
    handleClear,
    handleFiltersChange,
    handleBlur,
  } = useFilterContext();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [showCountValue, setShowCountValue] = React.useState(false);
  const showImageTypePanel = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
    handleBlur();
    if (count > 0) setShowCountValue(true);
  };
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget);
    setShowCountValue(false);
  };

  return (
    <div>
      <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
        <input
          className="px-5 py-3 border border-black outline-none rounded-3xl mb-3"
          type="search"
          name="searchValue"
          placeholder="Search..."
          value={filters.searchValue}
          onChange={handleFiltersChange}
        />
      </form>

      <div className="flex items-center justify-center gap-5">
        <Chip
          component="a"
          id="basic-button"
          aria-controls={showImageTypePanel ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={showImageTypePanel ? "true" : undefined}
          onClick={handleClick}
          label={`Category ${showCountValue ? `(${count})` : ""}`}
          className="px-7"
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={showImageTypePanel}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{ "& .MuiPaper-root": { marginTop: "10px" } }}
        >
          <div className="flex justify-end gap-3 mr-4">
            <span data-testid="count-selected">{count} selected </span>
            <button
              onClick={handleClear}
              className="bg-slate-200 rounded-lg px-2"
            >
              Clear
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3 px-4 py-2 mt-1">
            <span>
              <input
                type="checkbox"
                name="backgrounds"
                value="backgrounds"
                id="backgrounds"
                checked={categories.backgrounds}
                onChange={handleChange}
              />
              {"    "}
              <label htmlFor="category">Backgrounds </label>
            </span>
            <span>
              <input
                type="checkbox"
                name="fashion"
                value="fashion"
                id="fashion"
                checked={categories.fashion}
                onChange={handleChange}
              />
              {"    "}
              <label htmlFor="fashion">Fashion </label>
            </span>
            <span>
              <input
                type="checkbox"
                name="nature"
                id="nature"
                value="nature"
                checked={categories.nature}
                onChange={handleChange}
              />
              {"    "}
              <label htmlFor="nature">Nature</label>
            </span>
            <span>
              <input
                type="checkbox"
                name="science"
                id="science"
                value="science"
                checked={categories.science}
                onChange={handleChange}
              />
              {"    "}
              <label htmlFor="science">Science</label>
            </span>
            <span>
              <input
                type="checkbox"
                name="education"
                id="education"
                value="education"
                checked={categories.education}
                onChange={handleChange}
              />
              {"    "}
              <label htmlFor="Education">Education</label>
            </span>{" "}
            <span>
              <input
                type="checkbox"
                name="feelings"
                id="feelings"
                value="feelings"
                checked={categories.feelings}
                onChange={handleChange}
              />
              {"    "}
              <label htmlFor="feelings">Feelings</label>
            </span>{" "}
            <span>
              <input
                type="checkbox"
                name="health"
                id="health"
                value="health"
                checked={categories.health}
                onChange={handleChange}
              />
              {"    "}
              <label htmlFor="health">Health</label>
            </span>{" "}
            <span>
              <input
                type="checkbox"
                name="religion"
                id="religion"
                value="religion"
                checked={categories.religion}
                onChange={handleChange}
              />
              {"    "}
              <label htmlFor="religion">Religion</label>
            </span>
            <span>
              <input
                type="checkbox"
                name="places"
                id="places"
                value="places"
                checked={categories.places}
                onChange={handleChange}
              />
              {"    "}
              <label htmlFor="places">Places</label>
            </span>
            <span>
              <input
                type="checkbox"
                name="people"
                id="people"
                value="people"
                checked={categories.people}
                onChange={handleChange}
              />
              {"    "}
              <label htmlFor="people">People</label>
            </span>
            <span>
              <input
                type="checkbox"
                name="animals"
                id="animals"
                value="animals"
                checked={categories.animals}
                onChange={handleChange}
              />
              {"    "}
              <label htmlFor="animals">Animals</label>
            </span>
            <span>
              <input
                type="checkbox"
                name="industry"
                id="industry"
                value="industry"
                checked={categories.industry}
                onChange={handleChange}
              />
              {"    "}
              <label htmlFor="industry">Industry</label>
            </span>
            <span>
              <input
                type="checkbox"
                name="computer"
                id="computer"
                value="computer"
                checked={categories.computer}
                onChange={handleChange}
              />
              {"    "}
              <label htmlFor="computer">Computer</label>
            </span>
            <span>
              <input
                type="checkbox"
                name="sports"
                id="sports"
                value="sports"
                checked={categories.sports}
                onChange={handleChange}
              />
              {"    "}
              <label htmlFor="sports">Sports</label>
            </span>
            <span>
              <input
                type="checkbox"
                name="transportation"
                id="transportation"
                value="transportation"
                checked={categories.transportation}
                onChange={handleChange}
              />
              {"    "}
              <label htmlFor="transportation">Transportation</label>
            </span>
            <span>
              <input
                type="checkbox"
                name="travel"
                id="travel"
                value="travel"
                checked={categories.travel}
                onChange={handleChange}
              />
              {"    "}
              <label htmlFor="travel">Travel</label>
            </span>
            <span>
              <input
                type="checkbox"
                name="food"
                id="food"
                value="food"
                checked={categories.food}
                onChange={handleChange}
              />
              {"    "}
              <label htmlFor="food">Food</label>
            </span>
            <span>
              <input
                type="checkbox"
                name="buildings"
                id="buildings"
                value="buildings"
                checked={categories.buildings}
                onChange={handleChange}
              />
              {"    "}
              <label htmlFor="buildings">Buildings</label>
            </span>
            <span>
              <input
                type="checkbox"
                name="music"
                id="music"
                value="music"
                onChange={handleChange}
                checked={categories.music}
              />
              {"    "}
              <label htmlFor="music">Music</label>
            </span>
            <span>
              <input
                type="checkbox"
                name="business"
                id="business"
                value="business"
                onChange={handleChange}
                checked={categories.business}
              />
              {"    "}
              <label htmlFor="business">Business</label>
            </span>
          </div>
        </Menu>

        <span>
          <label htmlFor="imageType">Image Type: </label>
          <select
            name="imageType"
            id="imageType"
            className="border outline-none border-black rounded-lg p-1"
            defaultValue="all"
            onChange={handleFiltersChange}
          >
            <option value="all">All</option>
            <option value="photo">Photo</option>
            <option value="vector">Vector</option>
            <option value="illustration">Illustration</option>
          </select>
        </span>
        <span>
          <label htmlFor="orderBy">Order: </label>
          <select
            name="orderBy"
            id="orderBy"
            className="border outline-none border-black rounded-lg p-1"
            onChange={handleFiltersChange}
          >
            <option value="popular">Popular</option>
            <option value="latest">Latest</option>
          </select>
        </span>
      </div>
    </div>
  );
};

export default Filters;

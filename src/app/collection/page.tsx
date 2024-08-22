import React from "react";
import Divider from "@mui/material/Divider";

const Collection = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-auto h-[80vh]">
          <ul className="flex flex-col gap-4">
            <li>
              <button className="collection-option ">Liked</button>
            </li>
            <li>
              <button className="collection-option">Saved</button>
            </li>
          </ul>
        </div>
        <Divider
          orientation="vertical"
          variant="fullWidth"
          flexItem
          className="hidden md:block"
        />
        <div className="flex-grow flex-shrink basis-[70%]"></div>
      </div>
    </div>
  );
};

export default Collection;

"use client";
import React from "react";
import Divider from "@mui/material/Divider";
import { useAppSelector } from "../store/hooks";
import { getSavedImages } from "../store/savedSlice";
import Image from "next/image";

const Collection = () => {
  const { saves: savedImages } = useAppSelector((state) => state.saves);
  const { likes: likedImages } = useAppSelector((state) => state.likes);

  const [displayedImages, setDisplayedImages] = React.useState(likedImages);
  const [currentTab, setCurrentTab] = React.useState("likes");
  const showLikedImages = () => {
    setDisplayedImages(likedImages);
    setCurrentTab("likes");
  };

  const showSavedImages = () => {
    setDisplayedImages(savedImages);
    setCurrentTab("saves");
  };

  console.log({ savedImages, likedImages, displayedImages });
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-auto">
          <ul className="flex flex-row justify-center items-center md:items-start md:flex-col gap-4">
            <li className="w-full">
              <button
                className={`collection-option ${
                  currentTab === "likes" ? "bg-slate-200" : ""
                }`}
                onClick={showLikedImages}
              >
                Liked
              </button>
            </li>
            <li className="w-full">
              <button
                className={`collection-option ${
                  currentTab === "saves" ? "bg-slate-200" : ""
                }`}
                onClick={showSavedImages}
              >
                Saved
              </button>
            </li>
          </ul>
        </div>
        <Divider
          orientation="vertical"
          variant="fullWidth"
          flexItem
          className="hidden md:block"
        />
        <div className="flex-grow flex-shrink basis-[70%]">
          <div className="flex flex-wrap gap-3 mt-8 items-center justify-center">
            {displayedImages.map((image) => (
              <img
                key={image.img_id}
                src={image.img_src}
                alt="displayed image"
                className="image-grid-item image-item"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;

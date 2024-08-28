"use client";
import React from "react";
import Divider from "@mui/material/Divider";
import { RootState } from "../store";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { removeSaved } from "../store/savedSlice";
import { removeLike } from "../store/likedSlice";
import { useAppSelector, useAppDispatch } from "../store/hooks";

const Collection = () => {
  const dispatch = useAppDispatch();
  const { saves: savedImages } = useAppSelector(
    (state: RootState) => state.saves
  );
  const { likes: likedImages } = useAppSelector(
    (state: RootState) => state.likes
  );

  const [currentTab, setCurrentTab] = React.useState("likes");

  const showLikedImages = () => {
    setCurrentTab("likes");
  };

  const showSavedImages = () => {
    setCurrentTab("saves");
  };

  const handleClear = (image: { img_id: any; img_src?: string }) => {
    const isSavedImage = savedImages.find((img) => img.img_id === image.img_id);
    const isLikedImage = likedImages.find((img) => img.img_id === image.img_id);

    if (isSavedImage) {
      dispatch(removeSaved({ img_id: image.img_id, img_src: image.img_src }));
    } else {
      dispatch(removeLike({ img_id: image.img_id, img_src: image.img_src }));
    }
  };
  const displayedImages = currentTab === "likes" ? likedImages : savedImages;

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
              <div key={image.img_id} className="relative group">
                <button
                  className="hidden rounded-[50%] cursor-pointer absolute right-2 top-2 group-hover:block"
                  onClick={() => handleClear(image)}
                >
                  <HighlightOffIcon htmlColor="red" />
                </button>
                <img
                  key={image.img_id}
                  src={image.img_src}
                  alt="displayed image"
                  className="image-grid-item image-item"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;

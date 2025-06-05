import React from "react";
import useImages from "../utils/hooks/useImages";
import { useFilterContext } from "../utils/context/filterContext";
import LightBoxModal from "./LightBoxModal";
import { Image } from "../lib/types";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import { ITEMS_PER_PAGE } from "../lib/constants.d";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addSave, removeSaved } from "../store/savedSlice";
import { addLike, removeLike } from "../store/likedSlice";
import { useSession } from "next-auth/react";

const Gallery = () => {
  const { data: session } = useSession();

  const dispatch = useAppDispatch();
  const { saves: savedImages } = useAppSelector((state) => state.saves);
  const { likes: likedImages } = useAppSelector((state) => state.likes);

  const { filters, checkedCategories } = useFilterContext();
  const [open, setOpen] = React.useState(false);
  const [imageID, setImageID] = React.useState("");
  const [hoveredImageId, setHoveredImageId] = React.useState<number | null>(
    null
  );
  const [page, setPage] = React.useState(1);
  const {
    data: { hits: images, totalHits: count } = { hits: [], totalHits: 0 },
    isLoading,
    isFetchingNextPage,
    error,
    fetchNextPage,
    hasNextPage,
  } = useImages({ ...filters, checkedCategories });

  const handleOpen = (id: number) => {
    setImageID(id.toString());
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleMouseEnter = (id: number) => {
    setHoveredImageId(id);
  };

  const handleMouseLeave = () => {
    setHoveredImageId(null);
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleAddLike = React.useCallback(
    (img_id: number, img_src: string) => {
      dispatch(addLike({ img_id, img_src }));
    },
    [dispatch]
  );

  const handleRemoveLike = React.useCallback(
    (img_id: number, img_src: string) => {
      dispatch(removeLike({ img_id, img_src }));
    },
    [dispatch]
  );

  const handleAddBookmark = React.useCallback(
    (img_id: number, img_src: string) => {
      dispatch(addSave({ img_id, img_src }));
    },
    [dispatch]
  );

  const handleRemoveBookmark = React.useCallback(
    (img_id: number, img_src: string) => {
      dispatch(removeSaved({ img_id, img_src }));
    },
    [dispatch]
  );

  const scrollFn = () => {
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    console.log({ clientHeight, scrollHeight, scrollTop });

    if (
      !isFetchingNextPage &&
      hasNextPage &&
      scrollTop + clientHeight >= scrollHeight - 300
    )
      fetchNextPage();
  };

  React.useEffect(() => {
    window.addEventListener("scroll", scrollFn);
    scrollFn();
    return () => {
      window.removeEventListener("scroll", scrollFn);
    };
  }, [isFetchingNextPage, hasNextPage]);

  if (isLoading)
    return (
      <div className="grid place-items-center h-[100vh]">
        <div className="w-[200px] h-[200px]">
          <CircularProgress />
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center text-red-500">
        <p> An error occurred. Please try again.</p>
      </div>
    );
  if (images?.length === 0)
    return (
      <div className="">
        <p className="text-red-500">No images found </p>
      </div>
    );
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-items-center gap-y-5">
        {images.map((image: Image) => {
          const { id, largeImageURL } = image;
          const isSaved = savedImages.find((image) => image.img_id === id);
          const isLiked = likedImages.find((image) => image.img_id === id);

          return (
            <div
              onMouseEnter={(e) => handleMouseEnter(id)}
              onMouseLeave={handleMouseLeave}
              className="relative cursor-pointer image-container w-full h-[380px] max-w-[300px]"
              key={id}
            >
              <img
                className="w-full h-[380px] image-grid-item image-item object-cover"
                src={largeImageURL}
                alt={image.tags}
                width={300}
                height={300}
                onClick={(e) => handleOpen(id)}
              />

              {hoveredImageId === id && (
                <div
                  className={`
                top-[45%] left-[35%] justify-center items-center absolute !brightness-150`}
                >
                  <p className="flex justify-center items-center gap-8 text-white ">
                    <span className="flex flex-col items-center">
                      {session ? (
                        isLiked ? (
                          <FavoriteIcon
                            onClick={() => handleRemoveLike(id, largeImageURL)}
                            className="text-red-600"
                          />
                        ) : (
                          <FavoriteBorderIcon
                            onClick={() => handleAddLike(id, largeImageURL)}
                          />
                        )
                      ) : (
                        ""
                      )}
                    </span>

                    <span className="flex flex-col items-center">
                      {session ? (
                        isSaved ? (
                          <BookmarkIcon
                            onClick={() =>
                              handleRemoveBookmark(id, largeImageURL)
                            }
                          />
                        ) : (
                          <BookmarkBorderOutlinedIcon
                            onClick={() => handleAddBookmark(id, largeImageURL)}
                          />
                        )
                      ) : (
                        ""
                      )}
                    </span>
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-8">
        <Pagination
          count={Math.floor(count / ITEMS_PER_PAGE)}
          color="primary"
          onChange={handleChange}
          page={page}
        />
      </div>
      <LightBoxModal
        open={open}
        onClose={handleClose}
        content={{ images, imageID }}
        onSave={handleAddBookmark}
        onRemoveSave={handleRemoveBookmark}
        onLike={handleAddLike}
        onRemoveLike={handleRemoveLike}
      />
    </div>
  );
};

export default Gallery;

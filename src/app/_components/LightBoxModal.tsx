import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Image } from "../lib/types";
import { Chip, IconButton } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { useAppSelector } from "../store/hooks";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSession } from "next-auth/react";

const style = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "black",
  bgcolor: "background.paper",
  outline: "none",
  borderRadius: "10px",
  p: 4,
};

export default function LightBoxModal({
  open,
  onClose: handleClose,
  content,
  onSave,
  onRemoveSave,
  onLike,
  onRemoveLike,
}: {
  open: boolean;
  onClose: () => void;
  content: { imageID: string; images: Image[] };
  onSave: (img_id: number, img_src: string) => void;
  onRemoveSave: (img_id: number, img_src: string) => void;
  onLike: (img_id: number, img_src: string) => void;
  onRemoveLike: (img_id: number, img_src: string) => void;
}) {
  const { data: session } = useSession();

  const { imageID, images } = content;

  const { saves: savedImages } = useAppSelector((state) => state.saves);
  const { likes: likedImages } = useAppSelector((state) => state.likes);

  const index = images.findIndex(
    (image: Image) => image.id === Number(imageID)
  );

  const [activeImageIndex, setActiveImageIndex] = React.useState<number>(index);
  const [activeImage, setActiveImage] = React.useState<Image>(
    images[activeImageIndex]
  );

  const isSaved = savedImages.find((image) => image.img_id === activeImage?.id);
  const isLiked = likedImages.find((image) => image.img_id === activeImage?.id);

  const handleNext = () => {
    setActiveImageIndex((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setActiveImageIndex((prev) => prev - 1);
  };

  const handleChangeImage = (clickedImage: Image) => {
    const clickedImageIndex = images.findIndex(
      (item) => item.id === clickedImage.id
    );
    setActiveImageIndex(clickedImageIndex);
  };

  const handleDownload = (imageUrl: string, title: string) => {
    const link = document.createElement("a");
    link.href = imageUrl;

    // Set the download attribute with the desired file name
    link.download = "download";

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the download by simulating a click
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
  };

  React.useEffect(() => {
    setActiveImage(images[activeImageIndex]);
  }, [activeImageIndex]);

  React.useEffect(() => {
    setActiveImageIndex(index);
  }, [index, images]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{ ...style }}
        className="w-[350px] md:w-[700px] h-[650px] md:h-[700px] relative flex-col justify-center items-center space-y-6"
      >
        <Box className="flex justify-center items-center gap-2 md:gap-5">
          <IconButton
            aria-label="previous"
            onClick={handlePrevious}
            className={`${activeImageIndex === 0 ? "invisible" : "visible"} `}
          >
            <ArrowBackIcon htmlColor="#000" />
          </IconButton>

          <Box className="space-y-2">
            {session && (
              <Box className="flex justify-end gap-3">
                {isLiked ? (
                  <IconButton
                    onClick={() =>
                      onRemoveLike(activeImage?.id, activeImage?.largeImageURL)
                    }
                  >
                    <FavoriteIcon className="text-red-600 cursor-pointer" />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={() =>
                      onLike(activeImage?.id, activeImage?.largeImageURL)
                    }
                  >
                    <FavoriteBorderIcon
                      className="cursor-pointer"
                      htmlColor="#000"
                    />
                  </IconButton>
                )}
                {isSaved ? (
                  <IconButton
                    onClick={() =>
                      onSave(activeImage?.id, activeImage?.largeImageURL)
                    }
                    className="cursor-pointer"
                  >
                    <BookmarkIcon htmlColor="#000" />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={() =>
                      onSave(activeImage?.id, activeImage?.largeImageURL)
                    }
                    className="cursor-pointer"
                  >
                    <BookmarkBorderOutlinedIcon
                      onClick={() =>
                        onRemoveSave(
                          activeImage?.id,
                          activeImage?.largeImageURL
                        )
                      }
                      className="cursor-pointer"
                      htmlColor="#000"
                    />
                  </IconButton>
                )}
              </Box>
            )}
            <img
              src={activeImage?.largeImageURL}
              alt="active image"
              className="w-[250px] h-[300px] max-w-[250px] md:w-[600px] md:max-w-[500px] md:h-[450px] rounded-lg object-cover object-center mx-auto"
            />
            <Box className="flex flex-col gap-2 md:flex-row justify-between items-center text-black ">
              <span className="flex justify-center items center gap-2">
                {activeImage?.tags.split(",").map((tag: string) => (
                  <Chip label={tag} key={tag} />
                ))}
              </span>
              <span>
                <Link
                  href={activeImage?.pageURL ?? ""}
                  target="_blank"
                  className="text-sm flex items-center underline gap-1 hover:underline"
                >
                  Credits
                  <OpenInNewIcon fontSize="small" />
                </Link>
              </span>
            </Box>
          </Box>
          <IconButton
            aria-label="next"
            onClick={handleNext}
            className={`${
              activeImageIndex === images.length - 1 ? "invisible" : "visible"
            } `}
          >
            <ArrowForwardIcon htmlColor="#000" />
          </IconButton>
        </Box>

        <Box className="scrollable-image-container">
          {images.map((image: Image) => (
            <img
              src={image.largeImageURL}
              key={image.id}
              alt={image.tags}
              className={`cursor-pointer rounded-lg !w-[150px] min-w-[150px] !h-[100px] object-cover border-2 object-center  ${
                image.id === activeImage?.id ? "border-red-500" : ""
              }`}
              onClick={() => handleChangeImage(image)}
            />
          ))}
        </Box>
      </Box>
    </Modal>
  );
}

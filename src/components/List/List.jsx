import * as React from "react";
import BasicModal from "../Card/Modal";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

import "./list.scss";

const List = ({ data }) => {
  const [photoSrc, setPhotoSrc] = React.useState("");
  const onClickPhoto = (src) => {
    setPhotoSrc(src);
  };

  return (
    <>
      <ImageList variant="masonry" cols={5} gap={10} className="allImageList">
        {data.photos.map((photo) => (
          <ImageListItem key={photo.id}>
            <div className="img--hover">
              <img
                src={photo.src.large}
                alt={photo.alt}
                onClick={() => onClickPhoto(photo.id.src.large)}
                className="list__img"
              />
              <div
                className="backDrop"
                onClick={() => onClickPhoto(photo.src.large)}
              >
                <ZoomInIcon
                  fontSize="large"
                  cursor="zoom-in"
                  position="absolute"
                  top="50%"
                  className="iconZoom"
                  onClick={() => onClickPhoto(photo.id.src.large)}
                />
              </div>
            </div>
          </ImageListItem>
        ))}
        <BasicModal src={photoSrc} />
      </ImageList>
    </>
  );
};

export default List;
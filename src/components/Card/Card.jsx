import { Backdrop } from "@mui/material";
import "./card.scss";

const Card = ({ photo, clickFn }) => {
  const { src, alt } = photo;

  return (
    <div className="card">
      <img
        src={src.tiny}
        alt={alt}
        onClick={() => clickFn(src.large)}
        className="card__image"
      />
      <Backdrop
        sx={{
          color: "#fff",
          position: "absolute",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open
      ></Backdrop>
    </div>
  );
};
export default Card;

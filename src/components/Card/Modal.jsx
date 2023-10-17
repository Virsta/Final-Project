import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import DownloadIcon from "@mui/icons-material/Download";
import "./card.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "transparent",
  border: "2px solid #000",
  boxShadow: 24,
};

export default function BasicModal({ src }) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  React.useEffect(() => setOpen(Boolean(src)), [src]);

  const [favoriteStates, setFavoriteStates] = React.useState([]);

  const handleFavoriteClick = (index) => {
    const updatedFavoriteStates = [...favoriteStates];
    updatedFavoriteStates[index] = !updatedFavoriteStates[index];
    setFavoriteStates(updatedFavoriteStates);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <img src={src} alt={src.alt} className="modalImg" />
        <span
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            background: "rgba(3, 94, 102, 0.838)",
            borderRadius: "50%",
          }}
        >
          <IconButton
            aria-label="add to favorites"
            component="a"
            href={src}
            download={true}
          >
            <DownloadIcon sx={{ color: "#fff" }} />
          </IconButton>
        </span>
        <span
          style={{
            position: "absolute",
            bottom: "5px",
            right: "50px",
            background: "rgba(3, 94, 102, 0.838)",
            borderRadius: "50%",
          }}
        >
          <IconButton
            aria-label="add to favorites"
            onClick={() => handleFavoriteClick(src)}
          >
            <FavoriteIcon
              sx={{ color: favoriteStates[src] ? "red" : "#fff" }}
            />
          </IconButton>
        </span>
        <span
          style={{
            position: "absolute",
            bottom: "5px",
            right: "5px",
            background: "rgba(3, 94, 102, 0.838)",
            borderRadius: "50%",
          }}
        >
          <IconButton aria-label="share">
            <ShareIcon sx={{ color: "#fff" }} />
          </IconButton>
        </span>
      </Box>
    </Modal>
  );
}

import React from "react";
import "./index.css";

/**
 * For Song Album component
 * @param {Array<Object>} images Image of albums
 * @param {string} title Artist of Song
 * @param {object} style
 */
const SongAlbum = ({ images, title, style }) => {
  return (
    <picture className="song-album" style={style}>
      <source media={`(min-width:${images[1].width})`} srcset={images[1].url} />
      <source media={`(min-width:${images[2].width})`} srcset={images[2].url} />
      <img src={images[0].url} alt={title} />
    </picture>
  );
};

export default SongAlbum;

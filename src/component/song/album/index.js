import styles from './album.module.scss';

/**
 * For Song Album component
 * @param {Array<Object>} images Image of albums
 * @param {string} title Artist of Song
 * @param {object} style
 */
const Album = ({ images, title, style }) => {
  return (
    <picture className={styles.song__album} style={style}>
      <source media={`(min-width:${images[1].width})`} srcSet={images[1].url} />
      <source media={`(min-width:${images[2].width})`} srcSet={images[2].url} />
      <img src={images[0].url} alt={title} />
    </picture>
  );
};

export default Album;

import styles from './description.module.scss';

/**
 * For Song Description component
 * @param {string} title Title of Song
 * @param {string} artist Artist of Song
 * @param {number} year Year of Song
 * @param {object} style
 */
const Description = ({ title, artist, year, duration, style }) => {
  return (
    <div className={styles.song__description} style={style}>
      <h2>{title}</h2>
      <p>
        <b>{artist}</b> &bull; {year} &bull; {duration}
      </p>
    </div>
  );
};

export default Description;

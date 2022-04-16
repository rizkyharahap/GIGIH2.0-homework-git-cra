import styles from './description.module.scss';

export interface TrackDescriptionProps {
  title: string;
  artist: string;
  year: number;
  duration: string;
}

/**
 * For Track Description component
 * @param {TrackDescriptionProps} Description of the track
 */
const Description = ({ title, artist, year, duration }: TrackDescriptionProps) => {
  return (
    <div className={styles.song__description}>
      <h2>{title}</h2>
      <p>
        <b>{artist}</b> &bull; {year} &bull; {duration}
      </p>
    </div>
  );
};

export default Description;

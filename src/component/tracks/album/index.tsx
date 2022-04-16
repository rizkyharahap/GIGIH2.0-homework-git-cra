import { FC } from 'react';
import { Image } from '../../../redux/type/trackType';
import styles from './album.module.scss';

export interface TrackAlbumProps {
  images: Image[];
  title: string;
}

/**
 * For Track Album component
 * @param {TrackAlbumProps} Album cover
 */
const Album: FC<TrackAlbumProps> = ({ images, title }) => {
  return (
    <picture className={styles.song__album}>
      <source media={`(min-width:${images[1].width})`} srcSet={images[1].url} />
      <source media={`(min-width:${images[2].width})`} srcSet={images[2].url} />
      <img src={images[0].url} alt={title} />
    </picture>
  );
};

export default Album;

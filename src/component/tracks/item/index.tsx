import React from 'react';
import type { Track } from '../../../redux/type/trackType';
import { default as TrackAlbum } from '../album';
import Description from '../description';
import styles from './item.module.scss';

export interface TrackItemProps {
  track: Track;
  children: React.ReactNode;
}

// Track Item component
const Item: React.FC<TrackItemProps> = ({ track, children }) => {
  const { album, artists, name, duration_ms } = track;
  return (
    <div className={styles.song__item}>
      {/* Album cover  */}
      <TrackAlbum images={album.images} title={album.name} />

      {/* Description Album  */}
      <Description
        artist={artists[0].name}
        title={name}
        year={new Date(album.release_date).getFullYear()}
        duration={new Date(duration_ms).toISOString().substr(14, 5)}
      />

      {children}
    </div>
  );
};

export default Item;

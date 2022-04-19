import React from 'react';
import Album, { TrackAlbumProps } from '../album';
import Description, { TrackDescriptionProps } from '../description';
import styles from './item.module.scss';

export interface TrackItemProps {
  album: TrackAlbumProps;
  description: TrackDescriptionProps;
  children: React.ReactNode;
}

// Track Item component
const Item: React.FC<TrackItemProps> = ({ album, description, children }) => {
  return (
    <div className={styles.song__item}>
      {/* Album cover  */}
      <Album {...album} />

      {/* Description Album  */}
      <Description {...description} />

      {children}
    </div>
  );
};

export default Item;

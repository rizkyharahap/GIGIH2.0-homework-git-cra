import Album from '../album';
import Description from '../description';
import styles from './item.module.scss';

// Song Item component
const Item = ({ album, artist, track, style, children }) => {
  return (
    <div className={styles.song__item} style={style}>
      {/* Album cover  */}
      <Album images={album.images} title={album.name} />

      {/* Description Album  */}
      <Description
        artist={artist.name}
        title={track.name}
        year={new Date(album.release_date).getFullYear()}
        duration={new Date(track.duration_ms).toISOString().substr(14, 5)}
      />

      {children}
    </div>
  );
};

export default Item;

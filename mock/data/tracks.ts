import type { Track, Tracks } from '../../src/redux/type/trackType';

export const fakeTrackItem: Track = {
  album: {
    album_type: 'single',
    artists: [
      {
        external_urls: {
          spotify: 'https://fake.com/artist/1',
        },
        href: 'https://api.fake.com/v1/artists/1',
        id: '1',
        name: 'Artist',
        type: 'artist',
        uri: 'spotify:artist:1',
      },
    ],
    available_markets: ['AD'],
    external_urls: {
      spotify: 'https://fake.com/album/1',
    },
    href: 'https://api.fake.com/v1/albums/1',
    id: '1',
    images: [
      {
        height: 640,
        url: 'https://i.fake.co/image',
        width: 640,
      },
      {
        height: 300,
        url: 'https://i.fake.co/image',
        width: 300,
      },
      {
        height: 64,
        url: 'https://i.fake.co/image',
        width: 64,
      },
    ],
    name: 'Fake Song',
    release_date: '2022-04-06',
    release_date_precision: 'day',
    total_tracks: 1,
    type: 'album',
    uri: 'spotify:album:1',
  },
  artists: [
    {
      external_urls: {
        spotify: 'https://fake.com/artist/1',
      },
      href: 'https://api.fake.com/v1/artists/1',
      id: '1',
      name: 'Fake Artist',
      type: 'artist',
      uri: 'spotify:artist:1',
    },
  ],
  available_markets: ['AD'],
  disc_number: 1,
  duration_ms: 266774,
  explicit: false,
  external_ids: {
    isrc: 'SGB502213457',
  },
  external_urls: {
    spotify: 'https://fake.com/track/1',
  },
  href: 'https://api.fake.com/v1/tracks/1',
  id: '1',
  is_local: false,
  name: 'Fake Song',
  popularity: 16,
  preview_url: 'https://p.fake.co/mp3-preview',
  track_number: 1,
  type: 'track',
  uri: 'spotify:track:1',
};

export const fakeTracks: Tracks = {
  href: 'https://api.fake.com/v1/tracks?offset=0&limit=20',
  items: [fakeTrackItem],
  limit: 20,
  next: 'https://api.fake.com/v1/tracks?offset=20&limit=20',
  offset: 0,
  previous: null,
  total: 1,
};

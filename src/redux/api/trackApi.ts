import { createApi } from '@reduxjs/toolkit/query/react';
import type { Tracks } from '../type/trackType';
import { authorizedBaseQuery } from './baseQuery';

export interface SearchProps {
  query: string;
  type?: 'album' | 'artist' | 'playlist' | 'track' | 'show' | 'episode';
  limit?: number;
  offset?: number;
}

export const trackApi = createApi({
  reducerPath: 'trackApi',

  baseQuery: authorizedBaseQuery,

  tagTypes: ['TrackApi'],

  refetchOnReconnect: true,

  endpoints: (builder) => ({
    searchTrack: builder.query<Tracks, SearchProps>({
      query: ({ query, type = 'track', limit = 12, offset = 0 }) => ({
        url: 'search',
        params: {
          q: query,
          type,
          limit,
          offset,
        },
      }),
      transformResponse: (response: { tracks: Tracks }) => response.tracks,
    }),
  }),
});

export const { useSearchTrackQuery } = trackApi;
export const { searchTrack } = trackApi.endpoints;

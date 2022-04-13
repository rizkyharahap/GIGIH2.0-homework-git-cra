import { createApi } from '@reduxjs/toolkit/query/react';
import { authorizedBaseQuery } from './baseQuery';

export const songApi = createApi({
  reducerPath: 'songApi',

  baseQuery: authorizedBaseQuery,

  tagTypes: ['TrackApi'],

  refetchOnReconnect: true,

  endpoints: (builder) => ({
    searchTrack: builder.query({
      query: ({ query, type = 'track', limit = 12, offset = 0 }) => ({
        url: 'search',
        params: {
          q: query,
          type,
          limit,
          offset,
        },
      }),
      transformResponse: (response) => response.tracks,
    }),
  }),
});

export const { useSearchTrackQuery } = songApi;
export const { searchTrack } = songApi.endpoints;

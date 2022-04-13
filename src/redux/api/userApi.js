import { createApi } from '@reduxjs/toolkit/query/react';
import { authorizedBaseQuery } from './baseQuery';

export const userApi = createApi({
  reducerPath: 'userApi',

  baseQuery: authorizedBaseQuery,

  tagTypes: ['User'],

  refetchOnReconnect: true,

  endpoints: (builder) => ({
    getCurrentUserProfile: builder.query({
      query: () => 'me',
    }),
  }),
});

export const { useGetCurrentUserProfileQuery } = userApi;
export const { getCurrentUserProfile } = userApi.endpoints;

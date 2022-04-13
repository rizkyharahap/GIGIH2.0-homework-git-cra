import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { API_URL } from '../../configs/config';

export const baseQuery = (config) =>
  fetchBaseQuery({
    baseUrl: `${API_URL}`,
    headers: {
      'Content-Type': 'application/json',
    },
    ...config,
  });

export const authorizedBaseQuery = baseQuery({
  prepareHeaders: (headers, { getState }) => {
    const token = getState().global.accessToken;

    if (token) headers.set('Authorization', `Bearer ${token}`);

    return headers;
  },
});

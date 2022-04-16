import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { userApi } from './api/userApi';
import { globalSlice } from './slices/globalSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { trackApi } from './api/trackApi';
import { trackSlice } from './slices/trackSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [trackSlice.name, userApi.reducerPath, trackApi.reducerPath],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    [globalSlice.name]: globalSlice.reducer,
    [trackSlice.name]: trackSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [trackApi.reducerPath]: trackApi.reducer,
  }),
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(userApi.middleware, trackApi.middleware),
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

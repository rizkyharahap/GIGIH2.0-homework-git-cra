import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { trackApi } from './api/trackApi';
import { userApi } from './api/userApi';
import { globalSlice } from './slices/globalSlice';
import { trackSlice } from './slices/trackSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [trackSlice.name, userApi.reducerPath, trackApi.reducerPath],
};

export const rootReducer = combineReducers({
  [globalSlice.name]: globalSlice.reducer,
  [trackSlice.name]: trackSlice.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [trackApi.reducerPath]: trackApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(userApi.middleware, trackApi.middleware),
    preloadedState,
    devTools: process.env.NODE_ENV === 'development',
  });

setupListeners(setupStore().dispatch);

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

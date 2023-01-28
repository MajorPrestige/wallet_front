import { configureStore } from '@reduxjs/toolkit';
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

import auth from './auth/auth-slice';
import transactions from "./transactions/trans-slice";

const persistConfig = {
  key: 'auth-token',
  storage,
  whitelist: ['token'],
};

const transPersistConfig = {
  key: 'transactions',
  storage,
};

const persistedReducer = persistReducer(persistConfig, auth);
const transPersistedReducer = persistReducer(transPersistConfig, transactions);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    transactions: transPersistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

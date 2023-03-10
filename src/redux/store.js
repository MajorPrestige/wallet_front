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
import categories from "./categories/categories-slice.js";
import {languageSlice} from './language/language-slice.js';

const persistConfig = {
  key: 'auth-token',
  storage,
  whitelist: ['token'],
};

const transPersistConfig = {
  key: 'transactions',
  storage,
};

const categoriesPersistConfig = {
  key: 'categories',
  storage,
};

const languagePersistedConfig = {
  key: 'language',
  storage,
};

const persistedReducer = persistReducer(persistConfig, auth);
const transPersistedReducer = persistReducer(transPersistConfig, transactions);
const categoriesPersistedReducer = persistReducer(categoriesPersistConfig, categories);
const languagePersistedReducer = persistReducer(languagePersistedConfig, languageSlice.reducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    transactions: transPersistedReducer,
    categories: categoriesPersistedReducer,
    language: languagePersistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

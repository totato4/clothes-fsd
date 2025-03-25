import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";

import { rootReducer } from "./rootReducer";
import persistStore from "redux-persist/es/persistStore";
import { baseApi } from "shared/api/baseApi";
import { CART_TAG, PRODUCT_TAG, USER_TAG } from "shared/api/tags";

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [CART_TAG, PRODUCT_TAG, USER_TAG]
}


export function makeStore() {
    const store = configureStore({
        reducer: persistReducer(
            persistConfig,
            rootReducer
    ) as unknown as typeof rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },}).concat(baseApi.middleware)
    })
    setupListeners(store.dispatch)
    
    return store
}


export const appStore = makeStore()
export const persistedStore = persistStore(appStore)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CART_TAG, PRODUCT_TAG, USER_TAG } from "./tags";
import inMemoryJWT from "entities/auth/model/inMemoryJWT";

// const u1 = "http://localhost:5000";
// const u2 = "https://backend-clothes.vercel.app";
const u3 = "https://backend-clothes-f4pd.onrender.com";

export const baseApi = createApi({
  tagTypes: [PRODUCT_TAG, CART_TAG, USER_TAG],
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: u3,
    credentials: "include",
    prepareHeaders: (headers) => {
      const accessToken = inMemoryJWT.getToken();
      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});

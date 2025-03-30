import { baseApi } from "shared/api/baseApi";
import { AuthDto, SignUpDto, params } from "./types";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation<SignUpDto, params>({
      query: ({ userName, password }) => ({
        url: `/auth/sign-in`,
        method: "POST",
        body: { userName, password },
      }),
    }),
    signUp: build.mutation<SignUpDto, params>({
      query: ({ userName, password, role }) => ({
        url: `/auth/sign-up`,
        method: "POST",
        body: { userName, password, role },
      }),
    }),
    logout: build.query<AuthDto, void>({
      query: () => ({ url: `/auth/logout` }),
    }),
    refresh: build.query<AuthDto, void>({
      query: () => ({ url: `/auth/refresh` }),
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useLogoutQuery,
  useRefreshQuery,
} = productApi;

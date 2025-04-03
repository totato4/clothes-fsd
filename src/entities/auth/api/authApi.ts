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
    refresh: build.mutation<AuthDto, void>({
      // query: () => ({ url: `/auth/refresh` }),
      query: () => ({
        url: `/auth/refresh`,
        method: "GET",
      }),
    }),
    getUser: build.mutation<{ name: string; role: number }, string>({
      query: (accessToken) => ({
        url: `/auth/user`,
        method: "POST",
        body: { accessToken: accessToken },
      }),
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useLogoutQuery,
  useRefreshMutation,
  useGetUserMutation,
} = productApi;

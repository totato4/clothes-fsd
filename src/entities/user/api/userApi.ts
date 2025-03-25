
import { baseApi } from 'shared/api/baseApi';
import { USER_TAG } from 'shared/api/tags';
import { UserInfo } from './types';

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUserInfo: build.query<UserInfo, { userName: string}>({
      query: ({userName}) => ({
        url: `/user`,
        method: "POST",
        body: {userName}
        }),
      providesTags: [USER_TAG]
    }),
  }),
})

export const { useGetUserInfoQuery } = userApi
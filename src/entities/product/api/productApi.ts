import { baseApi } from "shared/api/baseApi";
import { ProductDto, human_c, params } from "./types";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCategoryProduct: build.query<ProductDto, params>({
      query: ({ search }) => ({ url: `/api/clothes${search}` }),
    }),
    getByHuman: build.query<ProductDto, human_c>({
      query: (human_c) => ({
        url: `/api/clothes?human_c=${human_c}&page=1&limit=12`,
      }),
    }),
    getOneProduct: build.query<ProductDto, { id: string | number }>({
      query: ({ id }) => ({ url: `/api/clothes?id=${id}` }),
    }),
  }),
});

export const {
  useGetCategoryProductQuery,
  useGetOneProductQuery,
  useGetByHumanQuery,
} = productApi;

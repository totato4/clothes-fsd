import { baseApi } from 'shared/api/baseApi';
import { ProductDto, params } from './types';



export const productApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getCategoryProduct: build.query<ProductDto, params>({
            query: ({search}) => ({ url: `/api/clothes${search}` }),
        }),
        getWomanProduct: build.query<ProductDto, void>({
            query: () => ({ url: `/api/clothes?human_c=woman` }),
        }),
        getManProduct: build.query<ProductDto, void>({
            query: () => ({ url: `/api/clothes?human_c=man` }),
        }),
        getKidProduct: build.query<ProductDto, void>({
            query: () => ({ url: `/api/clothes?human_c=kid` }),
        }),
        getOneProduct: build.query<ProductDto, {id: string | number}>({
            query: ({id}) => ({url: `/api/clothes?id=${id}`}),
        })
    })
}) 


export const { useGetCategoryProductQuery, useGetOneProductQuery, useGetKidProductQuery, useGetManProductQuery, useGetWomanProductQuery } = productApi;
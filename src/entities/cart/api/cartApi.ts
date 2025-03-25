
import { baseApi } from 'shared/api/baseApi';
import { ProductInCart } from '../model/types';
import { CART_TAG } from 'shared/api/tags';

export const cartApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCart: build.query<ProductInCart[], { userName: string}>({
      query: ({userName}) => ({
        url: `/cart/getCart`,
        method: "POST",
        body: {userName}
      }),
      providesTags: [CART_TAG]
    }),
    updateCart: build.mutation<ProductInCart[], { userName: string;  products: ProductInCart[]}>({
      query: ({ userName, products }) => ({
        url: `/cart/update`,
        method: 'PATCH',
        body: { userName, products },
      }),
      invalidatesTags: [CART_TAG],
    }),
  }),
})

export const { useGetCartQuery, useUpdateCartMutation } = cartApi
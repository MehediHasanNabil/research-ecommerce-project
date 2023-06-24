import { apiSlice } from '../api/apiSlice';

export const cartApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCarts: builder.query({
            query: () => `/cart`,
        }),
        getCart: builder.query({
            query: (cartId) => `/cart/${cartId}`
        }),
        addToCart: builder.mutation({
            query: (data) => ({
                url: "/cart",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const {
    useGetCartQuery, useGetCartsQuery, useAddToCartMutation
} = cartApi;

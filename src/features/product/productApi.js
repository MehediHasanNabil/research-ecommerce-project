import { apiSlice } from '../api/apiSlice';

export const conversationsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `/product`,
        }),
        getProduct: builder.query({
            query: (productId) => `/product/${productId}`
        })
    }),
});

export const {
    useGetProductsQuery,
    useGetProductQuery
} = conversationsApi;

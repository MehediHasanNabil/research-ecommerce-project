import { apiSlice } from '../api/apiSlice';

export const conversationsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `/products`,
        }),
        getProduct: builder.query({
            query: (productId) => `/products/${productId}`
        })
    }),
});

export const {
    useGetProductsQuery,
    useGetProductQuery
} = conversationsApi;

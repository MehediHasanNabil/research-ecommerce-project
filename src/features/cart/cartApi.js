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
            }), async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                // pessimistically cash update
                try {
                    const result = await queryFulfilled;

                    const response = await fetch(import.meta.env.VITE_API_URL + `/api/cart/${result.data.data._id}`)
                    const newCart = await response.json()

                    dispatch(apiSlice.util.updateQueryData("getCarts", undefined, (draftCarts) => {
                        draftCarts.push(newCart)
                    }));
                } catch (error) {
                    console.log(error)
                }
            }
        }),

        incrementAndDecrementCart: builder.mutation({
            query: (data) => ({
                url: `/cartitem/${data.cartitemId}`,
                method: "POST",
                body: data,
            }),
        }),
        removeProductFromCart: builder.mutation({
            query: (data) => ({
                url: `/cart/${data.cartId}`,
                method: "DELETE",
            }), async onQueryStarted(arg, { queryFulfilled, dispatch }) {

                // optimistic cash update
                const patchResult = dispatch(apiSlice.util.updateQueryData("getCarts", undefined, (draftCarts) => {
                    const index = draftCarts.findIndex(cart => cart._id == arg.cartId);
                    console.log(index)
                    draftCarts.splice(index, 1)
                }));

                try {
                    await queryFulfilled;
                } catch (error) {
                    patchResult.undo()
                }
            }
        }),
    }),
});

export const {
    useGetCartQuery, useGetCartsQuery, useAddToCartMutation, useRemoveProductFromCartMutation, useIncrementAndDecrementCartMutation
} = cartApi;

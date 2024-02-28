import apiSlice from "../api/apiSlice";

const reviewsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => "reviews.json",
    }),
    addReview: builder.mutation({
      query: (body) => ({
        url: "reviews.json",
        method: "PUT",
        body: body,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData("getReviews", undefined, () => {
              return res.data;
            })
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useGetReviewsQuery, useAddReviewMutation } = reviewsApi;

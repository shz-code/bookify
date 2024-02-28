import apiSlice from "../api/apiSlice";

const categoriesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "categories.json",
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;

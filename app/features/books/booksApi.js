import apiSlice from "../api/apiSlice";

const booksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "books.json",
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rootApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (header, { getState }) => {
      const token = getState()?.auth?.accessToken;
      if (token) {
        header.set("Authorization", `Bearer ${token}`);
      }
      return header;
    },
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({ fullName, email, password }) => ({
        url: "/signup",
        body: { fullName, email, password },
        method: "POST",
      }),
    }),

    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/login",
        body: { email, password },
        method: "POST",
      }),
    }),

    verityOtp: builder.mutation({
      query: ({ email, otp }) => ({
        url: "/verify-otp",
        body: { email, otp },
        method: "POST",
      }),
    }),

    getAuthUser: builder.query({
      query: () => ({
        url: "/auth-user",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useVerityOtpMutation,
  useGetAuthUserQuery,
} = rootApi;

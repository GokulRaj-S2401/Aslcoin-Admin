// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { dummyApis } from '@/utility/baseUrl';

// export const authApi = createApi({
//     reducerPath: 'authApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://asl-api-7ecr.onrender.com',
//         // prepareHeaders: (headers, { getState }) => {
//         //     const token = JSON.parse(localStorage.getItem("User")).accessToken;
//         //     if (token) {
//         //         headers.set("authorization", `Bearer ${token}`);
//         //     }
//         //     return headers;
//         // },
//     }),
//     tagTypes: ['User'],
//     endpoints: (builder) => ({
//         userRegister: builder.mutation({
//             query: (data) => ({
//                 url: "registration",
//                 method: 'POST',
//                 body: data
//             })
//         }),
//         userLogin: builder.mutation({
//             query: (data) => ({
//                 url: "login",
//                 method: "POST",
//                 body: data
//             })
//         }),
//         userGoogleAuth: builder.mutation({
//             query: () => ({
//                 url: "auth/google",
//                 method: "GET"
//             })
//         }),
//         userInvite: builder.mutation({
//             query: (data) => ({
//                 url: 'user-invite',
//                 method: "POST",
//                 body: data
//             })
//         }),
//     })

// });

// export const {
//     useUserRegisterMutation,
//     useUserLoginMutation,
//     useUserGoogleAuthMutation,
//     useUserInviteMutation
// } = authApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '../shared/config';

export const coinsApi = createApi({
    reducerPath: 'coinsApi',
    baseQuery: fetchBaseQuery({ baseUrl: config.apiBaseUrl }),
    endpoints: (builder) => ({
        getUserCoins: builder.query({
            query: (username) => `/users/${username}/coins`,
        }),
        updateUserCoins: builder.mutation({
            query: (coins) => ({
                url: `/users/updateCoins`,
                method: 'PATCH',
                body: { coins },
            }),
        }),
    }),
});

export const { useGetUserCoinsQuery, useUpdateUserCoinsMutation } = coinsApi;

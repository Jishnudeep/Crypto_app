import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoAPIHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "dd1dedcfddmsh1b14377b32a8d3cp1239c4jsnba873e778009",
};

const baseURL = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoAPIHeaders });

export const cryptoAPI = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(`coin/${coinId}/history/${timeperiod}`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoAPI;
export const { useGetCryptoDetailsQuery } = cryptoAPI;
export const { useGetCryptoHistoryQuery } = cryptoAPI;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

const cryptoNewsApiHeaders = { headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '44d0c99e07msh095b1fe1715e5a1p111afcjsnd20a39ea3dff',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  } };

  const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

    const createRequest = (url) => ({ url, ...cryptoNewsApiHeaders });

    export const cryptoNewsApi = createApi({
        reducerPath: "cryptoNewsApi",
        baseQuery: fetchBaseQuery({ baseUrl }),
        endpoints: (builder) => ({
          getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/`),
          }),
        }),
      });
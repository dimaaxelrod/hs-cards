import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, HEADERS } from "../../components/constants";
import { CardModel } from "../../models/models";

export const hsApi = createApi({
  reducerPath: "hearthstone/api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: HEADERS,
  }),
  endpoints: (build) => ({
    getClasses: build.query<string[], void>({
      query: () => "info",
      transformResponse: (response: { [key: string]: string[] }) =>
        response.classes,
    }),
    getCardsByClass: build.query<CardModel[], string>({
      query: (nameOfClass: string) => `cards/classes/${nameOfClass}`,
      transformResponse: (response: CardModel[]) =>
        Array.of(...response).filter((card) => Object.hasOwn(card, "img")),
    }),
  }),
});

export const { useGetClassesQuery, useGetCardsByClassQuery } = hsApi;

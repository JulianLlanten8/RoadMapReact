import { createApi, fetchBaseQuery } from "@reduxjs/query/react";
/* 
  createApi es una funcion que crea la api
  fetchBaseQuery es una funcion que se usa para hacer las llamadas a la api
*/
export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  /* 
    endpoints es un objeto que contiene todas las funciones que se pueden llamar
    dentro de la api y que se pueden usar en los componentes
  */
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "todos",
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;

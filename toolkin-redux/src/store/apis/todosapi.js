import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
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
    /*   
      get[Nombre de la funcion] concatena el nombre de la funcion con el nombre de la api 
      es decir baseQuery+get[Nombre de la funcion]
     */
    getTodos: builder.query({
      query: () => "todos",
    }),
    getTodo: builder.query({
      query: (todoId) => `todos/${todoId}`,
    }),
  }),
});

export const { useGetTodosQuery, useGetTodoQuery } = todosApi;

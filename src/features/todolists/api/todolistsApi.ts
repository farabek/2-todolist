// 1
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { instance } from "common/instance"
import { BaseResponse } from "common/types"
import { Todolist } from "./todolistsApi.types"
import { DomainTodolist } from "../model/todolistsSlice"
import { baseApi } from "app/baseApi"

// 2
// export const todolistsApi = createApi({
export const todolistsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // // 3
    // reducerPath: "todolistsApi",
    // tagTypes: ["Todolist"],
    // // 4
    // baseQuery: fetchBaseQuery({
    //   baseUrl: process.env.REACT_APP_BASE_URL,
    //   prepareHeaders: (headers) => {
    //     headers.set("API-KEY", `${process.env.REACT_APP_API_KEY}`)
    //     headers.set("Authorization", `Bearer ${localStorage.getItem("sn-token")}`)
    //   },
    // }),
    // // 5
    // endpoints: (build) => ({
    getTodolists: build.query<DomainTodolist[], void>({
      query: () => "todo-lists",
      transformResponse(todolists: Todolist[]): DomainTodolist[] {
        return todolists.map((tl) => ({ ...tl, filter: "all", entityStatus: "idle" }))
      },
      providesTags: ["Todolist"],
    }),

    addTodolist: build.mutation<BaseResponse<{ item: Todolist }>, string>({
      query: (title) => {
        return {
          url: "todo-lists",
          method: "POST",
          body: { title },
        }
      },
      invalidatesTags: ["Todolist"],
    }),

    removeTodolist: build.mutation<BaseResponse, string>({
      query: (id) => {
        return {
          method: "DELETE",
          url: `todo-lists/${id}`,
        }
      },
      invalidatesTags: ["Todolist"],
    }),

    updateTodolistTitle: build.mutation<BaseResponse, { id: string; title: string }>({
      query: ({ id, title }) => {
        return {
          method: "PUT",
          url: `todo-lists/${id}`,
          body: {
            title,
          },
        }
      },
      invalidatesTags: ["Todolist"],
    }),
  }),
})

// 7
// export const { useGetTodolistsQuery } = todolistsApi
export const {
  useGetTodolistsQuery,
  useAddTodolistMutation,
  useRemoveTodolistMutation,
  useUpdateTodolistTitleMutation,
} = todolistsApi

///////////////////////////////////////////

export const _todolistsApi = {
  getTodolists() {
    return instance.get<Todolist[]>("todo-lists")
  },
  updateTodolist(payload: { id: string; title: string }) {
    const { title, id } = payload
    return instance.put<BaseResponse>(`todo-lists/${id}`, { title })
  },
  createTodolist(title: string) {
    return instance.post<BaseResponse<{ item: Todolist }>>("todo-lists", { title })
  },
  deleteTodolist(id: string) {
    return instance.delete<BaseResponse>(`todo-lists/${id}`)
  },
}

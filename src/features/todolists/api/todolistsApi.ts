// // 1
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { instance } from "common/instance"
// import { BaseResponse } from "common/types"
// import { Todolist } from "./todolistsApi.types"
// import { DomainTodolist } from "../model/todolistsSlice"

// // 2
// export const todolistsApi = createApi({
//   // 3
//   reducerPath: "todolistsApi",
//   // 4
//   baseQuery: fetchBaseQuery({
//     baseUrl: process.env.REACT_APP_BASE_URL,
//     prepareHeaders: (headers) => {
//       headers.set("API-KEY", `${process.env.REACT_APP_API_KEY}`)
//       headers.set("Authorization", `Bearer ${localStorage.getItem("sn-token")}`)
//     },
//   }),
//   // 5
//   //1 вариант с return
//   // endpoints: (build) => {
//   //   return {
//   //     // 6
//   //     // getTodolists: build.query<any[], void>({
//   //     getTodolists: build.query<DomainTodolist[], void>({
//   //       // //1 вариант
//   //       // query: () => {
//   //       //   return {
//   //       //     url: "todo-lists",
//   //       //     method: "GET",
//   //       //   }
//   //       // },
//   //       //2 вариавнт-сокращенный
//   //       query: () => "todo-lists",

//   //       transformResponse(todolists: Todolist[]): DomainTodolist[] {
//   //         return todolists.map((tl) => ({ ...tl, filter: "all", entityStatus: "idle" }))
//   //       },
//   //     }),
//   //   }
//   // },
//   //  2 вариант без return
//   endpoints: (build) => ({
//     getTodolists: build.query<DomainTodolist[], void>({
//       query: () => "todo-lists",
//       transformResponse(todolists: Todolist[]): DomainTodolist[] {
//         return todolists.map((tl) => ({ ...tl, filter: "all", entityStatus: "idle" }))
//       },
//     }),
//   }),
// })

// // 7
// export const { useGetTodolistsQuery } = todolistsApi

// ///////////////////////////////////////////

// export const _todolistsApi = {
//   getTodolists() {
//     return instance.get<Todolist[]>("todo-lists")
//   },
//   updateTodolist(payload: { id: string; title: string }) {
//     const { title, id } = payload
//     return instance.put<BaseResponse>(`todo-lists/${id}`, { title })
//   },
//   createTodolist(title: string) {
//     return instance.post<BaseResponse<{ item: Todolist }>>("todo-lists", { title })
//   },
//   deleteTodolist(id: string) {
//     return instance.delete<BaseResponse>(`todo-lists/${id}`)
//   },
// }

/////////////////////////////////////////////

// 1
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { instance } from "common/instance"
import { BaseResponse } from "common/types"
import { Todolist } from "./todolistsApi.types"
import { DomainTodolist } from "../model/todolistsSlice"

// 2
export const todolistsApi = createApi({
  // 3
  reducerPath: "todolistsApi",
  // 4
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("API-KEY", `${process.env.REACT_APP_API_KEY}`)
      headers.set("Authorization", `Bearer ${localStorage.getItem("sn-token")}`)
    },
  }),
  // 5
  endpoints: (build) => ({
    getTodolists: build.query<DomainTodolist[], void>({
      query: () => "todo-lists",
      transformResponse(todolists: Todolist[]): DomainTodolist[] {
        return todolists.map((tl) => ({ ...tl, filter: "all", entityStatus: "idle" }))
      },
    }),

    addTodolist: build.mutation<BaseResponse<{ item: Todolist }>, string>({
      query: (title) => {
        return {
          url: "todo-lists",
          method: "POST",
          body: { title },
        }
      },
    }),

    removeTodolist: build.mutation<BaseResponse, string>({
      query: (id) => {
        return {
          method: "DELETE",
          url: `todo-lists/${id}`,
        }
      },
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

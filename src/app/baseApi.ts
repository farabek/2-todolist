// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// export const baseApi = createApi({
//   reducerPath: "todolistsApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: process.env.REACT_APP_BASE_URL,
//     prepareHeaders: (headers) => {
//       headers.set("API-KEY", `${process.env.REACT_APP_API_KEY}`)
//       headers.set("Authorization", `Bearer ${localStorage.getItem("sn-token")}`)
//     },
//   }),
//   endpoints: () => ({}),
//   tagTypes: ["Todolist", "Task"],
// })

//////////////////////////////////////

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { setAppError } from "./appSlice"
import { ResultCode } from "common/enums"

// export const baseApi = createApi({
//   reducerPath: "todolistsApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: process.env.REACT_APP_BASE_URL,
//     prepareHeaders: (headers) => {
//       headers.set("API-KEY", `${process.env.REACT_APP_API_KEY}`)
//       headers.set("Authorization", `Bearer ${localStorage.getItem("sn-token")}`)
//     },
//   }),
export const baseApi = createApi({
  reducerPath: "todolistsApi",
  baseQuery: async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: process.env.REACT_APP_BASE_URL,
      prepareHeaders: (headers) => {
        headers.set("API-KEY", `${process.env.REACT_APP_API_KEY}`)
        headers.set("Authorization", `Bearer ${localStorage.getItem("sn-token")}`)
      },
    })(args, api, extraOptions)

    // if (result.error) {
    //   // debugger

    //   if (result.error.status === "FETCH_ERROR") {
    //     api.dispatch(setAppError({ error: result.error.error }))
    //   }

    //   if (result.error.status === "PARSING_ERROR") {
    //     api.dispatch(setAppError({ error: result.error.error }))
    //   }

    //   if (result.error.status === 400) {
    //     // ✅ 1 var: Type Assertions
    //     api.dispatch(setAppError({ error: (result.error.data as { message: string }).message }))
    //   }

    //   if (result.error.status === 403) {
    //     api.dispatch(setAppError({ error: "403 Forbidden Error. Check API-KEY" }))
    //   }

    //   if (result.error.status === 500) {
    //     api.dispatch(setAppError({ error: (result.error.data as { message: string }).message }))
    //   }
    // }

    // debugger
    let error = "Some error occurred"

    // 1. Global query errors
    if (result.error) {
      switch (result.error.status) {
        case "FETCH_ERROR":
        case "PARSING_ERROR":
        case "CUSTOM_ERROR":
          error = result.error.error
          break

        case 403:
          error = "403 Forbidden Error. Check API-KEY"
          break

        case 400:
        case 500:
          error = (result.error.data as { message: string }).message
          break

        default:
          error = JSON.stringify(result.error)
          break
      }
      api.dispatch(setAppError({ error }))
    }

    // 2. Result code errors
    if ((result.data as { resultCode: ResultCode }).resultCode === ResultCode.Error) {
      const messages = (result.data as { messages: string[] }).messages
      error = messages.length ? messages[0] : error
      api.dispatch(setAppError({ error }))
    }

    // debugger
    return result
  },
  endpoints: () => ({}),
  tagTypes: ["Todolist", "Task"],
})

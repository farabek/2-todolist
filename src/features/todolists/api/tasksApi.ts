// // import { instance } from "common/instance"
// import { BaseResponse } from "common/types"
// import { baseApi } from "../../../app/baseApi"
// import { DomainTask, GetTasksResponse, UpdateTaskModel } from "./tasksApi.types"

// export const tasksApi = baseApi.injectEndpoints({
//   endpoints: (build) => ({
//     getTasks: build.query<GetTasksResponse, string>({
//       query: (todolistId) => `todo-lists/${todolistId}/tasks`,
//       // providesTags: ["Task"],
//       // providesTags: (res, err, todolistId) =>
//       //   res
//       //     ? [...res.items.map(({ id }) => ({ type: "Task", id }) as const), { type: "Task", id: todolistId }]
//       //     : ["Task"],
//       providesTags: (res, err, todolistId) => [{ type: "Task", id: todolistId }],
//     }),
//     addTask: build.mutation<BaseResponse<{ item: DomainTask }>, { todolistId: string; title: string }>({
//       query: ({ todolistId, title }) => {
//         return {
//           method: "POST",
//           url: `todo-lists/${todolistId}/tasks`,
//           body: {
//             title,
//           },
//         }
//       },
//       // invalidatesTags: ["Task"],
//       invalidatesTags: (res, err, { todolistId }) => [{ type: "Task", id: todolistId }],
//     }),
//     removeTask: build.mutation<BaseResponse, { todolistId: string; taskId: string }>({
//       query: ({ todolistId, taskId }) => {
//         return {
//           method: "DELETE",
//           url: `todo-lists/${todolistId}/tasks/${taskId}`,
//         }
//       },
//       // invalidatesTags: ["Task"],
//       // invalidatesTags: (res, err, { taskId }) => [{ type: "Task", id: taskId }],
//       invalidatesTags: (res, err, { todolistId }) => [{ type: "Task", id: todolistId }],
//     }),
//     updateTask: build.mutation<
//       BaseResponse<{ item: DomainTask }>,
//       { todolistId: string; taskId: string; model: UpdateTaskModel }
//     >({
//       query: ({ todolistId, taskId, model }) => {
//         return {
//           method: "PUT",
//           url: `todo-lists/${todolistId}/tasks/${taskId}`,
//           body: model,
//         }
//       },
//       // invalidatesTags: ["Task"],
//       // invalidatesTags: (res, err, { taskId }) => [{ type: "Task", id: taskId }],
//       invalidatesTags: (res, err, { todolistId }) => [{ type: "Task", id: todolistId }],
//     }),
//   }),
// })

// export const { useGetTasksQuery, useAddTaskMutation, useRemoveTaskMutation, useUpdateTaskMutation } = tasksApi

// // export const _tasksApi = {
// //   getTasks(todolistId: string) {
// //     return instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`)
// //   },
// //   createTask(payload: { title: string; todolistId: string }) {
// //     const { title, todolistId } = payload
// //     return instance.post<BaseResponse<{ item: DomainTask }>>(`todo-lists/${todolistId}/tasks`, { title })
// //   },
// //   deleteTask(payload: { todolistId: string; taskId: string }) {
// //     const { taskId, todolistId } = payload
// //     return instance.delete<BaseResponse>(`todo-lists/${todolistId}/tasks/${taskId}`)
// //   },
// //   updateTask(payload: { todolistId: string; taskId: string; model: UpdateTaskModel }) {
// //     const { taskId, todolistId, model } = payload
// //     return instance.put<BaseResponse<{ item: DomainTask }>>(`todo-lists/${todolistId}/tasks/${taskId}`, model)
// //   },
// // }

// ////////////////////////////////////////////

// import { BaseResponse } from "common/types"
// import { baseApi } from "../../../app/baseApi"
// import { DomainTask, GetTasksResponse, UpdateTaskModel } from "./tasksApi.types"

// export const tasksApi = baseApi.injectEndpoints({
//   endpoints: (build) => ({
//     // getTasks: build.query<GetTasksResponse, string>({
//     getTasks: build.query<GetTasksResponse, { todolistId: string; args: { count: number; page: number } }>({
//       // query: (todolistId) => `todo-lists/${todolistId}/tasks`,
//       query: ({ todolistId, args }) => {
//         return {
//           url: `todo-lists/${todolistId}/tasks`,
//           params: args,
//         }
//       },
//       providesTags: (res, err, { todolistId }) =>
//         res
//           ? [...res.items.map(({ id }) => ({ type: "Task", id }) as const), { type: "Task", id: todolistId }]
//           : ["Task"],
//     }),

//     addTask: build.mutation<BaseResponse<{ item: DomainTask }>, { todolistId: string; title: string }>({
//       query: ({ todolistId, title }) => {
//         return {
//           method: "POST",
//           url: `todo-lists/${todolistId}/tasks`,
//           body: {
//             title,
//           },
//         }
//       },
//       invalidatesTags: (res, err, { todolistId }) => [{ type: "Task", id: todolistId }],
//     }),
//     removeTask: build.mutation<BaseResponse, { todolistId: string; taskId: string }>({
//       query: ({ todolistId, taskId }) => {
//         return {
//           method: "DELETE",
//           url: `todo-lists/${todolistId}/tasks/${taskId}`,
//         }
//       },
//       invalidatesTags: (res, err, { todolistId }) => [{ type: "Task", id: todolistId }],
//     }),
//     updateTask: build.mutation<
//       BaseResponse<{ item: DomainTask }>,
//       { todolistId: string; taskId: string; model: UpdateTaskModel }
//     >({
//       query: ({ todolistId, taskId, model }) => {
//         return {
//           method: "PUT",
//           url: `todo-lists/${todolistId}/tasks/${taskId}`,
//           body: model,
//         }
//       },
//       invalidatesTags: (res, err, { todolistId }) => [{ type: "Task", id: todolistId }],
//     }),
//   }),
// })

// export const { useGetTasksQuery, useAddTaskMutation, useRemoveTaskMutation, useUpdateTaskMutation } = tasksApi

////////////////////////////////////////////

import { BaseResponse } from "common/types"
import { baseApi } from "../../../app/baseApi"
import { DomainTask, GetTasksResponse, UpdateTaskModel } from "./tasksApi.types"

export const PAGE_SIZE = 4

export const tasksApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // getTasks: build.query<GetTasksResponse, string>({
    getTasks: build.query<GetTasksResponse, { todolistId: string; args: { count: number; page: number } }>({
      // query: (todolistId) => `todo-lists/${todolistId}/tasks`,
      query: ({ todolistId, args }) => {
        const params = { ...args, count: PAGE_SIZE }

        // return {
        //   url: `todo-lists/${todolistId}/tasks`,
        //   params: args,
        // }
        return {
          method: "GET",
          url: `todo-lists/${todolistId}/tasks`,
          params,
        }
      },
      providesTags: (res, err, { todolistId }) =>
        res
          ? [...res.items.map(({ id }) => ({ type: "Task", id }) as const), { type: "Task", id: todolistId }]
          : ["Task"],
    }),

    addTask: build.mutation<BaseResponse<{ item: DomainTask }>, { todolistId: string; title: string }>({
      query: ({ todolistId, title }) => {
        return {
          method: "POST",
          url: `todo-lists/${todolistId}/tasks`,
          body: {
            title,
          },
        }
      },
      invalidatesTags: (res, err, { todolistId }) => [{ type: "Task", id: todolistId }],
    }),
    removeTask: build.mutation<BaseResponse, { todolistId: string; taskId: string }>({
      query: ({ todolistId, taskId }) => {
        return {
          method: "DELETE",
          url: `todo-lists/${todolistId}/tasks/${taskId}`,
        }
      },
      invalidatesTags: (res, err, { todolistId }) => [{ type: "Task", id: todolistId }],
    }),
    updateTask: build.mutation<
      BaseResponse<{ item: DomainTask }>,
      { todolistId: string; taskId: string; model: UpdateTaskModel }
    >({
      query: ({ todolistId, taskId, model }) => {
        return {
          method: "PUT",
          url: `todo-lists/${todolistId}/tasks/${taskId}`,
          body: model,
        }
      },
      invalidatesTags: (res, err, { todolistId }) => [{ type: "Task", id: todolistId }],
    }),
  }),
})

export const { useGetTasksQuery, useAddTaskMutation, useRemoveTaskMutation, useUpdateTaskMutation } = tasksApi

// import { instance } from "common/instance"
// import { BaseResponse } from "common/types"
// import { baseApi } from "../../../app/baseApi"
// import { DomainTask, GetTasksResponse, UpdateTaskModel } from "./tasksApi.types"

// // [
// // todoid1
// // {type: 'Task', id: taskid1},
// // {type: 'Task', id: taskid2},
// // {type: 'Task', id: taskid3},
// // {type: 'Task', id: taskid4},
// // {type: 'Task', id: todolistId1},

// // todoid2
// // {type: 'Task', id: taskid10},
// // {type: 'Task', id: taskid11},
// // {type: 'Task', id: taskid12},
// // {type: 'Task', id: todolistId2},
// // ]

// export const PAGE_SIZE = 4

// export const tasksApi = baseApi.injectEndpoints({
//   endpoints: (build) => ({
//     getTasks: build.query<GetTasksResponse, { todolistId: string; args: { page: number } }>({
//       query: ({ todolistId, args }) => {
//         return {
//           url: `todo-lists/${todolistId}/tasks`,
//           params: { ...args, count: PAGE_SIZE },
//         }
//       },

//       // keepUnusedDataFor: 65,

//       providesTags: (result, error, { todolistId }) => [{ type: "Task", id: todolistId }],
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
//       invalidatesTags: (result, error, { todolistId }) => [{ type: "Task", id: todolistId }],
//     }),
//     removeTask: build.mutation<BaseResponse, { todolistId: string; taskId: string }>({
//       query: ({ todolistId, taskId }) => {
//         return {
//           method: "DELETE",
//           url: `todo-lists/${todolistId}/tasks/${taskId}`,
//         }
//       },
//       invalidatesTags: (result, error, { todolistId }) => [{ type: "Task", id: todolistId }],
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

//       async onQueryStarted({ todolistId, taskId, model }, { dispatch, queryFulfilled, getState }) {
//         const cachedArgsForQuery = tasksApi.util.selectCachedArgsForQuery(getState(), "getTasks")

//         let patchResults: any[] = []

//         cachedArgsForQuery.forEach(({ args }) => {
//           patchResults.push(
//             dispatch(
//               tasksApi.util.updateQueryData("getTasks", { todolistId, args: { page: args.page } }, (state) => {
//                 const task = state.items.find((t) => t.id === taskId)
//                 if (task) {
//                   task.status = model.status
//                 }
//               }),
//             ),
//           )
//         })
//         try {
//           await queryFulfilled
//         } catch (e) {
//           patchResults.forEach((patchResult) => {
//             patchResult.undo()
//           })
//         }
//       },
//       invalidatesTags: (result, error, { todolistId }) => [{ type: "Task", id: todolistId }],
//     }),
//   }),
// })

// export const { useGetTasksQuery, useAddTaskMutation, useRemoveTaskMutation, useUpdateTaskMutation } = tasksApi

// export const _tasksApi = {
//   getTasks(todolistId: string) {
//     return instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`)
//   },
//   createTask(payload: { title: string; todolistId: string }) {
//     const { title, todolistId } = payload
//     return instance.post<BaseResponse<{ item: DomainTask }>>(`todo-lists/${todolistId}/tasks`, { title })
//   },
//   deleteTask(payload: { todolistId: string; taskId: string }) {
//     const { taskId, todolistId } = payload
//     return instance.delete<BaseResponse>(`todo-lists/${todolistId}/tasks/${taskId}`)
//   },
//   updateTask(payload: { todolistId: string; taskId: string; model: UpdateTaskModel }) {
//     const { taskId, todolistId, model } = payload
//     return instance.put<BaseResponse<{ item: DomainTask }>>(`todo-lists/${todolistId}/tasks/${taskId}`, model)
//   },
// }

/////////////////////////////////////////////////

import { instance } from "common/instance"
import { BaseResponse } from "common/types"
import { baseApi } from "../../../app/baseApi"
import { DomainTask, GetTasksResponse, UpdateTaskModel } from "./tasksApi.types"

export const PAGE_SIZE = 4

export const tasksApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTasks: build.query<GetTasksResponse, { todolistId: string; args: { page: number } }>({
      query: ({ todolistId, args }) => {
        return {
          url: `todo-lists/${todolistId}/tasks`,
          params: { ...args, count: PAGE_SIZE },
        }
      },

      providesTags: (result, error, { todolistId }) => [{ type: "Task", id: todolistId }],
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
      invalidatesTags: (result, error, { todolistId }) => [{ type: "Task", id: todolistId }],
    }),
    removeTask: build.mutation<BaseResponse, { todolistId: string; taskId: string }>({
      query: ({ todolistId, taskId }) => {
        return {
          method: "DELETE",
          url: `todo-lists/${todolistId}/tasks/${taskId}`,
        }
      },
      invalidatesTags: (result, error, { todolistId }) => [{ type: "Task", id: todolistId }],
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

      async onQueryStarted({ todolistId, taskId, model }, { dispatch, queryFulfilled, getState }) {
        const cachedArgsForQuery = tasksApi.util.selectCachedArgsForQuery(getState(), "getTasks")

        let patchResults: any[] = []

        cachedArgsForQuery.forEach(({ args }) => {
          patchResults.push(
            dispatch(
              tasksApi.util.updateQueryData("getTasks", { todolistId, args: { page: args.page } }, (state) => {
                const task = state.items.find((t) => t.id === taskId)
                if (task) {
                  task.status = model.status
                }
              }),
            ),
          )
        })
        try {
          await queryFulfilled
        } catch (e) {
          patchResults.forEach((patchResult) => {
            patchResult.undo()
          })
        }
      },
      // async onQueryStarted({ todolistId, taskId, model }, { dispatch, queryFulfilled }) {
      //   const patchResult = dispatch(
      //     tasksApi.util.updateQueryData("getTasks", { todolistId, args: { page: 1 } }, (state) => {
      //       const task = state.items.find((t) => t.id === taskId)
      //       if (task) {
      //         task.status = model.status
      //       }
      //     }),
      //   )
      //   try {
      //     await queryFulfilled
      //   } catch {
      //     patchResult.undo()
      //   }
      // },
      invalidatesTags: (result, error, { todolistId }) => [{ type: "Task", id: todolistId }],
    }),
  }),
})

export const { useGetTasksQuery, useAddTaskMutation, useRemoveTaskMutation, useUpdateTaskMutation } = tasksApi

export const _tasksApi = {
  getTasks(todolistId: string) {
    return instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`)
  },
  createTask(payload: { title: string; todolistId: string }) {
    const { title, todolistId } = payload
    return instance.post<BaseResponse<{ item: DomainTask }>>(`todo-lists/${todolistId}/tasks`, { title })
  },
  deleteTask(payload: { todolistId: string; taskId: string }) {
    const { taskId, todolistId } = payload
    return instance.delete<BaseResponse>(`todo-lists/${todolistId}/tasks/${taskId}`)
  },
  updateTask(payload: { todolistId: string; taskId: string; model: UpdateTaskModel }) {
    const { taskId, todolistId, model } = payload
    return instance.put<BaseResponse<{ item: DomainTask }>>(`todo-lists/${todolistId}/tasks/${taskId}`, model)
  },
}

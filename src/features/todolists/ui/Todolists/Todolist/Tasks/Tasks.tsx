// import List from "@mui/material/List"
// import { TaskStatus } from "common/enums"
// import { useGetTasksQuery } from "../../../../api/tasksApi"
// import { DomainTodolist } from "../../../../model/todolistsSlice"
// import { Task } from "./Task/Task"
// import { TasksSkeleton } from "features/todolists/ui/skeletons/TasksSkeleton/TasksSkeleton"

// type Props = {
//   todolist: DomainTodolist
// }

// export const Tasks = ({ todolist }: Props) => {
//   // const { data } = useGetTasksQuery(todolist.id)
//   const { data, isLoading } = useGetTasksQuery(todolist.id)

//   let tasksForTodolist = data?.items

//   if (todolist.filter === "active") {
//     tasksForTodolist = tasksForTodolist?.filter((task) => task.status === TaskStatus.New)
//   }

//   if (todolist.filter === "completed") {
//     tasksForTodolist = tasksForTodolist?.filter((task) => task.status === TaskStatus.Completed)
//   }

//   if (isLoading) {
//     return <TasksSkeleton />
//   }

//   return (
//     <>
//       {tasksForTodolist?.length === 0 ? (
//         <p>Тасок нет</p>
//       ) : (
//         <List>
//           {tasksForTodolist?.map((task) => {
//             return <Task key={task.id} task={task} todolist={todolist} />
//           })}
//         </List>
//       )}
//     </>
//   )
// }

// /////////////////////////////////////////////

// import List from "@mui/material/List"
// import { TaskStatus } from "common/enums"
// import { useGetTasksQuery } from "../../../../api/tasksApi"
// import { DomainTodolist } from "../../../../model/todolistsSlice"
// import { Task } from "./Task/Task"
// import { TasksSkeleton } from "features/todolists/ui/skeletons/TasksSkeleton/TasksSkeleton"

// type Props = {
//   todolist: DomainTodolist
// }

// export const Tasks = ({ todolist }: Props) => {
//   // const { data, isLoading } = useGetTasksQuery(todolist.id)
//   const { data, isLoading, isError } = useGetTasksQuery(todolist.id)

//   ////
//   if (isLoading) {
//     return <TasksSkeleton />
//   }

//   let tasksForTodolist = data?.items

//   if (todolist.filter === "active") {
//     tasksForTodolist = tasksForTodolist?.filter((task) => task.status === TaskStatus.New)
//   }

//   if (todolist.filter === "completed") {
//     tasksForTodolist = tasksForTodolist?.filter((task) => task.status === TaskStatus.Completed)
//   }
//   ////
//   if (isError) {
//     return <h2 style={{ color: "red" }}>Error </h2>
//   }

//   return (
//     <>
//       {tasksForTodolist?.length === 0 ? (
//         <p>Тасок нет</p>
//       ) : (
//         <List>
//           {tasksForTodolist?.map((task) => {
//             return <Task key={task.id} task={task} todolist={todolist} />
//           })}
//         </List>
//       )}
//     </>
//   )
// }

// // /////////////////////////////////////////////

// import List from "@mui/material/List"
// import { TaskStatus } from "common/enums"
// import { useGetTasksQuery } from "../../../../api/tasksApi"
// import { DomainTodolist } from "../../../../model/todolistsSlice"
// import { Task } from "./Task/Task"
// import { TasksSkeleton } from "features/todolists/ui/skeletons/TasksSkeleton/TasksSkeleton"
// import { setAppError } from "app/appSlice"
// import { useAppDispatch } from "common/hooks/useAppDispatch"

// type Props = {
//   todolist: DomainTodolist
// }

// type ErrorData = {
//   status: number
//   data: {
//     mesage: string
//   }
// }

// export const Tasks = ({ todolist }: Props) => {
//   // const { data, isLoading } = useGetTasksQuery(todolist.id)
//   // const { data, isLoading, isError } = useGetTasksQuery(todolist.id)
//   const { data, isLoading, isError, error } = useGetTasksQuery("todolist.id")
//   // const { data, isLoading, isError, error } = useGetTasksQuery(todolist.id)
//   console.log({ isError, error })

//   const dispatch = useAppDispatch()

//   ////
//   if (isLoading) {
//     return <TasksSkeleton />
//   }

//   let tasksForTodolist = data?.items

//   if (todolist.filter === "active") {
//     tasksForTodolist = tasksForTodolist?.filter((task) => task.status === TaskStatus.New)
//   }

//   if (todolist.filter === "completed") {
//     tasksForTodolist = tasksForTodolist?.filter((task) => task.status === TaskStatus.Completed)
//   }
//   ////
//   // if (isError) {
//   //   return <h2 style={{ color: "red" }}>Error </h2>
//   // }
//   ////
//   if (error) {
//     if ("data" in error) {
//       const dataError = error.data as ErrorData
//       if ("message" in dataError) {
//         const errMessage = dataError.message as string
//         dispatch(setAppError({ error: errMessage }))
//       }
//     }
//   }

//   return (
//     <>
//       {tasksForTodolist?.length === 0 ? (
//         <p>Тасок нет</p>
//       ) : (
//         <List>
//           {tasksForTodolist?.map((task) => {
//             return <Task key={task.id} task={task} todolist={todolist} />
//           })}
//         </List>
//       )}
//     </>
//   )
// }

// /////////////////////////////////////////////

// import List from "@mui/material/List"
// import { TaskStatus } from "common/enums"
// import { useGetTasksQuery } from "../../../../api/tasksApi"
// import { DomainTodolist } from "../../../../model/todolistsSlice"
// import { Task } from "./Task/Task"
// import { TasksSkeleton } from "features/todolists/ui/skeletons/TasksSkeleton/TasksSkeleton"
// import { useAppDispatch } from "common/hooks/useAppDispatch"
// import { useEffect } from "react"
// import { setAppError } from "app/appSlice"

// type Props = {
//   todolist: DomainTodolist
// }

// export const Tasks = ({ todolist }: Props) => {
//   // const { data, isLoading } = useGetTasksQuery(todolist.id)
//   // const { data, isLoading, isError } = useGetTasksQuery(todolist.id)
//   const { data, isLoading, isError, error } = useGetTasksQuery("todolist.id")
//   // const { data, isLoading, isError, error } = useGetTasksQuery(todolist.id)
//   console.log({ isError, error })

//   const dispatch = useAppDispatch()

//   useEffect(() => {
//     if (error) {
//       if ("data" in error) {
//         const dataError = error.data as { message: string }
//         dispatch(setAppError({ error: dataError.message }))
//       }
//     }
//   }, [error])

//   ////
//   if (isLoading) {
//     return <TasksSkeleton />
//   }

//   let tasksForTodolist = data?.items

//   if (todolist.filter === "active") {
//     tasksForTodolist = tasksForTodolist?.filter((task) => task.status === TaskStatus.New)
//   }

//   if (todolist.filter === "completed") {
//     tasksForTodolist = tasksForTodolist?.filter((task) => task.status === TaskStatus.Completed)
//   }
//   ////
//   // if (isError) {
//   //   return <h2 style={{ color: "red" }}>Error</h2>
//   // }
//   ////
//   if (error) {
//     dispatch(setAppError({ error: error.data.message }))
//   }

//   return (
//     <>
//       {tasksForTodolist?.length === 0 ? (
//         <p>Тасок нет</p>
//       ) : (
//         <List>
//           {tasksForTodolist?.map((task) => {
//             return <Task key={task.id} task={task} todolist={todolist} />
//           })}
//         </List>
//       )}
//     </>
//   )
// }

/////////////////////////////////////////////

import List from "@mui/material/List"
import { TaskStatus } from "common/enums"
import { useGetTasksQuery } from "../../../../api/tasksApi"
import { DomainTodolist } from "../../../../model/todolistsSlice"
import { Task } from "./Task/Task"
import { TasksSkeleton } from "features/todolists/ui/skeletons/TasksSkeleton/TasksSkeleton"
import { useAppDispatch } from "common/hooks/useAppDispatch"
import { useEffect } from "react"
import { setAppError } from "app/appSlice"

type Props = {
  todolist: DomainTodolist
}

export const Tasks = ({ todolist }: Props) => {
  // const { data, isLoading } = useGetTasksQuery(todolist.id)
  // const { data, isLoading, isError } = useGetTasksQuery(todolist.id)
  const { data, isLoading, isError, error } = useGetTasksQuery("todolist.id")
  // const { data, isLoading, isError, error } = useGetTasksQuery(todolist.id)
  console.log({ isError, error })

  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   if (error) {
  //     if ("data" in error) {
  //       const dataError = error.data as { message: string }
  //       dispatch(setAppError({ error: dataError.message }))
  //     }
  //   }
  // }, [error])
  useEffect(() => {
    if (error) {
      if ("status" in error) {
        //  FetchBaseQueryError
        const errMsg = "error" in error ? error.error : JSON.stringify(error.data)
        dispatch(setAppError({ error: errMsg }))
      } else {
        // SerializedError
        dispatch(setAppError({ error: error.message ? error.message : "Some error occurred." }))
      }
    }
  }, [error])
  ////
  if (isLoading) {
    return <TasksSkeleton />
  }

  let tasksForTodolist = data?.items

  if (todolist.filter === "active") {
    tasksForTodolist = tasksForTodolist?.filter((task) => task.status === TaskStatus.New)
  }

  if (todolist.filter === "completed") {
    tasksForTodolist = tasksForTodolist?.filter((task) => task.status === TaskStatus.Completed)
  }
  ////
  // if (isError) {
  //   return <h2 style={{ color: "red" }}>Error</h2>
  // }
  ////
  // if (error) {
  //   dispatch(setAppError({ error: error.data.message }))
  // }

  return (
    <>
      {tasksForTodolist?.length === 0 ? (
        <p>Тасок нет</p>
      ) : (
        <List>
          {tasksForTodolist?.map((task) => {
            return <Task key={task.id} task={task} todolist={todolist} />
          })}
        </List>
      )}
    </>
  )
}

// import List from "@mui/material/List"
// import { TaskStatus } from "common/enums"
// import { useGetTasksQuery } from "../../../../api/tasksApi"
// import { DomainTodolist } from "../../../../lib/types/types"
// import { TasksSkeleton } from "../../../skeletons/TasksSkeleton/TasksSkeleton"
// import { Task } from "./Task/Task"

// type Props = {
//   todolist: DomainTodolist
// }

// export const Tasks = ({ todolist }: Props) => {
//   // const { data, isLoading } = useGetTasksQuery(todolist.id)
//   const { data, isLoading } = useGetTasksQuery({
//     todolistId: todolist.id,
//     args: { count: 4, page: 1 },
//   })

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

///////////////////////////////////////////

import List from "@mui/material/List"
import { TaskStatus } from "common/enums"
import { useGetTasksQuery } from "../../../../api/tasksApi"
import { DomainTodolist } from "../../../../lib/types/types"
import { TasksSkeleton } from "../../../skeletons/TasksSkeleton/TasksSkeleton"
import { Task } from "./Task/Task"
import { useState } from "react"
import { TasksPagination } from "../TasksPagination/TasksPagination"

type Props = {
  todolist: DomainTodolist
}

export const Tasks = ({ todolist }: Props) => {
  const [page, setPage] = useState(1)

  const { data, isLoading } = useGetTasksQuery({
    todolistId: todolist.id,
    // args: { count: 4, page: 1 },
    args: { page },
  })

  let tasksForTodolist = data?.items

  if (todolist.filter === "active") {
    tasksForTodolist = tasksForTodolist?.filter((task) => task.status === TaskStatus.New)
  }

  if (todolist.filter === "completed") {
    tasksForTodolist = tasksForTodolist?.filter((task) => task.status === TaskStatus.Completed)
  }

  if (isLoading) {
    return <TasksSkeleton />
  }

  return (
    <>
      {tasksForTodolist?.length === 0 ? (
        <p>Тасок нет</p>
      ) : (
        <>
          <List>
            {tasksForTodolist?.map((task) => {
              return <Task key={task.id} task={task} todolist={todolist} />
            })}
          </List>

          <TasksPagination totalCount={data?.totalCount || 0} page={page} setPage={setPage} />
        </>
      )}
    </>
  )
}

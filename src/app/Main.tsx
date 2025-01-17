// import Container from "@mui/material/Container"
// import Grid from "@mui/material/Unstable_Grid2"
// import { Path } from "common/router"
// import { AddItemForm } from "common/components"
// import { useAppDispatch, useAppSelector } from "common/hooks"
// import { Navigate } from "react-router-dom"
// import { selectIsLoggedIn } from "../features/auth/model/authSlice"
// import { addTodolistTC } from "../features/todolists/model/todolistsSlice"
// import { Todolists } from "../features/todolists/ui/Todolists/Todolists"

// export const Main = () => {
//   const dispatch = useAppDispatch()

//   const isLoggedIn = useAppSelector(selectIsLoggedIn)

//   const addTodolist = (title: string) => {
//     dispatch(addTodolistTC(title))
//   }

//   if (!isLoggedIn) {
//     return <Navigate to={Path.Login} />
//   }

//   return (
//     <Container fixed>
//       <Grid container sx={{ mb: "30px" }}>
//         <AddItemForm addItem={addTodolist} />
//       </Grid>
//       <Grid container spacing={4}>
//         <Todolists />
//       </Grid>
//     </Container>
//   )
// }

// ///////////////////////////////////////

// import Container from "@mui/material/Container"
// import Grid from "@mui/material/Unstable_Grid2"
// import { Path } from "common/router"
// import { AddItemForm } from "common/components"
// // import { useAppDispatch, useAppSelector } from "common/hooks"
// import { useAppSelector } from "common/hooks"
// import { Navigate } from "react-router-dom"
// import { selectIsLoggedIn } from "../features/auth/model/authSlice"
// // import { addTodolistTC } from "../features/todolists/model/todolistsSlice"
// import { Todolists } from "../features/todolists/ui/Todolists/Todolists"
// import { useAddTodolistMutation } from "features/todolists/api/todolistsApi"

// export const Main = () => {
//   // const dispatch = useAppDispatch()

//   const isLoggedIn = useAppSelector(selectIsLoggedIn)

//   const [addTodolist] = useAddTodolistMutation()

//   const addTodolistCb = (title: string) => {
//     // dispatch(addTodolistTC(title))
//     addTodolist(title)
//   }

//   if (!isLoggedIn) {
//     return <Navigate to={Path.Login} />
//   }

//   return (
//     <Container fixed>
//       <Grid container sx={{ mb: "30px" }}>
//         {/* <AddItemForm addItem={addTodolist} /> */}
//         <AddItemForm addItem={addTodolistCb} />
//       </Grid>
//       <Grid container spacing={4}>
//         <Todolists />
//       </Grid>
//     </Container>
//   )
// }

/////////////////////////////////////////////////

///////////////////////////////////////

import Container from "@mui/material/Container"
import Grid from "@mui/material/Unstable_Grid2"
import { Path } from "common/router"
import { AddItemForm } from "common/components"
// import { useAppDispatch, useAppSelector } from "common/hooks"
import { useAppSelector } from "common/hooks"
import { Navigate } from "react-router-dom"
// import { selectIsLoggedIn } from "../features/auth/model/authSlice"
// import { addTodolistTC } from "../features/todolists/model/todolistsSlice"
import { Todolists } from "../features/todolists/ui/Todolists/Todolists"
import { useAddTodolistMutation } from "features/todolists/api/todolistsApi"
import { selectIsLoggedIn } from "./appSlice"

export const Main = () => {
  // const dispatch = useAppDispatch()

  const isLoggedIn = useAppSelector(selectIsLoggedIn)

  const [addTodolist] = useAddTodolistMutation()

  const addTodolistCb = (title: string) => {
    // dispatch(addTodolistTC(title))
    addTodolist(title)
  }

  if (!isLoggedIn) {
    return <Navigate to={Path.Login} />
  }

  return (
    <Container fixed>
      <Grid container sx={{ mb: "30px" }}>
        {/* <AddItemForm addItem={addTodolist} /> */}
        <AddItemForm addItem={addTodolistCb} />
      </Grid>
      <Grid container spacing={4}>
        <Todolists />
      </Grid>
    </Container>
  )
}

import Container from "@mui/material/Container"
import Grid from "@mui/material/Unstable_Grid2"
import { AddItemForm } from "common/components"
import { useAppDispatch, useAppSelector } from "common/hooks"
// import { addTodolistTC } from "../features/todolists/model/todolists-reducer"
import { addTodolistTC } from "features/todolists/model/todolistsSlice"
import { Todolists } from "../features/todolists/ui/Todolists/Todolists"
import { selectIsLoggedIn } from "features/auth/model/authSlice"
import { Navigate } from "react-router-dom"
import { Path } from "common/router"

export const Main = () => {
  const dispatch = useAppDispatch()

  const isLoggedIn = useAppSelector(selectIsLoggedIn)

  const addTodolist = (title: string) => {
    dispatch(addTodolistTC(title))
  }

  if (!isLoggedIn) {
    return <Navigate to={Path.Login} />
  }

  return (
    <Container fixed>
      <Grid container sx={{ mb: "30px" }}>
        <AddItemForm addItem={addTodolist} />
      </Grid>
      <Grid container spacing={4}>
        <Todolists />
      </Grid>
    </Container>
  )
}
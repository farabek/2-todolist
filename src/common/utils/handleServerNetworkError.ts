// import { Dispatch } from "redux"
// import { setAppErrorAC, setAppStatusAC } from "../../app/app-reducer"

// export const handleServerNetworkError = (error: { message: string }, dispatch: Dispatch) => {
//   dispatch(setAppErrorAC(error.message))
//   dispatch(setAppStatusAC("failed"))
// }

///////////////////////////////////////

import { Dispatch } from "redux"
import { setAppError, setAppStatus } from "../../app/appSlice"

export const handleServerNetworkError = (error: { message: string }, dispatch: Dispatch) => {
  dispatch(setAppError({ error: error.message }))
  dispatch(setAppStatus({ status: "failed" }))
}

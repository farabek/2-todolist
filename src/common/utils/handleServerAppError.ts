// import { BaseResponse } from "common/types"
// import { Dispatch } from "redux"
// import { setAppErrorAC, setAppStatusAC } from "../../app/app-reducer"

// export const handleServerAppError = <T>(data: BaseResponse<T>, dispatch: Dispatch) => {
//   if (data.messages.length) {
//     dispatch(setAppErrorAC(data.messages[0]))
//   } else {
//     dispatch(setAppErrorAC("Some error occurred"))
//   }
//   dispatch(setAppStatusAC("failed"))
// }

////////////////////////////////////////

import { BaseResponse } from "common/types"
import { Dispatch } from "redux"
import { setAppError, setAppStatus } from "../../app/appSlice"

export const handleServerAppError = <T>(data: BaseResponse<T>, dispatch: Dispatch) => {
  if (data.messages.length) {
    dispatch(setAppError({ error: data.messages[0] }))
  } else {
    dispatch(setAppError({ error: "Some error occurred" }))
  }
  dispatch(setAppStatus({ status: "failed" }))
}

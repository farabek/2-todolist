// // import { applyMiddleware, combineReducers, legacy_createStore, UnknownAction } from "redux"
// // import { thunk, ThunkDispatch } from "redux-thunk"
// import { combineReducers, UnknownAction } from "redux"
// import { ThunkDispatch } from "redux-thunk"
// import { tasksReducer } from "../features/todolists/model/tasks-reducer"
// import { todolistsReducer } from "../features/todolists/model/todolists-reducer"
// import { appReducer } from "./app-reducer"
// import { configureStore } from "@reduxjs/toolkit"

// const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   todolists: todolistsReducer,
//   app: appReducer,
// })

// // export const store = legacy_createStore(rootReducer, {}, applyMiddleware(thunk))
// export const store = configureStore({ reducer: rootReducer })

// export type RootState = ReturnType<typeof store.getState>

// // export type AppDispatch = typeof store.dispatch

// // Создаем тип диспатча который принимает как AC так и TC
// export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>

// // @ts-ignore
// window.store = store

/////////////////////////////////////////////

import { configureStore } from "@reduxjs/toolkit"
import { authReducer, authSlice } from "../features/auth/model/authSlice"
import { tasksReducer, tasksSlice } from "../features/todolists/model/tasksSlice"
import { todolistsReducer, todolistsSlice } from "../features/todolists/model/todolistsSlice"
import { appReducer, appSlice } from "./appSlice"

export const store = configureStore({
  reducer: {
    [tasksSlice.name]: tasksReducer,
    [todolistsSlice.name]: todolistsReducer,
    [appSlice.name]: appReducer,
    [authSlice.name]: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

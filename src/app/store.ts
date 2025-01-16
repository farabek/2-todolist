import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
// import { todolistsApi } from "features/todolists/api/todolistsApi"
import { authReducer, authSlice } from "../features/auth/model/authSlice"
import { tasksReducer, tasksSlice } from "../features/todolists/model/tasksSlice"
import { todolistsReducer, todolistsSlice } from "../features/todolists/model/todolistsSlice"
import { appReducer, appSlice } from "./appSlice"
import { baseApi } from "./baseApi"

export const store = configureStore({
  reducer: {
    [tasksSlice.name]: tasksReducer,
    [todolistsSlice.name]: todolistsReducer,
    [appSlice.name]: appReducer,
    [authSlice.name]: authReducer,
    // [todolistsApi.reducerPath]: todolistsApi.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  // 1
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todolistsApi.middleware),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
})

// 2
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

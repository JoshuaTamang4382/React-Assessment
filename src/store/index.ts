import { request } from '@/core/utils/api.utils'
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slice/auth.slice'

export const store = configureStore({
  reducer: {
    [request.reducerPath]: request.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(request.middleware),
  devTools: import.meta.env.MODE === 'development',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

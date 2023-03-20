import { IAuthStore } from '@/core/types/auth.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IAuthStore = {
  xs: null,
  refreshToken: null,
  email: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<IAuthStore>) => {
      const { email, refreshToken, xs } = action.payload
      state.email = email
      ;(state.refreshToken = refreshToken), (state.xs = xs)
    },
    logout: (state) => {
      state.email = null
      ;(state.refreshToken = null), (state.xs = null)
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer

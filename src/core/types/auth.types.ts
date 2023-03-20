export interface IAuthStore {
  xs: string | null
  refreshToken?: string | null
  email?: string | null
}

export interface ILoginRequestBody {
  login_id: string
  login_password: string
  ip_address: string | number
}

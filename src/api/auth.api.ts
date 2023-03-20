import { HTTP, LOGIN_URL } from '@/core/constants'
import { ILoginRequestBody } from '@/core/types/auth.types'
import { request } from '@/core/utils/api.utils'

export const authApi = request.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials: ILoginRequestBody) => ({
        url: LOGIN_URL,
        method: HTTP.POST,
        body: { ...credentials },
      }),
    }),
  }),
})

export const { useLoginMutation } = authApi

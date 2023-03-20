import {
  fetchBaseQuery,
  createApi,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react'

export type baseQueryType = BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  any,
  FetchBaseQueryMeta
>

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState }: { getState: any }) => {
    const token = getState().auth.token
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
})

const queryWrapper: baseQueryType = async (args, api, extraOption) => {
  const response = await baseQuery(args, api, extraOption)
  return response
}

export const request = createApi({
  baseQuery: queryWrapper,
  endpoints: (builder) => ({}),
})

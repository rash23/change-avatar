import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

/**
 * Base API configuration for RTK Query
 * Using fakeBaseQuery since all endpoints use custom queryFn with mock data
 * For real API implementation, replace with fetchBaseQuery and proper BASE_URL
 */
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Background', 'User'],
  endpoints: () => ({}),
})

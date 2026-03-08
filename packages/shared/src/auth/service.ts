import { authClient } from './client'
import { getToken, setToken } from './token'
import type { ApiResponse } from '../types'
import type { LoginRequest, RegisterRequest, AuthTokens, User } from './types'

export const authService = {
  login: async (data: LoginRequest) => {
    const res = await authClient.post<ApiResponse<AuthTokens>>('/login', data)
    if (res.data.data?.token) setToken(res.data.data.token)
    return res
  },

  register: async (data: RegisterRequest) => {
    const res = await authClient.post<ApiResponse<AuthTokens>>('/register', data)
    if (res.data.data?.token) setToken(res.data.data.token)
    return res
  },

  refresh: async () => {
    const token = getToken()
    const res = await authClient.post<ApiResponse<AuthTokens>>(
      '/refresh',
      null,
      { headers: token ? { Authorization: `Bearer ${token}` } : {} },
    )
    if (res.data.data?.token) setToken(res.data.data.token)
    return res
  },

  me: () => authClient.get<ApiResponse<User>>('/me'),
}

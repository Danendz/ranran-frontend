import { api } from './client'
import type { ApiResponse } from '../types'

export const checkHealth = () => api.get<ApiResponse>('/up')

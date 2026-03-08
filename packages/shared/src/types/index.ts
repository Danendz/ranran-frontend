// Matches ranran-backend's ApiResponse::success/error format
export interface ApiResponse<T = unknown> {
  status: number
  success: boolean
  message: string
  data: T | null
}

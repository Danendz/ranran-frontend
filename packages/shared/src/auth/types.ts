export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  name: string
  email: string
  password: string
}

export interface AuthTokens {
  token: string
  token_type: string
  expires_in: number
}

export interface User {
  id: number
  name: string
  created_at: string
}

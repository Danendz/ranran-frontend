import axios from 'axios'

// Separate axios instance for Auth service — no auth interceptor here
export const authClient = axios.create({
  baseURL: import.meta.env.VITE_AUTH_URL,
  headers: { 'Content-Type': 'application/json' },
})

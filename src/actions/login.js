import { post } from '@/utils/request'

// login
export function fetchLogin (options) {
  return {
    type: 'LOGIN',
    payload: post('api/v2/login', options),
  }
}
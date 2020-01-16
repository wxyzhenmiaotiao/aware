import { get } from '@/utils/request'
import api from './api'
import qs from 'qs'

export function childone(data) {
	return get(api.child+"?"+data)
}

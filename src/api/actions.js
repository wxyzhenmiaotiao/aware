import { get } from '@/utils/request'
import api from './api'

export function childone(data) {
	return get(api.child+"?"+data)
}
export function search(data) {
	return get(api.search+"?"+data)
}
export function city(data) {
	return get(api.city+""+data)
}

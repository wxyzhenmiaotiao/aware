import { get } from '@/utils/request'
import api from './api'

export function childone(data) {
	return get(api.child+"?"+data)
}
export function search(data) {
	return get(api.search+"?"+data)
}
export function shop(data) {
	return get(api.shop+"?"+data)
}
export function city(data) {//城市
	return get(api.city+""+data)
}
export function fenlei() {//分类页面轮播盒子
	return get(api.fenlei)
}
export function searchshop(data) {//搜索商品
	return get(api.searchshop+"?"+data)
}
export function xiang(data) {//商品详情
	return get(api.xiangxi+""+data)
}

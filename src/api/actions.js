<<<<<<< HEAD
import { get, post } from '@/utils/request'
=======
import { get , post} from '@/utils/request'
>>>>>>> b4a3a608d1e0cd4e910ebf3d79cc11d7667d6c80
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
<<<<<<< HEAD
export function xin() {//服务中心
	return get(api.zhongxi)
}
export function login() {//服务中心
	return get(api.login)
=======
export function xiangxi(data) {//商家详情
	return get(api.xiangqing+""+data)
>>>>>>> ff2ad426443483e7ddf081dc4a627db87b4fe254
}
export function addshop(data) {//加入购物车
	return post(api.addshop,data)
}

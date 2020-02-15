import { get , post} from '@/utils/request'
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
export function xin() {//服务中心
	return get(api.zhongxi)
}
export function login() {//服务中心
	return get(api.login)
}
export function xiangxi(data) {//商家详情
	return get(api.xiangqing+""+data)
}
export function addshop(data) {//加入购物车
	return post(api.addshop,data)
}
export function evaluafen(data){//获取评价的分数
	return get(api.evaluate+""+data+"/ratings/scores")
}
export function evalualei(data){//获取评价的种类
	return get(api.evaluate+""+data+"/ratings/tags")
}
export function evalualist(data,data1,data2){//获取评价的信息列表
	return get(api.evaluate+""+data+"/ratings?offset="+data1+"&limit="+data2+"&has_content=true")
}

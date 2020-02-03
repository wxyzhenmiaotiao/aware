import loadable from '@/utils/loader'
export const Home = loadable(() => import('@/pages/home'))
export const Login = loadable(() => import('@/pages/login'))
export const Choosechild = loadable(() => import('@/pages/choosechild'))
export const Pageone = loadable(() => import('@/components/pageone'))
export const Product = loadable(() => import('@/components/product'))
export const Productone = loadable(() => import('@/components/productone'))
export const Producttwo = loadable(() => import('@/components/producttwo'))
export const Pagetwo = loadable(() => import('@/components/pagetwo'))//第二个页面
export const Pagethree = loadable(() => import('@/components/pagethree'))//第三个页面
export const Pagefour = loadable(() => import('@/components/pagefour'))//第四个页面
export const Logindefs = loadable(() => import('@/components/login'))//登录页面
export const Download = loadable(() => import('@/components/download'))//下载页面
export const Details = loadable(() => import('@/components/details'))//商家详情
export const Service = loadable(() => import('@/components/service'))//下载页面
export const Fu = loadable(() => import('@/components/fu'))//下载页面

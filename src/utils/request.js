
 import axios from "axios"
// import qs from 'qs';
 var http=axios.create({
     baseURL:"http://192.168.110.157:52789/api",
     timeout:50000
 })
 //请求拦截器
 http.interceptors.request.use((config)=>{
     //在发送之前需要干的事情
     return config
 },(error)=>{
     return Promise.reject(error)
 })
 //响应拦截
 http.interceptors.response.use((config)=>{
     //对响应做什么
     return config
 },(error)=>{
     return Promise.reject(error)
 })
 export default http

//  export function autoGetMeth(data,url){
//     return http.get(url+"?"+qs.stringify(data));
//   }
//   //post
//   export function autoPostMeth(data,url){
//     return http.post(url,qs.stringify(data));
//   }
 
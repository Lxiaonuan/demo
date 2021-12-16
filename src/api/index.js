import request from '../utils/request'
// import qs from 'qs';  //用于格式化 json 很好用
export function getdata(params){
   return request({
    url: '/WmsBigTv/GetTempData',
    method: 'get',
    params
   })
}
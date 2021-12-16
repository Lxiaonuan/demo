import request from '../utils/request'
// import qs from 'qs';  //用于格式化 json
export function getdata(params){
   return request({
    url: '/WmsBigTv/GetTempData',
    method: 'get',
    params
   })
}
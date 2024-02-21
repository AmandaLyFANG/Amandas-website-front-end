import axios from "axios";
 
const http = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 5000,
    withCredentials: true,
})
 
// 添加请求拦截器
http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
 
// 添加响应拦截器
http.interceptors.response.use(function (response) {
    if(response.data.code !== 0){
        alert(response.data.msg);
    }else{
        return response.data
    }
}, function (error) {
    return Promise.reject(error);
});
 
export default http
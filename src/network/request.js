import axios from "axios";

// 最终方案
export function request(config) {
    //   return new Promise((resolve, reject) => {
        // 1.创建axios实例
        const instance = axios.create({
          baseURL: "http://123.207.32.32:8000/api/x6",
          timeout: 5000
        });

        // 2. axios的拦截器
        // 2.1请求拦截的作用
        instance.interceptors.request.use(config => {
            // console.log(config)
            // 返回config， 不然会报错

            return config
        }), err => {
            console.log(err)
        }

        // 2.2 响应拦截
        instance.interceptors.response.use(res => {
            // console.log(res)
            // 返回结果
            return res.data
        }, err => {
            console.log(err)
        })
    
        // 3. 发送真正的网络请求
        // instance(config)
        // .then(res => {
        //     // 通过回调函数，将数据传出去
        //     resolve(res)
        // })
        // .catch(err => {
        //     reject(err)
        // })
    
        // instance(config) 本身就是个promise对象，不需要 return new Promise()
        return instance(config);
    
    //   });
    }





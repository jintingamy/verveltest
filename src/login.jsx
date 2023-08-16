import React, { useState } from 'react'
import axios from 'axios'
export default function Login() {
    const [data,setdata] =useState({
        fullname:'',
        password:''
    })
    const sub = (e)=>{
        // 阻止默认行为
        e.preventDefault()
        console.log(data);
        axios.post('http://127.0.0.1:8080/api/login',data).then(response => {
            // 请求成功，处理响应数据
            console.log('登录',response.data);

            // let data = response.data.data
          })
            .catch(error => {
              // 请求失败，处理错误
              console.log(error);
            });
    }
    const handlechange = (e)=>{
        let name1= e.target.name
        let value = e.target.value
        setdata({...data,[name1]:value})

    }

  return (
    <div>
         <h1>登录</h1>
      <form onSubmit={sub} action='#' method='post'>
        <input type="text" name='fullname' onChange={handlechange}/>
        <input type="password" name="password" onChange={handlechange}/>
        <button type="submit">提交</button>
      </form>
    </div>
  )
}

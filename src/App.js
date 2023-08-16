import { useEffect, useState } from "react";
import axios from "axios";
import Center from "./center";
import Register from "./register";
import Login from "./login";
function App() {
  const [eat, seteat] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8080/api').then(response => {
      // 请求成功，处理响应数据
      console.log(response.data);
      seteat(response.data.data)
      // let data = response.data.data
    })
      .catch(error => {
        // 请求失败，处理错误
        console.log(error);
      });

  }, [])
  let arr = [123, 1234]
  // let mes = {eat.map((item)=>{
  //       <li>{item.name}</li>
  //     })}
  console.log();
  console.log(eat.length > 0 ? eat[0].name : 111);
  return (
    <div className="App">
      {/* {
        eat.map((item) => <Center key={item._id} id={item} />)
      } */}

<Register/>
<Login/>
    </div>
  );
}

export default App;

import axios from 'axios';
import {useState} from 'react';

function GetData(query="",max=5){
  const url = "http://127.0.0.1:8000/api/data";
  const [result,setResult] = useState(null);
  
  var reqURL = `${url}?q=${query}&max=${max}`
  axios.get(reqURL)
  .then((response)=>{
     setResult({"status":true,"result":response.data});
  })
  .catch(()=>setResult({"status":true}));
  return result;
}

export const GetRes = (setState,query="",max=40)=>{
  const url = "http://127.0.0.1:8000/api/data";
  var reqURL = `${url}?q=${query}&max=${max}`
  axios.get(reqURL)
  .then((response)=>{
      var status = true && response.data["status"]
      setState({"status":status,"result":response.data});
  })
  .catch(()=>setState({"status":false}));
}

export default GetData;
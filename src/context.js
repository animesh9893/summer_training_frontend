import axios from 'axios';

import { createContext,useEffect,useState } from 'react';
export const AppContext = createContext();

export const DemoFunc = ()=>{
	return "demo func";
}

export const UseStates = () =>{
	const [query,setQuery] = useState("");
	const [result,setResult] = useState(undefined); 	
	const [location,setLocation] = useState(null); 	

	return [query,setQuery,result,setResult,location,setLocation];
}




export const GetData = (req,query) =>{
	const [set,setResult] = useState([]);
	useEffect(()=>{
		axios.post('/data',req,{headers:{
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': '*'
		}}).then(res=>setResult(res.data));
	},[query])
	return set;	
}
import React,{useState} from 'react';
import './player.css';
import axios from 'axios';

import {useContext,useEffect} from 'react';
import {AppContext} from '../../context';
import {ErrorComponent} from '../Error';

function Player(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	const q=String(urlParams.get('watch'));
	const query=String(urlParams.get('q')) || "";
	const [result,setResult]=useState(null);
	useEffect(()=>{
	axios.get(`/data?maxResult=50&q="${query}"`).then(res=>setResult(res.data));
	},[q])
	return(
		<div className="player-main">
			<div className="player-video">
				<iframe className={`video-theater`}
				src={`https://www.youtube.com/embed/${q}`} 
				frameborder="0" allow="accelerometer; 
				autoplay; clipboard-write; encrypted-media; 
				gyroscope; picture-in-picture" allowfullscreen>
				</iframe>
			</div>
			<div>
			{
				result && result["items"].map(data=><BlockVideo data={data}/>)
			}
			</div>
		</div>
	)
}


const BlockVideo = ({data})=>{
  console.log(data)
  const snippet = data["snippet"]
  const id = data['id']['videoId']
  return (
    <div className="block-result" onClick={()=>window.location=`/video?watch=${id}`}>
      <div className="image"><img className="videoImg" src={snippet["thumbnails"]["medium"]["url"]} alt="reload" /></div>
      <div className="block-text">
        <div className="title">{snippet["title"]}</div>
        <div className="channelTitle">{snippet["channelTitle"]}</div>
        <div className="description">{snippet["description"]}</div>
        <div className="publishedAt">{snippet["publishedAt"]}</div>
      </div>
    </div>
  )
}

export default Player;
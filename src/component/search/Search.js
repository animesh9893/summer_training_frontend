import React from 'react';

import './search.css'

import {useContext,useEffect} from 'react';
import {AppContext} from '../../context';
import {ErrorComponent} from '../Error';

function Search() {
  const {GetData,setResult,result,query,location} = useContext(AppContext);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const q=urlParams.get('q')
  const max=50;
  setResult(GetData({"q":q,"maxResult":max,"location":location},query))  
  console.log(result)
  if(result===undefined){
    console.log("undefined error")
    return (
      <div style={{color:"white"}}>
        Loading
      </div>
    )
  }
  else if(!result["status"]){
    console.log("status error")
    return (
      <div className="status">
        <ErrorComponent />
      </div>
    )
  }else{
    return (
      <div className="results-main">
        {
          result["items"].map(data=>
          data["id"]["kind"]!="youtube#channel" ? 
          <BlockVideo data={data} q={q}/>:<BlockChannel data={data} />
          )
        }
      </div>
    );
  }
  
}

export default Search;

const BlockChannel = ({data})=>{
  console.log(data)
  const snippet = data["snippet"]
  const id = data['id']['channelId']
  return (
    <div className="block-result" onClick={()=>window.location=`/channel?id=${id}`}>
      <div className="image"><img className="channelImg" src={snippet["thumbnails"]["medium"]["url"]} alt="reload" /></div>
      <div className="block-text">
        <div className="title">{snippet["title"]}</div>
        <div className="channelTitle">{snippet["channelTitle"]}</div>
        <div className="description">{snippet["description"]}</div>
      </div>
    </div>
  )
}

const BlockVideo = ({data,q})=>{
  // console.log(data)

  const snippet = data["snippet"]
  const id = data['id']['videoId']
  return (
    <div className="block-result" onClick={()=>window.location=`/video?watch=${id}&q=${q}`}>
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

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './component/navbar/NavBar.js';
import Home from './component/home/Home.js';
import Search from './component/search/Search.js';
import Player from './component/video/Player.js';
import Error from './component/Error.js';

import {useState ,useEffect} from 'react';
import {AppContext,GetData,UseStates} from './context.js';


function App() {
  const [query,setQuery,result,setResult,location,setLocation]=UseStates()
  if(location==null && navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position)=>{
      setLocation(`${position.coords.latitude}%2C%20${position.coords.longitude}`);
    })
  }
  console.log(location)

  return (
    <div className="main" >
    <AppContext.Provider value={{query,setQuery,GetData,result,setResult,location}}>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/search" component={Search}/>
        <Route exact path="/error" component={Error}/>
        <Route path="/video" component={Player} />
      </Switch>
    </ AppContext.Provider >
    </div>
  );
}

export default App;

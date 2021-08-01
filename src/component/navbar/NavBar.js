import React from 'react';
import './navbar.css';

import {useContext} from 'react';
import {AppContext} from '../../context';

function NavBar() {
  // GetData({})
  return (
    <div className="navbar-main">
      <Home />
      <SearchBar/>
    	<Profile />
    </div>
  );
}

export default NavBar;

const Profile = ()=>{
  return(
    <div className="profile-main">
      profile
    </div>
  )
}


const Home = ()=>{
  return (
    <div className="home-button" onClick={()=>window.location='/'}>
      <img src="./logo.png" className="logo-main" alt="Icon"/>
      <div className="home-button-text">Youtube</div>
    </div>
  )
}

const SearchBar = ()=>{
  const {query,setQuery} = useContext(AppContext);
  const set = (e)=>{
    setQuery(e.target.value)
  }

  return(
    <form name="search-form" id="search-form" onSubmit={set} action="/search" method="GET">
      <div className="searchbar">
        <div className="searchbar-feild">
          <input type="text" name="q" defaultValue={query} className="searchbar-input" />
        </div>
        <input className="searchbar-button" type="submit" value="Search"/>
      </div>
    </form>
  )
}

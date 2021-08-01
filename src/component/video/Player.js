import React,{useState} from 'react';
import './player.css';

function Player(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const q=String(urlParams.get('watch'));
	const [videoStyle,setVideoStyle]=useState({
			width:"870px",
			height:"490px",
			"padding-left":"48px"
		});

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
		</div>
	)
}


export default Player;
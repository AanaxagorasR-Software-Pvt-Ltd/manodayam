
import React from 'react';
import { Link } from 'react-router-dom'
export default function Musicplayer() {
    return (
        <>

           <div>
           <div class="main-content side-content pt-0">

<div class="container-fluid">
    <div class="inner-body">

        
        <div class="page-header">
            <div class="page-header-1">
                <h1 class="main-content-title tx-30">Manodayam</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Music</a></li>
                    <li class="breadcrumb-item">
                        <select name="" id="">
                            <option value="">All</option>
                            <option value="">For me</option>
                            <option value="">Featured</option>
                            <option value="">Sleep</option>
                            <option value="">Playlist</option>
                            <option value="">Soundscapes</option>
                            <option value="">Nature Melodies</option>
                            <option value="">Work</option>
                            <option value="">Relax</option>
                            <option value="">Lullabies</option>
                            <option value="">Focus</option>
                        </select>
                    </li>
                </ol>
            </div>
        </div>
        
        <section class="video-cards">
        <div class="container">
        <div class="player">
		<div class="player-track">
			<div class="artist-name"></div>
			<div class="music-name"></div>
			<div class="progress-bar">
				<div class="fillBar"></div>
			</div>
			<div class="time"></div>
		</div>
		<div class="circle">
			<div class="circ"></div>
			<div id="thumbnail" class="thumbnail"></div>
		</div>
		<div class="player-control">
			<i id="prev" class="prev-btn fas fa-backward"></i>
			<i id="play" class="play-btn fas fa-play"></i>
			<i id="next" class="next-btn fas fa-forward"></i>
		</div>
	</div>
        </div>
        </section>

        
    </div>
</div>
</div>
           </div>

        </>
    )
}


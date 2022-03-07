import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactAudioPlayer from "react-audio-player";
import song from "./music/first.mp3";
import img from "./music/img.jpeg";
import { API_ADMIN_URL, MUSICALL} from "../utill/api.endpoints";

export default function Musicplayer() {
  const main = {
    height: "360px",
  };
  const image = {
  height: "530px"
  };
  const [resData, setResData] = useState([]);
  const audioAll = () => {
    console.log(`${API_ADMIN_URL}${MUSICALL}`);
    const bodylisting = {
      collectiontype: "audio",
      
    };
    const params = new URLSearchParams(window.location.search);
    axios
    
      .get(`${API_ADMIN_URL}${MUSICALL}?id=${params.get(`audioid`)}`, bodylisting)
     
      .then((res) => {
        setResData(res.data);
        console.log("====body-listing====", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    audioAll();
  }, []);
  
  return (
    <>
      <div>
        <div class="main-content side-content pt-0">
          <div style={main}>
            <div class="inner-body">
              {/* <div class="page-header">
                <div class="page-header-1">
                  <h1 class="main-content-title tx-30">Manodayam</h1>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="#">Music</a>
                    </li>
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
              </div> */}
              <img
                style={image}
                src="https://media.istockphoto.com/photos/stones-in-the-ocean-at-sunrise-picture-id1264258168?b=1&k=20&m=1264258168&s=170667a&w=0&h=R0PyemIlBRgiEO6I3bZi7ixQ-JM66ejYOaKh_5wTF9g="
                alt="img"
              />
              <div class="player">
                {/* <div class="player-track">
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
                    </div> */}
                <ReactAudioPlayer
                  src={resData && resData.length > 0 && resData[0].audio_link}
                  autoPlay={false}
                  controls
                  style={{ color: "red" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

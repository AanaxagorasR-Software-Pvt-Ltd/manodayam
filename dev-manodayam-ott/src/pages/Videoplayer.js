import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_ADMIN_URL, SHAKTHI_BODY_API } from "./api-link/api.endpoints";

export default function Videoplayer() {
  const [resData, setResData] = useState([]);
  const SleepApi = () => {
    console.log(`${API_ADMIN_URL}${SHAKTHI_BODY_API}`);
    const bodylisting = {
      collectiontype: "videos",
    };
    axios
      .post(`${API_ADMIN_URL}${SHAKTHI_BODY_API}`, bodylisting)
      .then((res) => {
        setResData(res.data.data);
        console.log("====body-listing====", res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    SleepApi();
  }, []);
  
  return (
    <>
      <div>
        <div class="main-content side-content pt-0">
          <div class="container-fluid">
            <div class="inner-body">
              <div class="col-lg-12 mt-3">
                <div class="music-player-custom">
                  <video
                    id="my-video"
                    class="video-js"
                    controls
                    preload="auto"
                    poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
                    data-setup=""
                    loop
                  >
                    <source
                      src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

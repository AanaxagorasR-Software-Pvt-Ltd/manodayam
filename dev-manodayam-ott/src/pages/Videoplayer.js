import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_ADMIN_URL, SHAKTHI_BODY_API } from "../utill/api.endpoints";

export default function Videoplayer() {
  const main = {
    height: "340px",
    width: "1200px"
  };
  const image = {
    height: "530px",
  };
  const [resData, setResData] = useState([]);
  const SleepApi = () => {
    console.log(`${API_ADMIN_URL}${SHAKTHI_BODY_API}`);
    const bodylisting = {
      collectiontype: "videos",
    };
    const params = new URLSearchParams(window.location.search);
    axios
      .post(
        `${API_ADMIN_URL}${SHAKTHI_BODY_API}?id=${params.get(`videoid`)}`,
        bodylisting
      )

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
          <div style={main}>
            {resData.map((element) => (
              <div class="">
                <div class="col-lg-11">
                  <div class="music-player-custom">
                    <video
                      id="my-video"
                      class="video-js"
                      controls
                      preload="auto"
                      poster={element.thumbnail_image}
                      data-setup=""
                      loop
                    >
                      <source src={element.video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

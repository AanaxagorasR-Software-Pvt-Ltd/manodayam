import React from "react";
import { Link } from "react-router-dom";
export default function Videoplayer() {
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

import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_ADMIN_URL, SHAKTHI_MUSIC_API } from "./api-link/api.endpoints";

export default function Music() {
  const [resData, setResData] = useState([]);
  const MusicApi = () => {
    console.log(`${API_ADMIN_URL}${SHAKTHI_MUSIC_API}`);
    const musiclisting = {
      collectiontype: "shakti-music",
    };
    axios
      .post(`${API_ADMIN_URL}${SHAKTHI_MUSIC_API}`, musiclisting)
      .then((res) => {
        setResData(res.data.data);
        console.log("====sleep-listing====", res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    MusicApi();
  }, []);
  return (
    <>
      <div>
        <div class="main-content side-content pt-0">
          <div class="container-fluid">
            <div class="inner-body">
              <div class="page-header">
                <div class="page-header-1">
                  <h1 class="main-content-title tx-30">Music</h1>
                  <ol class="breadcrumb">
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
                  <div class="row">
                    {resData.map((element) => (
                      <div class="col-lg-3 col-sm-6">
                        <div class="display-card">
                          <i class="fas fa-lock"></i>
                          <Link to="/musicplayer">
                            <img
                              style={{ borderRadius: "25px" }}
                              src={element.img_url}
                              alt=""
                            />
                            <h4
                              style={{
                                borderBottomLeftRadius: "25px",
                                borderBottomRightRadius: "25px",
                              }}
                            >
                              {element.title} <br />
                              <span style={{ fontSize: "14px" }}>
                                {element.sub_title}
                              </span>
                            </h4>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
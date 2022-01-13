import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_ADMIN_URL, SHAKTHI_SCENE_API } from "./api-link/api.endpoints";

export default function Scene() {
  const [resData, setResData] = useState([]);
  const SleepApi = () => {
    console.log(`${API_ADMIN_URL}${SHAKTHI_SCENE_API}`);
    const scenelisting = {
      collectiontype: "audio",
    };
    axios
      .post(`${API_ADMIN_URL}${SHAKTHI_SCENE_API}`, scenelisting)
      .then((res) => {
        setResData(res.data.data);
        console.log("====scene-listing====", res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    SleepApi();
  }, []);
  const filterType = resData.filter((element) =>
  element.type.includes((element = "Scene"))
);
  return (
    <>
      <div>
        <div class="main-content side-content pt-0">
          <div class="container-fluid">
            <div class="inner-body">
              <div class="page-header">
                <div class="page-header-1">
                  <h1 class="main-content-title tx-30">Scenes</h1>
                  {/* <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <select name="" id="">
                        <option value="">All</option>
                        <option value="">For me</option>
                        <option value="">Featured</option>
                        <option value="">Sleep</option>
                        <option value="">Playlist</option>
                   
                      </select>
                    </li>
                  </ol> */}
                </div>
              </div>

              <section class="video-cards">
                <div class="container">
                  <div class="row">
                    {filterType.map((element) => (
                      <div class="col-lg-3 col-sm-5">
                        <div class="display-card">
                          {/* <i class="fas fa-lock"></i> */}
                          <Link to="/musicplayer">
                            <img
                              style={{ borderRadius: "25px" }}
                              src={element.image}
                              alt=""
                            />
                            <h4
                              style={{
                                borderBottomLeftRadius: "25px",
                                borderBottomRightRadius: "25px",
                              }}
                            >
                              {element.title}
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

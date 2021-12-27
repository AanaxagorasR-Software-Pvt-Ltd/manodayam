import React from "react";
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_ADMIN_URL, SHAKTHI_SCENE_API } from "./api-link/api.endpoints";

export default function Home() {
  const [resData, setResData] = useState([]);
  const SleepApi = () => {
    console.log(`${API_ADMIN_URL}${SHAKTHI_SCENE_API}`);
    const scenelisting = {
      collectiontype: "shakthi_home",
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
  return (
    <>
      <div>
        <div class="main-content side-content pt-0">
          <div class="container-fluid">
            <div class="inner-body">
              <div class="page-header">
                <div class="page-header-1">
                  <h1 class="main-content-title tx-30">Featured</h1>
                  {/* <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="#">About</a>
                    </li>
                  </ol> */}
                </div>
              </div>
              <section class="video-cards">
                <div class="container">
                  <div class="row">
                    {resData.map((element) => (
                      <div class="col-lg-9 col-sm-6 ">
                        <div class="featured-card rounded-right rounded-left">
                          <div class="row">
                            <div class="col-lg-2">
                              <img
                                class="rounded-left"
                                src={element.img_url}
                                alt=""
                              />
                            </div>
                            <div class="col-lg-8">
                              <div class="featured-text">
                                <h4>{element.title}</h4>
                                <p>{element.date}</p>
                              </div>
                            </div>
                            <div class="col-lg-2">
                              <div class="featured-lock">
                                <i class="fas fa-lock mt-3 ml-4"></i>
                              </div>
                            </div>
                          </div>
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

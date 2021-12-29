import React from "react";
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_ADMIN_URL, SHAKTHI_SCENE_API } from "./api-link/api.endpoints";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import globalData from "../rdx";
export default function Vdolist() {
  const [resData, setResData] = useState([]);
  const SleepApi = () => {
    console.log(`${API_ADMIN_URL}${SHAKTHI_SCENE_API}`);
    const scenelisting = {
      collectiontype: "shakthi_livelist",
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
                  <h1 class="main-content-title tx-30">Live Videos</h1>
                </div>
              </div>
              <section class="video-cards">
                <div style={{ display: "block", width: 1000, height: 10 }}>
                  <Carousel>
                    {resData.map((element) => (
                      <Carousel.Item interval={2000}>
                      <a href={globalData.liveLink}>
                      {/* <Link to="/videoplayer"> */}
                        <img
                          className="d-block w-100"
                          src={element.img_url}
                          alt="Image One"
                        />
                      {/* </Link> */}
                        </a>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_ADMIN_URL, SHAKTHI_SLEEP_API } from "./api-link/api.endpoints";

export default function Sleep() {
  const [resData, setResData] = useState([]);
  const SleepApi = () => {
    console.log(`${API_ADMIN_URL}${SHAKTHI_SLEEP_API}`);
    const sleeplisting = {
      collectiontype: "shakthi_sleep",
    };
    axios
      .post(`${API_ADMIN_URL}${SHAKTHI_SLEEP_API}`, sleeplisting)
      .then((res) => {
        setResData(res.data.data);
        console.log("====sleep-listing====", res.data.data);
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
                  <h1 class="main-content-title tx-30">Sleep</h1>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <select name="" id="">
                        <option value="">All</option>
                        <option value="">For me</option>
                        <option value="">Kids</option>
                        <option value="">Trains</option>
                        <option value="">Fiction</option>
                        <option value="">Non-Fiction</option>
                        <option value="">Music</option>
                        <option value="">Nature</option>
                        <option value="">Soundscapes</option>
                        <option value="">Naps</option>
                        <option value="">ASMR</option>
                        <option value="">By Narratore</option>
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
                              alt="Some issue"
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

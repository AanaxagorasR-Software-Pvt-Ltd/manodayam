import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_ADMIN_URL, SHAKTHI_MEDITATE_API } from "./api-link/api.endpoints";
export default function Meditate() {
  const [resData, setResData] = useState([]);
  const MeditateApi = () => {
    console.log(`${API_ADMIN_URL}${SHAKTHI_MEDITATE_API}`);
    const meditatelisting = {
      collectiontype: "shakthi_meditate",
    };
    axios
      .post(`${API_ADMIN_URL}${SHAKTHI_MEDITATE_API}`, meditatelisting)
      .then((res) => {
        setResData(res.data.data);
        console.log("====meditate-listing====", res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    MeditateApi();
  }, []);
  return (
    <>
      <div>
        <div class="main-content side-content pt-0">
          <div class="container-fluid">
            <div class="inner-body">
              <div class="page-header">
                <div class="page-header-1">
                  <h1 class="main-content-title tx-30">Meditate</h1>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <select name="" id="">
                        <option value="">All</option>
                        <option value="">For me</option>
                        <option value="">Sleep</option>
                        <option value="">Anxiety</option>
                        <option value="">Begginers</option>
                        <option value="">Stress</option>
                        <option value="">Work</option>
                        <option value="">Selfcare</option>
                        <option value="">With Soundscapes</option>
                        <option value="">Inner Peace</option>
                        <option value="">Focus</option>
                        <option value="">Emotions</option>
                        <option value="">Less Guidance</option>
                        <option value="">Relationships</option>
                        <option value="">Personal Growth </option>
                        <option value="">Kids</option>
                        <option value="">By Guest Instructors</option>
                      </select>
                    </li>
                  </ol>
                </div>
              </div>

              <section class="video-cards">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-9 mr-3 ">
                      <div class="featured-card rounded-right rounded-left">
                        <div class="row ">
                          <div class="col-lg-2">
                            <img
                              class="rounded-left"
                              src="assets/img/fe.jpeg"
                              alt=""
                            />
                          </div>
                          <div class="col-lg-8">
                            <div class="featured-text">
                              <h4>Daily Calm with Tamara Levitt</h4>
                              <p>Dec 11 Healing</p>
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

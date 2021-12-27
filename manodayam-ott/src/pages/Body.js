import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_ADMIN_URL, SHAKTHI_BODY_API } from "./api-link/api.endpoints";

export default function Body() {
  const [resData, setResData] = useState([]);
  const SleepApi = () => {
    console.log(`${API_ADMIN_URL}${SHAKTHI_BODY_API}`);
    const bodylisting = {
      collectiontype: "shakthi_body",
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
              <div class="page-header">
                <div class="page-header-1">
                  <h1 class="main-content-title tx-30">Calm Body</h1>
                </div>
              </div>

              <section class="video-cards">
                <div class="container">
                  <div class="row">
                    {resData.map((element) => (
                      <div class="col-lg-3 col-sm-5">
                        <div class="display-card">
                          <i class="fas fa-lock"></i>
                          {/* <Link to="/videoplayer"> */}
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
                          {/* </Link> */}
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

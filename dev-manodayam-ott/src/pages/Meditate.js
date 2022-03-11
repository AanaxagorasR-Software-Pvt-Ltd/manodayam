import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_ADMIN_URL, SHAKTHI_DATA_API } from "../utill/api.endpoints";
export default function Meditate() {
  const [resData, setResData] = useState([]);
  const MeditateApi = () => {
    console.log(`${API_ADMIN_URL}${SHAKTHI_DATA_API}`);
    const meditatelisting = {
      collectiontype: "audio",
    };
    axios
      .post(`${API_ADMIN_URL}${SHAKTHI_DATA_API}`, meditatelisting)
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
  const filterType = resData.filter((element) =>
    element?.type?.includes((element = "Meditate"))
  );
  return (
    <>
      <div>
        <div class="main-content side-content pt-0">
          <div class="container-fluid">
            <div class="inner-body">
              <div class="page-header">
                <div class="page-header-1">
                  <h1 class="main-content-title tx-30">Meditate</h1>
                
                </div>
              </div>

              <section class="video-cards">
                <div class="container">
                  <div class="row">
                 
                    {filterType.map((element) => (
                      <div class="col-lg-3 col-sm-6">
                        <div class="display-card">
                          <i class="fas fa-lock"></i>
                          <Link to={{
                              pathname: "/musicplayer?audioid=" + element._id
                            }}>
                            <img className="meditate"
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

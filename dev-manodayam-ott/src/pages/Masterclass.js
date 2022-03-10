import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_ADMIN_URL, SHAKTHI_MASTERCLASS_API } from "../utill/api.endpoints";

export default function Masterclass() {
  const [resData, setResData] = useState([]);
  const MusicApi = () => {
    console.log(`${API_ADMIN_URL}${SHAKTHI_MASTERCLASS_API}`);
    const musiclisting = {
      collectiontype: "audio",
    };
    axios
      .post(`${API_ADMIN_URL}${SHAKTHI_MASTERCLASS_API}`, musiclisting)
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
  const filterType = resData.filter((element) =>
    element?.date?.includes((element = "Calm Masterclass"))
  );
  return (
    <>
      <div>
        <div class="main-content side-content pt-0">
          <div class="container-fluid">
            <div class="inner-body">
              <div class="page-header">
                <div class="page-header-1">
                  <h1 class="main-content-title tx-30">Calm Masterclass</h1>
                </div>
              </div>

              <section class="video-cards">
                <div class="container">
                  <div class="row">
                    {filterType.map((element) => (
                      <div class="col-lg-5 col-sm-14 ">
                        <div class="display-card ">
                          {/* <i class="fas fa-lock"></i> */}
                          <Link to={{
                              pathname: "/musicplayer?audioid=" + element._id
                            }}>
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
                              {element.title} <br />
                              <img
                                style={{
                                  height: "45px",
                                  width: "45px",
                                  borderRadius: "50px",
                                  marginRight: "25px",
                                }}
                                src={element.image}
                                alt=""
                              />
                              <span
                                style={{
                                  fontSize: "14px",
                                }}
                              >
                                {element.author}
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

import React from "react";
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_ADMIN_URL, HOME_API } from "./api-link/api.endpoints";

export default function Home() {
  const [resData, setResData] = useState([]);
  const HomeApi = () => {
    console.log(`${API_ADMIN_URL}${HOME_API}`);
    const homelisting = {
      collectiontype: "audio",
    };
    axios
      .post(`${API_ADMIN_URL}${HOME_API}`, homelisting)
      .then((res) => {
        setResData(res.data.data);
        console.log("====home-listing====", res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    HomeApi();
  }, []);

  const filterType = resData.filter((element) =>
    element?.type?.includes((element = "Home"))
  );

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
                    {filterType.map((element) => (
                      <div class="col-lg-9 col-sm-6 ">
                        <div class="featured-card rounded-right rounded-left">
                          <div class="row">
                            <div class="col-lg-2">
                              <img
                                class="rounded-left"
                                src={element.image}
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

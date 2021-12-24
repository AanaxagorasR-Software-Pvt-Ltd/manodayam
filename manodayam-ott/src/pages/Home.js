import React from "react";
// import { Link } from "react-router-dom";
export default function Home() {
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
                    <div class="col-lg-9 col-sm-6 ">
                      <div class="featured-card rounded-right rounded-left">
                        <div class="row">
                          <div class="col-lg-2">
                            <img class="rounded-left" src="assets/img/fe.jpeg" alt="" />
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
                    {/* <div class="col-lg-9 col-sm-6">
                      <div class="featured-card rounded-right rounded-left">
                        <div class="row">
                          <div class="col-lg-2">
                            <img class="rounded-left" src="assets/img/fe.jpeg" alt="" />
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
                    </div> */}
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

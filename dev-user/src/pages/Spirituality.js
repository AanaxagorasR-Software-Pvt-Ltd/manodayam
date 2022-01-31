import React from "react";
import { Link } from "react-router-dom";
import globalData from "../utill/rdx";
export default function Spirituality() {
  return (
    <>
      <div className="contact-banner mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-breadcrumb">
                <h3>Spirituality</h3>
                <ol className="breadcrumb">
                  <li>
                    <Link to="/home">Home / &nbsp;</Link>
                  </li>
                  <li>spirituality</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="service-heading">
                <h5>Sprituality</h5>
                {/* <h2>What Are We All So Afraid Of?</h2> */}
                <h3>What do you worry about?</h3>
              </div>
            </div>
            <div className="col-lg-6 offset-3">
              <div className="video-question">
                <ul>
                  <li>
                    <button className="btn spr-btn">Social Gathering?</button>
                  </li>
                  <li>
                    <button className="btn spr-btn">
                      Having a problem related to study/job?
                    </button>
                  </li>
                  <li>
                    <button className="btn spr-btn">Drugs</button>
                  </li>
                  <li>
                    <button className="btn spr-btn">Fear of something</button>
                  </li>
                </ul>
                <button className="ctn-btn btn btn-web cnt-btn hvr-float-shadow">
                  {/* <a href={globalData.ottLink}>Continue &nbsp;</a> */}
                  <a href="http://ec2-3-139-87-143.us-east-2.compute.amazonaws.com/shakthi-ott/">Continue &nbsp;</a>

                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

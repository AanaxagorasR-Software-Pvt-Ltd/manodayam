import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { API_ADMIN_URL, MENTALHEALTH_DATA_API } from "../utill/api.endpoints";
export default function MentalHealth() {
  const [mentalHealth, setmentalHealth] = useState([]);
  const [slug, setSlug] = useState(useParams().slug);
  // const {slug} = useParams();
  useEffect(() => {
    // alert(slug);
    setSlug(slug);
    console.log("slug", slug);
  }, []);

  const mentalHealthData = () => {
    console.log(`${API_ADMIN_URL}${MENTALHEALTH_DATA_API}`);
    axios
      .post(`${API_ADMIN_URL}${MENTALHEALTH_DATA_API}/${slug}`)
      .then((res) => {
        setmentalHealth(res.data.data);
        console.log("====mentalHealthData====", res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect((props) => {
    mentalHealthData();
  }, []);
  return (
    <>
      {mentalHealth.map((element) => (
        <div>
          <div className="contact-banner mb-50">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="contact-breadcrumb">
                    <h3>{element.heading}</h3>
                    <ol className="breadcrumb">
                      <li>
                        <Link to="/">Home / &nbsp;</Link>
                      </li>
                      <li>{element.heading}</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="health-heal-content mb-50">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="research-content">
                    <h3> {element.heading}</h3>
                    <div style={{ textAlign: "center" }}>
                      <video
                        id="mental-health-video"
                        // class="video-js"
                        controls
                        preload="auto"
                        poster={element.thumbnail_image}
                        data-setup=""
                        loop="auto"
                      >
                        <source
                          src={element.video}
                          //  src={element.video}
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <div className="research-content-detail">
                      <h4>{element.ques}</h4>
                      <p>{element.para_1}</p>
                      <p>{element.para_2}</p>
                    </div>
                    {/* <div className="research-content-detail">
                  </div> */}
                    <div className="research-content-detail">
                      <h4>{element.symptoms}</h4>
                      <ul>
                        <li>
                          <i className="fa fa-caret-right"></i>
                          {element.sym_1}
                        </li>
                        <li>
                          <i className="fa fa-caret-right mt-2"></i>
                          {element.sym_2}
                        </li>
                        <li>
                          <i className="fa fa-caret-right mt-2"></i>
                          {element.sym_3}
                        </li>
                        <li>
                          <i className="fa fa-caret-right mt-2"></i>
                          {element.sym_4}
                        </li>
                        <li>
                          <i className="fa fa-caret-right mt-2"></i>
                          {element.sym_5}
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-12">
                      <button className="btn-web hvr-float-shadow">
                        <a href="#therapy">Therapy</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <a href="#howwedo">
        <div
          data-placement="top"
          tabindex="0"
          data-toggle="tooltip"
          title="Previous page"
          className="bd-dark"
        >
          <li className="scrollToTop fa fa-chevron-left backbtn"></li>
        </div>
      </a>
    </>
  );
}

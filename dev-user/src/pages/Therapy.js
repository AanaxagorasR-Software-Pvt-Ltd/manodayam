import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  API_ADMIN_URL,
  MASTERCATEGORY_API,
  SUBSCRIPTION_PLANE,
  SUBSCRIPTION_PLANE_LISTA,
} from "../utill/api.endpoints";
import { Modal as Bmodal, Button, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

export default function Therapy() {
  let hist = useNavigate();
  const [mastercategorys, setmastercategorys] = useState([]);

  const subchange = (e) => {
    let user = JSON.parse(localStorage.getItem("user"));
    hist(`/profile?usertype=${e}`);
    // axios
    //   .post(
    //     // ?humanId=${}`
    //     `${API_ADMIN_URL}${SUBSCRIPTION_PLANE}`,
    //   )
    //   .then((res) => {
    //     console.log("====mentalHealthData====", res.data);
    //     if (user) {
    //       hist(`/profile?catid=${e}`)
    //     } else {
    //       setAlerdata({ title: "Sorry", body: "Login and registration First" });
    //       setshow(true);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // console.log();
  };
  const mastercategory = () => {
    console.log(`${API_ADMIN_URL}${MASTERCATEGORY_API}`);
    axios
      .get(`${API_ADMIN_URL}${MASTERCATEGORY_API}`)
      .then((res) => {
        setmastercategorys(res.data);
        console.log("====mentalHealthData====", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect((props) => {
    mastercategory();
  }, []);
  return (
    <>
    <Login/>
      <div className="contact-banner mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-breadcrumb">
                <h3>Therapies</h3>
                <ol className="breadcrumb">
                  <li>
                    <Link to="/">Home / &nbsp;</Link>
                  </li>
                  <li>Therapies</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="research-section mb-50"> */}
      <div className="service-section mb-50">
        <div className="container">
          <div className="col-lg-12">
            <div className="service-heading">
              <h5>Menu (Therapy)</h5>
              <div className="exam"></div>
              <p>We present you therapies for your specific problems.</p>
              <p>
                Please click below (… these are various possible therapies …
                which will be guided by platform & Health experts)
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="col-lg-6">
              <div className="doctor-form">
                <h3>Select Your Therapy Type / Subscription Plane</h3>
                <form action="">
                  <div className="col-lg-12"></div>
                  <div className="col-lg-12">
                    <Dropdown className="form-group">
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        className="hvr-float-shadow"
                      >
                        Choose Therapy
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="scrollable-menu">
                        {mastercategorys.map((element) => (
                          <Dropdown.Item
                            as="p"
                            onClick={(e) => subchange(element.mastercategory)}
                          >
                            {element.mastercategory}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
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

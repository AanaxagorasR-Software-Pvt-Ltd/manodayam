import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_ADMIN_URL, PROFIL_API } from "../utill/api.endpoints";
export default function Profile() {
  const [profilData, setprofilData] = useState([]);
  const ProfilData = () => {
    console.log(`${API_ADMIN_URL}${PROFIL_API}`);
    const profileData = {
      // collectiontypedata: "banner",
      token: "token",
    };
    axios
      .post(`${API_ADMIN_URL}${PROFIL_API}`, profileData)
      .then((res) => {
        setprofilData(res.data.data);
        console.log("====profileData====", res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect((props) => {
    ProfilData();
  }, []);
  return (
    <>
      <div className="contact-banner mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-breadcrumb">
                <h3>Profile</h3>
                <ol className="breadcrumb">
                  <li>
                    <Link to="/home">Home / &nbsp;</Link>
                  </li>
                  <li>Profile</li>
                  {profilData?.[0]?.bannerText}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-section mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="profile-head">
                <div className="row">
                  <div className="col-lg-3 col-sm-3">
                    <div className="profile-img">
                      <img src="assets/image/profile.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-7 col-sm-9">
                    <div className="profile-content">
                      <h3>Simran Raturi</h3>
                      {/* {localStorage.getItem('Token')} */}

                      <p>
                        <i className="fa fa-phone"></i> +91 123245 567
                      </p>
                      <p>
                        <i className="fa fa-envelope"></i> abc@gmail.com
                      </p>
                      <p>
                        <i className="fa fa-map-marker"></i> G-130, Sector 63,
                        Noida, Uttar Pradesh
                      </p>
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            data-toggle="tab"
                            href="#home"
                          >
                            Edit Profile
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#menu1"
                          >
                            My Orders
                          </a>
                        </li>
                        {/* <li className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#menu2"
                          >
                            Address Change
                          </a>
                        </li> */}
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#menu3"
                          >
                            Appointments
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="profile-setting">
                <div className="tab-content">
                  <div class="tab-pane active" id="home">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="profile-form checkout-form doctor-form">
                          <h3>Edit Your Profile Here</h3>
                          <form action="">
                            <div class="row">
                              <div class="col-lg-6">
                                <div class="form-group">
                                  <label for="">First Name</label>
                                  <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="First name"
                                    disabled
                                  />
                                </div>
                              </div>
                              <div class="col-lg-6">
                                <div class="form-group">
                                  <label for="">Last Name</label>
                                  <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Last name"
                                    disabled
                                  />
                                </div>
                              </div>
                              <div class="col-lg-6">
                                <div class="form-group">
                                  <label for="">Phone No.</label>
                                  <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Phone no."
                                    disabled
                                  />
                                </div>
                              </div>
                              <div class="col-lg-6">
                                <div class="form-group">
                                  <label for="">Email Address</label>
                                  <input
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Email address"
                                    disabled
                                  />
                                </div>
                              </div>
                              <div class="col-lg-6">
                                <div class="form-group">
                                  <label for="">Old Password</label>
                                  <input
                                    type="password"
                                    name=""
                                    id=""
                                    placeholder="Old password"
                                  />
                                </div>
                              </div>
                              <div class="col-lg-6">
                                <div class="form-group">
                                  <label for="">New Password</label>
                                  <input
                                    type="password"
                                    name=""
                                    id=""
                                    placeholder="New password"
                                  />
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <div class="form-group">
                                  <label for="">Confirm Password</label>
                                  <input
                                    type="password"
                                    name=""
                                    id=""
                                    placeholder="Confirm password"
                                  />
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <buttton class="btn hvr-float-shadow">
                                  Save
                                </buttton>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="menu1">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="cart-table table-responsive">
                          <table className="table table-bordered table-striped table-hover">
                            <thead>
                              <tr>
                                <th>Product</th>
                                <th>Product name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Shipping charges</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <img src="image/pr.png" alt="" />
                                </td>
                                <td>Fidget Cube</td>
                                <td>
                                  <i className="fa fa-inr"></i> 399
                                </td>
                                <td>2</td>
                                <td>
                                  <i className="fa fa-inr"></i> 500
                                </td>
                                <td>Success</td>
                              </tr>
                              <tr>
                                <td>
                                  <img src="image/pr.png" alt="" />
                                </td>
                                <td>Fidget Cube</td>
                                <td>
                                  <i className="fa fa-inr"></i> 399
                                </td>
                                <td>3</td>
                                <td>
                                  <i className="fa fa-inr"></i> 500
                                </td>
                                <td>Success</td>
                              </tr>
                              <tr>
                                <td>
                                  <img src="image/pr.png" alt="" />
                                </td>
                                <td>Fidget Cube</td>
                                <td>
                                  <i className="fa fa-inr"></i> 399
                                </td>
                                <td>3</td>
                                <td>
                                  <i className="fa fa-inr"></i> 500
                                </td>
                                <td>Success</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="tab-pane fade" id="menu2">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="profile-form checkout-form doctor-form">
                          <h3>Change Your Address</h3>
                          <form action="">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label for="">Street Line 1</label>
                                  <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Street Line 1"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label for="">Street Line 2</label>
                                  <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Street Line 2"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label for="">Country</label>
                                  <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Country"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label for="">State</label>
                                  <input
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="State"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label for="">Pin Code</label>
                                  <input
                                    type="password"
                                    name=""
                                    id=""
                                    placeholder="Pin code"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <button className="btn hvr-float-shadow">
                                  Save settings
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="tab-pane fade" id="menu3">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="cart-table table-responsive">
                          <table className="table table-bordered table-striped table-hover">
                            <thead>
                              <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Name</th>
                                <th>Condition</th>
                                <th>Call</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <img src="image/pr.png" alt="" />
                                  22/12/2021
                                </td>
                                <td>06:00</td>
                                <td>XYZ</td>
                                <td>Anxiety</td>
                                <td>
                                  {/* <i className="fa fa-video-camera"></i> */}
                                  {/* <Link to="http://localhost:4000/">hello</Link> */}

                                  <a
                                    href={"http://localhost:5000/" }
                                    target="_blank"
                                  >
                                    <img src="assets/image/vdo.png" alt="" />
                                  </a>
                                </td>
                                <td>
                                  <select className="mt-2">
                                    <option value="TowOClock">Success</option>
                                    <option value="FourOClock">
                                      UnSuccess
                                    </option>
                                    <option value="SixOClock">Pending</option>
                                  </select>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <img src="image/pr.png" alt="" />
                                  02/01/2022
                                </td>
                                <td>04:00</td>
                                <td>ABC</td>
                                <td>Dementia</td>
                                <td>
                                  <a
                                    href="http://localhost:5000/"
                                    target="_blank"
                                  >
                                    <img
                                      className=""
                                      src="assets/image/vdo.png"
                                      alt=""
                                    />
                                  </a>
                                  {/* <i className="fa fa-video-camera"></i> */}
                                </td>
                                <td>
                                  <select className="mt-2">
                                    <option value="TowOClock">Success</option>
                                    <option value="FourOClock">
                                      UnSuccess
                                    </option>
                                    <option value="SixOClock">Pending</option>
                                  </select>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <img src="image/pr.png" alt="" />
                                  29/12/2021
                                </td>
                                <td>02:00</td>
                                <td>XYZ</td>
                                <td>Bipolar</td>
                                <td>
                                  {/* <Link to="http://localhost:3000/"> */}
                                  <a
                                    href="http://localhost:5000/"
                                    target="_blank"
                                  >
                                    <img
                                      // onClick={Appointment}
                                      className=""
                                      src="assets/image/vdo.png"
                                      alt=""
                                    />
                                  </a>
                                  {/* <i className="fa fa-video-camera"></i> */}
                                  {/* </Link> */}
                                </td>
                                <td>
                                  <select className="mt-2">
                                    <option value="TowOClock">Success</option>
                                    <option value="FourOClock">
                                      UnSuccess
                                    </option>
                                    <option value="SixOClock">Pending</option>
                                  </select>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

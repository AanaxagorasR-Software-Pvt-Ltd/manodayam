import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_ADMIN_URL, PROFIL_API, BOOKED_API } from "../utill/api.endpoints";
import globalDataCall from "../utill/rdxcall";
import { Modal as Bmodal, Button } from "react-bootstrap";

export default function Profile() {
  const [profilData, setprofilData] = useState([]);
  const [bookData, setbookData] = useState([]);
  const [data, setdatta] = useState([]);
  const [show, setshow] = useState(false);
  const [alertData, setAlerdata] = useState({ title: "", body: "" })
  const [user,setUser]=useState({})


  const ProfilData = () => {
    console.log(`${API_ADMIN_URL}${PROFIL_API}`);
    const profileData = {
      collectiontypedata: "banner",
      // token: "token",
    };
    axios
      .post(`${API_ADMIN_URL}${PROFIL_API}`, profileData)
      .then((res) => {
        setprofilData(res.data.data);
        console.log("====profileData====", res.data.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect((props) => {
    ProfilData();
    setUser(JSON.parse(localStorage.getItem("user")));
    console.log(JSON.parse(localStorage.getItem("user")))
  }, []);
  const listBooked = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    axios

      .get(`${API_ADMIN_URL}${BOOKED_API}?userId=${user._id}`)
      .then((res) => {
        console.log("res", res, typeof res);
        setbookData(res.data);

      })
      .catch((err) => {
        console.log("err", err.message);
      });
  };
  React.useEffect(() => {
    listBooked();
  }, []);
  const convertToDateTime = (time) => {
    const d = new Date(time);
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
  }
  const handleClose = () => setshow(false);


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
                      {/* <img src="assets/image/profile.jpg" alt="" /> */}
                      <img src="assets/image/profile.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-7 col-sm-9">
                    <div className="profile-content">
                      <h3>{user && user.name}</h3>
                      
                      {/* {
                        <p>
                          <i className="fa fa-phone"></i>
                        </p>} */}
                     { <p>
                        <i className="fa fa-envelope"></i> {user && user.email}
                      </p>}
                      {/* <p>
                        <i className="fa fa-map-marker"></i> 
                      </p> */}
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          {/* <a
                            className="nav-link active"
                            data-toggle="tab"
                            href="#home"
                          >
                            Edit Profile
                          </a> */}
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
                                <buttton class="btn hvr-float-shadow" >
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
                                <th>S.no</th>
                                <th>Time</th>
                                <th>Name</th>
                                <th>Condition</th>
                                <th>Connect Here!</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                bookData.map((a, i) => (

                                  <tr key={i}>
                                    <td>{i + 1}</td>
                                    {/* {new Date(a.schedule).toLocaleDateString()} */}

                                    <td>{convertToDateTime(a.schedule)}</td>
                                    {/* <td>{a.title}</td> */}
                                    <td>{a.fullname}</td>

                                    <td>{a.disorder}</td>
                                    <td>
                                      {a.room_no == null ? (
                                        <button onClick={() => {
                                          setAlerdata({ title: " Please Wait !!", body: "please waiting for meeting schedule" });
                                          setshow(true)
                                        }}
                                          type="button"
                                          class="btn btn-sm btn-info border-radius-0 add-btn"
                                          // onClick={() => {
                                          //   createRoomRef.current.openForm(a);
                                          // }}
                                          title="Create Room"
                                        >
                                          <i class="fas fa-video"></i>
                                        </button>
                                      ) : (
                                        <a
                                          href={
                                            globalDataCall.videoCallLink +
                                            a.room_no
                                          }
                                          target="_blank"
                                        >
                                          <button
                                            type="button"
                                            class="btn btn-sm btn-success border-radius-0 add-btn"
                                          >
                                            <i class="ti-video-camera"></i>
                                          </button>
                                        </a>
                                      )}
                                    </td>
                                    <td>{a.status}</td>
                                  </tr>
                                ))}
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
      <Bmodal show={show} >
        <Bmodal.Header closeButton>
          <Bmodal.Title>{alertData.title}</Bmodal.Title>
        </Bmodal.Header>
        <Bmodal.Body>{alertData.body}</Bmodal.Body>
        <Bmodal.Footer>

          <Button variant="primary" onClick={handleClose}>
            ok
          </Button>
        </Bmodal.Footer>
      </Bmodal>
    </>
  );
}

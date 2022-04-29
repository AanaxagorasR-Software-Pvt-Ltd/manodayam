import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_ADMIN_URL, PROFIL_API, BOOKED_API, SUBSCRIPTION_PLANE_LISTA ,SUBSCRIPTION_PLANE_BOOK} from "../utill/api.endpoints";
import globalDataCall from "../utill/rdxcall";
import { Modal as Bmodal, Button } from "react-bootstrap";
import { useFormik } from "formik";


export default function Profile() {
  const [profilData, setprofilData] = useState([]);
  const [bookData, setbookData] = useState([]);
  // const [data, setdatta] = useState([]);
  const [show, setshow] = useState(false);
  const [alertData, setAlerdata] = useState({ title: "", body: "" });
  const [user, setUser] = useState({});
  const [editData, setEditData] = useState([]);
  const [subScriptiondata, setSubscriptiondata] = useState([]);
  const [subbuy,setsubBuy]=useState("")
  let params = new URLSearchParams(window.location.search);
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
        setAlerdata({ title: "Login", body: "User Login Successfully" })
        setshow(true)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect((props) => {
    ProfilData();
    setUser(JSON.parse(localStorage.getItem("user")));
    console.log(JSON.parse(localStorage.getItem("user")));
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

  const Editprofile = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    axios

      .get(`${API_ADMIN_URL}${PROFIL_API}?userId=${user._id}`)
      .then((res) => {
        console.log("res", res, typeof res);
        formik.setValues({ name: res.data.name, email: res.data.email })
        setEditData(res.data)
      })
      .catch((err) => {
        console.log("err", err.message);
      });
  }
  const subscription = () => {
    let user = JSON.parse(localStorage.getItem("user"));

    axios
      .get(
        // ?humanId=${}`

        `${API_ADMIN_URL}${SUBSCRIPTION_PLANE_LISTA}?usertype=${params.get("usertype")}`

      )
      .then((res) => {
        console.log("res", res, typeof res);

        setSubscriptiondata(res.data)
      })
      .catch((err) => {
        console.log("err", err.message);
      });
  }
  React.useEffect(() => {
    listBooked();
    Editprofile();
    subscription();

  }, []);




  const handleClose = () => setshow(false);

  const formik = useFormik({
    initialValues: {
      name: "name",
      email: "email"

    },
    onSubmit: (values) => {
      console.log(values)
    }
  })
  const convertToDateTime = (time) => {
    const d = new Date(time);
    return d.toLocaleDateString() + " " + d.toLocaleTimeString();
  };
 const  subscriptionbook =(subId)=>{
  let sub = JSON.parse(localStorage.getItem("user")); 
    axios
      .post(
        // ?humanId=${}`

        `${API_ADMIN_URL}${SUBSCRIPTION_PLANE_BOOK}?subemail=${sub.email}&subid=${subId}`)
      }
      // setAlerdata({ title: "Subsciption Plane", body: "Confirm your subscription plane" });
      // setshow(true);
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
                      <img src="assets/image/profile.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-7 col-sm-9">
                    <div className="profile-content">
                      <h4 className="profile-name">
                        <span className="profile-hello">Hello</span>{user && user.name}
                      </h4>
                      {/* {
                        <p>
                          <i className="fa fa-phone"></i>
                        </p>} */}
                      {
                        <p>
                          <i className="fa fa-envelope"></i>{" "}
                          {user && user.email}
                        </p>
                      }
                      {/* <p>
                        <i className="fa fa-map-marker"></i> 
                      </p> */}
                      <ul className="nav nav-tabs">
                        {/* <li className="nav-item">
                          <a
                            className="nav-link active"
                            data-toggle="tab"
                            href="#home"
                          >
                            Edit Profile
                          </a>
                        </li> */}
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#menu1"
                          >
                            My Subscriptions
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
                                <th>S.no</th>
                                <th>Therapy Type</th>
                                <th>Therapy</th>
                                <th>Self Assessment</th>
                                <th>Doctor Assessment</th>
                                <th>Group Therapy</th>
                                <th>Meditation Spirituality</th>
                                <th>Benefitsdescription</th>
                                <th>Create Date</th>
                                <th>Price</th>
                                <th>Action</th>



                              </tr>
                            </thead>
                            {<tbody>
                              {subScriptiondata.map((a, i) => (
                                <tr key={i}>


                                  <td> {i + 1}</td>
                                  <td>{a.type}</td>
                                  <td>{a.therapy}</td>
                                  <td> {a.selfassessment}</td>
                                  <td> {a.doctorassessment} </td>
                                  <td>{a.grouptherapy}  </td>
                                  <td> {a.meditation} </td>
                                  <td>  {a.benefitsdescription}</td>
                                  <th>{convertToDateTime(a.created)}</th>
                                  <td> <i className="fa fa-inr"></i>{a.price}</td>

                                  <td><button type="button"
                                    className="btn-web subbutton  hvr-float-shadow" data-toggle="modal" data-target="#exampleModal" onClick={() => subscriptionbook(a._id)}>Buy</button></td>

                                </tr>
                              ))}</tbody>}

                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
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
                              {bookData.map((a, i) => (
                                <tr key={i}>
                                  <td>{i + 1}</td>
                                  {/* {new Date(a.schedule).toLocaleDateString()} */}

                                  <td>{convertToDateTime(a.schedule)}</td>
                                  {/* <td>{a.title}</td> */}
                                  <td>{a.fullname}</td>

                                  <td>{a.disorder}</td>
                                  <td>
                                    {a.room_no == null ? (
                                      <button
                                        onClick={() => {
                                          setAlerdata({
                                            title: " Please Wait !!",
                                            body: "please waiting for meeting schedule",
                                          });
                                          setshow(true);
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
      {/* <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"> Your subscription plane</h5>

              <button type="button" class="close" data-dismiss="modal" aria-label="Close">

                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            confirm your subcription plane
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button"  data-dismiss="modal" class="btn btn-primary"onClick={subscriptionbook} >confirm</button>
            </div>
          </div>
        </div>
      </div> */}
      <Bmodal show={show}>
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


import React from 'react';
import { Link } from 'react-router-dom'

import { useEffect, useState } from "react";

import axios from "axios";
import {PROFIL_API,API_ADMIN_URL} from "../pages/api-link/api.endpoints";
// import globalDataCall from "../utill/rdxcall";


export default function Profile() {
    const [user, setUser] = useState({});

    const ProfilData = () => {
        console.log(`${API_ADMIN_URL}${PROFIL_API}`);
      
        axios
            .get(`${API_ADMIN_URL}${PROFIL_API}`)
            .then((res) => {
               
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


    return (
        <>

            <div>
                <div class="main-content side-content pt-0">

                    <div class="container-fluid">
                        <div class="inner-body">


                            <div class="page-header">
                                <div class="page-header-1">
                                    <h1 class="main-content-title tx-30">Profile</h1>

                                </div>
                            </div>
                            <div>
                                {
                                    <p>
                                        <i className="fa fa-envelope"></i>{user && user.name}

                                    </p>
                                }
                                {

                                    <p>
                                        <i class="fas fa-user"></i>{user && user.email}

                                    </p>
                                }
                            </div>

                            {/* <section class="video-cards">
            <div class="container-fluid">
                <div class="row"> */}
                            {/* <div class="col-lg-2">
                       <a href="">
                        <div class="profile-card">
                            <i class="far fa-chart-bar"></i>
                            <h4>My Stats</h4>
                        </div>
                       </a>
    </div>*/}
                            {/* <div class="col-lg-2">
                        <a href="">
                         <div class="profile-card">
                            <i class="fas fa-globe"></i>
                             <h4>Language</h4>
                         </div>
                        </a>
    </div>*/}
                            {/* <div class="col-lg-2">
                         <div class="profile-card account-btn">
                            <i class="fas fa-user-tie"></i>
                             <h4>Account Details</h4>
                         </div>
                     </div>
                     <div class="col-lg-2">
                         <div class="profile-card password-btn">
                            <i class="fas fa-key"></i>
                             <h4>Change Password</h4>
                         </div>
                     </div>
                     <div class="col-lg-2">
                         <div class="profile-card password-btn">
                         <i class="fas fa-sign-out-alt"></i>
                             <h4>Log Out</h4>
                         </div>
                     </div> */}
                            {/*} <div class="col-lg-2">
                        <a href="">
                         <div class="profile-card">
                            <i class="fas fa-credit-card"></i>
                             <h4>Subscribe</h4>
                         </div>
                        </a>
                     </div>
*/}
                            {/* </div>
            </div>
        </section> */}

                            {/* <section class="account-detail-hide">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="account-detail-form">
                            <a href=""><i class="fas fa-chevron-left"></i></a>
                            <h3>Account Details</h3>
                            <form action="">
                                <input type="text" name="" id="" required placeholder="Your name" class="account-input" />
                                <input type="email" name="" id="" required placeholder="Your email" class="account-input" />
                                <button class="btn-main">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

                            {/* <section class="change-password-hide">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="account-detail-form">
                            <a href=""><i class="fas fa-chevron-left"></i></a>
                            <h3>Change Password</h3>
                            <form action="">
                                <input type="password" name="" id="" required placeholder="Old password" class="account-input" />
                                <input type="password" name="" id="" required placeholder="New password" class="account-input" />
                                <input type="password" name="" id="" required placeholder="Confirm password" class="account-input" />
                                <button class="btn-main">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


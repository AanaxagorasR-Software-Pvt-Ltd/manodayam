import React from "react";
import { Link } from "react-router-dom";
export default function BookingAppoint() {
    return (
        <>
            <div className="contact-banner mb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-breadcrumb">
                                <h3>Doctor Lists</h3>
                                <ol className="breadcrumb">
                                    <li>
                                        <Link to="/home">Booking  / &nbsp;</Link>
                                    </li>
                                    <li>Doctor Booking</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-section mb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="about-img h-50 w-50 ml-8">
                                <img src="assets/image/doctor-img.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7 mr-8">
                            <div className="about-content support-content">
                                <h5>Dr Abhay Pandey</h5>
                                <h2>MBBS, Psychiatrist</h2>
                                <p>
                                    12 Years Experience
                                </p>
                                <p>2.3 Km Away</p>
                                <button className="btn-web hvr-float-shadow">
                                    <Link to="/">Book Your Appointment</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="about-section mb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="about-img h-100 w-50 ml-8">
                                <img src="assets/image/doctor2.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7 mr-8">
                            <div className="about-content support-content">
                                <h5>Dr Aastha Sharma</h5>
                                <h2>MBBS, Psychiatrist</h2>
                                <p>
                                    12 Years Experience
                                </p>
                                <p>2.3 Km Away</p>
                                <button className="btn-web hvr-float-shadow">
                                    <Link to="/">Book Your Appointment</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div className="about-section mb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="about-img h-50 w-50 ml-8">
                                <img src="assets/image/doctor-img.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7 mr-8">
                            <div className="about-content support-content">
                                <h5>Dr Niti Pandey</h5>
                                <h2>MBBS, Psychiatrist</h2>
                                <p>
                                    12 Years Experience
                                </p>
                                <p>2.3 Km Away</p>
                                <button className="btn-web hvr-float-shadow">
                                    <Link to="/">Book Your Appointment</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

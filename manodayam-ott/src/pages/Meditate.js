
import React from 'react';
import { Link } from 'react-router-dom'
export default function Meditate() {
    return (
        <>

           <div>
           <div class="main-content side-content pt-0">

<div class="container-fluid">
    <div class="inner-body">

        
        <div class="page-header">
            <div class="page-header-1">
                <h1 class="main-content-title tx-30">Meditate</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <select name="" id="">
                            <option value="">All</option>
                            <option value="">For me</option>
                            <option value="">Sleep</option>
                            <option value="">Anxiety</option>
                            <option value="">Begginers</option>
                            <option value="">Stress</option>
                            <option value="">Work</option>
                            <option value="">Selfcare</option>
                            <option value="">With Soundscapes</option>
                            <option value="">Inner Peace</option>
                            <option value="">Focus</option>
                            <option value="">Emotions</option>
                            <option value="">Less Guidance</option>
                            <option value="">Relationships</option>
                            <option value="">Personal Growth </option>
                            <option value="">Kids</option>
                            <option value="">By Guest Instructors</option>
                        </select>
                    </li>
                </ol>
            </div>
        </div>
        
        <section class="video-cards">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 mr-3">
                        <div class="featured-card">
                            <div class="row">
                                <div class="col-lg-2">
                                    <img src="assets/img/fe.jpeg" alt="" />
                                </div>
                                <div class="col-lg-8">
                                    <div class="featured-text">
                                        <h4>Daily Calm with Tamara Levitt</h4>
                                        <p>Dec 11 Healing</p>
                                    </div>
                                </div>
                                <div class="col-lg-2">
                                    <div class="featured-lock">
                                        <i class="fas fa-lock"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="display-card">
                            <i class="fas fa-lock"></i>
                            <Link to="/musicplayer">

                                <img src="assets/img/dis3.jpeg" alt="" />
                                    <h4>Pearl Mackey</h4>
                            </Link>
                        </div>
                    </div>
                        
                        <div class="col-lg-3 col-sm-6">
                            <div class="display-card">
                                <Link to="/musicplayer">

                                    <img src="assets/img/dis1.jpeg" alt="" />
                                        <h4>Raman Tikaram</h4>
                                </Link>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="display-card">
                                <i class="fas fa-lock"></i>
                                <Link to="/musicplayer">

                                    <img src="assets/img/dis4.jpeg" alt="" />
                                        <h4>Nicole Marie</h4>
                                </Link>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="display-card">
                                <i class="fas fa-lock"></i>
                                <Link to="/musicplayer">

                                    <img src="assets/img/dis2.jpeg" alt="" />
                                        <h4>Agnes and Minions</h4>
                                </Link>
                            </div>
                        </div>
                        
                        
                        <div class="col-lg-3 col-sm-6">
                            <div class="display-card">
                                <i class="fas fa-lock"></i>
                                <Link to="/musicplayer">

                                    <img src="assets/img/dis.jpg" alt="" />
                                        <h4>McConaughey</h4>
                                </Link>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="display-card">
                                <i class="fas fa-lock"></i>
                                <Link to="/musicplayer">

                                    <img src="assets/img/dis8.jpeg" alt="" />
                                        <h4>Fairy Grams</h4>
                                </Link>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="display-card">
                                <i class="fas fa-lock"></i>
                                <Link to="/musicplayer">

                                    <img src="assets/img/dis10.jpeg" alt="" />
                                        <h4>Walk Around</h4>
                                </Link>
                            </div>
                        </div>
                </div>
            </div>
        </section>

        
    </div>
</div>
</div>
           </div>

        </>
    )
}


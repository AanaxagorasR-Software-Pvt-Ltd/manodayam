
import React from 'react';
import { Link } from 'react-router-dom'
export default function Music() {
    return (
        <>

           <div>
           <div class="main-content side-content pt-0">

<div class="container-fluid">
    <div class="inner-body">

        
        <div class="page-header">
            <div class="page-header-1">
                <h1 class="main-content-title tx-30">Music</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <select name="" id="">
                            <option value="">All</option>
                            <option value="">For me</option>
                            <option value="">Featured</option>
                            <option value="">Sleep</option>
                            <option value="">Playlist</option>
                            <option value="">Soundscapes</option>
                            <option value="">Nature Melodies</option>
                            <option value="">Work</option>
                            <option value="">Relax</option>
                            <option value="">Lullabies</option>
                            <option value="">Focus</option>
                        </select>
                    </li>
                </ol>
            </div>
        </div>
        
        <section class="video-cards">
            <div class="container">
                <div class="row">
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

                                <img src="assets/img/dis8.jpeg" alt="" />
                                    <h4>Fairy Grams</h4>
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


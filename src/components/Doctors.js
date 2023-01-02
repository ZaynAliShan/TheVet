import React from 'react'
import { useEffect } from 'react'


import team1 from "../assets/img/Doctors/team1.png"
import team2 from "../assets/img/Doctors/team2.png"
import team3 from "../assets/img/Doctors/team3.png"




// import '../assets/js/vendor/modernizr-3.5.0.min.js'
// import '../assets/js/vendor/jquery-1.12.4.min.js'
// import '../assets/js/popper.min.js'
// import '../assets/js/bootstrap.min.js'
// import '../assets/js/jquery.slicknav.min.js'
// import '../assets/js/owl.carousel.min.js'
// import '../assets/js/slick.min.js'
// import '../assets/js/wow.min.js'
// import '../assets/js/animated.headline.js'
// import '../assets/js/jquery.magnific-popup.js'

 

export default function Doctors() {
   
    // useEffect(() => {
        
    //     const script = document.createElement("script");
    //     script.src = "../assets/js/vendor/modernizr-3.5.0.min.js";
    //     script.async = true;
        

    //     const script1 = document.createElement("script");
    //     script1.src = "../assets/js/vendor/jquery-1.12.4.min.js";
    //     script1.async = true;

    //     const script2 = document.createElement("script");
    //     script2.src = "../assets/js/popper.min.js";
    //     script2.async = true;

    //     const script3 = document.createElement("script");
    //     script3.src = "../assets/js/bootstrap.min.js";
    //     script3.async = true;

    //     const script4 = document.createElement("script");
    //     script4.src = "../assets/js/jquery.slicknav.min.js";
    //     script4.async = true;

    //     const script5 = document.createElement("script");
    //     script5.src = "../assets/js/owl.carousel.min.js";
    //     script5.async = true;

    //     const script6 = document.createElement("script");
    //     script6.src = "../assets/js/slick.min.js";
    //     script6.async = true;

    //     const script7 = document.createElement("script");
    //     script7.src = "../assets/js/wow.min.js";
    //     script7.async = true;

    //     const script8 = document.createElement("script");
    //     script8.src = "../assets/js/animated.headline.js";
    //     script8.async = true;

    //     const script9 = document.createElement("script");
    //     script9.src = "../assets/js/jquery.magnific-popup.js";
    //     script9.async = true;

    //     document.body.appendChild(script);
    //     document.body.appendChild(script1);
    //     document.body.appendChild(script2);
    //     document.body.appendChild(script3);
    //     document.body.appendChild(script4);
    //     document.body.appendChild(script5);
    //     document.body.appendChild(script6);
    //     document.body.appendChild(script7);
    //     document.body.appendChild(script8);
    //     document.body.appendChild(script9);
    //     console.log("sdjfkaskdj");
    // });
    return (
        <div>
            <main>
                {/* <!--? Hero Start --> */}
                <div className="slider-area2">
                    <div className="slider-height2 d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="hero-cap hero-cap2 text-center">
                                        <h2>Doctors</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Hero End -->
                <!--? Team Start --> */}
                <div className="team-area section-padding30">
                    <div className="container">
                        {/* <!-- Section Tittle --> */}
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-tittle text-center mb-100">
                                    <span>Our Doctors</span>
                                    <h2>Our Specialist</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                                <div className="single-team mb-30">
                                    <div className="team-img">
                                        <img src={team1} alt=""/>
                                    </div>
                                    <div className="team-caption">
                                        <h3><a href="#">Alvin Maxwell</a></h3>
                                        <span>Creative UI Designer</span>
                                        {/* <!-- Team social --> */}
                                        <div className="team-social">
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fas fa-globe"></i></a>
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                                <div className="single-team mb-30">
                                    <div className="team-img">
                                        <img src={team3} alt=""/>
                                    </div>
                                    <div className="team-caption">
                                        <h3><a href="#">Maria Smith</a></h3>
                                        <span>Agency Manager</span>
                                        {/* <!-- Team social --> */}
                                        <div className="team-social">
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fas fa-globe"></i></a>
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                                <div className="single-team mb-30">
                                    <div className="team-img">
                                        <img src={team1} alt=""/>
                                    </div>
                                    <div className="team-caption">
                                        <h3><a href="#">Angela Doe</a></h3>
                                        <span>Designer</span>
                                        {/* <!-- Team social --> */}
                                        <div className="team-social">
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fas fa-globe"></i></a>
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                                <div className="single-team mb-30">
                                    <div className="team-img">
                                        <img src={team1} alt=""/>
                                    </div>
                                    <div className="team-caption">
                                        <h3><a href="#">Angela Doe</a></h3>
                                        <span>Designer</span>
                                        {/* <!-- Team social --> */}
                                        <div className="team-social">
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fas fa-globe"></i></a>
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                                <div className="single-team mb-30">
                                    <div className="team-img">
                                        <img src={team2} alt=""/>
                                    </div>
                                    <div className="team-caption">
                                        <h3><a href="#">Alvin Maxwell</a></h3>
                                        <span>Creative UI Designer</span>
                                        {/* <!-- Team social --> */}
                                        <div className="team-social">
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fas fa-globe"></i></a>
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                                <div className="single-team mb-30">
                                    <div className="team-img">
                                        <img src={team3} alt=""/>
                                    </div>
                                    <div className="team-caption">
                                        <h3><a href="#">Maria Smith</a></h3>
                                        <span>Agency Manager</span>
                                        {/* <!-- Team social --> */}
                                        <div className="team-social">
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fas fa-globe"></i></a>
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Team End --> */}
            </main>
        </div>
    )
}

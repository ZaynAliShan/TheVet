import React from 'react'


import team1 from "../assets/img/Doctors/team1.png"
import team2 from "../assets/img/Doctors/team2.png"
import team3 from "../assets/img/Doctors/team3.png"
import team4 from "../assets/img/Doctors/team4.png"
import team5 from "../assets/img/Doctors/team5.png"
import team6 from "../assets/img/Doctors/team6.png"

export default function Doctors() {
   

    return (
        <div>
            <main>
                {/* <!--? Hero Start --> */}
                <div className="slider-area2" style={{ backgroundImage: "url('../assets/img/gallery/AI.jpg')", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <div className="slider-height2 d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="hero-cap hero-cap2 text-center">
                                        <h2 style={{ color: "#0F61EF" }}>Doctors</h2>
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
                                        <img src={team2} alt=""/>
                                    </div>
                                    <div className="team-caption">
                                        <h3><a href="/">Dr. Alvin Maxwell</a></h3>
                                        <span>Veterinary Nutritionist</span>
                                        {/* <!-- Team social --> */}
                                        <div className="team-social">
                                            <a href="/"><i className="fab fa-twitter"></i></a>
                                            <a href="/"><i className="fas fa-globe"></i></a>
                                            <a href="/"><i className="fab fa-facebook-f"></i></a>
                                            <a href="/"><i className="fab fa-pinterest-p"></i></a>
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
                                        <h3><a href="/">Dr. Maria Smith</a></h3>
                                        <span>Surgeon</span>
                                        {/* <!-- Team social --> */}
                                        <div className="team-social">
                                            <a href="/"><i className="fab fa-twitter"></i></a>
                                            <a href="/"><i className="fas fa-globe"></i></a>
                                            <a href="/"><i className="fab fa-facebook-f"></i></a>
                                            <a href="/"><i className="fab fa-pinterest-p"></i></a>
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
                                        <h3><a href="/">Dr. Angela Doe</a></h3>
                                        <span>Veterinary Nutritionist</span>
                                        {/* <!-- Team social --> */}
                                        <div className="team-social">
                                            <a href="/"><i className="fab fa-twitter"></i></a>
                                            <a href="/"><i className="fas fa-globe"></i></a>
                                            <a href="/"><i className="fab fa-facebook-f"></i></a>
                                            <a href="/"><i className="fab fa-pinterest-p"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                                <div className="single-team mb-30">
                                    <div className="team-img">
                                        <img src={team4} alt=""/>
                                    </div>
                                    <div className="team-caption">
                                        <h3><a href="/">Dr. Charles Thomas</a></h3>
                                        <span>Radiologist</span>
                                        {/* <!-- Team social --> */}
                                        <div className="team-social">
                                            <a href="/"><i className="fab fa-twitter"></i></a>
                                            <a href="/"><i className="fas fa-globe"></i></a>
                                            <a href="/"><i className="fab fa-facebook-f"></i></a>
                                            <a href="/"><i className="fab fa-pinterest-p"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                                <div className="single-team mb-30">
                                    <div className="team-img">
                                        <img src={team5} alt=""/>
                                    </div>
                                    <div className="team-caption">
                                        <h3><a href="/">Dr. James Robert</a></h3>
                                        <span>Surgeon</span>
                                        {/* <!-- Team social --> */}
                                        <div className="team-social">
                                            <a href="/"><i className="fab fa-twitter"></i></a>
                                            <a href="/"><i className="fas fa-globe"></i></a>
                                            <a href="/"><i className="fab fa-facebook-f"></i></a>
                                            <a href="/"><i className="fab fa-pinterest-p"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                                <div className="single-team mb-30">
                                    <div className="team-img">
                                        <img src={team6} alt=""/>
                                    </div>
                                    <div className="team-caption">
                                        <h3><a href="/">Dr. Ariana Michael</a></h3>
                                        <span>Veterinary Nutritionist</span>
                                        {/* <!-- Team social --> */}
                                        <div className="team-social">
                                            <a href="/"><i className="fab fa-twitter"></i></a>
                                            <a href="/"><i className="fas fa-globe"></i></a>
                                            <a href="/"><i className="fab fa-facebook-f"></i></a>
                                            <a href="/"><i className="fab fa-pinterest-p"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Team End --> */}
            </main>
            <div id="back-top" >
                <a title="Go to Top" href="Top BTN"> <i className="fas fa-level-up-alt"></i></a>
            </div>
        </div>
    )
}

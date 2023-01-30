import React from 'react'

import contact_form from "../assets/img/gallery/contact_form.png"

export default function Appointments() {
    return (
        <div>
            {/* <!--? Hero Start --> */}
            <div className="slider-area2">
                <div className="slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap hero-cap2 text-center">
                                    <h2>Make an Appointment</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--? Contact form Start --> */}
            <div className="contact-form-main section-padding2" >
                <div className='container' style={{ minWidth: "100%" }} >
                    <div className="row justify-content-end">
                        <div className="col-xl-7 col-lg-7">
                            <div className="form-wrapper">
                                {/* <!--Section Tittle  --> */}
                                <div className="form-tittle">
                                    <div className="row ">
                                        <div className="col-xl-12">
                                            <div className="section-tittle section-tittle2">
                                                <span>Appointment Apply Form</span>
                                                <h2>Appointment Form</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--End Section Tittle  --> */}
                                <form id="contact-form" action="#" method="POST">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-box user-icon mb-30">
                                                <input type="text" name="name" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-box email-icon mb-30">
                                                <input type="text" name="email" placeholder="Phone" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-box subject-icon mb-30">
                                                <input type="Email" name="subject" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-box message-icon mb-65">
                                                <textarea name="message" id="message" placeholder="Message"></textarea>
                                            </div>
                                            <div className="submit-info">
                                                <button className="btn" type="submit">Submit Now <i className="ti-arrow-right"></i> </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- contact left Img--> */}
                <div className="from-left d-none d-lg-block section-padding2">
                    <img src={contact_form} alt="contact_image" />
                </div>
            </div>
            {/* <!-- Contact form End --> */}
            <div id="back-top" >
                <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
            </div>
        </div>
    )
}

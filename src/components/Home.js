import React from "react";
import { useEffect, useCallback } from "react";
import { useState } from "react";
import MovingText from "react-moving-text";
import { Link } from "react-router-dom";
import 'swiper/swiper.min.css'

import pet1 from "../assets/img/gallery/pet1.jpg";
import ReviewSection from "./ReviewSection";

export default function Home() {
  const names = ["  Health", " Life", "  Needs"];
  const [newName, setnewName] = useState("");
  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);
  useEffect(() => {
    const intervalID = setInterval(shuffle, 1000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <div className="home">
      <main>
        <div className="slider-area position-relative">
          <div className="slider-active">
            {/* <!-- Single Slider --> */}
            <div className="single-slider slider-height d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-lg-9 col-md-8 col-sm-9">
                    <div className="hero__caption">
                      <span style={{color: "rgb(15 20 200)"}}>Committed to make furries life easier </span>
                      <h1 className="cd-headline letters scale">
                        We care about PET's
                        <strong className="cd-words-wrapper">
                          {/* <h1  style={{ color: "rgb(15 20 113)" ,margin:"20px"}}>  {newName} </h1> */}
                          <MovingText
                            type="effect2D"
                            duration="1100ms"
                            delay="2s"
                            direction="normal"
                            timing="ease"
                            iteration="infinite"
                            fillMode="forwards"
                            style={{ color: "rgb(15 20 113)", margin: "20px" }}
                          >
                            {newName}
                          </MovingText>
                        </strong>
                      </h1>
                      <p data-animation="fadeInLeft" data-delay="0.1s">
                          <text
                            style={{ color: "black", margin: "0px", fontWeight:'700'}}
                          >
                            "Inititative to make taking care of furry friends
                            easier. Providing health care facilities 24/7"
                          </text>
                      </p>
                        <Link
                          to="/userDashboard/makeAppointment"
                          className="btn hero-btn"
                          data-animation="fadeInLeft"
                          data-delay="0.5s"
                        >
                          Appointment <i className="ti-arrow-right"></i>
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Single Slider --> */}
          </div>
        </div>
        {/* The end of main hero */}
        {/* <!--? About Start--> */}
        
        
        <section class="about-are" style={{paddingTop: "100px", paddingBottom:"100px"}} >
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-10">
                <div class="about-caption">
                  <div class="section-tittle section-tittle2">
                    <span>About Our Clinic</span>
                    <h2>Why Choose Us?</h2>
                  </div>
                  <div class="about-content">
                    <p style={{textAlign:"justify", paddingTop:"10px"}}>
                      The Vet is a new kind of veterinary experience that works better for everyone: the vets, the pets, and the pet parents. With proprietary technology that helps prevent, diagnose, and treat medical conditions, we are able to deliver clinic-level pet care without the clinic. So you never have to sacrifice high-quality care for convenience. Our best-in-class veterinarians bring their expert care to you, offering at-home visits, scheduling appointments online in a stress-free environment. Because when pets are more relaxed, it's easier to give them the exceptional care they deserve.
                    </p>
                  </div>
                  <div class="about-btn1" style={{paddingTop:"20px"}}>
                    <a href="/doctors" class="btn about-btn">
                      Find Doctors <i class="ti-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12" style={{paddingTop:"25px"}}>
                <div class="about-img">
                  <img src={pet1} alt="Pet Image" style={{borderRadius:"2%"}}/>
                </div>
              </div>
            </div>
          </div>
      </section>

      <div className="all-starups-area testimonial-area fix">
      <div className="starups" style={{height:"600px"}}>
        <div className="h1-testimonial-active">
          <div className="single-testimonial text-center">
            <div className="testimonial-caption">
              <div className="testimonial-top-cap">
                <p style={{textAlign:"left", textAlign:"justify", paddingTop:"50px"}}>
                  “Our best-in-class veterinarians bring their expert care to you, offering at-home visits, scheduling appointments online in a stress-free environment. Because when pets are more relaxed, it's easier to give them the exceptional care they deserve.”
                </p>
              </div>
              <div className="about-btn1">
                <a href="/userDashboard/makeAppointment" className="btn about-btn">
                  Make Appointment <i className="ti-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="starups-img" style={{height:"600px"}}></div>
    </div>

        <div style={{paddingTop: "130px", paddingBottom:"130px"}}>
        <ReviewSection />
        </div>

      </main>
      {/* <!-- Scroll Up --> */}
      <div id="back-top">
        <a title="Go to Top" href="#">
          {" "}
          <i className="fas fa-level-up-alt"></i>
        </a>
      </div>
    </div>
  );
}


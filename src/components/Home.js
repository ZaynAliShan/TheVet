import React from "react";
import { useEffect, useCallback } from "react";
import { useState } from "react";
import MovingText from "react-moving-text";

import testimonial1 from "../assets/img/gallery/Testimonial1.jpeg";
import testimonial2 from "../assets/img/gallery/Testimonial2.jpeg";
import testimonial3 from "../assets/img/gallery/Testimonial3.jpeg";

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
    <div>
      <main>
        <div className="slider-area position-relative">
          <div className="slider-active">
            {/* <!-- Single Slider --> */}
            <div className="single-slider slider-height d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-lg-9 col-md-8 col-sm-9">
                    <div className="hero__caption">
                      <span>Committed to make furries life easier </span>
                      <h1 className="cd-headline letters scale">
                        We care about PET's
                        <strong className="cd-words-wrapper">
                          {/* <h1  style={{ color: "rgb(15 20 113)" ,margin:"20px"}}>  {newName} </h1> */}
                          <MovingText
                            type="effect3D"
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
                        <MovingText
                          type="fadeInFromLeft"
                          duration="3000ms"
                          delay="2s"
                          direction="normal"
                          timing="ease-in"
                          iteration="1"
                          fillMode="none"
                        >
                          <MovingText
                            type="effect3D"
                            duration="1100ms"
                            delay="2s"
                            direction="normal"
                            timing="ease"
                            iteration="infinite"
                            fillMode="forwards"
                            style={{ color: "rgb(15 20 113)", margin: "20px" }}
                          >
                            "Inititative to make taking care of furry friends
                            easier. Providing health care facilities 24/7"
                          </MovingText>
                        </MovingText>
                      </p>
                      <MovingText
                        type="fadeInFromLeft"
                        duration="3000ms"
                        delay="2s"
                        direction="normal"
                        timing="ease-in"
                        iteration="1"
                        fillMode="none"
                      >
                        <a
                          href="/"
                          className="btn hero-btn"
                          data-animation="fadeInLeft"
                          data-delay="0.5s"
                        >
                          Appointment <i className="ti-arrow-right"></i>
                        </a>
                      </MovingText>
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
        <div class="about-area section-padding2">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-10">
                <div class="about-caption mb-50">
                  {/* <!-- Section Tittle --> */}
                  <div class="section-tittle section-tittle2 mb-35">
                    <span>About Our Clinic</span>
                    <h2>Welcome To Our Hospital</h2>
                  </div>
                  <p>
                    The Vet is a new kind of veterinary experience that works
                    better for everyone: the vets, the pets, and the pet Parents
                    .With proprietary technology that helps prevent, diagnose
                    and treat medical conditions, we are able to deliver
                    clinic-level pet care without the clinic. So you never have
                    to sacrifice high-quality care for convenience. Our
                    best-in-class veterinarians bring their expert care to you,
                    offering at-home visits ,schedulimg appoinments online in a
                    stress-free environment. Because when pets are more relaxed,
                    it’s easier to give them the exceptional care they deserve.
                  </p>
                  <div class="about-btn1 mb-30">
                    <a href="about.html" class="btn about-btn">
                      Find Doctors .<i class="ti-arrow-right"></i>
                    </a>
                  </div>
                  <div class="about-btn1 mb-30">
                    <a href="about.html" class="btn about-btn2">
                      Appointment <i class="ti-arrow-right"></i>
                    </a>
                  </div>
                  {/* <div class="about-btn1 mb-30">
                    <a href="about.html" class="btn about-btn2">
                      Emargency 1 <i class="ti-arrow-right"></i>
                    </a>
                  </div> */}
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                {/* <!-- about-img --> */}
                <div class="about-img ">
                  <div class="about-font-img d-none d-lg-block">
                    <img src={testimonial1} width="400" height="600" alt="" />
                  </div>
                  <div class="about-back-img ">
                    <img src={testimonial2} width="400" height="600" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- About  End--> */}
        {/* Now start Of Little about our vet sites */}
        {/* <!--? All startups Start --> */}
        <div class="all-starups-area testimonial-area fix">
          {/* <!-- left Contents --> */}
          <div class="starups">
            {/* <!--? Testimonial Start --> */}
            <div class="h1-testimonial-active">
              {/* <!-- Single Testimonial --> */}
              <div class="single-testimonial text-center">
                {/* <!-- Testimonial Content --> */}
                <div class="testimonial-caption ">
                  <div class="testimonial-top-cap">
                    {/* <img src="assets/img/gallery/testimonial.png"alt="" /> */}
                    <p style={{textAlign:"justify"}}>
                      “In addition to offering Doctors availabilty and scheduling appoinments with doctors facilities
                      ,our website also features a cutting-edge AI bot
                      that can provide quick and accurate diagnoses for your
                      pets based on their symptoms. This innovative tool
                      harnesses the power of artificial intelligence to help you
                      quickly determine the underlying cause of your pet's
                      symptoms and provide recommendations for treatment.
                      Whether you're a seasoned pet owner or a first-time pet
                      parent, our AI bot is an invaluable resource for ensuring
                      the best possible health for your furry friend.”
                    </p>
                  </div>
                  {/* <!-- founder --> */}
                  <div class="about-btn1 mb-30"  style={{display: "flex",alignItems:"flex-start"}}>
                    <a href="about.html" class="btn about-btn">
                      AI BOT .<i class="ti-arrow-right"></i>
                    </a>
                  </div>
                 
                </div>
              </div>
            </div>
            {/* <!-- Testimonial End --> */}
          </div>
          {/* <!--Right Contents  --> */}
          <div class="starups-img"></div>
        </div>
        People REVIEWS
        {/* <!--? Blog start --> */}
        <div class="home_blog-area section-padding30">
          <div class="container">
            <div class="row justify-content-sm-center">
              <div class="cl-xl-7 col-lg-8 col-md-10">
                {/* <!-- Section Tittle --> */}
                <div class="section-tittle text-center mb-70">
                  <span> People REVIEWS</span>
                  <h2>Our Happy Pet Parents</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="single-blogs mb-30">
                  <div class="blog-img">
                    <img src={testimonial3} width="400" height="400" alt="" />
                  </div>
                  <div class="blogs-cap" style={{ height: "300px" }}>
                    <p>
                      Dr. Miller took so much time to try and comfort my very
                      scared pet, meeting them on the floor and bending over
                      backwards in so many ways. Thank you so much for your
                      excellent care!
                    </p>
                    <p
                      class="read-more1"
                      style={{
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                        verticalAlign: "text-bottom",
                      }}
                    >
                      -Ismaeel Mughal
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="single-blogs mb-30">
                  <div class="blog-img">
                    <img src={testimonial1} width="400" height="400" alt="" />
                  </div>
                  <div class="blogs-cap" style={{ height: "300px" }}>
                    <p>
                      ~ They were so good to Sandy who’s life gently ended
                      surrounded by the family she loved. The doctor explained
                      everything to us and the four kids present. It was solemn.
                      We have since bee gifted with two big dogs who will see
                      The Vets when needed. We are very grateful for their care.{" "}
                    </p>
                    <p
                      class="read-more1"
                      style={{
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                        verticalAlign: "text-bottom",
                      }}
                    >
                      -Ismaeel Mughal
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="single-blogs mb-30">
                  <div class="blog-img">
                    <img src={testimonial2} width="400" height="400" alt="" />
                  </div>
                  <div class="blogs-cap" style={{ height: "300px" }}>
                    <p>
                      They were so friendly and professional!! Very efficient,
                      and super knowledgeable! Highly recommend!!
                    </p>
                    <p
                      class="read-more1"
                      style={{
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                        verticalAlign: "text-bottom",
                      }}
                    >
                      -Ismaeel Mughal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Blog End --> */}
      </main>
    </div>
  );
}

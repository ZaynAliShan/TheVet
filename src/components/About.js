import React from "react";

import gallery1 from "../assets/img/gallery/gallery1.png";
import gallery2 from "../assets/img/gallery/gallery2.png";
import gallery3 from "../assets/img/gallery/gallery3.png";
import gallery4 from "../assets/img/gallery/gallery4.png";
import gallery5 from "../assets/img/gallery/gallery5.png";
import gallery6 from "../assets/img/gallery/gallery6.png";

function About() {
  return (
    <div>
      {/* <!-- ? Preloader Start --> */}
      {/* <PreLoader /> */}
      {/* <!-- Preloader Start --> */}

      {/* <header>
        <Header />
    </header> */}

      <main>
        {/* <!--? Hero Start --> */}
        {/* <Hero title="About Us" /> */}
        {/* <!-- Hero End --> */}

        {/* <!--? About Start--> */}
        <div className="about-area section-padding2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-10">
                <div className="about-caption mb-50">
                  {/* <!-- Section Tittle --> */}
                  <div className="section-tittle section-tittle2 mb-35">
                    <span>About Our Company</span>
                    <h2>Welcome To Our Hospital</h2>
                  </div>
                  <p>
                    Many variations of sorem gypsum passages exist, but most
                    have been altered in some way, such as through humour or
                    randomisation.
                  </p>
                  <div className="about-btn1 mb-30">
                    <a href="/doctors" className="btn about-btn">
                      Find Doctors<i className="ti-arrow-right"></i>
                    </a>
                  </div>
                  <div className="about-btn1 mb-30">
                    <a
                      href="/userDashboard/makeAppointment"
                      className="btn about-btn2"
                    >
                      Appointment <i className="ti-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                {/* <!-- about-img --> */}
                <div className="about-img ">
                  <div className="about-font-img d-none d-lg-block">
                    <img src="assets/img/gallery/about2.png" alt="" />
                  </div>
                  <div className="about-back-img ">
                    <img src="assets/img/gallery/about1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- About  End--> */}

        {/* <!--? All startups Start --> */}
        <div className="all-starups-area testimonial-area fix">
          {/* <!-- left Contents --> */}
          <div className="starups">
            {/* <!--? Testimonial Start --> */}
            <div className="h1-testimonial-active">
              {/* <!-- Single Testimonial --> */}
              <div className="single-testimonial text-center">
                {/* <!-- Testimonial Content --> */}
                <div className="testimonial-caption ">
                  <div className="testimonial-top-cap">
                    <img src="assets/img/gallery/testimonial.png" alt="" />
                    <p>
                      “I am at an age where I just want to be fit and healthy
                      our bodies are our responsibility! So start caring for
                      your body and it will care for you. Eat clean it will care
                      for yout hard.”
                    </p>
                  </div>
                  {/* <!-- founder --> */}
                  <div className="testimonial-founder d-flex align-items-center justify-content-center">
                    <div className="founder-img">
                      <img src="assets/img/gallery/Homepage_testi.png" alt="" />
                    </div>
                    <div className="founder-text">
                      <span>Margaret Lawson</span>
                      <p>Chif Photographer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Testimonial End --> */}
          </div>
          {/* <!--Right Contents  --> */}
          <div className="starups-img"></div>
        </div>
        {/* <!--All startups End --> */}

        {/* <!--? Gallery Area Start --> */}
        <div className="gallery-area section-padding30">
          <div className="container">
            {/* <!-- Section Tittle --> */}
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-tittle text-center mb-100">
                  <span>Our Gellary</span>
                  <h2>Our Medical Camp</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {/* <!-- Left --> */}
              <div className="col-lg-6">
                <div className="row">
                  {/* style="background-image: url(assets/img/gallery/gallery1.png);" */}
                  <div className="col-lg-12">
                    <div className="single-gallery mb-30">
                      <div
                        className="gallery-img big-img"
                        style={{ backgroundImage: `url(${gallery1})` }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-gallery mb-30">
                      <div
                        className="gallery-img small-img"
                        style={{ backgroundImage: `url(${gallery2})` }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-gallery mb-30">
                      <div
                        className="gallery-img small-img"
                        style={{ backgroundImage: `url(${gallery3})` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Right --> */}
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-gallery mb-30">
                      <div
                        className="gallery-img small-img"
                        style={{ backgroundImage: `url(${gallery4})` }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-gallery mb-30">
                      <div
                        className="gallery-img small-img"
                        style={{ backgroundImage: `url(${gallery5})` }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="single-gallery mb-30">
                      <div
                        className="gallery-img big-img"
                        style={{ backgroundImage: `url(${gallery6})` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Gallery Area End --> */}

        {/* <!--? gallery Products Start --> */}
        <div className="gallery-area fix">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="gallery-box">
                  <div className="single-gallery">
                    <div
                      className="gallery-img "
                      style={{ backgroundImage: `url(${gallery1})` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="gallery-box">
                  <div className="single-gallery">
                    <div
                      className="gallery-img "
                      style={{ backgroundImage: `url(${gallery2})` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="gallery-box">
                  <div className="single-gallery">
                    <div
                      className="gallery-img "
                      style={{ backgroundImage: `url(${gallery3})` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="gallery-box">
                  <div className="single-gallery">
                    <div
                      className="gallery-img "
                      style={{ backgroundImage: `url(${gallery4})` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="gallery-box">
                  <div className="single-gallery">
                    <div
                      className="gallery-img "
                      style={{ backgroundImage: `url(${gallery5})` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="gallery-box">
                  <div className="single-gallery">
                    <div
                      className="gallery-img "
                      style={{ backgroundImage: `url(${gallery6})` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- gallery Products End --> */}

        {/* <!--? Team Start --> */}
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
              {/* <!-- single Tem --> */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                <div className="single-team mb-30">
                  <div className="team-img">
                    <img src="assets/img/gallery/team2.png" alt="" />
                  </div>
                  <div className="team-caption">
                    <h3>
                      <a href="/">Alvin Maxwell</a>
                    </h3>
                    <span>Creative UI Designer</span>
                    {/* <!-- Team social --> */}
                    <div className="team-social">
                      <a href="/">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="/">
                        <i className="fas fa-globe"></i>
                      </a>
                      <a href="/">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="/">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                <div className="single-team mb-30">
                  <div className="team-img">
                    <img src="assets/img/gallery/team3.png" alt="" />
                  </div>
                  <div className="team-caption">
                    <h3>
                      <a href="/">Maria Smith</a>
                    </h3>
                    <span>Agency Manager</span>
                    {/* <!-- Team social --> */}
                    <div className="team-social">
                      <a href="/">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="/">
                        <i className="fas fa-globe"></i>
                      </a>
                      <a href="/">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="/">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                <div className="single-team mb-30">
                  <div className="team-img">
                    <img src="assets/img/gallery/team1.png" alt="" />
                  </div>
                  <div className="team-caption">
                    <h3>
                      <a href="/">Angela Doe</a>
                    </h3>
                    <span>Designer</span>
                    {/* <!-- Team social --> */}
                    <div className="team-social">
                      <a href="/">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="/">
                        <i className="fas fa-globe"></i>
                      </a>
                      <a href="/">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="/">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Team End --> */}
      </main>

      {/* <footer>
        <Footer />
    </footer> */}

      {/* <!-- Scroll Up --> */}
      <div id="back-top">
        <a title="Go to Top" href="/">
          {" "}
          <i className="fas fa-level-up-alt"></i>
        </a>
      </div>
    </div>
  );
}

export default About;

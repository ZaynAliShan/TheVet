import React from "react";
import FAQquestions from "./FAQquestions";

export default function FAQs() {
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
                    <h2>Frequently Asked Questions</h2>
                    <p>Quick Answers to your queries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Hero End -->
        <!--================Top Questions =================--> */}
        <section className="blog_area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="blog_right_sidebar">
                  <aside className="single_sidebar_widget post_category_widget">
                    <h4 className="widget_title" style={{ color: "#2d2d2d" }}>
                      Top Most Questions Type
                    </h4>
                    <ul className="list cat-list">
                      <li>
                        <a href="#MeetTheVets" className="d-flex">
                          <p>Meet The Vets</p>
                        </a>
                      </li>
                      <li>
                        <a href="#Appointments" className="d-flex">
                          <p>Appointments</p>
                        </a>
                      </li>
                      <li>
                        <a href="#Services" className="d-flex">
                          <p>Services</p>
                        </a>
                      </li>
                      <li>
                        <a href="#PandI" className="d-flex">
                          <p>Pricing and Insurance</p>
                        </a>
                      </li>
                    </ul>
                  </aside>
                </div>
              </div>
              {/* Question Area */}
              <div className="col-lg-8 mb-5 mb-lg-0">
                <div
                  className="container box_1170 border-top-generic my-3 mx-3"
                  id="MeetTheVets"
                >
                  <h3 className="text-heading ">Meet The Vets</h3>

                  <FAQquestions id="MeetTheVets" />
                </div>
                <div
                  className="container box_1170 border-top-generic my-3 mx-3"
                  id="Appointments"
                >
                  <h3 className="text-heading ">Appointments</h3>

                  <FAQquestions id="Appointments" />
                </div>
                <div
                  className="container box_1170 border-top-generic my-3 mx-3"
                  id="Services"
                >
                  <h3 className="text-heading ">Services</h3>

                  <FAQquestions id="Services" />
                </div>
                <div
                  className="container box_1170 border-top-generic my-3 mx-3"
                  id="PandI"
                >
                  <h3 className="text-heading">Pricing and Insurance</h3>

                  <FAQquestions id="pricingAndInsurance" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

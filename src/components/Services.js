import React from "react";
import { Link } from "react-router-dom";
import allergyIcon from "../assets/img/Services-Imgs/Services-Allergy.png";
import defntistIcon from "../assets/img/Services-Imgs/Services-Dentistery.png";
import cardiologyIcon from "../assets/img/Services-Imgs/Services-cardiology.png";
import drmaIcon from "../assets/img/Services-Imgs/Services-Dermatology.png";
import diagnosticIcon from "../assets/img/Services-Imgs/Services-Dagnostic.png";
import endocrinologyIcon from "../assets/img/Services-Imgs/Services-Endocrine.png";
import dentisteryImage from "../assets/img/Services-Imgs/Services-Pet-Dentistery.jpg";
import cardiologyImage from "../assets/img/Services-Imgs/Services-Pet-Cardiology.jpg";
import allergyImage from "../assets/img/Services-Imgs/Service-Pet-Allergy.jpg";
import dermatologyImage from "../assets/img/Services-Imgs/Service-Pet-Dermatology.jpg";
import diagnosticImage from "../assets/img/Services-Imgs/Service-Pet-Diagnostis.jpg";
import endocrineImage from "../assets/img/Services-Imgs/Services-Pet-EndocrineI.jpg";

function Services() {
  return (
    <>
      <div className="department_area section-padding2">
        <div className="container">
          {/* <!-- Section Tittle --> */}
          <div className="row">
            <div className="col-lg-12">
              <div className="section-tittle text-center mb-100">
                <span>Our Departments</span>
                <h2>Our Medical Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="depart_ment_tab mb-30">
                {/* <!-- Tabs Buttons --> */}
                <ul className="nav" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="dentistry-tab"
                      data-toggle="tab"
                      href="#dentistry"
                      role="tab"
                      aria-controls="dentistry"
                      aria-selected="true"
                    >
                      {/* <i className="flaticon-teeth"></i> */}
                      <i>
                        <img src={defntistIcon} className="flaticon" alt="" />
                      </i>
                      <h4>Dentistry</h4>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="cardiology-tab"
                      data-toggle="tab"
                      href="#cardiology"
                      role="tab"
                      aria-controls="cardiology"
                      aria-selected="false"
                    >
                      {/* <i className="flaticon-cardiovascular"></i> */}
                      <i>
                        <img src={cardiologyIcon} className="flaticon" alt="" />
                      </i>
                      <h4>Cardiology</h4>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="allergy-tab"
                      data-toggle="tab"
                      href="#allergy"
                      role="tab"
                      aria-controls="allergy"
                      aria-selected="false"
                    >
                      {/* <i className="flaticon-ear"></i> */}
                      <i>
                        <img src={allergyIcon} className="flaticon" alt="" />
                      </i>
                      <h4>Allergy Testing</h4>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="dermatology-tab"
                      data-toggle="tab"
                      href="#dermatology"
                      role="tab"
                      aria-controls="dermatology"
                      aria-selected="false"
                    >
                      {/* <i className="flaticon-bone"></i> */}
                      <i>
                        <img src={drmaIcon} className="flaticon" alt="" />
                      </i>
                      <h4>Dermatology</h4>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="diagnostics-tab"
                      data-toggle="tab"
                      href="#diagnostics"
                      role="tab"
                      aria-controls="diagnostics"
                      aria-selected="false"
                    >
                      {/* <i className="flaticon-lung"></i> */}
                      <i>
                        <img src={diagnosticIcon} className="flaticon" alt="" />
                      </i>
                      <h4>Diagnostics</h4>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="endocrinology-tab"
                      data-toggle="tab"
                      href="#endocrinology"
                      role="tab"
                      aria-controls="endocrinology"
                      aria-selected="false"
                    >
                      {/* <i className="flaticon-cell"></i> */}
                      <i>
                        <img
                          src={endocrinologyIcon}
                          className="flaticon"
                          alt=""
                        />
                      </i>
                      <h4>Endocrinology</h4>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="dept_main_info white-bg">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="dentistry"
                role="tabpanel"
                aria-labelledby="dentistry-tab"
              >
                {/* <!-- Dentistery Content  --> */}
                <div className="row align-items-center no-gutters">
                  <div className="col-lg-7">
                    <div className="dept_info">
                      <h3>A Healthy Pet Starts With a Healthy Mouth</h3>
                      <p>
                        "Even if your pet dose'nt have stained teeth, bacteria
                        can still be present below the gum line."
                      </p>
                      <Link to="/appointment" className="dep-btn">
                        Appointment<i className="ti-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="dept_thumb">
                      <img src={dentisteryImage} alt="" />
                    </div>
                  </div>
                </div>
                {/* <!-- single_content  --> */}
              </div>
              <div
                className="tab-pane fade"
                id="cardiology"
                role="tabpanel"
                aria-labelledby="cardiology-tab"
              >
                {/* <!-- Cardiology Content  --> */}
                <div className="row align-items-center no-gutters">
                  <div className="col-lg-7">
                    <div className="dept_info">
                      <h3>Taking Care of Your Pet's Heart Health</h3>
                      <p>
                        "Heart disease, much like cancer, is primarily a disease
                        of old age and, until recently, it was not a common
                        cause of death in pets. However, veterinary medicine has
                        made great strides in recent times, which has enabled us
                        to provide our pets with longer and healthier lives."
                      </p>
                      <Link to="/appointment" className="dep-btn">
                        Appointment<i className="ti-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="dept_thumb">
                      <img
                        src={cardiologyImage}
                        className="services-Image"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/* <!-- single_content  --> */}
              </div>
              <div
                className="tab-pane fade"
                id="allergy"
                role="tabpanel"
                aria-labelledby="allergy-tab"
              >
                {/* <!-- ALLERGY CONTENT  --> */}
                <div className="row align-items-center no-gutters">
                  <div className="col-lg-7">
                    <div className="dept_info">
                      <h3>
                        Allergy Testing & Treatment Bring Relief to Your Pet
                      </h3>
                      <p>
                        "Once the source of the allergy has been identified, we
                        can recommend ways to relieve or manage the allergy so
                        that your pet can lead a more normal life."
                      </p>
                      <Link to="/appointment" className="dep-btn">
                        Appointment<i className="ti-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="dept_thumb">
                      <img src={allergyImage} alt="" />
                    </div>
                  </div>
                </div>
                {/* <!-- single_content  --> */}
              </div>
              <div
                className="tab-pane fade"
                id="dermatology"
                role="tabpanel"
                aria-labelledby="dermatology-tab"
              >
                {/* <!-- DERMATOLOGY  --> */}
                <div className="row align-items-center no-gutters">
                  <div className="col-lg-7">
                    <div className="dept_info">
                      <h3>Diagnosing & Treating Pet Skin Problems</h3>
                      <p>
                        "Periodic pet wellness visits, beginning when you first
                        bring your new pet home, are a good way to help ensure
                        that any health problems will be diagnosed early."
                      </p>
                      <Link to="/appointment" className="dep-btn">
                        Appointment<i className="ti-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="dept_thumb">
                      <img src={dermatologyImage} alt="" />
                    </div>
                  </div>
                </div>
                {/* <!-- single_content  --> */}
              </div>
              <div
                className="tab-pane fade"
                id="diagnostics"
                role="tabpanel"
                aria-labelledby="diagnostics-tab"
              >
                {/* <!-- DIAGNOSTOCS CONTENT  --> */}
                <div className="row align-items-center no-gutters">
                  <div className="col-lg-7">
                    <div className="dept_info">
                      <h3>Diagnosing Your Pet's Medical Problems</h3>
                      <p>
                        "With the veterinary diagnostic tools available today,
                        and new ones that are being developed, veterinarians are
                        in a good position to help your pet enjoy a long and
                        healthy life with you."
                      </p>
                      <Link to="/appointment" className="dep-btn">
                        Appointment<i className="ti-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="dept_thumb">
                      <img src={diagnosticImage} alt="" />
                    </div>
                  </div>
                </div>
                {/* <!-- single_content  --> */}
              </div>
              <div
                className="tab-pane fade"
                id="endocrinology"
                role="tabpanel"
                aria-labelledby="endocrinology-tab"
              >
                {/* <!-- ENDOCRINE  --> */}
                <div className="row align-items-center no-gutters">
                  <div className="col-lg-7">
                    <div className="dept_info">
                      <h3>Treating Pet Endocrine Disorders</h3>
                      <p>
                        "Endocrine gland disorders are often difficult to
                        identify by visual symptoms alone. As a result, these
                        symptoms can either be mistaken for other conditions or
                        may go undetected until it is too late to save the pet's
                        life. This is why regular pet wellness checkups are so
                        important."
                      </p>
                      <Link to="/appointment" className="dep-btn">
                        Appointment<i className="ti-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="dept_thumb">
                      <img src={endocrineImage} alt="" />
                    </div>
                  </div>
                </div>
                {/* <!-- single_content  --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="back-top" >
                <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
      </div>
    </>
  );
}

export default Services;

import React from "react";

import allergyIcon from "../assets/img/Services-Imgs/Services-Allergy.png";
import defntistIcon from "../assets/img/Services-Imgs/Services-Dentistery.png";
import cardiologyIcon from "../assets/img/Services-Imgs/Services-cardiology.png";
import drmaIcon from "../assets/img/Services-Imgs/Services-Dermatology.png";
import diagnosticIcon from "../assets/img/Services-Imgs/Services-Dagnostic.png";
import endocrinologyIcon from "../assets/img/Services-Imgs/Services-Endocrine.png";
import dentisteryImage from "../assets/img/Services-Imgs/Services-Pet-Dentistery.jpg";

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
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
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
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
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
                      id="contact-tab"
                      data-toggle="tab"
                      href="#contact"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      {/* <i className="flaticon-ear"></i> */}
                      <i>
                        <img src={allergyIcon} className="flaticon" alt="" />
                      </i>
                      <h4>Allergy</h4>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="Astrology-tab"
                      data-toggle="tab"
                      href="#Astrology"
                      role="tab"
                      aria-controls="contact"
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
                      id="Neuroanatomy-tab"
                      data-toggle="tab"
                      href="#Neuroanatomy"
                      role="tab"
                      aria-controls="contact"
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
                      id="Blood-tab"
                      data-toggle="tab"
                      href="#Blood"
                      role="tab"
                      aria-controls="contact"
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
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                {/* <!-- Dentistery Content  --> */}
                <div className="row align-items-center no-gutters">
                  <div className="col-lg-7">
                    <div className="dept_info">
                      <h3>A healthy pet starts with a healthy mouth</h3>
                      <p>
                        "Even if your pet dose'nt have stained teeth, bacteria
                        can still be present below the gum line."
                      </p>
                      <a href="/" className="dep-btn">
                        Appointment<i className="ti-arrow-right"></i>
                      </a>
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
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                {/* <!-- single_content  --> */}
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
                      <a href="/" className="dep-btn">
                        Appointment<i className="ti-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="dept_thumb">
                      <img src="assets/img/gallery/department_man.png" alt="" />
                    </div>
                  </div>
                </div>
                {/* <!-- single_content  --> */}
              </div>
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                {/* <!-- single_content  --> */}
                <div className="row align-items-center no-gutters">
                  <div className="col-lg-7">
                    <div className="dept_info">
                      <h3>
                        Dentist with surgical mask holding <br /> scaler near
                        patient
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.{" "}
                      </p>
                      <a href="/" className="dep-btn">
                        Appointment<i className="ti-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="dept_thumb">
                      <img src="assets/img/gallery/department_man.png" alt="" />
                    </div>
                  </div>
                </div>
                {/* <!-- single_content  --> */}
              </div>
              <div
                className="tab-pane fade"
                id="Astrology"
                role="tabpanel"
                aria-labelledby="Astrology-tab"
              >
                {/* <!-- single_content  --> */}
                <div className="row align-items-center no-gutters">
                  <div className="col-lg-7">
                    <div className="dept_info">
                      <h3>
                        Dentist with surgical mask holding <br /> scaler near
                        patient
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.{" "}
                      </p>
                      <a href="/" className="dep-btn">
                        Appointment<i className="ti-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="dept_thumb">
                      <img src="assets/img/gallery/department_man.png" alt="" />
                    </div>
                  </div>
                </div>
                {/* <!-- single_content  --> */}
              </div>
              <div
                className="tab-pane fade"
                id="Neuroanatomy"
                role="tabpanel"
                aria-labelledby="Neuroanatomy-tab"
              >
                {/* <!-- single_content  --> */}
                <div className="row align-items-center no-gutters">
                  <div className="col-lg-7">
                    <div className="dept_info">
                      <h3>
                        Dentist with surgical mask holding <br /> scaler near
                        patient
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.{" "}
                      </p>
                      <a href="/" className="dep-btn">
                        Appointment<i className="ti-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="dept_thumb">
                      <img src="assets/img/gallery/department_man.png" alt="" />
                    </div>
                  </div>
                </div>
                {/* <!-- single_content  --> */}
              </div>
              <div
                className="tab-pane fade"
                id="Blood"
                role="tabpanel"
                aria-labelledby="Blood-tab"
              >
                {/* <!-- single_content  --> */}
                <div className="row align-items-center no-gutters">
                  <div className="col-lg-7">
                    <div className="dept_info">
                      <h3>
                        Dentist with surgical mask holding <br /> scaler near
                        patient
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.{" "}
                      </p>
                      <a href="/" className="dep-btn">
                        Appointment<i className="ti-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="dept_thumb">
                      <img src="assets/img/gallery/department_man.png" alt="" />
                    </div>
                  </div>
                </div>
                {/* <!-- single_content  --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;

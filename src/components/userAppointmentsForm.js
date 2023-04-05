import React from "react";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

import contact_form from "../assets/img/gallery/contact_form.png";
import { getPatients , getPatientsByUserId} from "../services/api";

export default function Appointments() {
  const [userId, setUserId] = useState(null);
  const genderOptions = ["Male", "Female"];
  const [patientList, setPatientList] = useState([]);
  
  useEffect(() => {
    var token = localStorage.getItem("checking");
   
    if (token) {
      const decodedToken = jwtDecode(token);
      const { id } = decodedToken;
      setUserId(decodedToken.user.id);
    }
  }, []);
  
  const getAllPatients = async ()=>{
    console.log(userId);
    const list  = await getPatientsByUserId(userId);
    setPatientList(list.data);
    
  }
  return (
    
    <>
      {/* <!--? Contact form Start --> */}
      <div className="contact-form-main">
        <div className="container">
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
                        <input type="text" name="attendent" placeholder="Attendent" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-box subject-icon mb-30">
                        <input
                          type="Email"
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-box user-icon mb-30">
                        <input type="text" name="checkupType" placeholder="CheckUp Type" />
                      </div>
                    </div>

                    <div className="col-lg-12" >
                      <div className="form-box user-icon mb-30">
                        <select style={{ width: "250px", height: "29px", paddingLeft: "20px" }} >
                          <option value="" disabled selected>
                            Select attendent Gender
                          </option>
                          {genderOptions.map((options)=>(
                            <option key={options} value={options}>
                              {options}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    


                    <div className="col-lg-6 col-md-6" >
                      <div className="form-box user-icon mb-30">
                        <select style={{ width: "250px", height: "29px", paddingLeft: "20px" }} onClick={getAllPatients}>
                          <option value="" disabled selected>
                            Select Patient Name
                          </option>
                          {patientList.map((patient)=>(
                            <option key={patient._id} value={patient.name}>
                              {patient.name}
                            </option>
                          ))}
                          {console.log(patientList)}
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-box user-icon mb-30">
                        <select style={{ width: "250px", height: "29px", paddingLeft: "20px" }} >
                          <option value="" disabled selected>
                            admitted
                          </option>
                          <option>
                            Yes
                          </option>
                          <option>
                            No
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-box user-icon mb-30">
                        <select style={{ width: "250px", height: "29px", paddingLeft: "20px" }} >
                          <option value="" disabled selected>
                            Select Time
                          </option>
                          <option>
                            5:00 AM
                          </option>
                          <option>
                            5:00 PM
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="submit-info">
                      <button className="btn" type="submit" >
                        Submit Now <i className="ti-arrow-right"></i>{" "}
                      </button>
                    </div>
                  </div>
            </form>
          </div>
        </div>
      </div>
    </div >
      {/* <!-- contact left Img--> */ }
      <div div className = "from-left d-none d-lg-block" >
        <img src={contact_form} alt="contact_image" />
        </div >
      </div >
    {/* <!-- Contact form End --> */ }
    </>
  );
}

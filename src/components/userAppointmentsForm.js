import React from "react";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import contact_form from "../assets/img/gallery/contact_form.png";
import { Link } from "react-router-dom";
import {
  getDoctors,
  addAppointment,
  getPatientsByUserId,
  getSchedule,
} from "../services/api";
const hours= ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM","12:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM"];

export default function Appointments() {
  const currentDate = new Date().toISOString().split("T")[0];
  const [appointment, setAppointment] = useState({
    attendent: "",
    attendentGender: "",
    caseStatus: "success",
    email: "",
    patientId: "",
    doctorId: "",
    date: "",
    time: "",
  });
  const [userId, setUserId] = useState(null);
  const genderOptions = ["Male", "Female"];
  const [patientList, setPatientList] = useState([]);
  const [doctorList, setDoctorList] = useState([]);
  const [timeList, setTimeList] = useState([]);
  

  let navigate = useNavigate();
  useEffect(() => {
    var token = localStorage.getItem("checking");
    if (token) {
      const decodedToken = jwtDecode(token);
      const { id } = decodedToken;
      setUserId(decodedToken.user.id);
    }
    getAllAvailableSchedule();
  }, [appointment.doctorId, appointment.date]);

  

  const getAllPatients = async () => {
    const list = await getPatientsByUserId(userId);
    setPatientList(list.data);
  };

  const getAllDoctors = async () => {
    const list = await getDoctors();
    setDoctorList(list.data);
  };

  const getAllAvailableSchedule = async () => {
    if (appointment.doctorId && appointment.date) {
      console.log(appointment.doctorId+appointment.date);
      const list = await getSchedule(appointment.doctorId, appointment.date);
      console.log(list.data);
      if (list.data.length === 0) {
        setTimeList(hours);
       
      } else {
        const timeavailable = hours.filter((hour) => {
          for (let i = 0; i < list.data.length; i++) {
            if (list.data[i].time === hour) {
              return false;
            }
          }
          return true;
        });
      
        setTimeList(timeavailable);
       
      }
      
    }
  };
  
 
  const onChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };
  const onClickAddAppointment = async () => {
   
   const json= await addAppointment(appointment);
   if(json.sucess)
    {navigate("/userDashboard/addPatient");}
  };
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
                <form id="contact-form" onSubmit={onClickAddAppointment}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box user-icon mb-30">
                        <input
                          onChange={onChange}
                          type="text"
                          name="attendent"
                          id="attendant"
                          placeholder="Attendent"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-box subject-icon mb-30">
                        <input
                          onChange={onChange}
                          type="Email"
                          name="email"
                          id="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>

                    {/* <div className="col-lg-12 col-md-12">
                      <div className="form-box user-icon mb-30">
                        <input
                          type="text"
                          id="checkupType"
                          name="checkupType"
                          onChange={onChange}
                          placeholder="CheckUp Type"
                          required
                        />
                      </div>
                    </div> */}

                    <div className="col-lg-6 col-md-6">
                      <div className="form-box user-icon mb-30">
                        <select
                          id="attendentGender"
                          name="attendentGender"
                          onChange={onChange}
                          style={{
                            width: "250px",
                            height: "29px",
                            paddingLeft: "20px",
                          }}
                          required
                        >
                          <option value="" >
                            Select attendent Gender
                          </option>
                          {genderOptions.map((options) => (
                            <option key={options} value={options}>
                              {options}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
{/* 
                    <div className="col-lg-12">
                      <div className="form-box user-icon mb-30">
                        <select  id="admitted" name="admitted" onChange={onChange} style={{ width: "250px", height: "29px", paddingLeft: "20px" }} required >
                          <option value="" disabled selected>
                            admitted
                          </option>
                          <option key="true" value="true">
                            Yes
                          </option>
                          <option key="false" value="false">
                            No
                          </option>
                        </select>
                      </div>
                    </div> */}

                    <div className="col-lg-6 col-md-6">
                      <div className="form-box user-icon mb-30">
                        <select
                          id="patientId"
                          name="patientId"
                          onChange={onChange}
                          style={{
                            width: "250px",
                            height: "29px",
                            paddingLeft: "20px",
                          }}
                          onClick={getAllPatients}
                          required
                        >
                          <option value="" >
                            Select Patient Name
                          </option>
                          {patientList.map((patient) => (
                            <option key={patient._id} value={patient._id}>
                              {patient.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box user-icon mb-30">
                        <select
                          id="doctorId"
                          name="doctorId"
                          onChange={onChange}
                          style={{
                            width: "250px",
                            height: "29px",
                            paddingLeft: "20px",
                          }}
                          onClick={getAllDoctors}
                          required
                        >
                          <option value="" disabled selected>
                            Select Doctor
                          </option>
                          {doctorList.map((doc) => (
                            <option key={doc._id} value={doc._id}>
                              {doc.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-box user-icon mb-30">
                        <input
                          type="date"
                          id="date"
                          className="expand"
                          name="date"
                          min="2023-05-04"
                          onChange={onChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-box user-icon mb-30">
                        <select
                          id="time"
                          name="time"
                          onChange={onChange}
                          style={{
                            width: "250px",
                            height: "29px",
                            paddingLeft: "20px",
                          }}
                          required
                        >
                          <option value="" >
                            Select Time
                          </option>
                          {timeList&&timeList.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="submit-info  mb-60 " align="center">
                      <button className="btn" type="submit">
                        Submit Now <i className="ti-arrow-right"></i>{" "}
                      </button>

                      <Typography  className="mb-60 "align="center"  >
                    <Link className="nav-link" to="/userDashboard/addPatient"  style={{ textDecoration: "underline" }}>


                      <br></br>
                      New Patient? Click to Register
                    </Link>
                  </Typography>
                 
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- contact left Img--> */}
        <div div className="from-left d-none d-lg-block">
          <img src={contact_form} alt="contact_image" />
        </div>
      </div>
      {/* <!-- Contact form End --> */}
    </>
  );
}

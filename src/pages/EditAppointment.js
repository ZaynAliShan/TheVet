import React from "react";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import contact_form from "../assets/img/gallery/contact_form.png";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import {
  getDoctors,
  addAppointment,
  getPatientsByUserId,
  getSchedule,
  updateAppointment
} from "../services/api";


const hours = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
];

export default function EditAppointments() {


    const { id } = useParams();
  const currentDate = new Date().toISOString().split("T")[0];

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate()+7);

const futureDate = maxDate.toISOString().split("T")[0];
  // const maxDate = new Date().toISOString().split("T")[0];
 

  const [appointment, setAppointment] = useState({
    id:"",
    attendent: "",
    attendentGender: "",
    caseStatus: "",
    email: "",
    patientId: "",
    patientName:"",
    doctorId: "",
    date: "",
    time: "",
    patients:[],
   
  });
  const [userId, setUserId] = useState(null);
  const genderOptions = ["Male", "Female"];
  const [patientList, setPatientList] = useState([]);
  const [doctorList, setDoctorList] = useState([]);
  const [initialValue, setInitialValue] = useState();
  const [initialdoc, setInitialDoc] = useState();
  const [initialdate, setInitialdate] = useState();
  const [initialtime, setInitialTime] = useState();

  const [timeList, setTimeList] = useState([
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
  ]);
  const [check, setCheck] = useState(true);

  let navigate = useNavigate();

 
  const getPatient = async () => {
   await  getAllPatients();
    
  };
  useEffect(() => {

   
   getPatient();
    getAllDoctors();
    getAppt(id);
   
    var token = localStorage.getItem("checking");
    if (token) {
      const decodedToken = jwtDecode(token);
      const { id } = decodedToken;
      setUserId(decodedToken.user.id);
    }
    // getAllAvailableSchedule();
  }, []);


  const getAppt= async (id) => {
    await fetch(`http://localhost:5000/api/appointment/ApptById/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
     
    })
      .then((response) => response.json())
      .then((data) => {
        
        setAppointment(data);
       
        setPatientList(data.patients);
        setInitialValue(data.time);
        setInitialDoc(data.doctorId);
        setInitialdate(data.date);
        setInitialTime(data.time);


        // setPhoneNumber(data.phone);
      });
  };

  const getAllPatients = async () => {
    const list = await getPatientsByUserId(userId);
   
    setPatientList(list.data);
  };

  const getAllDoctors = async () => {
    const list = await getDoctors();
   
    setDoctorList(list.data);
    // getAllAvailableSchedule();
  };

  const getAllAvailableSchedule = async () => {
    if (appointment.doctorId && appointment.date) {
      var list = await getSchedule(appointment.doctorId, appointment.date);
     

      if (list.data.length === 0) {
        setTimeList(hours);
      } else {
        var timeavailable = hours.filter((hour) => {
          for (let i = 0; i < list.data.length; i++) {
            if (list.data[i].time === hour) {
              return false;
            }
          }
          return true;
        });
        if (appointment.doctorId===initialdoc && appointment.date===initialdate)
        {
          timeavailable.push(initialtime);
        }
        setTimeList(timeavailable);
      }
    }
  };

  const onChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const onChangeDoctor = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
    // setAppointment({ ...appointment, ['time']:"" });
     setInitialValue("");
     getAllAvailableSchedule();
    
  
  };
  
  const onChangeTime = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
    // setAppointment({ ...appointment, ['time']:"" });
    setInitialValue(e.target.value);
  
    
    
  
  };
  const onChangeDate = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
    // setAppointment({ ...appointment, ['time']:"" });
    setInitialValue("");
    getAllAvailableSchedule();
    
    
  
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(appointment);

    
    const res=await updateAppointment(appointment,id);

    navigate("/userDashboard/userApppointments")
    // console.log(res);
      

    
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
                        <span>Appointment Update Form</span>
                        <h2>Appointment Update Form</h2>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--End Section Tittle  --> */}
                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-box user-icon mb-30">
                        <input
                          onChange={onChange}
                          type="text"
                          name="attendent"
                          id="attendant"
                          placeholder="Attendent"
                          value={appointment?.
                            attendent}
                          required
                        />
                      </div>
                    </div>

                    {/* <div className="col-lg-6 col-md-6">
                      <div className="form-box subject-icon mb-30">
                        <input
                          onChange={onChange}
                          type="Email"
                          name="email"
                          id="email"
                          placeholder="Email"
                          required
                          value={appointment?.email}
                        />
                      </div>
                    </div> */}

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
                          value={appointment.attendentGender}
                        >
                          <option value="">Select attendent Gender</option>
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
                        //   onClick={getAllPatients}
                          key={appointment?.patientId}
                          value={appointment?.patientId}
                          required
                        >
                          <option value=""  disabled selected>Select Patient Name</option>
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
                          onChange={onChangeDoctor}
                          style={{
                            width: "250px",
                            height: "29px",
                            paddingLeft: "20px",
                          }}
                          key={appointment?.doctorId}
                          value={appointment?.doctorId}
                        
                        //   onClick={getAllDoctors}
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
                        //   min={currentDate}
                        //   max={futureDate}
                         
                        //   value={appointment?.date}
                        //   required
                          defaultValue={appointment?.date}
                          onChange={onChangeDate}
                          required
                          
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-box user-icon mb-30">
                        <select
                          id="time"
                          name="time"
                          onChange={onChangeTime}
                          style={{
                            width: "250px",
                            height: "29px",
                            paddingLeft: "20px",
                          }}
                          value={initialValue}
                        //   defaultValue={appointment?.time}
                          onClick={getAllAvailableSchedule}
                          required
                        >
                          <option value="">Select Time</option>
                          {timeList &&
                            timeList.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>

                    <div className="submit-info">
                      <button className="btn" type="submit">
                        Submit Now <i className="ti-arrow-right"></i>{" "}
                      </button>
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

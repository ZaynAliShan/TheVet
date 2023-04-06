import React from "react";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import contact_form from "../assets/img/gallery/contact_form.png";
import { addAppointment, getPatientsByUserId, getSchedule} from "../services/api";

export default function Appointments() {
  const currentDate = new Date().toISOString().split('T')[0];
  const[appointment,setAppointment]= useState({
    attendent: "",
      attendentGender: "",
      checkupType: "",
      caseStatus: "success",
      admitted: true,
      email : '',
      patientId : '',
      date : '',
      time : "",
  });
  const [userId, setUserId] = useState(null);
  const genderOptions = ["Male", "Female"];
  const [patientList, setPatientList] = useState([]);
  const [timeList, setTimeList] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    var token = localStorage.getItem("checking");
   
    if (token) {
      const decodedToken = jwtDecode(token);
      const { id } = decodedToken;
      setUserId(decodedToken.user.id);
    }

    
  }, []);
  
  const getAllPatients = async ()=>{
  
    const list  = await getPatientsByUserId(userId);
    setPatientList(list.data);
  }

  const getAllAvailableSchedule = async ()=>{
    const list = await getSchedule();
    setTimeList(list.data);
  }
  const onChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };
  const onClickAddAppointment = async ()=>{
    const {attendent,attendentGender,checkupType,caseStatus,admitted,email,patientId ,date,time }=appointment;
    
    const adstaus=true;
    if (admitted=="false")
    {
      adstaus=false;

    }
    setAppointment((prevState) => ({
      ...prevState, // spread operator to copy existing values
      admitted: adstaus, // update breed property
    }));
    await addAppointment(appointment);

    console.log(appointment);
    // const response = await fetch("http://localhost:5000/api/appointment/add", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //   attendent: attendent,
    //   attendentGender: attendentGender,
    //   checkupType: checkupType,
    //   caseStatus: caseStatus,
    //   admitted: adstaus,
    //   email : email,
    //   patientId :patientId,
    //   date : date,
    //   time : time,
    //   }),
    // });

    //   const json = await response.json();
    //   console.log(json);

  
   

    navigate("/userDashboard/userApppointments");
   
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
                <form id="contact-form" onSubmit={onClickAddAppointment}>
                  <div className="row">

                    <div className="col-lg-6 col-md-6">
                      <div className="form-box user-icon mb-30">
                        <input  onChange={onChange} type="text" name="attendent" id ="attendant" placeholder="Attendent" required />
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
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-box user-icon mb-30">
                        <input type="text" id ="checkupType"name="checkupType" onChange={onChange} placeholder="CheckUp Type" required />
                      </div>
                    </div>

                    <div className="col-lg-12" >
                      <div className="form-box user-icon mb-30">
                        <select  id="attendentGender" name="attendentGender" onChange={onChange} style={{ width: "250px", height: "29px", paddingLeft: "20px" }} required >
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
                        <select  id="patientId" name="patientId" onChange={onChange} style={{ width: "250px", height: "29px", paddingLeft: "20px" }} onClick={getAllPatients} required>
                          <option value="" disabled selected>
                            Select Patient Name
                          </option>
                          {patientList.map((patient)=>(
                            <option key={patient._id} value={patient._id}>
                              {patient.name}
                            </option>
                          ))}
                         
                        </select>
                      </div>
                    </div>

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
                    </div>
                    <div className="col-lg-12">
                      <div className="form-box user-icon mb-30">
                        <select  id="time" name="time" onChange={onChange} style={{ width: "250px", height: "29px", paddingLeft: "20px" }} onClick={getAllAvailableSchedule }  required>
                          <option value="" disabled selected>
                            Select Time
                          </option>
                          {timeList.map((item)=>(
                            <option  key={item.time} value={item.time}>
                              {item.time}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div   className="form-box user-icon mb-30">
                      <input  type="date" id="date" className="expand" name="date" min="2023-05-04" onChange={onChange} required/>
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

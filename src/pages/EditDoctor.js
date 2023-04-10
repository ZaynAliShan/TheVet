import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import contact_form from "../assets/img/gallery/contact_form.png";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { useParams } from "react-router-dom";

export default function EditDoctor() {
  const [doctor, setDoctor] = useState();
  const genderOptions = ["Male", "Female"];
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [error, setError] = useState(false);
  const [errorsR, setErrorR] = useState("");
  let navigate = useNavigate();
  const { id } = useParams();
  const validatePhoneNumber = () => {
    if (!phoneNumber) {
      setPhoneNumberError("Phone number is required.");
    } else if (!isValidPhoneNumber(phoneNumber)) {
      setPhoneNumberError("Invalid phone number.");
    } else {
      setPhoneNumberError("");
    }
  };

  const getDoctor = async (id) => {
    await fetch(`http://localhost:5000/api/doctor/doctorById/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDoctor(data);
        setPhoneNumber(data.phone);
      });
  };
  useEffect(() => {
    getDoctor(id);
  }, []);
  const onChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(doctor);
    console.log(phoneNumber);

    const response = await fetch(`http://localhost:5000/api/doctor/updateDoctor/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: doctor.name,
          email: doctor.email,
          phone:phoneNumber,
          gender: doctor.gender,
          licenceNumber: doctor.licenceNumber,
          experience: doctor.experience,
        }),
      });
      const json = await response.json();
    
      setErrorR(json.errors);
     
      if(json.success)
  
      {
        setError(false);
        navigate("/dashboard/doctor");
    }
    else {
      
      setError(true);
    }
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
                        <span>Doctor Update Form</span>
                        <h2>Doctor Update Form</h2>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!--End Section Tittle  --> */}
                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box user-icon mb-30">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          onChange={onChange}
                          placeholder="Name"
                          value={doctor?.name}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-box subject-icon mb-30">
                        <input
                          type="Email"
                          name="email"
                          id="email"
                          onChange={onChange}
                          placeholder="Email"
                          value={doctor?.email}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-box user-icon mb-30">
                        <PhoneInput
                          id="phone"
                          name="phone"
                          value={phoneNumber}
                          onChange={setPhoneNumber}
                          onBlur={validatePhoneNumber}
                          required
                        />
                        {phoneNumberError && (
                          <div className="error">{phoneNumberError}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-box user-icon mb-30">
                        <select
                          style={{
                            width: "250px",
                            height: "29px",
                            paddingLeft: "20px",
                          }}
                          id="gender"
                          name="gender"
                          onChange={onChange}
                          required
                          value={doctor?.gender}
                        >
                          <option value="" disabled>
                            Select gender
                          </option>

                          {genderOptions.map((options) => (
                            <option key={options} value={options}>
                              {options}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-box user-icon mb-30">
                          <input
                            type="text"
                            onChange={onChange}
                            name="licenceNumber"
                            placeholder="LiscenceNumber"
                            value={doctor?.licenceNumber}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-box user-icon mb-30">
                          <input
                            type="experince"
                            onChange={onChange}
                            name="experience"
                            placeholder="Experience"
                            value={doctor?.experience}
                            required
                          />
                        </div>
                      </div>
                      {error && (
                        <div className="mb-3">
                          <label
                            htmlFor="errorMessage"
                            className="form-label"
                            style={{
                              fontSize: "16px",
                              color: "red",
                              fontWeight: "bold",
                            }}
                          >
                            Invalid Enteries!!{" "}
                            {!errorsR &&
                              "Email or liscence number already exists"}
                            {errorsR && errorsR.map((b) => <p>{b.msg}</p>)}
                          </label>
                        </div>
                      )}
                      <div className="submit-info">
                        <button className="btn" type="submit">
                          Submit Now <i className="ti-arrow-right"></i>{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- contact left Img--> */}
        <div className="from-left d-none d-lg-block">
          <img src={contact_form} alt="contact_image" />
        </div>
      </div>
      {/* <!-- Contact form End --> */}
    </>
  );
}

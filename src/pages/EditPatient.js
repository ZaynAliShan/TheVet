import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import contact_form from "../assets/img/gallery/contact_form.png";
import { useParams } from "react-router-dom";

//For DropDows
const animals = ["Cats", "Dogs", "Rabbits", "Hens"];
const Breeds = {
  Cats: [
    "Ragdoll",
    "Maine Coon Cat",
    "Exotic",
    "Persian",
    "Devon Rex",
    "British Shorthair",
    "Abyssinian",
    "American Shorthair",
    "Scottish Fold",
    "Companion Cat",
    "Sphynx",
  ],
  Dogs: [
    "Golden Retriever",
    "labrador Retriever",
    "French bulldog",
    "Beagle",
    "German shepherd Dog",
    "Poodle",
    "Bulldog",
  ],
  Rabbits: [
    "Holland Lop",
    "Mini Lop",
    "Dutch",
    "Lionhead",
    "French Lop",
    "Californian ",
    "Dwarf Papillon",
    "Netherland Dwarf",
  ],
  Hens: [
    "Ancona",
    "Andalusian",
    "Campine",
    "Fayoumi",
    "Hamburg",
    "Lakenvelder",
    "Leghorn",
    "Old English Bantam",
  ],
};
const genderOptions = ["Male", "Female", "Intersex"];

//To changing cascading dropdown options
const getBreeds = (animal) => {
  return Breeds[animal];
};
function getFirstBreed(breedName) {
  const breedArray = Breeds[breedName];
  return breedArray[0];
}

export default function EditPatient() {
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState(false);
  const [errorsR, setErrorR] = useState("");
  const [animalSelection, setAnimalSelection] = useState("");
  let navigate = useNavigate();
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [selectedAnimal, setSelectedAnimal] = useState(animals[0]);
  const [breeds, setBreeds] = useState(getBreeds(selectedAnimal));
  const [selectedBreed, setSelecteBreed] = useState(getFirstBreed(animals[0]));

  const getPatient = async (id) => {
    await fetch(`http://localhost:5000/api/patient/patientById/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPatient(data);
        setAnimalSelection(data.animalType);
        setBreeds(getBreeds(data.animalType));
        setSelecteBreed(data.breed);
      });
  };

  // const setBreedofInitial = async () => {

  //  await console.log(animalSelection);
  // };
  useEffect(() => {
    var token = localStorage.getItem("checking");
    if (token) {
      const decodedToken = jwtDecode(token);
      // const { id } = decodedToken;
      setUserId(decodedToken.user.id);
    }

    getPatient(id);
  }, []);

  const onChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };
  //To handling change of breed lists dynamically
  const onChangeBreed = (e) => {
    console.log(e.target.value);
    setSelecteBreed(e.target.value);
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleAnimalChange = (event) => {
    const animal = event.target.value;
    setSelectedAnimal(animal);
    setBreeds(getBreeds(animal));
    setSelecteBreed(getFirstBreed(animal));

    setPatient((prevState) => ({
      ...prevState, // spread operator to copy existing values
      breed: selectedBreed, // update breed property
    }));
    onChange(event);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, animalType, breed, gender, age } = patient;
    console.log(
      patient.name +
        patient.gender +
        patient.animalType +
        patient.breed +
        patient.age
    );
    console.log(selectedBreed);

    const response = await fetch(
      `http://localhost:5000/api/patient/updatePatient/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: patient.name,
          animalType: patient.animalType,
          breed: selectedBreed,
          gender: patient.gender,
          age: patient.age,
        }),
      }
    );
    const json = await response.json();

    setErrorR(json.errors);
    if (json.success) {
      setError(false);
      navigate("/userDashboard/showPatients");
    } else {
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
                        <span>Patient Update Form </span>
                        <h2>Patient Update Form</h2>
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
                          onChange={onChange}
                          name="name"
                          placeholder="Name"
                          defaultValue={patient?.name}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className=" form-box subject-icon  mb-30 single-element-widget mt-20">
                        <div className="default-select" id="default-select">
                          <select
                            value={patient?.animalType}
                            style={{
                              width: "250px",
                              height: "34px",
                              paddingLeft: "20px",
                            }}
                            onChange={handleAnimalChange}
                            name="animalType"
                            type="animalType"
                            placeholder="AnimalType"
                            required
                          >
                            <option value="" disabled selected>
                              Select Animal Type
                            </option>
                            {animals.map((animal) => (
                              <option key={animal} value={animal}>
                                {animal}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-box user-icon mb-30">
                        <select
                          value={patient?.breed}
                          style={{
                            width: "250px",
                            height: "29px",
                            paddingLeft: "20px",
                          }}
                          onChange={onChangeBreed}
                          id="breed"
                          name="breed"
                          required
                        >
                          {breeds.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-box user-icon mb-30">
                        <select
                          value={patient?.gender}
                          style={{
                            width: "250px",
                            height: "29px",
                            paddingLeft: "20px",
                          }}
                          id="gender"
                          name="gender"
                          onChange={onChange}
                          required
                        >
                          <option value="" disabled selected>
                            Select the Gender
                          </option>
                          {genderOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-box user-icon mb-30">
                          <input
                            type="number"
                            onChange={onChange}
                            name="age"
                            placeholder="Age"
                            defaultValue={patient?.age}
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
                            Invalid Enteries!! Please fill all the fields.
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

import React from "react";
import the_vet_logo from "../assets/img/TheVet (3).png";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black py-2">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center gap-2" href="/">
            <img
              src={the_vet_logo}
              alt="Nav img"
              height={"69px"}
              width={"89px"}
            />
            <span className="navTitle">TheVet</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mybar" id="navbarNav">
            <ul className="navbar-nav">
              {/* <li className="nav-item d-flex align-items-center">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/doctorDashboard"
                  style={{ color: "white" }}
                >
                  DOCTOR_DASHBOARD
                </Link>
              </li> */}
              <li className="nav-item d-flex align-items-center">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/home"
                  style={{ color: "white" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item d-flex align-items-center">
                <Link
                  className="nav-link"
                  to="/about"
                  style={{ color: "white" }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item d-flex align-items-center">
                <Link
                  className="nav-link"
                  to="/doctors"
                  style={{ color: "white" }}
                >
                  Doctors
                </Link>
              </li>
              <li className="nav-item d-flex align-items-center">
                <Link
                  className="nav-link"
                  to="/services"
                  style={{ color: "white" }}
                >
                  Department
                </Link>
              </li>
              <li className="nav-item d-flex align-items-center">
                <Link
                  className="nav-link"
                  to="/addData"
                  style={{ color: "white" }}
                >
                  Add Data
                </Link>
              </li>
              <li className="nav-item d-flex align-items-center">
                <Link
                  className="nav-link"
                  to="/contact"
                  style={{ color: "white" }}
                >
                  Contact
                </Link>
              </li>
              {/* <li
                className="nav-item d-flex align-items-center"
                style={{ listStyle: "none" }}
              >
                <Link to="/dashboard">Admin Dashboard</Link>
              </li> */}
              <li
                className="nav-item d-flex align-items-center"
                style={{ listStyle: "none" }}
              >
                <Link to="/login">
                  <button
                    type="button"
                    style={{
                      border: "none",
                      padding: "9px 9px 9px 9px",

                      borderRadius: "6px",

                      color: "#fff",

                      fontSize: "11px",

                      backgroundImage:
                        "linear-gradient(to left, #559af3, #6314f3, #559af3)",
                    }}
                    className="btn btn-primary"
                  >
                    LOGIN
                  </button>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/appointment">
                  <button type="button" className="btn btn-primary">
                    Book Appointment
                  </button>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

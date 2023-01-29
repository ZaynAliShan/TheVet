import React from "react";
import Navimg from "../assets/img/nav-icon-2.png";
import the_vet_logo from "../assets/img/TheVet (3).png"
import '../assets/css/style.css'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black py-2">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#">
            <img src={the_vet_logo} alt="Nav img" height={"69px"} width={"89px"}/><span className="navTitle">TheVet</span>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mybar" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item d-flex align-items-center">
                <a className="nav-link" aria-current="page" href="#" style={{color: "white"}}>Home</a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a className="nav-link" href="#" style={{color: "white"}}>About</a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a className="nav-link" href="#" style={{color: "white"}}>Doctors</a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a className="nav-link" href="#" style={{color: "white"}}>Department</a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a className="nav-link" href="#" style={{color: "white"}}>Contact</a>
              </li>
              <li className="nav-item d-flex align-items-center" style={{listStyle:"none"}}>
                <Link to="/dashboard">Admin Dashboard</Link>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-primary">Book Appointment</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
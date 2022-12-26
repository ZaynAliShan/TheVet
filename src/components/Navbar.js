import React from "react";
import Navimg from "../assets/img/nav-icon-2.png";
import '../assets/css/style.css'

export default function Navbar(props) {
  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
        <div className="container-fluid">
          <a className="navbar-brand navtitle-div" href="#">
            <img src={Navimg} alt="Nav img"/><span className="navTitle">TheVet</span>
          </a>


          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mybar" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#" style={{color: "white"}}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color: "white"}}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color: "white"}}>Doctors</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color: "white"}}>Department</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color: "white"}}>Contact</a>
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
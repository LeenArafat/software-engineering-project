// Tabarak
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavLink } from "react-router-dom";

function Header() {
  const linkClass = ({ isActive }) =>
    "nav-link fw-semibold px-2 py-1 d-flex align-items-center gap-1 " +
    (isActive ? "text-white bg-primary rounded-pill" : "text-dark");

  return (
    <nav
      className="navbar navbar-expand-lg py-3 shadow-sm"
      style={{ backgroundColor: "#f5e5b4" }}
    >
      <div className="container-fluid px-4">

       
        <NavLink className="navbar-brand fw-bold fs-2 text-primary" to="/">
          🦷 Tooth Heroes
        </NavLink>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarContent"
        >

         
          <ul className="navbar-nav mx-auto gap-lg-3 text-center">

            <li className="nav-item">
              <NavLink to="/" className={linkClass}>
                🏠 Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/child" className={linkClass}>
                👦 Child Zone
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/parent" className={linkClass}>
                👨‍👩‍👧 Parent
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/dentist" className={linkClass}>
                🧑‍⚕️ Dentist
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/clinics" className={linkClass}>
                🏥 Clinics
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/tips" className={linkClass}>
                🦷 Tips
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/profile" className={linkClass}>
                👤 Profile
              </NavLink>
            </li>

          </ul>

          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            <span className="fw-semibold text-secondary" style={{ fontSize: "14px" }}>
              Hi, Hero
            </span>

            <button className="btn btn-light rounded-pill px-3 fw-semibold" style={{ fontSize: "14px" }}>
              Logout
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Header;
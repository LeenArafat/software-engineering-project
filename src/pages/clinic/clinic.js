import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const clinics = [
  {
    name: "Bright Smiles Pediatric",
    address: "123 Main St",
    type: ["Pediatric", "Downtown"],
    rating: 4.8,
  },
  {
    name: "Happy Teeth Clinic",
    address: "456 Oak Ave",
    type: ["General", "Westside"],
    rating: 4.5,
  },
  {
    name: "Kids Dental Care",
    address: "789 Pine Rd",
    type: ["Pediatric", "Northside"],
    rating: 4.9,
  },
  {
    name: "SmileLab Orthodontics",
    address: "321 Elm St",
    type: ["Orthodontics", "Central"],
    rating: 4.6,
  },
  {
    name: "Gentle Dental Family",
    address: "654 Cedar Ln",
    type: ["General", "Eastside"],
    rating: 4.3,
  },
  {
    name: "Little Stars Dentistry",
    address: "987 Birch Dr",
    type: ["Pediatric", "Suburbs"],
    rating: 4.7,
  },
];

export default function Clinics() {
  const [filter, setFilter] = useState("All");

  const filteredClinics =
    filter === "All"
      ? clinics
      : clinics.filter((c) => c.type.includes(filter));

  return (
    <div style={{ backgroundColor: "#f7efd6", minHeight: "100vh" }} className="py-5">
      <div className="container">

      
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-2">🏥 Find a Clinic</h2>
          <p className="text-muted mb-0">
            Search and book the best dental clinics near you
          </p>
        </div>

       
        <div className="mb-4">
          <input
            className="form-control form-control-lg shadow-sm border-0 rounded-4"
            placeholder="Search clinics..."
          />
        </div>

    
        <div className="d-flex gap-2 mb-5 flex-wrap justify-content-center">
          <button
            onClick={() => setFilter("All")}
            className={`btn rounded-pill px-3 ${
              filter === "All" ? "btn-primary" : "btn-outline-primary"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("Pediatric")}
            className={`btn rounded-pill px-3 ${
              filter === "Pediatric" ? "btn-primary" : "btn-outline-primary"
            }`}
          >
            Pediatric
          </button>

          <button
            onClick={() => setFilter("General")}
            className={`btn rounded-pill px-3 ${
              filter === "General" ? "btn-primary" : "btn-outline-primary"
            }`}
          >
            General
          </button>

          <button
            onClick={() => setFilter("Orthodontics")}
            className={`btn rounded-pill px-3 ${
              filter === "Orthodontics" ? "btn-primary" : "btn-outline-primary"
            }`}
          >
            Orthodontics
          </button>
        </div>

     
        <div className="row g-4">
          {filteredClinics.map((c, i) => (
            <div key={i} className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4 h-100 p-3 hover-card">

                <h5 className="fw-bold mb-1">{c.name}</h5>
                <small className="text-muted">{c.address}</small>

                <div className="mt-3 d-flex gap-2 flex-wrap">
                  {c.type.map((t, idx) => (
                    <span
                      key={idx}
                      className="badge rounded-pill bg-light text-dark border px-3 py-2"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-3 d-flex align-items-center gap-2">
                  <span style={{ color: "#f5b301" }}>★</span>
                  <strong>{c.rating}</strong>
                  <small className="text-muted">/ 5</small>
                </div>

                <button className="btn btn-primary w-100 mt-4 rounded-3 py-2 fw-semibold">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .hover-card {
          transition: 0.2s ease-in-out;
        }
        .hover-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
          background: #fff;
border-radius: 16px;
box-shadow: 0 4px 12px rgba(0,0,0,0.05);
border: none;
        }
      `}</style>
    </div>
  );
}
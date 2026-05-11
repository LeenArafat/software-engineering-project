import "./home.css";
import { Link } from "react-router-dom";
export default function ChildDashboard() {
  const username = "User";

  return (
    <>

      <div className="dashboard-wrap">
        <span className="tooth-logo">🦷</span>
        <h1 className="welcome-title">Welcome back, {username}!</h1>
        <p className="welcome-sub">What would you like to do today?</p>

        <div className="brush-card" onClick={() => alert("Starting brushing activity!")} >
          <span className="brush-emoji">🪥</span>
          <p className="brush-title">Start Brushing</p>
          <p className="brush-desc">Begin your brushing activity!</p>
        </div>

        <Link to="/tips" className="tips-btn" style={{ textDecoration: "none" }}>
          <span>🦷</span> View Dental Tips
        </Link>
      </div>
    </>
  );
}
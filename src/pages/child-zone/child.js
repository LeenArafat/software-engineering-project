import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ChildZone() {

  const [timeLeft, setTimeLeft] = useState(120);
  const [isRunning, setIsRunning] = useState(false);

  const [user, setUser] = useState({
    name: "User",
    totalBrushSessions: 12,
    currentStreak: 5,
    lastBrushDate: null,
  });

  const [unlockedBadges, setUnlockedBadges] = useState([
    "first_brush",
    "streak_3",
  ]);

  const badgesList = [
    { id: "first_brush", name: "First Brush", icon: "⭐" },
    { id: "streak_3", name: "3-Day Streak", icon: "🔥" },
    { id: "week_champion", name: "Week Champion", icon: "🏆" },
    { id: "perfect_month", name: "Perfect Month", icon: "💎" },
    { id: "dental_king", name: "Dental King", icon: "👑" },
  ];

  const dentalTips = [
    { icon: "🪥", text: "Brush for 2 minutes, twice a day!" },
    { icon: "🧵", text: "Don't forget to floss every day!" },
    { icon: "🍎", text: "Eat crunchy fruits — they clean your teeth!" },
    { icon: "💧", text: "Drink water, stay hydrated!" },
  ];

  useEffect(() => {
    let timer;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      setIsRunning(false);

      setUser((prev) => ({
        ...prev,
        totalBrushSessions: prev.totalBrushSessions + 1,
        currentStreak: prev.currentStreak + 1,
      }));

      alert("🎉 Great Job! Brushing Complete!");
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startBrushing = () => {
    setTimeLeft(120);
    setIsRunning(true);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div
      style={{
        background: "#f6f0df",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >

      <div className="container py-4 text-center mb-4">

        <div style={{ fontSize: "60px" }}>🦷</div>

        <h1
          style={{
            color: "#9c3aed",
            fontWeight: "800",
            fontSize: "3rem",
          }}
        >
          Hey {user.name}! 👋
        </h1>

        <p
          style={{
            color: "#64748b",
            fontSize: "1.3rem",
          }}
        >
          Ready to brush those teeth?
        </p>

        {/* STATS INSIDE HEADER */}
        <div className="row g-4 mt-3">

          <div className="col-md-6">
            <div
              style={{
                background: "#f9ecd7",
                borderRadius: "24px",
                padding: "25px",
                border: "1px solid #f4d6aa",
              }}
            >
              <div style={{ fontSize: "40px" }}>🔥</div>
              <h2 style={{ color: "#ea580c", fontWeight: "800" }}>
                {user.currentStreak} Days
              </h2>
              <p className="text-muted">Streak</p>
            </div>
          </div>

          <div className="col-md-6">
            <div
              style={{
                background: "#f7f2c7",
                borderRadius: "24px",
                padding: "25px",
                border: "1px solid #e8dd83",
              }}
            >
              <div style={{ fontSize: "40px" }}>⭐</div>
              <h2 style={{ color: "#d97706", fontWeight: "800" }}>
                {user.totalBrushSessions} Stars
              </h2>
              <p className="text-muted">Collected</p>
            </div>
          </div>

        </div>
      </div>

      <div className="container py-5">

       
        <div
          style={{
            background: "#efecff",
            borderRadius: "28px",
            padding: "70px 30px",
            textAlign: "center",
            border: "2px solid #dccfff",
          }}
        >
          <div style={{ fontSize: "60px" }}>🪥</div>

          <button
            onClick={startBrushing}
            style={{
              background: "linear-gradient(135deg,#c026d3,#9333ea)",
              color: "white",
              border: "none",
              padding: "20px 50px",
              borderRadius: "22px",
              fontSize: "2rem",
              fontWeight: "700",
              marginTop: "20px",
              boxShadow: "0 8px 20px rgba(147,51,234,.3)",
            }}
          >
            Start Brushing Activity!
          </button>

          <p
            style={{
              marginTop: "20px",
              color: "#64748b",
              fontSize: "1.3rem",
            }}
          >
            2 minutes of brushing fun!
          </p>

          {isRunning && (
            <div
              style={{
                marginTop: "30px",
                fontSize: "3rem",
                fontWeight: "800",
                color: "#9333ea",
              }}
            >
              {formatTime(timeLeft)}
            </div>
          )}
        </div>

        

<div className="mt-5">
  <h2 style={{ color: "#9333ea", fontWeight: "800" }}>
    🏆 My Badges
  </h2>

  <div className="row g-3 mt-2">
    {badgesList.map((badge) => (
      <div className="col-md-2 col-6" key={badge.id}>
        <div
          style={{
            background: "#faf7dc",
            borderRadius: "18px",
            padding: "25px",
            textAlign: "center",
            border: "1px solid #e7d56c",
            opacity: 1,
          }}
        >
          <div style={{ fontSize: "40px" }}>{badge.icon}</div>

          <div
            style={{
              marginTop: "10px",
              fontWeight: "700",
              fontSize: "14px",
            }}
          >
            {badge.name}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

        
        <div className="mt-5">
          <h2 style={{ color: "#9333ea", fontWeight: "800" }}>
            💡 Fun Dental Tips
          </h2>

          <div className="row g-3 mt-2">
            {dentalTips.map((tip, index) => (
              <div className="col-lg-3 col-md-4" key={index}>
                <div
                  style={{
                    background: "#eef2ff",
                    borderRadius: "20px",
                    padding: "25px",
                    minHeight: "150px",
                  }}
                >
                  <div style={{ fontSize: "40px", marginBottom: "15px" }}>
                    {tip.icon}
                  </div>
                  <div style={{ color: "#1e293b", fontWeight: "600" }}>
                    {tip.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
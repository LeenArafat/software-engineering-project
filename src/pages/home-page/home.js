export default function ChildDashboard() {
  const username = "User";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');

        body {
          font-family: 'Nunito', sans-serif;
          background: #f3f4f6;
          min-height: 100vh;
          margin: 0;
        }

        .dashboard-wrap {
          min-height: 100vh;
          background: #f3f4f6;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 3.5rem 1rem 2rem;
        }

        .tooth-logo {
          font-size: 3rem;
          display: block;
          text-align: center;
          animation: bounce 2.5s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-6px); }
        }

        .welcome-title {
          font-size: 1.9rem;
          font-weight: 800;
          color: #1e293b;
          text-align: center;
          margin: 0.6rem 0 0.25rem;
        }

        .welcome-sub {
          font-size: 0.95rem;
          color: #94a3b8;
          font-weight: 600;
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .brush-card {
          background: #ffffff;
          border-radius: 20px;
          border: 1.5px solid #e2e8f0;
          padding: 2.5rem 3rem;
          width: 100%;
          max-width: 440px;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          margin-bottom: 1.25rem;
          text-decoration: none;
        }

        .brush-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
          border-color: #bfdbfe;
        }

        .brush-emoji {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
          display: block;
          animation: wiggle 3s ease-in-out infinite;
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(-8deg); }
          50%       { transform: rotate(8deg); }
        }

        .brush-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #1e293b;
          margin: 0 0 0.25rem;
          text-align: center;
        }

        .brush-desc {
          font-size: 0.875rem;
          font-weight: 600;
          color: #94a3b8;
          text-align: center;
          margin: 0;
        }

        .tips-btn {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 50px;
          padding: 0.65rem 1.75rem;
          font-family: 'Nunito', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .tips-btn:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
        }
      `}</style>

      <div className="dashboard-wrap">
        <span className="tooth-logo">🦷</span>
        <h1 className="welcome-title">Welcome back, {username}!</h1>
        <p className="welcome-sub">What would you like to do today?</p>

        <div
          className="brush-card"
          onClick={() => alert("Starting brushing activity!")}
        >
          <span className="brush-emoji">🪥</span>
          <p className="brush-title">Start Brushing</p>
          <p className="brush-desc">Begin your brushing activity!</p>
        </div>

        <button className="tips-btn">
          <span>🦷</span>
          View Dental Tips
        </button>
      </div>
    </>
  );
}

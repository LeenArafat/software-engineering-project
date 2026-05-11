export default function DentistPortal() {
  const appointments = [
    { id: 1, name: "Emma Johnson",  time: "9:00 AM",   type: "Checkup",  status: "confirmed" },
    { id: 2, name: "Liam Smith",    time: "10:30 AM",  type: "Cleaning", status: "confirmed" },
    { id: 3, name: "Sophia Brown",  time: "1:00 PM",   type: "Filling",  status: "pending"   },
    { id: 4, name: "Noah Davis",    time: "3:00 PM",   type: "Checkup",  status: "confirmed" },
  ];

  const reports = [
    { id: 1, name: "Emma Johnson",  info: "Age 8 • Last visit: 2 weeks ago",  compliance: 92 },
    { id: 2, name: "Liam Smith",    info: "Age 6 • Last visit: 1 month ago",  compliance: 75 },
    { id: 3, name: "Sophia Brown",  info: "Age 10 • Last visit: 3 weeks ago", compliance: 88 },
  ];

  const messages = [
    { id: 1, from: "Mrs. Johnson", preview: "Emma has been complaining about sensitivity...", ago: "2h ago" },
    { id: 2, from: "Mr. Smith",    preview: "Can we reschedule Liam's appointment to...",     ago: "5h ago" },
  ];

  const complianceColor = (v) => {
    if (v >= 90) return "#22c55e";
    if (v >= 75) return "#f59e0b";
    return "#ef4444";
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');

        body {
          font-family: 'Nunito', sans-serif;
          background: #f3f4f6;
          margin: 0;
        }

        .portal-wrap {
          min-height: 100vh;
          background: #f3f4f6;
          padding: 2rem 2.5rem;
          max-width: 1300px;
          margin: 0 auto;
        }

        .page-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #1e293b;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1.5rem;
        }

        .dk-card {
          background: #ffffff;
          border-radius: 18px;
          border: 1.5px solid #e2e8f0;
          padding: 1.5rem;
        }

        /* Doctor profile */
        .doctor-avatar {
          width: 64px;
          height: 64px;
          background: #f1f5f9;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          flex-shrink: 0;
        }

        .doctor-name {
          font-size: 1.2rem;
          font-weight: 800;
          color: #1e293b;
          margin: 0 0 0.15rem;
        }

        .doctor-sub {
          font-size: 0.85rem;
          font-weight: 600;
          color: #94a3b8;
          margin: 0 0 0.6rem;
        }

        .badge-tag {
          font-size: 0.78rem;
          font-weight: 700;
          color: #475569;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          border-radius: 50px;
          padding: 3px 12px;
          display: inline-block;
          margin-right: 6px;
        }

        /* Section headers */
        .section-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #1e293b;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 1rem;
        }

        /* Appointment rows */
        .appt-row {
          background: #f8fafc;
          border-radius: 12px;
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.6rem;
        }

        .appt-name {
          font-size: 0.92rem;
          font-weight: 800;
          color: #1e293b;
          margin: 0 0 0.1rem;
        }

        .appt-info {
          font-size: 0.8rem;
          font-weight: 600;
          color: #94a3b8;
          margin: 0;
        }

        .badge-confirmed {
          font-size: 0.78rem;
          font-weight: 700;
          background: #3b82f6;
          color: #fff;
          border-radius: 50px;
          padding: 4px 14px;
          white-space: nowrap;
        }

        .badge-pending {
          font-size: 0.78rem;
          font-weight: 700;
          background: #fff;
          color: #94a3b8;
          border: 1.5px solid #e2e8f0;
          border-radius: 50px;
          padding: 4px 14px;
          white-space: nowrap;
        }

        /* Report rows */
        .report-row {
          background: #f8fafc;
          border-radius: 12px;
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.6rem;
        }

        .report-name {
          font-size: 0.92rem;
          font-weight: 800;
          color: #1e293b;
          margin: 0 0 0.1rem;
        }

        .report-info {
          font-size: 0.8rem;
          font-weight: 600;
          color: #94a3b8;
          margin: 0;
        }

        .compliance-val {
          font-size: 1rem;
          font-weight: 800;
          text-align: right;
        }

        .compliance-label {
          font-size: 0.72rem;
          font-weight: 600;
          color: #94a3b8;
          text-align: right;
        }

        /* Message rows */
        .msg-row {
          background: #f8fafc;
          border-radius: 12px;
          padding: 0.85rem 1rem;
          margin-bottom: 0.6rem;
          cursor: pointer;
          transition: background 0.15s;
        }

        .msg-row:hover { background: #f1f5f9; }

        .msg-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.2rem;
        }

        .msg-from {
          font-size: 0.9rem;
          font-weight: 800;
          color: #1e293b;
          margin: 0;
        }

        .msg-ago {
          font-size: 0.78rem;
          font-weight: 600;
          color: #94a3b8;
        }

        .msg-preview {
          font-size: 0.82rem;
          font-weight: 600;
          color: #94a3b8;
          margin: 0;
        }
      `}</style>

      <div className="portal-wrap">

        {/* Page Title */}
        <h1 className="page-title">
          <span>👩‍⚕️</span> Dentist Portal
        </h1>

        {/* Doctor Profile Card */}
        <div className="dk-card mb-4">
          <div className="d-flex align-items-center gap-3">
            <div className="doctor-avatar">👩‍⚕️</div>
            <div>
              <p className="doctor-name">Dr. Sarah Miller</p>
              <p className="doctor-sub">Pediatric Dentistry • 8 years experience</p>
              <span className="badge-tag">Pediatrics</span>
              <span className="badge-tag">Orthodontics</span>
            </div>
          </div>
        </div>

        {/* Appointments + Reports Row */}
        <div className="row g-4 mb-4">

          {/* Today's Appointments */}
          <div className="col-12 col-lg-6">
            <div className="dk-card h-100">
              <p className="section-title">📅 Today's Appointments</p>
              {appointments.map((a) => (
                <div className="appt-row" key={a.id}>
                  <div>
                    <p className="appt-name">{a.name}</p>
                    <p className="appt-info">{a.time} • {a.type}</p>
                  </div>
                  {a.status === "confirmed"
                    ? <span className="badge-confirmed">confirmed</span>
                    : <span className="badge-pending">pending</span>
                  }
                </div>
              ))}
            </div>
          </div>

          {/* Patient Reports */}
          <div className="col-12 col-lg-6">
            <div className="dk-card h-100">
              <p className="section-title">👥 Patient Reports</p>
              {reports.map((r) => (
                <div className="report-row" key={r.id}>
                  <div>
                    <p className="report-name">{r.name}</p>
                    <p className="report-info">{r.info}</p>
                  </div>
                  <div>
                    <p className="compliance-val" style={{ color: complianceColor(r.compliance) }}>
                      {r.compliance}%
                    </p>
                    <p className="compliance-label">compliance</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="dk-card">
          <p className="section-title">💬 Messages</p>
          {messages.map((m) => (
            <div className="msg-row" key={m.id}>
              <div className="msg-header">
                <p className="msg-from">{m.from}</p>
                <span className="msg-ago">{m.ago}</span>
              </div>
              <p className="msg-preview">{m.preview}</p>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

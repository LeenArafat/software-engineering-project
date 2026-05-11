import { useState } from "react";

const roles = [
  { id: "child", label: "Child", emoji: "🧒", hint: "Fun brushing activities & rewards" },
  { id: "parent", label: "Parent", emoji: "👨‍👩‍👧", hint: "Monitor your child's progress" },
  { id: "dentist", label: "Dentist", emoji: "👩‍⚕️", hint: "Manage your patients" },
];

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState("child");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const currentHint = roles.find((r) => r.id === selectedRole)?.hint || "";

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signing in as ${selectedRole}: ${email}`);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');

        body {
          font-family: 'Nunito', sans-serif;
          background: linear-gradient(135deg, #dbeafe 0%, #f0f9ff 40%, #fef3c7 100%);
          min-height: 100vh;
          margin: 0;
        }

        .login-card {
          background: #ffffff;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.04);
          max-width: 460px;
          width: 100%;
          padding: 2.5rem 2.25rem;
          animation: slideUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .tooth-logo {
          font-size: 3rem;
          display: block;
          text-align: center;
          filter: drop-shadow(0 4px 8px rgba(96, 165, 250, 0.3));
          animation: bounce 2.5s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-6px); }
        }

        .brand-title {
          font-size: 1.65rem;
          font-weight: 800;
          color: #1e3a5f;
          letter-spacing: -0.3px;
        }

        .brand-subtitle {
          font-size: 0.875rem;
          color: #94a3b8;
          font-weight: 600;
        }

        .form-control {
          border: 2px solid #e2e8f0 !important;
          border-radius: 12px !important;
          padding: 0.75rem 1rem !important;
          font-family: 'Nunito', sans-serif !important;
          font-weight: 600 !important;
          font-size: 0.9rem !important;
          color: #334155 !important;
          transition: border-color 0.2s, box-shadow 0.2s !important;
          background: #f8fafc !important;
        }

        .form-control:focus {
          border-color: #3b82f6 !important;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.12) !important;
          background: #ffffff !important;
        }

        .form-control::placeholder {
          color: #cbd5e1 !important;
          font-weight: 600 !important;
        }

        .role-label {
          font-size: 0.8rem;
          font-weight: 800;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }

        .role-btn {
          border: 2px solid #e2e8f0 !important;
          border-radius: 14px !important;
          background: #f8fafc !important;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
          padding: 0.75rem 0.5rem !important;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          text-align: center;
        }

        .role-btn:hover {
          border-color: #93c5fd !important;
          background: #eff6ff !important;
          transform: translateY(-2px);
        }

        .role-btn.active {
          border-color: #3b82f6 !important;
          background: #eff6ff !important;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.12) !important;
          transform: translateY(-2px);
        }

        .role-emoji {
          font-size: 1.75rem;
          line-height: 1;
        }

        .role-text {
          font-size: 0.8rem;
          font-weight: 800;
          color: #334155;
        }

        .role-hint {
          font-size: 0.8rem;
          font-weight: 600;
          color: #64748b;
          text-align: center;
          min-height: 1.2em;
          transition: opacity 0.2s;
        }

        .btn-signin {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%) !important;
          border: none !important;
          border-radius: 14px !important;
          padding: 0.85rem !important;
          font-family: 'Nunito', sans-serif !important;
          font-size: 1rem !important;
          font-weight: 800 !important;
          letter-spacing: 0.3px;
          color: #ffffff !important;
          transition: all 0.2s !important;
          box-shadow: 0 4px 16px rgba(59, 130, 246, 0.35) !important;
        }

        .btn-signin:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.45) !important;
          filter: brightness(1.05);
        }

        .btn-signin:active {
          transform: translateY(0);
        }

        .register-text {
          font-size: 0.875rem;
          font-weight: 600;
          color: #94a3b8;
        }

        .register-link {
          color: #3b82f6 !important;
          font-weight: 800 !important;
          text-decoration: none !important;
          transition: color 0.15s;
        }

        .register-link:hover {
          color: #2563eb !important;
          text-decoration: underline !important;
        }

        .pass-toggle {
          background: none;
          border: none;
          cursor: pointer;
          color: #94a3b8;
          font-size: 1rem;
          padding: 0 0.5rem;
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          transition: color 0.15s;
        }

        .pass-toggle:hover { color: #3b82f6; }

        .divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #e2e8f0, transparent);
          margin: 0.5rem 0;
        }
      `}</style>

      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh", padding: "2rem 1rem" }}
      >
        <div className="login-card">
          {/* Logo & Title */}
          <div className="text-center mb-4">
            <span className="tooth-logo">🦷</span>
            <h1 className="brand-title mt-2 mb-1">DentaKids</h1>
            <p className="brand-subtitle mb-0">Welcome back! Sign in to continue</p>
          </div>

          <div className="divider mb-4" />

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4 position-relative">
              <input
                type={showPass ? "text" : "password"}
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ paddingRight: "3rem" }}
              />
              <button
                type="button"
                className="pass-toggle"
                onClick={() => setShowPass(!showPass)}
                aria-label="Toggle password visibility"
              >
                {showPass ? "🙈" : "👁️"}
              </button>
            </div>

            {/* Role Selector */}
            <div className="mb-3">
              <p className="role-label mb-2">I am a:</p>
              <div className="d-flex flex-row gap-2">
                {roles.map((role) => (
                  <button
                    key={role.id}
                    type="button"
                    className={`role-btn ${selectedRole === role.id ? "active" : ""}`}
                    onClick={() => setSelectedRole(role.id)}
                  >
                    <span className="role-emoji">{role.emoji}</span>
                    <span className="role-text">{role.label}</span>
                  </button>
                ))}
              </div>
              <p className="role-hint mt-2">{currentHint}</p>
            </div>

            {/* Sign In Button */}
            <button type="submit" className="btn btn-signin w-100 mb-3">
              Sign In
            </button>
          </form>

          {/* Register */}
          <p className="register-text text-center mb-0">
            Don't have an account?{" "}
            <a href="/register" className="register-link">
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

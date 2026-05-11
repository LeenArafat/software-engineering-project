import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

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
  const [errors, setErrors] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const currentHint = roles.find((r) => r.id === selectedRole)?.hint || "";

  const handleSubmit = (e) => {
    e.preventDefault();

    // إعادة تعيين الأخطاء
    setErrors({ email: "", password: "" });

    let hasError = false;

    // تحقق من وجود الإيميل
    if (!email.trim()) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      hasError = true;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
      hasError = true;
    }

    // تحقق من وجود كلمة السر
    if (!password) {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
      hasError = true;
    } else if (password.length < 6) {
      setErrors((prev) => ({ ...prev, password: "Password must be at least 6 characters" }));
      hasError = true;
    }

    // إذا لا توجد أخطاء، انتقل للصفحة التالية
    if (!hasError) {
      navigate("/home");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", padding: "2rem 1rem" }}>
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
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          {/* Password */}
          <div className="mb-4 position-relative">
            <input
              type={showPass ? "text" : "password"}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
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
          <button type="submit" className="btn btn-primary w-100 mb-3" style={{ color: "black" }}>
            Sign In
          </button>
        </form>

        {/* Register */}
        <p className="register-text text-center mb-0">
          Don't have an account?{" "}
          <a className="register-link"> Register </a>
        </p>
      </div>
    </div>
  );
}
import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [mode, setMode] = useState("SignUp");
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUp, user, Login } = useContext(AuthContext);
  const navigate = useNavigate();

  function onSubmit(data) {
    setError(null);
    let result;
    if (mode === "SignUp") {
      result = signUp(data.email, data.password);
    } else {
      result = Login(data.email, data.password);
    }

    if (result.success) {
      navigate("/");
    } else {
      setError(result.error);
    }
  }
  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <h1 className="page-title">
            {mode === "SignUp" ? "SignUp" : "Login"}
          </h1>
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            {error && <div className="error-message">{error}</div>}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email{" "}
              </label>
              <input
                type="email"
                className="form-input"
                id="email"
                {...register("email", { required: "email is required" })}
              />
              {errors.email && (
                <span className="form-error">{errors.email.message}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password{" "}
              </label>
              <input
                type="password"
                className="form-input"
                id="password"
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "password must be atleast 6 characters",
                  },
                })}
              />
              {errors.password && (
                <span className="form-error">{errors.password.message}</span>
              )}
            </div>
            <button className="btn btn-secondary" type="submit">
              {mode === "SignUp" ? "SignUp" : "Login"}
            </button>
          </form>
          <div className="auth-switch">
            {mode === "SignUp" ? (
              <p>
                Already have an account ?{" "}
                <span className="auth-link" onClick={() => setMode("Login")}>
                  Login
                </span>{" "}
              </p>
            ) : (
              <p>
                dont have an account ?{" "}
                <span className="auth-link" onClick={() => setMode("SignUp")}>
                  SignUp
                </span>{" "}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;

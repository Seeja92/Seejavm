"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const [emailId, setEmailId] = useState("");
  const onEmailId = ($email: any) => {
    setEmailId($email.target.value);
  };
  const [password, setPassword] = useState("");
  const onPassword = ($pwd: any) => {
    setPassword($pwd.target.value);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow">
        <h4 className="text-center mb-4">Login</h4>
        <form>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              onChange={onEmailId}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              onChange={onPassword}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label className="form-check-label">Remember me</label>
          </div>

          <button
            type="button"
            onClick={() => {
              router.push("/");
            }}
          >
            Login
          </button>
          <div className="mt-3">
            <button
              type="button"
              className="btn btn-primary w-50"
              onClick={() => {
                router.push("/");
              }}
            >
              Back
            </button>
          </div>
        </form>
        <p className="text-center mt-3">
          Forgot password? <a href="#">Click here</a>
          <br />
          Don't have an account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;

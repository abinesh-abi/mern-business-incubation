import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Login.css";
import axios from "axios";
import CONFIG from "../../config/config";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Login({ admin }) {
  let isUserLooged = localStorage.getItem("userToken")
  let isAdminLooged = localStorage.getItem("adminToken")
  
  let [loginError, setLoginError] = useState("");

  let navigate = useNavigate();

  // react-hook-form configoration
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let api = "/login",
    path = "/";
  if (admin) {
    api = "/admin/login";
    path = "/admin";
  }

  useEffect(()=>{
    if (admin && isAdminLooged) {
      navigate('/admin')
    }
    if (!admin && isUserLooged) {
      navigate('/')
    }
  },[])

  const onSubmit = (data) => {
    axios.post(`${CONFIG.SERVER_URL + api}`, data).then((response) => {
      if (response.data.status) {
        if (admin) {
          localStorage.setItem("adminToken", response.data.adminToken);
        } else localStorage.setItem("userToken", response.data.userToken);
        navigate(path);
      } else setLoginError(response.data.message);
    });
  };
  return (
    <div>
      <div className="body-background">
        <div className="container-fluid d-flex justify-content-center align-items-center h-100">
          <div className="card p-3 text-center py-4">
            <h4>{admin && "Admin"} Login</h4>
            {!admin && (
              <>
                <div>
                  <span>Don't have an account?</span>
                  <Link to="/signup" className="text-decoration-none">
                    Signup
                  </Link>
                </div>
                <div>
                  <span>Are you admin ?</span>
                  <Link to="/admin/login" className="text-decoration-none">
                    Admin Login
                  </Link>
                </div>
              </>
            )}
            {admin && (
              <div>
                <span>Are You User ?</span>
                <Link to="/login" className="text-decoration-none">
                  User Login
                </Link>
              </div>
            )}
            <div className="text-danger mt-2">{loginError}</div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-3 px-3">
                <input
                  className="form-control"
                  placeholder="E-mail"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                  })}
                />
                <span className="text-danger">
                  {errors.email?.type === "required" && (
                    <span>Email is required</span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span>Enter valied Email</span>
                  )}
                </span>
              </div>
              <div className="mt-3 px-3">
                <input
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 4,
                    maxLength: 20,
                  })}
                />
                <span className="text-danger">
                  {errors.password?.type === "required" && (
                    <span>Password is required</span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span>Password must morethan or equal to 4 digit</span>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <span>Password must less than 20 digit</span>
                  )}
                </span>
              </div>

              <div className="mt-3 d-grid px-3">
                <button
                  className="btn btn-primary btn-block btn-signup text-uppercase"
                  type="submit"
                >
                  <span>Login</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

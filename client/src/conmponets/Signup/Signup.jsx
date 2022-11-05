import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Signup.css";
import axios from "axios";
import CONFIG from "../../config/config";
import { useState } from "react";

function Signup() {

  let [signupError,setSignupError] =useState('')

let navigate =  useNavigate()
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios.post(`${CONFIG.SERVER_URL}/signup`, data).then((response) => {
      if (response.data.status) {
        localStorage.setItem('userToken',response.data.userToken)
      navigate('/')
      }else setSignupError(response.data.message)
    });
  };

  return (
    <div>
      <div className="body-background">
        <div className="container-fluid d-flex justify-content-center align-items-center h-100">
          <div className="card p-3 text-center py-4">
            <h4>Create account</h4>
            <div>
              <span>Already have an account?</span>
              <Link to="/login" className="text-decoration-none">
                Signin
              </Link>
            </div>
            <div className="text-danger mt-2">{signupError}</div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-3 px-3">
                <input
                  className="form-control"
                  placeholder="Username"
                  {...register("name", {
                    required: true,
                    pattern:
                    /^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/,
                  })}
                />
                <span className="text-danger">
                  {errors.name?.type === "required" && (
                    <span>Name is required</span>
                  )}
                  {errors.name?.type === "pattern" && (
                    <span>Enter valied Name</span>
                  )}
                </span>
              </div>

              <div className="px-3 mt-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                  })}
                />
                <p className="text-danger">
                  {errors.email?.type === "required" && (
                    <span>Email is required</span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span>Enter valied Email</span>
                  )}
                </p>
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
                <button className="btn btn-primary btn-block btn-signup text-uppercase">
                  <span>Signup</span>
                </button>
              </div>
            </form>
            {/* <div className="px-3">
              <div className="mt-2 form-check d-flex flex-row">
              <input className="form-check-input" type="checkbox" value="" id="services"/>
              <label className="form-check-label ms-2" for="services">
                I have read and agree to the terms.
              </label>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

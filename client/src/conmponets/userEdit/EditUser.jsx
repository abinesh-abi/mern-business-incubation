import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {Link, useNavigate, useParams} from "react-router-dom"
import CONFIG from '../../config/config'

function EditUser() {

    let [loginError , setLoginError] = useState('')
    let navigate = useNavigate()

    let params = useParams()
    let [user,setUser] = useState({})
    useEffect(()=>{
        axios.get(`${CONFIG.SERVER_URL}/admin/getUserById/${params.id}`)
        .then(({data})=>{
            setUser(data.data)
        })
    },[])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let _id = params.id
    axios.post(`${CONFIG.SERVER_URL}/admin/editUser`, {_id,data}).then(({data}) => {
        console.log(data)
        data?.status ? navigate('/admin/usermanagement'):
        setLoginError(data?.message)
    });
  };

  return (
    <>
        <div>
      <div className="body-background">
        <div className="container-fluid d-flex justify-content-center align-items-center h-100">
          <div className="card p-3 text-center py-4">
            <h4>Edit User</h4>
            <div className="text-danger mt-2">{loginError?loginError:''}</div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-3 px-3">
                <input
                  className="form-control"
                  placeholder="E-mail"
                  defaultValue={user.name}
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
              <div className="mt-3 px-3">
                <input
                  className="form-control"
                  placeholder="Password"
                  defaultValue={user.email}
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
        </>
  )
}

export default EditUser
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CONFIG from '../../config/config'
import NavBar from '../NavBar/NavBar'
import Sidebar from '../SideBar/Sidebar'
import ApplicantListComponent from './ApplicantListComponent'

function ApplicantList() {
  let navigate = useNavigate()
  useEffect(()=>{
    let adminToken = localStorage.getItem('adminToken')
    axios.post(`${CONFIG.SERVER_URL}/admin/varify`,{},{
      headers: {
        'content-type': 'text/json',
        adminToken
      }
    }).then(({data})=>{
      !data.status && navigate('/admin/login')
    })
  },[])
  return (
    <div className="body-background">
      <NavBar admin />
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Sidebar />
          <div className="col py-3">
            <ApplicantListComponent />
            </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicantList
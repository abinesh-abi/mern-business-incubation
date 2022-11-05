import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import CONFIG from '../../config/config'
import { userLogin } from '../../features/userSlice'
import NavBar from '../NavBar/NavBar'

function UserHome() {
  //redux state user get name
  const user = useSelector((state)=>state.user.value)
  const dispatch = useDispatch()
  let navigate = useNavigate()

  // function applySlots() {
  //   axios.post(`${CONFIG.SERVER_URL}/applySlots`,{userId:user.id})
  // }

  // varify token
  useEffect(()=>{
    let userToken = localStorage.getItem('userToken')
    axios.post(`${CONFIG.SERVER_URL}/varify`,{},{
      headers: {
        'content-type': 'text/json',
        userToken
      }
    }).then(({data})=>{
      if (!data.status) {
        navigate('/login')
      }else{
      let {name,id} = data.data
        dispatch((
          userLogin({name,id})
        ))
      }
    })
  },[])
  function logout() {
    localStorage.removeItem('userToken')
    navigate('/login')
  }
  return (
    <div>
      {/* <h1>User Home {user.name}</h1>
      <input onClick={logout}type='button' className='btn-danger btn' value='Logout' />  */}
      <NavBar/>
      <div className="d-flex justify-content-center pt-4">
      <Link to='/applySlots' className='btn btn-success '>Apply Slotes</Link>
      </div>
    </div>
  )
}

export default UserHome
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

function NavBar({admin}) {
  let user = useSelector(state=>state.user.value)
  // let adminDetail = useSelector(state => state)
  let navigate = useNavigate()
  function logout() {
    localStorage.removeItem('adminToken')
    // navigate('/admin/login')
  }
  return (
    <nav className=" navbar navbar-dark bg-primary">
  <div className="container-fluid">
    {
      admin?
  <Link className="navbar-brand mx-auto">Admin pannel</Link>:
  <Link className="navbar-brand mx-auto">Welcome user</Link>
    }
    

     <div className="btn-group">
  <button type="button" className="btn btn-primary" data-bs-toggle="dropdown" aria-expanded="false">
    <i className="fa-regular fa-user" style={{color:'black'}}></i>
    {
      admin ?
    <p>admin</p> :
    <p >{user.name}</p>
    }
  </button>
    <div className="btn-group dropstart">
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/login">User Login</Link></li>
    <li><hr className="dropdown-divider"/></li>
    <li><Link className="dropdown-item" to='/admin/login' onClick={logout}>Logout</Link></li>
  </ul>
</div>
</div>


    {/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Link</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li>hr</li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to="/" tabindex="-1" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div> */}
  </div>
</nav>
  )
}

export default NavBar
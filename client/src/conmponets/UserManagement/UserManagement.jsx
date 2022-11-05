import NavBar from '../NavBar/NavBar'
import Sidebar from '../SideBar/Sidebar'
import UserManagementComponent from './UserManagementComponent'
function Usermanagement() {
  return (
    <div className="body-background">
      <NavBar admin />
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Sidebar />
          <div className="col py-3">
            <UserManagementComponent />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Usermanagement 
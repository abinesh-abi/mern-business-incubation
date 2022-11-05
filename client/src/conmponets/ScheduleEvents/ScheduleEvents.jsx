import NavBar from '../NavBar/NavBar'
import Sidebar from '../SideBar/Sidebar'
import ScheduleEventsComponent from './ScheduleEventsComponent'

function ScheduleEvents() {
  return (
    <div className="body-background">
      <NavBar />
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Sidebar />
          <div className="col py-3">
            <ScheduleEventsComponent />
            </div>
        </div>
      </div>
    </div>
  )
}

export default ScheduleEvents 
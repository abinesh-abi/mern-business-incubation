import React from 'react'
import NavBar from '../NavBar/NavBar'
import Sidebar from '../SideBar/Sidebar'
import BookingSlotComponent from './BookingSlotComponent'

function BookingSlots() {
  return (
    <div className="body-background">
      <NavBar admin/>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Sidebar />
          <div className="col py-3">
            <BookingSlotComponent />
            </div>
        </div>
      </div>
    </div>
  )
}

export default BookingSlots
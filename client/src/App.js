import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./conmponets/Login/Login";
import Signup from "./conmponets/Signup/Signup";
import BookingSlots from "./conmponets/BookingSlots/BookingSlots";
import ScheduleEvents from "./conmponets/ScheduleEvents/ScheduleEvents";
import ApplicantList from "./conmponets/ApplicantList/ApplicantList";
import UserHome from "./conmponets/user/UserHome";
import Usermanagement from "./conmponets/UserManagement/UserManagement";
import ApplySlotsFrom from "./conmponets/ApplySlots/ApplySlotsForm";
import EditUser from "./conmponets/userEdit/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* users */}
        <Route path="/" element={<UserHome />} />
        <Route path="/applySlots" element={<ApplySlotsFrom />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* admin */}
        <Route path="/admin" element={<ApplicantList  />} />
        <Route path="/admin/bookinSlots" element={<BookingSlots />} />
        <Route path="/admin/sheduleEvents" element={<ScheduleEvents />} />
        <Route path="/admin/usermanagement" element={<Usermanagement />} />
        <Route path="/admin/login" element={<Login admin="true" />} />
        <Route path="/admin/editUser/:id" element={<EditUser admin="true" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

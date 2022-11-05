import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
return(
//   <div className="container-fluid">
//     <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                {/* <Link to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Menu</span>
                </Link> */}
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <Link to="/admin" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Applicant List</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin/bookinSlots" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Booking Slots</span>
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to="/admin/sheduleEvents" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Schedule Events</span>
                        </Link>
                    </li> */}
                    <li className="nav-item">
                        <Link to="/admin/usermanagement" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">User Management</span>
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to="/" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Applicant List</span>
                        </Link>
                    </li> */}
                    {/* <li>
                        <Link to="submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Record Track</span> </Link>
                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="menu">
                            <li className="w-100">
                                <Link to="/" className="nav-link px-0"> <span className="d-none d-sm-inline">Booking Slots</span> 1 </Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link px-0"> <span className="d-none d-sm-inline">Schedule Events</span> 2 </Link>
                            </li>
                        </ul>
                    </li> */}
                    {/* <li>
                        <Link to="/" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Orders</span></Link>
                    </li> */}
                    {/* <li>
                        <Link to="submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                            <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Bootstrap</span></Link>
                        <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="menu">
                            <li className="w-100">
                                <Link to="/" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1</Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2</Link>
                            </li>
                        </ul>
                    </li> */}
                    {/* <li>
                        <Link to="submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Products</span> </Link>
                            <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="menu">
                            <li className="w-100">
                                <Link to="/" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 1</Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 2</Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 3</Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 4</Link>
                            </li>
                        </ul>
                    </li> */}
                    {/* <li>
                        <Link to="/" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Customers</span> </Link>
                    </li> */}
                </ul>
                {/* <hr> */}
                {/* <div className="dropdown pb-4">
                    <Link to="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle"/>
                        <span className="d-none d-sm-inline mx-1">loser</span>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><Link className="dropdown-item" to="/">New project...</Link></li>
                        <li><Link className="dropdown-item" to="/">Settings</Link></li>
                        <li><Link className="dropdown-item" to="/">Profile</Link></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><Link className="dropdown-item" to="/">Sign out</Link></li>
                    </ul>
                </div> */}
            </div>
        </div>
//         <div className="col py-3">
//             Content area...
//         </div>
//     </div>
// </div>

) 

}

export default Sidebar;
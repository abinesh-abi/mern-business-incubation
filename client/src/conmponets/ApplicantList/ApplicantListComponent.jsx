import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CONFIG from "../../config/config";

function ApplicantListComponent() {
  let [applications, setApplications] = useState([]);
  let [selctedApplication,SetSelectedApplication] = useState({})

  function getApplications(params) {
    axios.get(`${CONFIG.SERVER_URL}/admin/applicationList`).then(({ data }) => {
      setApplications(data.data);
    });
  }
  useEffect(() => {
    getApplications()
  }, []);
function changeApplicationStaus(id,status){
    axios.patch(`${CONFIG.SERVER_URL}/admin/changeApplicatinStatus`,{id,status}).then(({ data }) => {
      getApplications()
    });
}
  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Application Management</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-wrap">
                <table className="table table-bordered table-dark table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Company Name</th>
                      <th>Details</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((application, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{application.name}</td>
                          <td>{application.email}</td>
                          <td>{application.company_name}</td>
                          <td>
                            {/* ++++++++++model start+++++++++++++++ */}

                            {/* ++++++++ model button++++++++++ */}
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                              onClick={()=>SetSelectedApplication(application)}
                            >
                              View Details
                            </button>
                            {/* ++++++++ model button++++++++++ */}

                            <div
                              className="modal fade"
                              id="staticBackdrop"
                              data-bs-backdrop="static"
                              data-bs-keyboard="false"
                              tabIndex="-1"
                              aria-labelledby="staticBackdropLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5
                                      className="modal-title"
                                      id="exampleModalScrollableTitle"
                                    >
                                      Application Details
                                    </h5>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>

                                  <div className="modal-body text-start text-black p-4">
                                    <h4
                                      className="mb-1"
                                      style={{ color: "#35558a" }}
                                    >
                                      {selctedApplication.name}
                                    </h4>
                                    <hr
                                      className=" mb-2"
                                      style={{
                                        height: "0",
                                        "backgroundColor": "transparent",
                                        opacity: ".75",
                                        "borderTop": "2px dashed #9e9e9e;",
                                      }}
                                    />

                                    <div className="d-flex justify-content-between">
                                      <p className="small">Address</p>
                                      <p className="small">{selctedApplication.address}</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="d-flex justify-content-between">
                                      <p className="small ">City</p>
                                      <p className="small ">{selctedApplication.city}</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="d-flex justify-content-between ">
                                      <p className="small">State</p>
                                      <p className="small">{selctedApplication.state}</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="d-flex justify-content-between ">
                                      <p className="small">Phone</p>
                                      <p className="small">{selctedApplication.phone}</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="d-flex justify-content-between ">
                                      <p className="small">Email</p>
                                      <p className="small">{selctedApplication.email}</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="d-flex justify-content-between ">
                                      <p className="small">Company Name</p>
                                      <p className="small">{selctedApplication.company_name}</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="d-flex justify-content-between ">
                                      <p className="small">Company Logo</p>
                                      <img style={{width:'50px'}} src={`${CONFIG.SERVER_URL}/uploads/${selctedApplication._id}.jpg`} alt="logo" />
                                    </div>
                                    <hr className="m-0" />
                                    <div >
                                      <p className="small">Team and Background</p>
                                      <p className="small" style={{border:'1px solid black',padding:'10px',minHeight:'40px'}}>{selctedApplication.team_and_background}</p>
                                    </div>
                                    <div >
                                      <p className="small">Company and Products</p>
                                      <p className="small" style={{border:'1px solid black',padding:'10px',minHeight:'40px'}}>{selctedApplication.company_and_products}</p>
                                    </div>
                                    <div >
                                      <p className="small">What kind of problem try to solve</p>
                                      <p className="small" style={{border:'1px solid black',padding:'10px',minHeight:'40px'}}>{selctedApplication.problem}</p>
                                    </div>
                                    <div >
                                      <p className="small">Solutions</p>
                                      <p className="small" style={{border:'1px solid black',padding:'10px',minHeight:'40px'}}>{selctedApplication.solution}</p>
                                    </div>
                                    <div >
                                      <p className="small">Value proposition for the customer</p>
                                      <p className="small" style={{border:'1px solid black',padding:'10px',minHeight:'40px'}}>{selctedApplication.value_proposition}</p>
                                    </div>
                                    <div >
                                      <p className="small">Competitive Advantages</p>
                                      <p className="small" style={{border:'1px solid black',padding:'10px',minHeight:'40px'}}>{selctedApplication.competitive_advantage}</p>
                                    </div>
                                    <div >
                                      <p className="small">Revenue Model</p>
                                      <p className="small" style={{border:'1px solid black',padding:'10px',minHeight:'40px'}}>{selctedApplication.revenue_model}</p>
                                    </div>
                                    <div >
                                      <p className="small">Market size</p>
                                      <p className="small" style={{border:'1px solid black',padding:'10px',minHeight:'40px'}}>{selctedApplication.market_size}</p>
                                    </div>
                                    <div >
                                      <p className="small">Incubation Type</p>
                                      <p className="small" style={{border:'1px solid black',padding:'10px',minHeight:'40px'}}>{selctedApplication.incubation_type}</p>
                                    </div>
                                    <div >
                                      <p className="small">Buissiness Proposal</p>
                                      <p className="small" style={{border:'1px solid black',padding:'10px',minHeight:'40px'}}>{selctedApplication.proposal}</p>
                                    </div>
                                    
                                    {/* <div className="d-flex justify-content-between">
                                      <p className="fw-bold">Total</p>
                                      <p className="fw-bold" style={{"color": "#35558a"}}>$2125.00</p>
                                    </div> */}
                                  </div>

                                  {/* <div className="modal-body">
      



      </div> */}
                                  {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div> */}
                                </div>
                              </div>
                            </div>

                            {/* ++++++++++model end+++++++++++++++ */}
                          </td>
                          <td>
                            {
                              //  true?'hii':'hello'
                              (function () {
                                if (application.status === "pending") {
                                  return (
                                    // <button className="btn btn-danger">
                                    //   pending
                                    // </button>
                                    <div className="dropdown">
                                      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                      pending
                                      </button>
                                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li onClick={()=>changeApplicationStaus(application._id,"accepted")}><Link className="dropdown-item" >Accept</Link></li>
                                        <li onClick={()=>changeApplicationStaus(application._id,"removed")}><Link className="dropdown-item" >Reject</Link></li>
                                      </ul>
                                    </div>
                                  );
                                }else if(application.status === "accepted"){
                                  return(
                                    <div className="dropdown">
                                      <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                      Accepted
                                      </button>
                                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        {/* <li ><Link className="dropdown-item" >Remove</Link></li> */}
                                        <li onClick={()=>changeApplicationStaus(application._id,"removed")}><Link className="dropdown-item" >Reject</Link></li>
                                      </ul>
                                    </div>
                                  )
                                }else if(application.status === "removed"){
                                  return(
                                    <p className="text-danger text-center ">Redjected</p>
                                    // <div className="dropdown">
                                    //   <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    //   Rejected
                                    //   </button>
                                    //   <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    //     <li onClick={()=>changeApplicationStaus(application._id,"accepted")}><Link className="dropdown-item" >Accept</Link></li>
                                    //     {/* <li ><Link className="dropdown-item" >Accept</Link></li> */}
                                    //   </ul>
                                    // </div>
                                  )
                                }
                              })()
                            }
                          </td>
                          {/* <button className="btn btn-success" onClick={()=>banOrUnban(applications._id)}>Unblock </button> 
                           <button className="btn btn-danger"onClick={()=>banOrUnban(applications._id)}><i className="fa-solid fa-ban"></i></button>  */}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ApplicantListComponent;

import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CONFIG from "../../config/config";

function ApplicantListComponent() {
  let [applications, setApplications] = useState([]);

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
                              class="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              View Details
                            </button>
                            {/* ++++++++ model button++++++++++ */}

                            <div
                              class="modal fade"
                              id="staticBackdrop"
                              data-bs-backdrop="static"
                              data-bs-keyboard="false"
                              tabindex="-1"
                              aria-labelledby="staticBackdropLabel"
                              aria-hidden="true"
                            >
                              <div class="modal-dialog modal-dialog-scrollable">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5
                                      class="modal-title"
                                      id="exampleModalScrollableTitle"
                                    >
                                      Application Details
                                    </h5>
                                    <button
                                      type="button"
                                      class="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>

                                  <div class="modal-body text-start text-black p-4">
                                    <h4
                                      class="mb-1"
                                      style={{ color: "#35558a" }}
                                    >
                                      {application.name}
                                    </h4>
                                    <hr
                                      class=" mb-2"
                                      style={{
                                        height: "0",
                                        "background-color": "transparent",
                                        opacity: ".75",
                                        "border-top": "2px dashed #9e9e9e;",
                                      }}
                                    />

                                    <div class="d-flex justify-content-between">
                                      <p class="small">Address</p>
                                      <p class="small">{application.address}</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div class="d-flex justify-content-between">
                                      <p class="small ">City</p>
                                      <p class="small ">{application.city}</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div class="d-flex justify-content-between ">
                                      <p class="small">State</p>
                                      <p class="small">{application.state}</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div class="d-flex justify-content-between ">
                                      <p class="small">Phone</p>
                                      <p class="small">{application.phone}</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div class="d-flex justify-content-between ">
                                      <p class="small">Email</p>
                                      <p class="small">{application.email}</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div class="d-flex justify-content-between ">
                                      <p class="small">Company Name</p>
                                      <p class="small">{application.company_name}</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div class="d-flex justify-content-between ">
                                      <p class="small">Email</p>
                                      <p class="small">{application.email}</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div >
                                      <p class="small">Team and Background</p>
                                      <p class="small" style={{border:'1px solid black',padding:'10px',minHeight:'40px'}}>{application.team_and_background}</p>
                                    </div>
                                    <div >
                                      <p class="small">Company and Products</p>
                                      <p class="small" style={{border:'1px solid black',padding:'10px',minHeight:'40px'}}>{application.company_and_products}</p>
                                    </div>
                                    <div >
                                      <p class="small">What kind of problem try to solve</p>
                                      <p class="small" style={{border:'1px solid black',padding:'10px',minHeight:'40px'}}>{application.problem}</p>
                                    </div>
                                    <div >
                                      <p class="small">Solutions</p>
                                      <p class="small" style={{border:'1px solid black',padding:'10px',minHeight:'40px'}}>{application.solution}</p>
                                    </div>
                                    <div >
                                      <p class="small">Value proposition for the customer</p>
                                      <p class="small" style={{border:'1px solid black',padding:'10px',minHeight:'40px'}}>{application.value_proposition}</p>
                                    </div>
                                    <div >
                                      <p class="small">Competitive Advantages</p>
                                      <p class="small" style={{border:'1px solid black',padding:'10px',minHeight:'40px'}}>{application.competitive_advantage}</p>
                                    </div>
                                    <div >
                                      <p class="small">Revenue Model</p>
                                      <p class="small" style={{border:'1px solid black',padding:'10px',minHeight:'40px'}}>{application.revenue_model}</p>
                                    </div>
                                    <div >
                                      <p class="small">Market size</p>
                                      <p class="small" style={{border:'1px solid black',padding:'10px',minHeight:'40px'}}>{application.market_size}</p>
                                    </div>
                                    <div >
                                      <p class="small">Incubation Type</p>
                                      <p class="small" style={{border:'1px solid black',padding:'10px',minHeight:'40px'}}>{application.incubation_type}</p>
                                    </div>
                                    <div >
                                      <p class="small">Buissiness Proposal</p>
                                      <p class="small" style={{border:'1px solid black',padding:'10px',minHeight:'40px'}}>{application.proposal}</p>
                                    </div>
                                    
                                    {/* <div class="d-flex justify-content-between">
                                      <p class="fw-bold">Total</p>
                                      <p class="fw-bold" style={{"color": "#35558a"}}>$2125.00</p>
                                    </div> */}
                                  </div>

                                  {/* <div class="modal-body">
      



      </div> */}
                                  {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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
                                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
                                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        {/* <li ><Link className="dropdown-item" >Remove</Link></li> */}
                                        <li onClick={()=>changeApplicationStaus(application._id,"removed")}><Link className="dropdown-item" >Reject</Link></li>
                                      </ul>
                                    </div>
                                  )
                                }else if(application.status === "removed"){
                                  return(
                                    <div className="dropdown">
                                      <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                      Rejected
                                      </button>
                                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li onClick={()=>changeApplicationStaus(application._id,"accepted")}><Link className="dropdown-item" >Accept</Link></li>
                                        {/* <li ><Link className="dropdown-item" >Accept</Link></li> */}
                                      </ul>
                                    </div>
                                  )
                                }
                              })()
                            }
                          </td>
                          {/* <button className="btn btn-success" onClick={()=>banOrUnban(applications._id)}>Unblock </button> 
                           <button className="btn btn-danger"onClick={()=>banOrUnban(applications._id)}><i class="fa-solid fa-ban"></i></button>  */}
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

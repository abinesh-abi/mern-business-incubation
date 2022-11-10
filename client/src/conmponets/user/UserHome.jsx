import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CONFIG from "../../config/config";
import { userLogin } from "../../features/userSlice";
import NavBar from "../NavBar/NavBar";

function UserHome() {
  //redux state user get name
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  let [prviousApplicatins, setPreviousApplicatins] = useState([]);
  let [selctedApplication, SetSelectedApplication] = useState({});

  // function applySlots() {
  //   axios.post(`${CONFIG.SERVER_URL}/applySlots`,{userId:user.id})
  // }

  // varify token
  useEffect(() => {
    let userToken = localStorage.getItem("userToken");
    axios
      .post(
        `${CONFIG.SERVER_URL}/varify`,
        {},
        {
          headers: {
            "content-type": "text/json",
            userToken,
          },
        }
      )
      .then(({ data }) => {
        if (!data.status) {
          navigate("/login");
        } else {
          let { name, id } = data.data;
          dispatch(userLogin({ name, id }));
        }
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${CONFIG.SERVER_URL}/prevApplications/${user.id}`)
      .then(({ data }) => {
        setPreviousApplicatins(data.data);
      });
  }, [user]);

  function logout() {
    localStorage.removeItem("userToken");
    navigate("/");
  }
  return (
    <div>
      {/* <h1>User Home {user.name}</h1>
      <input onClick={logout}type='button' className='btn-danger btn' value='Logout' />  */}
      <NavBar />
      <div
        className="container d-flex flex-column justify-content-center pt-4"
        style={{ maxWidth: "900px" }}
      >
        {(function () {
          if (prviousApplicatins !== []) {
            return (
              <div>
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
                    {/* {console.log(prviousApplicatins)} */}
                    {prviousApplicatins.map((application, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{application.name}</td>
                          <td>{application.email}</td>
                          <td>{application.company_name}</td>
                          <td>
                            {/* bootstarp modal button */}
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                              onClick={() =>
                                SetSelectedApplication(application)
                              }
                            >
                              View Details
                            </button>
                          </td>
                          <td>
                            {(function () {
                              if (application.status === "accepted") {
                                return (
                                  <p className=" text-success ">Accepted</p>
                                );
                              }
                              if (application.status === "removed") {
                                return (
                                  <p className=" text-danger ">Rejected</p>
                                );
                              } else {
                                return (
                                  <p className=" text-secondary ">Pending</p>
                                );
                              }
                            })()}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          }
        })()}

        <div className="d-flex justify-content-center">
          {
            prviousApplicatins[prviousApplicatins.length-1]?.status === "removed" || !prviousApplicatins[0]?
          <Link to="/applySlots" className="btn btn-success ">
            Apply Slotes
          </Link> :''
          }
          {
            
          }
        </div>
      </div>

      {/* bootstrap model starts*/}
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
              <h5 className="modal-title" id="exampleModalScrollableTitle">
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
              <h4 className="mb-1" style={{ color: "#35558a" }}>
                {selctedApplication.name}
              </h4>
              <hr
                className=" mb-2"
                style={{
                  height: "0",
                  backgroundColor: "transparent",
                  opacity: ".75",
                  borderTop: "2px dashed #9e9e9e;",
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
              <div>
                <p className="small">Team and Background</p>
                <p
                  className="small"
                  style={{
                    border: "1px solid black",
                    padding: "10px",
                    minHeight: "40px",
                  }}
                >
                  {selctedApplication.team_and_background}
                </p>
              </div>
              <div>
                <p className="small">Company and Products</p>
                <p
                  className="small"
                  style={{
                    border: "1px solid black",
                    padding: "10px",
                    minHeight: "40px",
                  }}
                >
                  {selctedApplication.company_and_products}
                </p>
              </div>
              <div>
                <p className="small">What kind of problem try to solve</p>
                <p
                  className="small"
                  style={{
                    border: "1px solid black",
                    padding: "10px",
                    minHeight: "40px",
                  }}
                >
                  {selctedApplication.problem}
                </p>
              </div>
              <div>
                <p className="small">Solutions</p>
                <p
                  className="small"
                  style={{
                    border: "1px solid black",
                    padding: "10px",
                    minHeight: "40px",
                  }}
                >
                  {selctedApplication.solution}
                </p>
              </div>
              <div>
                <p className="small">Value proposition for the customer</p>
                <p
                  className="small"
                  style={{
                    border: "1px solid black",
                    padding: "10px",
                    minHeight: "40px",
                  }}
                >
                  {selctedApplication.value_proposition}
                </p>
              </div>
              <div>
                <p className="small">Competitive Advantages</p>
                <p
                  className="small"
                  style={{
                    border: "1px solid black",
                    padding: "10px",
                    minHeight: "40px",
                  }}
                >
                  {selctedApplication.competitive_advantage}
                </p>
              </div>
              <div>
                <p className="small">Revenue Model</p>
                <p
                  className="small"
                  style={{
                    border: "1px solid black",
                    padding: "10px",
                    minHeight: "40px",
                  }}
                >
                  {selctedApplication.revenue_model}
                </p>
              </div>
              <div>
                <p className="small">Market size</p>
                <p
                  className="small"
                  style={{
                    border: "1px solid black",
                    padding: "10px",
                    minHeight: "40px",
                  }}
                >
                  {selctedApplication.market_size}
                </p>
              </div>
              <div>
                <p className="small">Incubation Type</p>
                <p
                  className="small"
                  style={{
                    border: "1px solid black",
                    padding: "10px",
                    minHeight: "40px",
                  }}
                >
                  {selctedApplication.incubation_type}
                </p>
              </div>
              <div>
                <p className="small">Buissiness Proposal</p>
                <p
                  className="small"
                  style={{
                    border: "1px solid black",
                    padding: "10px",
                    minHeight: "40px",
                  }}
                >
                  {selctedApplication.proposal}
                </p>
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
    </div>
  );
}

export default UserHome;

import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CONFIG from "../../config/config";

function UserManagementComponent() {
  let [usersList, serUsersList] = useState([]);

  function getUsers(){
    axios.get(`${CONFIG.SERVER_URL}/admin/getUsers`).then((response) => {
      serUsersList(response.data.data);
    });
    //// for paginated
    // axios
    //   .get(`${CONFIG.SERVER_URL}/admin/getUserPaginated/1`)
    //   .then(({ data }) => {
    //     serUsersList(data.data)
    //   });
  }

  useEffect(() => {
    getUsers()
  }, [usersList.isBaned]);

  function banOrUnban(id) {
    axios.patch(`${CONFIG.SERVER_URL}/admin/banOrUnban`,{id})
    .then(({data})=>{
      if (data.status) {
      getUsers()
      }
    })

  }

  return (
    <>
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section">User Management</h2>
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
                    <th>Edit</th>
                    <th>Ban/Unban</th>
                  </tr>
                </thead>
                <tbody>
                  {usersList.map((users, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>
                          <Link to={`/admin/editUser/${users._id}`} className="btn btn-primary">Edit User</Link>
                        </td>
                        <td>
                          {
                            users.isBaned?
                           <button className="btn btn-success" onClick={()=>banOrUnban(users._id)}>Unblock </button> :
                           <button className="btn btn-danger"onClick={()=>banOrUnban(users._id)}><i class="fa-solid fa-ban"></i></button> 
                          }
                        </td>
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

export default UserManagementComponent;

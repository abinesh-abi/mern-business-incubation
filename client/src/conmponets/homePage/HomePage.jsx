import React from "react";
import "./HomePage.css";
import NavBar from "../NavBar/NavBar";
import Sidebar from "../SideBar/Sidebar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function HomePage(props) {
  console.log(props)
  return (
    <div>
      <h1>adminnn</h1>
      <BrowserRouter>
        <Router>
          <Route path="/hi" element={<h1>that is awsome</h1>} />
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default HomePage;

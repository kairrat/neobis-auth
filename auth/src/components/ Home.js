import React, { useState, useEffect } from "react";
import {Navigate, Routes, Route, Link, useLocation } from "react-router-dom";



const Home = () => {

    const ToRegister =  () => {

        <Link to={"/home"} className="nav-link">
        Home
      </Link>

    }

  return (
    <div className="col-md-12">
        <div className="card card-container">
        <header className="jumbotron">
        <h3>hello</h3>
        <div>
            <h4 >this is simple auth page</h4>
        </div>
      </header>
    </div>


        </div>
     
  );
};

export default Home;
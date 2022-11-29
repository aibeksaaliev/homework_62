import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="d-flex align-items-center">
        <div>
          <span className="fw-bold" style={{fontSize: "106px"}}>Stay curious.</span>
          <p className="fs-2 w-75">Discover stories, thinking, and expertise from writers on any topic.</p>
        </div>
        <div>
          <Link className="btn btn-dark rounded-5 px-4" to="continue">Start reading</Link>
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default Home;
import React from 'react';
import {Link} from "react-router-dom";

const Membership = () => {
  return (
    <>
     <div className="container">
       <h2>Fuel great thinking.</h2>
       <p>Become a Medium member to enjoy unlimited access and
         directly support the writers you read most.</p>
       <Link className="btn btn-dark rounded-5 px-5" to="/">Get unlimited access</Link>
     </div>
    </>
  );
};

export default Membership;
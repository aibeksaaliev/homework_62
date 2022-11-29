import React from 'react';
import {Link} from "react-router-dom";

const Write = () => {
  return (
    <>
     <div className="container">
       <div>
         <h3>Publish, grow, and earn, all in one place.</h3>
         <p>If you have a story to tell, knowledge to share, or a perspective to offer — welcome home. Here, your writing can thrive in a network supported by millions of readers — not ads.</p>
         <Link className="btn btn-dark rounded-5 px-5" to="/">Start writing</Link>
       </div>
     </div>
    </>
  );
};

export default Write;
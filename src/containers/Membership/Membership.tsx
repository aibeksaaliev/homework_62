import React from 'react';
import {Link} from "react-router-dom";
import MembershipCard from "../../components/MembershipCard/MembershipCard";

const Membership = () => {
  const cardsInfo = [
    {
      title: "Get unlimited access to every story.",
      image: "https://cdn-static-1.medium.com/sites/medium.com/membership/images/UnlimitedReading.svg",
      text: "Read any article in our entire library across all your devices — with no paywalls, story limits or ads."
    },
    {
      title: "Support the voices you want to hear more from.",
      image: "https://cdn-static-1.medium.com/sites/medium.com/membership/images/SupportWriters.svg",
      text: "A portion of your membership will directly support the writers and thinkers you read the most."
    }
  ];

  return (
    <>
     <div className="container">
       <div className="text-center">
         <h2 style={{fontSize: "80px"}} className="fw-bold">Fuel great thinking.</h2>
         <p className="fs-2 w-50 mx-auto">Become a Medium member to enjoy unlimited access and
           directly support the writers you read most.</p>
         <Link className="btn btn-primary rounded-5 px-5" to="/membership">Get unlimited access</Link>
       </div>
       <div className="d-flex border-top border-bottom border-3 mt-5">
         {cardsInfo.map(card => {
           return <MembershipCard key={Math.random()} title={card.title} image={card.image} text={card.text}/>
         })}
       </div>
     </div>
    </>
  );
};

export default Membership;
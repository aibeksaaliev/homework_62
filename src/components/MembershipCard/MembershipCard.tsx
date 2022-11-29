import React from 'react';

interface MembershipCardProps {
  title: string;
  image: string;
  text: string;
}

const MembershipCard: React.FC<MembershipCardProps> = ({title, image, text}) => {
  return (
    <div className="d-flex flex-column">
      <span className="fs-2 w-75 mb-3">{title}</span>
      <img src={image} alt="img" className="w-50 mt-auto"/>
      <p className="fs-5 mt-3">{text}</p>
    </div>
  );
};

export default MembershipCard;
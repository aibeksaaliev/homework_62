import React from 'react';
import {useNavigate} from "react-router-dom";

interface LoginViaProps {
  service: string;
}

const LoginVia: React.FC<LoginViaProps> = ({service}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mt-3">
        <form className="mb-3 text-center" onSubmit={(e) => {e.preventDefault(); navigate('/')}}>
          <input required type="email" className="form-control" placeholder={service}/>
          <button type="submit" className="btn btn-dark mt-2">Register</button>
        </form>
      </div>
    </>
  );
};

export default LoginVia;
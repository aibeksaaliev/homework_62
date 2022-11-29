import React from 'react';

interface LoginViaProps {
  service: string;
}

const LoginVia: React.FC<LoginViaProps> = ({service}) => {
  return (
    <>
      <form className="mt-3">
        <div className="mb-3 text-center">
          <input type="email" className="form-control" placeholder={service}/>
          <button type="submit" className="btn btn-dark mt-2">Register</button>
        </div>
      </form>
    </>
  );
};

export default LoginVia;
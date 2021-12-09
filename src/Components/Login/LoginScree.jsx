import React from "react";
import { useNavigate } from "react-router-dom";

const LoginScree = () => {

    const navigate = useNavigate();
    const handleLogin = () =>{
        navigate('/', {
            replace: true
        });
    }
  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginScree;

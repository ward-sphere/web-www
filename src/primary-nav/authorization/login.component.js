import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return <img src="/logo48.png" alt="logo"  onClick={() => loginWithRedirect({
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })}/>;
};

export default Login;
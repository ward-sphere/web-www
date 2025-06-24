import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import './login.component.css'

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return <button class="loginLink" onClick={() => loginWithRedirect({
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })}>Log In</button>;
};

export default Login;
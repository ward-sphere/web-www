import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <img src="/logo48.png" alt="logo"  onClick={() => loginWithRedirect()}/>;
};

export default LoginButton;
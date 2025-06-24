import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout } = useAuth0();

  return <img src="/logo48.png" alt="logo"  onClick={() => logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  })}/>;
};

export default Logout;
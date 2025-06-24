import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./login.component";
import Logout from "./logout.component";

const IdentityContext = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated 
        ? <Logout/>
        : <Login/>
  );
};

export default IdentityContext;
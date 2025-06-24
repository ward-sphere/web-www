import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./login/login.component";
import Profile from "./profile/profile.component";

const IdentityContext = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated 
        ? <Profile/>
        : <Login/>
  );
};

export default IdentityContext;
import React, { useState } from "react";
import { useSelector } from "react-redux";

const useAuth = () => {
  let userLoggedIn = false;
  if (typeof window !== "undefined") {
    if (window.sessionStorage.getItem("loggedIN")) {
      userLoggedIn = true;
    }
  }
  const [isAuthenticated, setisAuthenticated] = useState(userLoggedIn);
  // const user = useSelector(store => store.user);
  const login = (cb) => {
    return new Promise((res, rej) => {
      setisAuthenticated(true);
      res();
    });
  };
  const logout = (cb) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        setisAuthenticated(false);
        if (typeof window !== "undefined") {
          window.sessionStorage.removeItem("token");
          window.sessionStorage.removeItem("loggedIN");
          res({ status: true, msg: "logout sucess!" });
        } else {
          res({ status: false, msg: "please try again!" });
        }
      }, 3000);
    });
  };

  return {
    isAuthenticated,
    login,
    logout,
  };
};
export default useAuth;

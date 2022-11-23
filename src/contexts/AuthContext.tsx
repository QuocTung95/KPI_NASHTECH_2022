import React, { ReactNode } from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext({});

interface Props {
  children?: ReactNode;
}

const AuthContextProvider = ({ children, ...props }: Props) => {
  const isAuthen = localStorage.getItem("token");
  const useInfo = localStorage.getItem("userInfor");

  const [authContext, setAuthContext] = useState({
    isAuthenticated: isAuthen,
    user: useInfo,
  });

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;

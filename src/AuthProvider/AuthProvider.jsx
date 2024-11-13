/* eslint-disable react/prop-types */
import { createContext } from "react";

const AuthContext = createContext();
function AuthProvider({ children }) {
  return (
    <div>
      <AuthContext.Provider>{children}</AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;

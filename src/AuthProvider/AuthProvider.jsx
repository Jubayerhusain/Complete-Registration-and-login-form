/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext();
function AuthProvider({ children }) {
  //make func for create new user 
  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth , email, password)
  }
 // make a object for all user context
 const authInfo = {
  createUser,
 }
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;

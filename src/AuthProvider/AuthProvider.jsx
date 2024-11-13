/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
function AuthProvider({ children }) {
  
  //make func for create new user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // make a func for login user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // get the current user 
const [user, setUser] = useState(null)
  useEffect( ()=>{
    onAuthStateChanged(auth, (currentUser)=>{
      if (currentUser) {
        console.log('This is a current use', currentUser);
        setUser(currentUser)
      }
      else{
        console.log('not fount current user');
        setUser(null)
      }
    })
  },[])

  // make the func for user logOut
  const userSignOut = ()=>{
    return signOut(auth)
  } 
  // make a object for all user context
  const authInfo = {
    createUser,
    loginUser,
    userSignOut,
    user,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;

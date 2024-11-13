/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext();
function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true)
  //make func for create new user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // make a func for login user
  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // get the current user
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("This is a current use", currentUser);
        setUser(currentUser);
        setLoading(false)
      } else {
        console.log("not fount current user");
        setUser(null);
      }
    });
  }, []);

  // make the func for user logOut
  const userSignOut = () => {
    setLoading(true)
    return signOut(auth);
  };
  // add Google auth provider system
  const googleProvider = new GoogleAuthProvider()
  const handleGoogleSignIn = () =>{
    return signInWithPopup(auth, googleProvider)
  }
  // make a object for all user context
  const authInfo = {
    createUser,
    loginUser,
    userSignOut,
    handleGoogleSignIn,
    loading,
    user,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;

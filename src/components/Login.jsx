import {Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from 'react';
function Login() {
  const {loginUser,handleGoogleSignIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const hundleLogin = (event) =>{
    event.preventDefault()
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    // pass the value for user login 
    loginUser(email, password)
    .then(res => {
      console.log(res.user);
      navigate('/profile')
    })
    .catch(error =>{
      console.log("ERROR", error.message);
    })
  }
  // sign in  with  google
  const hundleSignInWithGoogle = () =>{
    handleGoogleSignIn()
    .then((result)=>{
      console.log(result.user);
      Navigate('/profile')
    })
    .catch(error=>{
      console.log("ERROR", error.message);
    })
  }
  return (
    <div className="bg-base-200 py-20">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold text-center">Sign In now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pb-10">
          <form onSubmit={hundleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
          <p onClick={hundleSignInWithGoogle} className="btn w-10/12 mx-auto">Sign In With Google</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
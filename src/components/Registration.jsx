import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

function Registration() {

  const {createUser} = useContext(AuthContext)


  const handleSignUpForm = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password  =event.target.password.value;
    console.log(name, email, password);

    // sent the email and password for cretae user 
    createUser(email,password)
    .then(res => {
      console.log(res.user);
    })
    .catch(error =>{
      console.log("ERROR",error.message);
    })
  };
  return (
    <div className="bg-base-200 py-20">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold text-center">Sign Up now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUpForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;

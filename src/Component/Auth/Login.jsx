import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const { signIn, resetPassword } = use(AuthContext);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(`${location.state? location.state : '/'}`)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleShow = () => {
    setShow(!show);
  };
  //  reset password
  const handleForgotPassword = () => {
    if (email.trim() !== "") {
      navigate("/auth/reset-password", { state: { email } });
    } else {
      navigate("/auth/reset-password");
    }
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignin} className="card-body">
              <fieldset className="fieldset">
                {/* email field  */}

                <label className="label">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  className="input"
                  placeholder="Email"
                />

                {/* Password field  */}

                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="Password"
                    required
                  />
                  <span className="absolute top-3 right-2" onClick={handleShow}>
                    {show ? (
                      <FiEyeOff size={18}></FiEyeOff>
                    ) : (
                      <FiEye size={18}></FiEye>
                    )}
                  </span>
                </div>
                <div>
                  <span onClick={handleForgotPassword} className="link link-hover">
                    Forgot password?
                  </span>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
              <p>
                Don't have an account? <Link to="/auth/signup">Signup</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

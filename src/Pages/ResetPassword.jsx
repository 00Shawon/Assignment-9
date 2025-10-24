import React, { use, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const {resetPassword} = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const passedEmail = location.state?.email || "";
  const [email, setEmail] = useState(passedEmail);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log('reset password to', email);
    resetPassword(email)
    .then(()=>{
      alert("Password reset link sent! Check your email.");
      navigate('/')
    }).catch(error=>{
      toast.error("Failed to send reset link. Please try again.");
    })
    
  }

  
  
  return (
    <div>
      <form onSubmit={handleForgotPassword} className="card-body w-[33%] mx-auto">
        <fieldset className="fieldset">
          {/* email field  */}

          <label className="label">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className="input w-full"
            placeholder="Email"
          />
          <a href="https://mail.google.com/" type="submit" className="btn btn-neutral  mt-4">Reset Password</a>
        </fieldset>
      </form>
    </div>
  );
};

export default ResetPassword;

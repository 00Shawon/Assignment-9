import React, { use, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation } from "react-router";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const {resetPassword} = use(AuthContext);
  const location = useLocation();
  const passedEmail = location.state?.email || "";
  const [email, setEmail] = useState(passedEmail);
  

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log('reset password to', email);
    resetPassword(email)
    .then(()=>{
      window.open("https://mail.google.com/", "_blank");
    }).catch(()=>{
      toast.error("Failed to send reset link. Please try again.");
    })
    
  }

  
  
  return (
    <div className="border w-80 mx-auto">
      <form onSubmit={handleForgotPassword} className="card-body  ">
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
          <button type="submit" className="btn btn-neutral  mt-4">Reset Password</button>
        </fieldset>
      </form>
    </div>
  );
};

export default ResetPassword;

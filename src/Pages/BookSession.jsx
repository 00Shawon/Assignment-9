import React from "react";
import toast from "react-hot-toast";

const BookSession = () => {
  const handleBooking = (e) => {
    e.preventDefault();
   e.target.email.value? toast.success('Successfully Booked!'): toast.error('Fill the credentials!');
    e.target.reset();

  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold ">Confirm Your booking</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleBooking} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn bg-blue-500 text-white mt-4">
                  Book Now
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSession;

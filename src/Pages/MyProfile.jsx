import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import 'animate.css';

const MyProfile = () => {
  const { user } = use(AuthContext);

  console.log(user);
  return (
    <div className="flex min-h-screen items-center justify-center animate__animated animate__pulse">
      <div className="card bg-base-500 w-80 border border-gray-400 shadow-xl p-4 relative">
      <figure className="p-4">
        {user ? (
          <img className="rounded-full" src={user.photoURL} alt={user.displayName} />
        ) : (
          <h2>Loading...</h2>
        )}
      </figure>
      <div className="card-body shadow border-gray-400">
        <h2 className="card-title">{user.displayName}</h2>
        <p>
         <span className="font-bold"> Email address:</span> {user.email}
        </p>
        <div className="card-actions justify-end">
          <Link to='/editProfile' className="btn btn-primary w-full animate__animated animate__wobble animate__delay-1s">Edit profile</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MyProfile;

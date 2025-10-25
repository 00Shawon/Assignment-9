import React, { use } from "react";

import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import logoImg from '../assets/logo.png'

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successful");
      })
      .catch();
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/myProfile">My Profile</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-200">
      <div className="navbar w-11/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="text-xl">
            <img src={logoImg} alt="" className="md:w-60 w-48 " />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-5">
              <div className="relative group inline-block">
                <img
                  className="w-8 h-8 md:w-12 md:h-12 rounded-full cursor-pointer"
                  src={user && user?.photoURL}
                  alt={user?.displayName}
                  title={user?.displayName}
                />
           
              </div>
              <Link onClick={handleLogOut} to="/" className="btn bg-secondary text-base-100 md:px-10 px-5">
                Logout
              </Link>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/auth/signup" className="btn btn-outline btn-secondary px-10">
                Signup
              </Link>
              <Link to="/auth/login" className="btn bg-secondary text-base-100 px-10">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

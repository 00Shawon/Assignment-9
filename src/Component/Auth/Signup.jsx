import { User } from "lucide-react";
import React, { use, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { IoLogoGoogle } from "react-icons/io5";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState('')

  const { createUser, updateUser, setUser } = use(AuthContext);
  const navigate = useNavigate();

  // signup with email

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    console.log(email, name, photo, password);
    
    // reset error
    setError('');

    // password validation
    const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if(!regExp.test(password)){
      setError('Password must be at least 6 characters long, and include at least one uppercase letter and one lowercase letter');
      return;
    } 

    createUser(email, password)
      .then((res) => {
        const user = res.user;
         updateUser({displayName: name, photoURL: photo})
       .then(() =>{
       setUser({...user, displayName: name, photoURL: photo})
    }).catch(()=>{
      setUser(user);
    })
        toast.success("Login Successful!");
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.code);
      });
  };

// handle password show
  const handleShow = () => {
    setShow(!show)
  };

  return (
    <div className="">
          <div className="card bg-base-100 w-[400px] mx-auto shadow-2xl">
            <h1 className="text-2xl p-5 font-bold text-center">Signup to create account</h1>
            <form onSubmit={handleSignUp} className="card-body">
              <fieldset className="fieldset">
                {/* Name field  */}

                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder=" Your name"
                  required
                />

                {/* Photo field  */}

                <label className="label">Photo Url</label>
                <input
                  type="text"
                  name="photo"
                  className="input"
                  placeholder="Photo url"
                  required
                />

                {/* email field  */}

                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  required
                />

                {/* Password field  */}

                <label className="label">Password</label>

                <div className="relative">
                  <input
                    type={show? 'text': "password"}
                    name="password"
                    className="input"
                    placeholder="Password"
                    required
                  />
                  <span className="absolute top-3 right-12 cursor-pointer" onClick={handleShow}>{show? <FiEyeOff size={18}></FiEyeOff>:<FiEye   size={18}></FiEye>}</span>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Signup
                </button>
              </fieldset>
              {error && <p className="text-red-500">{error}</p>}
               <p>
              Already have an account? <Link className="font-semibold text-accent hover:underline" to="/auth/login">Login</Link>
            </p>
            </form>
          </div>
        </div>
  );
};

export default Signup;

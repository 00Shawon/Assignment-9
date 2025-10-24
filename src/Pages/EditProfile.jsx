import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';

const EditProfile = () => {
  const {user, setUser, updateUser} = use(AuthContext);
  const navigate = useNavigate();


  const handleUpdateProfile = (e) =>{
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    // console.log('profile updated', name, photo, user)
    updateUser({displayName: name, photoURL: photo})
    .then(() =>{
      setUser({...user, displayName: name, photoURL: photo})
      navigate('/myProfile')
    }).catch(error=>{
      setUser(user);
    })
  }
  return (
    <div>
       <div>
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Update profile</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleUpdateProfile}  className="card-body">
        <fieldset className="fieldset">
         
          {/* Name field  */}

          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder=" Your name" required />


          {/* Photo field  */}

          <label className="label">Photo Url</label>
          <input type="text" name='photo' className="input" placeholder="Photo url"/>


          {/* email field  */}

          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" required/>


          {/* Password field  */}

          <label className="label">Password</label>
          <input type="password"  name='password' className="input" placeholder="Password" required />
         
          <button type='submit' className="btn btn-neutral mt-4">Update</button>
          
         
        </fieldset>
         

      </form>
      
     
   
      
    </div>
  </div>
</div>
    </div>
    </div>
  );
};

export default EditProfile;
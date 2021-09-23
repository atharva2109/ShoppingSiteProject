import React, { useState } from 'react'
import app, { auth } from '../firebase';
import firebase from 'firebase';

function User() {
    const [user, setuser] = useState([])
    var valof
    firebase
      .database()
      .ref('Users/' + firebase.auth().currentUser.uid)
      .once('value')
      .then(snapshot => {
         setuser(snapshot.val())
      });
    return (
        <>
         <div className='container'>
         
         <div className='row vh-100 align-items-center justify-content-center'>
        
           <div className='col-sm-8 col-md-6 col-lg-4 bg-white rounded p-3 shadow'>
         <form>
        
                <div className='mb-3'>
                    <label for='name' className='form-label' > Name</label>
                    
                    <span><i class="fas fa-user"></i></span> 
                    <input type='text' className='form-control' defaultValue={user.username}  aria-describedby='nameHelp' required/>
                   
                   <span id='usererror' className='text-danger font-weight-bold'></span>
                  </div>
                  <div className='mb-3'>
                    <label for='dob' className='form-label'>Date of birth</label>
                    <input type='date' className='form-control' defaultValue={user.dob}  aria-describedby='dobHelp' required/>
                   
                  </div>
                  <div className='mb-3'>
                    <label for='email' className='form-label'>Email Address</label>
                    <span>
                    <i class="fas fa-envelope"></i>
                    </span>
                    <input type='email' className='form-control' defaultValue={user.email}  aria-describedby='emailHelp' required/>
                   
                  </div>
                  <div className='mb-3'>
                    <label for='password' className='form-label'>Password</label>
                    <span>
                    <i class="fas fa-key"></i>
                    </span>
                    <input type='password' className='form-control' defaultValue={user.password} title="Must contain at least one number and one special character, and at least 8 or more characters"  required/>
                     <span id='passworderror' className='text-danger font-weight-bold'></span>
                  </div>
                 
                  <button type='submit' className='btn btn-primary w-100'>Update Profile</button>
                </form>
                </div>
                </div>
                </div>
        </>
    )
}

export default User

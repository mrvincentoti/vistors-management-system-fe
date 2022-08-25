// import React, { Component } from 'react';

import React, { useState, useEffect } from "react";
import AuthService from "../../services/auth/auth.service";
import Glyphicon from 'react-bootstrap'

export default function Profile() {
  const [userProfile, setUserProfile] = useState(undefined);
  
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      console.log(user);
      setUserProfile(user);
    }

    return () => {

    }
  }, []);
    return (
      <div className="container">
      <header className="jumbotron " >
        <h3>
          <strong class="fa fa-users" aria-hidden="true"></strong> Profile
        </h3>
      </header>
      
     <div className='col-md-12 mt-3'>
     <div className='table-responsive'>
         <table class="table table-striped">
             <thead>
             <tr>
                     <th scope="col">#</th>
                     <th scope="col">Username</th>
                     <th scope="col"></th>

                 </tr>
                 <tr>
                     <th scope="col">#</th>
                     <th scope="col">First Name</th>
                     <th scope="col">Company</th>

                 </tr>
                 <tr>
                     <th scope="col">#</th>
                     <th scope="col">Last Name</th>
                     <th scope="col">Company</th>

                 </tr>
                 <tr>
                     <th scope="col">#</th>
                     <th scope="col">Email</th>
                     <th scope="col">Company</th>

                 </tr>
                 <tr>
                     <th scope="col">#</th>
                     <th scope="col">Phone Number</th>
                     <th scope="col">Company</th>

                 </tr>
                 <tr>
                     <th scope="col">#</th>
                     <th scope="col">Department</th>
                     <th scope="col">Company</th>

                 </tr>
                 <tr>
                     <th scope="col">#</th>
                     <th scope="col">Gender</th>
                     <th scope="col">Company</th>

                 </tr>
             </thead>
             {/* <tbody>
                 <tr>
                     <th scope="row">1</th>
                     <td>Mark</td>
                     <td>Otto</td>

                 </tr>
             </tbody> */}
         </table>
     </div>
 </div>
</div>
    );
}
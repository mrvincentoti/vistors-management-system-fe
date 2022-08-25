import React, { useState, useEffect } from "react";
import AuthService from "../../services/auth/auth.service";

export default function Profile() {
    const user = AuthService.getCurrentUser();
    return (
        <div className="container">
            <header className="jumbotron " >
                <h3>
                    <strong className="fa fa-users" aria-hidden="true"></strong>Profile
                </h3>
            </header>

            <div className='col-md-12 mt-3'>
                <div className='table-responsive'>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Username</th>
                                <th scope="col">{user.user.username}</th>

                            </tr>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">{user.user.first_name}</th>

                            </tr>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">{user.user.last_name}</th>

                            </tr>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Email</th>
                                <th scope="col">{user.user.email}</th>

                            </tr>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">{user.user.phone_number}</th>

                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    );
}
import React from 'react'
import AuthService from "../../services/auth/auth.service";

export default function Home() {
    const currentUser = AuthService.getCurrentUser();
    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                    <strong>{currentUser.user.username}</strong> Profile
                </h3>
            </header>
            <p>
                <strong>Id:</strong> {currentUser.user.id}
            </p>
            <p>
                <strong>Email:</strong> {currentUser.user.email}
            </p>
        </div>
    )
}

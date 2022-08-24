import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Login from './components/auth/Login';
import Home from './components/landing/Home';
import AuthService from "./services/auth/auth.service";
import { useNavigate } from "react-router-dom";
import Profile from "./components/landing/Profile";
/*import "bootstrap/dist/css/bootstrap.min.css";*/

const App = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      console.log(currentUser);
    }

    return () => {

    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
    navigate("/");
  };

  return (
    <div className="container-fluid">
      {
        currentUser && (
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#" style={{ fontWeight: "bold" }}>L3VMS</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
              <ul className="navbar-nav justify-content-end">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Visitors</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Staff</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Account
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="/Profile">Profile</a>
                    <a className="dropdown-item" href="#">Sign Out</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="/login" className="btn btn-danger" onClick={logOut}>
                    LogOut
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        )
      }
      <div className="container-fluid">
        <Routes>
          <Route exact path={"/"} element={<Login />} />
          <Route exact path={"/home"} element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </div>
      {/* <Login /> */}
      {/* <AuthVerify logOut={logOut}/> */}
    </div>
  );
}

export default App;

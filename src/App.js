import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Login from './components/auth/Login';
import Home from './components/landing/Home';
import AuthService from "./services/auth/auth.service";
import { useNavigate } from "react-router-dom";
import Profile from "./components/landing/Profile";
import Visitors from "./components/landing/visitors";
import Welcome from "./components/welcome/Welcome";

const App = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }

    return () => {

    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
    navigate("/");
  };

  const sendCurrentPage = (data) => { // the callback. Use a better name
    setCurrentPage(data);
  };

  return (
    <div className="container-fluid">
      {
        currentUser && currentPage === "" && (
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/home" style={{ fontWeight: "bold" }}>L3VMS</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
              <ul className="navbar-nav justify-content-end">
                <li className="nav-item active">
                  <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/history">History</a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">Staff</a>
                </li> */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Account
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="/Profile">Profile</a>
                    <a className="dropdown-item" href="/login" onClick={logOut}>Sign Out</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="/login" className="btn btn-danger" onClick={logOut}>
                    Sign Out
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
          <Route exact path="/history" element={<Visitors />} />
          <Route exact path="/welcome" element={<Welcome sendCurrentPage={sendCurrentPage} />} />
        </Routes>
      </div>
      {/* <Login /> */}
      {/* <AuthVerify logOut={logOut}/> */}
    </div>
  );
}

export default App;

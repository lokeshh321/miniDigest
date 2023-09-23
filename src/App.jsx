import React from "react";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Trending from "./components/trending/Trending";
import Explore from "./components/explore/Explore";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";
import Landing from "./components/landing/Landing";

import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

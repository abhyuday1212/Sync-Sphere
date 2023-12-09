import React, { useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
// *-**--*-*-*--*-*-*--*-*-*-*-*-**--*--*-*-
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import ProjectsHome from "./components/projectshome/ProjectsHome";
import NoMatch from "./components/nomatch/NoMatch";
import About from "./components/about/About";
import Login from "./components/account/Login";
import Profile from "./components/account/Profile";
import Test from "./components/jsx/test";

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ?
    <>
      <Navbar />
      <Outlet />
    </>
    : <Navigate replace to='/login' />
}

const App = () => {
  const [isAuthenticated, isUserAuthenticated] = useState(false)

  return (
    <div className="App">

      <Routes>
        <Route path="/login" element={<Login isUserAuthenticated={isUserAuthenticated} />} />

        {/* Setting up a private route */}
        <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<ProjectsHome />} />

          {/* ---------------------------------- */}
          <Route path="projects" element={<ProjectsHome />} />

          {/* <Route path="/:id" element={<Update />} /> */}

          {/* ---------------------------------- */}

          <Route path="projects/test" element={<Test />} />

          {/* ---------------------------------- */}
          <Route path="about" element={<About />} />

          <Route path="profile" element={<Profile />} />

          {/* ---------------------------------- */}
          <Route path="*" element={<NoMatch />} />

        </Route>


      </Routes>
    </div>
  );
};

export default App;

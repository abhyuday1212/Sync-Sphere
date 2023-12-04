import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import ProjectsHome from "./components/projectshome/ProjectsHome";
import NoMatch from "./components/nomatch/NoMatch";
import About from "./components/about/About";
import Login from "./components/account/Login";
import Profile from "./components/account/Profile";
import Test from "./components/jsx/test";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* ---------------------------------- */}
        <Route path="projects" element={<ProjectsHome />} />

        {/* <Route path="/:id" element={<Update />} /> */}

        {/* ---------------------------------- */}

        <Route path="projects/test" element={<Test />} />

        {/* ---------------------------------- */}
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />

        {/* ---------------------------------- */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default App;

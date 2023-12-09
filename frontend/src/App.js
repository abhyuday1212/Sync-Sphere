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
import CreatePost from "./components/create/CreatePost";
import Donate from "./components/details/Donate";
import Details from "./components/details/DetailView";

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
        </Route>



        <Route path="/projects" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/projects" element={<ProjectsHome />} />
        </Route>



        <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/create' element={<CreatePost />} />
            </Route>


        <Route path='/join' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/join' element={<Donate />} />
            </Route>


        <Route path='/details' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/details' element={<Details />} />
            </Route>




        {/* <Route path="/:id" element={<Update />} /> */}

        {/* ---------------------------------- */}

        <Route path="projects/test" element={<Test />} />

        {/* ---------------------------------- */}
        <Route path="about" element={<About />} />

        <Route path="profile" element={<Profile />} />

        {/* ---------------------------------- */}
        <Route path="*" element={<NoMatch />} />



      </Routes>
    </div>
  );
};

export default App;

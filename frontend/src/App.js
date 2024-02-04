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
import DetailView from "./components/details/DetailView";
import FreePost from "./components/create/FreePost";
import PaidPost from "./components/create/PaidPost";
import Join from "./components/details/Join";
import Company from "./components/details/Company";
import Individual from "./components/details/Individual";
import Volunteer from "./components/details/volunteer";
import Gemini from "./components/gemini/Gemini";


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

        <Route path="/projects/" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/projects/" element={<ProjectsHome />} />
        </Route>

        <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
          <Route path='/create' element={<CreatePost />} />
        </Route>

        <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
          <Route path='/create/free' element={<FreePost />} />
        </Route>

        <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
          <Route path='/create/paid' element={<PaidPost />} />
        </Route>

        <Route path='/projects/join/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
          <Route path='/projects/join/:id' element={<Join />} />
        </Route>

        <Route path='/projects/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path='/projects/details/:id' element={<DetailView />} />
        </Route>

        <Route path='/gemini' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
          <Route path="/gemini" element={<Gemini />} />
        </Route>

        <Route path='/test' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
          <Route path="/test" element={<Test />} />
        </Route>

        <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
          <Route path="/about" element={<About />} />
        </Route>

        <Route path='/profile' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path='/projects/join/:id/company' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
          <Route path="/projects/join/:id/company" element={<Company />} />
        </Route>

        <Route path='/projects/join/:id/individual' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
          <Route path="/projects/join/:id/individual" element={<Individual />} />
        </Route>

        <Route path='/projects/join/:id/volunteer' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
          <Route path="/projects/join/:id/volunteer" element={<Volunteer />} />

        </Route>

        {/* ---------------------------------- */}
        <Route path="*" element={<NoMatch />} />

      </Routes>
    </div>
  );
};

export default App;

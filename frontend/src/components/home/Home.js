import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-white my-35 ">
      <div className=" mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center bg-[#000300] color-[#ffff] ">
        <p className="text-[#00df9a] font-bold p-2 text-xl">
          Empowering Research and Development
        </p>
        <h1 className="md:text-6xl sm:text-6xl text-2xl font-bold md:py-3">
          Shaping the Future of Engineering and Technology
        </h1>
        <div className="flex justify-center items-center my-3">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Elevate Dreams, Multiply Impact :
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#d0546d] "
            strings={["Collaborating", "for", "Sustainable", "Goals"]}
            typeSpeed={60}
            backSpeed={100}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Common Goals, Uncommon Solutions: Pioneering Global Collaboration.
        </p>
        <Link to="/projects/">
          <button className="bg-[#00df9a] rounded-md hover:text-[crimson] hover:bg-[white] hover:border-[black]  w-[200px] py-3 text-black  font-medium my-6 mx-auto  ">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

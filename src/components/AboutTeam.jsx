import React from "react";
import Group9 from "../assets/icons&images/Group 9.png";
import vectorLeft from "../assets/vectors/Vector.svg";
import Centre from "../assets/icons&images/Group 2.svg";
import topVector from "../assets/vectors/Vector-1.svg";
import rightVector from "../assets/vectors/Vector-2.svg";
import IndiaGate from "../assets/icons&images/IndiaGate.svg";
const AboutTeam = () => {
  return (
    <div className="w-[90%] h-screen mx-auto ">
      <div className="h-1/4 ">
        <img className="h-40 w-50 absolute left-25" src={Group9} alt="" />
      </div>

      <div className="pt-2 flex flex-col">
        <div className="ml-15">
            <div className="bottom relative">
          <img
            src={vectorLeft}
            className="h-15 absolute top-30 left-10"
            alt=""
          />
          <p className="font-island text-lg absolute top-45 left-4">
            Branding Experts
          </p>
        </div>
        <div className="left-top relative">
          <img src={topVector} className="h-12 absolute top-3 left-25" alt="" />
          <p className="font-island text-lg absolute -top-2 left-20">
            Film Makers
          </p>
        </div>
        <div className="centre relative">
          <img src={Centre} className="h-25 absolute sm:w-80 left-28 top-15" alt="" />
        </div>
        <div className="right relative">
          <p className="font-island text-xl absolute right-0 top-7">
            Art Curaters
          </p>
          <img
            src={rightVector}
            className="h-13 absolute right-2 top-12"
            alt=""
          />
        </div>
        </div>
        <div className="india-gate relative  pt-4 flex ">
          <img src={IndiaGate} className="h-30 absolute top-10" alt="" />
          <p className="font-halant text-xs w-1/2 text-end absolute left-40 top-60 ">Take a closer look at the stories V bring into your life.</p>
          <button className="px-2 py-1 rounded-full text-xs w-1/3 absolute top-50 right-10 bg-[#F15D23] text-white">View Prototype</button>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;

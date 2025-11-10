import React from "react";
import TopVec from "../assets/vectors/Footer Vector.png";
import BottomVec from "../assets/vectors/Footer Vector 2.png";
import FormComponent from "../components/FormComponent";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FormPage = () => {

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".para", {
      x:-200,
      opacity:0,
      scale:0.7,
      duration:1,
      delay:0.3,
      ease:"ease-in-out"
    })

    tl.from(".form", {
      x:100,
      opacity:0,
      scale:0.7,
      duration:1,
      ease:"ease-in-out"
    })
  })

  


  return (
    <div className="formPage h-[70vh] w-[80%] overflow-auto mx-auto my-10">
      <div className="top-right absolute top-0 pointer-events-none z-[-0.5] right-0">
        <img className="xl:h-80 sm:h-50 h-40" src={TopVec} alt="" />
      </div>
      <div className="center-form mt-30 sm:mt-0 flex flex-col xl:flex-row sm:justify-center xl:ml-0 w-full p-2 h-full gap-10">
        <div className="para w-full xl:w-1/2 ml-5 flex justify-center items-center">
          <div className="font-content flex flex-col items-start w-[50%] ">
            <p className="text-left text-xs lg:text-sm xl:text-lg leading-5">
              Whether you have an idea, a question, or simply want to explore
              how V can work together, V’re just a message away.
            </p>
            <p className="text-left text-xs lg:text-sm xl:text-lg leading-5"> Let’s catch up over coffee.</p>
            <p className="text-left text-xs lg:text-sm xl:text-lg leading-5">
              {" "}
              Great stories always begin with a good conversation
            </p>
          </div>
        </div>
        <div className="form w-full xl:w-1/2 flex flex-col gap-5 justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center">
            <div>
              <h2 className="font-halant">Join the Story</h2>
            </div>
            <div>
              <p className="font-content text-xs">
                Ready to bring your vision to life? Let’s talk.
              </p>
            </div>
          </div>
          <FormComponent />
          <div className="flex items-center text-[#F15D2B] text-xs font-content w-fit">
            {/* Email */}
            <p className="px-3 py-1">vernita@varnanfilms.co.in</p>

            {/* Divider */}
            <span className="w-px h-4 bg-[#F15D2B]"></span>

            {/* Phone */}
            <p className="px-3 py-1">+91 98736 84567</p>
          </div>
        </div>
      </div>
      <div className="bottom-left">
        <img className="absolute xl:h-80 h-50 bottom-0 left-0 " src={BottomVec} alt="" />
      </div>
    </div>
  );
};

export default FormPage;

import Frame9 from "../assets/icons&images/Frame 9.png";
import Frame22 from "../assets/icons&images/Frame 22.png";
import Frame23 from "../assets/icons&images/Frame 23.png";
import Group10 from "../assets/icons&images/Group 10.png";
import Objects from "../assets/icons&images/mountain.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AboutUs = () => {

  
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(".img1",{
            rotateZ:0,
            scale:1
        },0)

        tl.from(".img2", {
            rotateZ:0,
            scale:1,
            delay:1
        },0.5)

        tl.to(".img1", {
            scale:0.8,
            rotateZ:"-180",
            translateY:"100%",
            duration:1.5
        },0.2);

        tl.to(".img2", {
            scale:0.8,
            rotateZ:"0",
            translateY:"-100%",
            duration:1.5,
            delay:1
        },0.6);


        tl.to(".img1", {
            scale:1,
            rotateZ:"-180",
            translateY:"100%",
            duration:2
        },1.7);

        tl.to(".img2", {
            scale:1,
            rotateZ:"0",
            translateY:"-100%",
            duration:2
        },1.7);
        
        
    });


  return (
    <div className=" w-[90%] min-h-screen overflow-y-hidden  mx-auto pt-20 px-5 grid gap-2.5 grid-cols-1 grid-rows-2 md:grid-cols-2">
      <section className="section-1  py-4 px-1 flex flex-col gap-2 pb-10 justify-center items-center">
        <h3 className="font-halant text-center text-[1rem] sm:text-2xl ">
          A montage of familiar faces and names.
        </h3>
        <p className="font-content text-center text-[0.8rem] w-2/3">
          Some stories come from the biggest names. Others begin with bold,
          rising voices. We’ve been fortunate to walk alongside both -
          listening, creating, and building stories that matter.
        </p>
      </section>


      <section className="section-1  sm:pt-10 py-4 px-2 flex justify-center items-end">
        <p className="font-island h-full text-center text-4xl sm:text-6xl">
          Every project is more than just a brief - it’s a new chapter waiting
          to be written. Together, we've crafted tales that inspire, connect,
          and endure.
        </p>
      </section>

      <section className="section-1  py-4 pr-20 sm:px-0 flex justify-center items-center">
        <img
          src={Frame9}
          className="-mr-25  sm:ml-14 sm:mb-0  h-50 w-50 sm:h-50 sm:w-50 s"
          alt=""
        />
        <img
          src={Frame22}
          className="-mr-25 sm:mt-10 sm:mb-10  h-50 w-50 sm:h-50 sm:w-50 s"
          alt=""
        />
        <img
          src={Frame23}
          className="-mr-23 sm:mt-10 sm:mb-12  h-50 w-50 sm:h-50 sm:w-50 s"
          alt=""
        />
      </section>

      <section className="section-1 relative flex flex-col pt-6 px-2 ">
        <div 
        >
          <img
            src={Group10}
            className="img1  absolute top-18 left-3 w-screen"
            alt=""
          />
          <img
            src={Group10}
            className="img2   rotate-z-180  absolute left-0 top-90"
            alt=""
          />
        </div>
        <img src={Objects} className="h-68 left-5 absolute top-20" alt="" />
      </section>
    </div>
  );
};

export default AboutUs;

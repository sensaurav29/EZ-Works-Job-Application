import MandalaImg from "../assets/icons&images/Hero Mandala.svg";
import FilmLogo from "../assets/logos/VFilms Logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const LandingSection = () => {

  useGSAP(() => {

    const tl = gsap.timeline();

    tl.from(".mandala",{
      x:-100,
      z:-1,
      opacity:0,
      stagger:{
        amount:-0.2
      },
      duration:0.6,
      
    },0.2)

    tl.from(".bold", {
      y:50,
      opacity:0,
      duration:0.4,
      
    },0.5)

    tl.from(".bullets", {
      x:100,
      opacity:0,
      stagger:{
        amount:-0.2
      },
      duration:0.6,
      
    },0.8)

    tl.from(".desc", {
      y:100,
      opacity:0,
      stagger:{
        amount:-0.2
      },
      duration:0.6,
      
    },1)
  }) 


  return (
    <div className="landing w-[90%] md:w-[70%]  overflow-auto h-screen mx-auto mt-40  sm:mt-5 p-2 flex flex-col gap-8  md:gap-50 sm:flex-row max-sm:gap-8 sm:justify-center sm:items-center  ">
      <div className="mandala relative flex justify-center items-center sm:h-full sm:w-[40%]">
        <img className="h-full w-2/3 md:w-full " src={MandalaImg} alt="" />
        <div className="absolute md:top-70 ">
          <img className="h-10 sm:h-10 md:h-10 lg:h-18 mb-3 sm:mr-5" src={FilmLogo} alt="" />
        </div>
      </div>
      <div className="hero-text  flex flex-col justify-center sm:w-[50%] gap-8">
        <div className="bold font-island  text-center text-4xl lg:text-6xl ">
          Varnan is where stories find their voice and form
        </div>
        <div className="bullets ">
          <p className="text-center text-[1rem] sm:text-sm md:text-lg lg:text-2xl font-halant text-[#F15D2B]">
            {" "}
            Films . Brand . Art
          </p>
        </div>
        <div className="desc self-center">
         <p className=" text-center text-[0.8rem] w-64 sm:text-[0.5rem] md:text-[0.8rem] sm:w-55 md:w-72   font-content">
           Since 2009, V’ve been telling stories - stories of people, their
          journeys, and the places that shape them. Some begin in polished
          boardrooms, others in humble village squares. But every story starts
          the same way - by listening with intention. V believes it takes trust,
          patience, and an eye for the unseen to capture what truly matters. V
          doesn’t just tell stories - V honors them.
         </p>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;

import Frame33 from "../assets/icons&images/Frame 33.svg";
import Vector from "../assets/icons&images/Vector.svg";
import Frame31 from "../assets/icons&images/Frame 31.png";
import Frame31A from "../assets/icons&images/Frame 31 A.png";
import Frame31B from "../assets/icons&images/Frame 32 B.png";
import tapeImg from "../assets/icons&images/image 6.png";

const Services = () => {
  const imgArray = [Frame31, Frame31A, Frame31B];

  return (
    <div className="relative  w-screen min-h-screen overflow-x-hidden xl:overflow-hidden pointer-events-none flex flex-col">
      {/* Title Section */}
      <div className="flex flex-col items-center px-5 pt-10 ">
        <p className="font-halant text-center text-2xl sm:text-3xl">
          The storyboard reveals the breadth of our craft.
        </p>
        <img className="w-[60%] sm:w-[40%]" src={Vector} alt="" />
      </div>

      {/* Images Section */}
      <div className="w-full mx-auto px-5 sm:px-10 flex flex-col sm:flex-row items-center sm:items-start justify-center gap-0 sm:gap-0 py-10">

        {/* Image Card 1 */}
        <div className="relative w-full sm:w-1/3 flex flex-col items-center">
          <img className="absolute -top-4 left-[50%] -translate-x-1/2 w-24 sm:w-28 rotate-[-10deg]" src={tapeImg} alt="" />
          <img className="w-60 h-72 sm:w-[20vw] sm:h-[50vh] object-cover rotate-12 shadow-lg" src={imgArray[2]} alt="" />
        </div>

        {/* Image Card 2 */}
        <div className="relative w-full sm:w-1/3 flex flex-col items-center mt-16 sm:mt-0">
          <img className="absolute -top-4 left-[50%] -translate-x-1/2 w-24 sm:w-28 rotate-[8deg]" src={tapeImg} alt="" />
          <img className="w-60 h-72 sm:w-[20vw] sm:h-[50vh] object-cover rotate-3 shadow-lg" src={imgArray[0]} alt="" />
        </div>

        {/* Image Card 3 */}
        <div className="relative w-full sm:w-1/3 flex flex-col items-center mt-16 sm:mt-0">
          <img className="absolute -top-4 left-[50%] -translate-x-1/2 w-24 sm:w-28 rotate-15" src={tapeImg} alt="" />
          <img className="w-60 h-72 sm:w-[20vw] sm:h-[50vh] object-cover -rotate-2 shadow-lg" src={imgArray[1]} alt="" />
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="w-full flex justify-center pb-5 sm:pb-0">
        <img src={Frame33} alt="" />
      </div>
    </div>
  );
};

export default Services;

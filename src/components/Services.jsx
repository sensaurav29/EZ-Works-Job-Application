import Frame33 from "../assets/icons&images/Frame 33.svg"
import Vector from "../assets/icons&images/Vector.svg"
import Frame31 from "../assets/icons&images/Frame 31.png"
import Frame31A from "../assets/icons&images/Frame 31 A.png"
import Frame31B from "../assets/icons&images/Frame 32 B.png"
import tapeImg from '../assets/icons&images/image 6.png'
import Images from "./Images"


const Services = () => {
    const imgArray = [Frame31, Frame31A, Frame31B];
  return (
    <div className="h-[90vh] relative w-screen overflow-hidden flex flex-col justify-center">
        <div className=" h-18 flex flex-col items-center">
            <p className="font-halant text-center text-3xl">The storyboard reveals the breadth of our craft.</p>
            <img className="w-[40%]" src={Vector} alt="" />
        </div>

        <div className="h-[70%]  mx-auto px-10 w-[90%] flex justify-center items-start">
           <div className="relative w-1/3 left-20 top-4  ">
            <img className="absolute left-5 -top-5 z-10 w-30" src={tapeImg} alt="" />
            <img className="h-[50vh] w-[20vw] rotate-12" src={imgArray[2]} alt="" />
           </div>
           <div className="relative w-1/3   top-4 ">
            <img className="absolute left-25 top-8 z-10 w-30" src={tapeImg} alt="" />
            <img className="h-[50vh] w-[20vw] absolute top-12 rotate-0" src={imgArray[0]} alt="" />
           </div>
           <div className="relative w-1/3  right-20">
            <img className="absolute left-25 -top-5 z-10 w-30 rotate-45" src={tapeImg} alt="" />
            <img className="h-[50vh] w-[20vw] -" src={imgArray[1]} alt="" />
           </div>
        </div>

      <div className="absolute -bottom-2 h-18">
        <img src={Frame33} alt="" />
      </div>
    </div>
  )
}

export default Services

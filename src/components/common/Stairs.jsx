import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const Stairs = (props ) => {
  const { pathname } = useLocation();
  
  const parentDivRef = useRef(null);
  const childrenDiv = useRef(null);
  console.log(props.children)
  useGSAP(function () {
    const tl = gsap.timeline();

    tl.to(parentDivRef.current, {
      display: "block",
    });
    tl.from(".stairs", {
      width: 0,
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(".stairs", {
      x: "100%",
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(parentDivRef.current, {
      display: "none",
    });
    tl.to(".stairs", {
      x: "0%",
    });

    gsap.from(childrenDiv.current,{
      opacity:0,
      delay:1.3,
      scale:1.2
    })


  }, [pathname]);

  return (
    <div>
      <div ref={parentDivRef} className="h-screen w-screen  fixed z-20 top-0">
        <div className="h-full w-full flex flex-col ">
          <div className="stairs w-full h-1/5  bg-[#F15D2B]"></div>
          <div className="stairs w-full h-1/5  bg-[#F15D2B]"></div>
          <div className="stairs w-full h-1/5  bg-[#F15D2B]"></div>
          <div className="stairs w-full h-1/5  bg-[#F15D2B]"></div>
          <div className="stairs w-full h-1/5  bg-[#F15D2B]"></div>
        </div>
      </div>
      <div className="overflow-x-hidden" ref={childrenDiv}>
        {props.children}
      </div>
    </div>
  );
};

export default Stairs;

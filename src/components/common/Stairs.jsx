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
      height: 0,
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(".stairs", {
      y: "100%",
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(parentDivRef.current, {
      display: "none",
    });
    tl.to(".stairs", {
      y: "0%",
    });

    gsap.from(childrenDiv.current,{
      opacity:0,
      delay:1.3,
      scale:1.2
    })


  }, [pathname]);

  return (
    <div>
      <div ref={parentDivRef} className="h-screen w-full  fixed z-20 top-0">
        <div className="h-full w-full flex">
          <div className="stairs h-full w-1/5  bg-[#F15D2B]"></div>
          <div className="stairs h-full w-1/5  bg-[#F15D2B]"></div>
          <div className="stairs h-full w-1/5  bg-[#F15D2B]"></div>
          <div className="stairs h-full w-1/5  bg-[#F15D2B]"></div>
          <div className="stairs h-full w-1/5  bg-[#F15D2B]"></div>
        </div>
      </div>
      <div className="overflow-x-hidden" ref={childrenDiv}>
        {props.children}
      </div>
    </div>
  );
};

export default Stairs;

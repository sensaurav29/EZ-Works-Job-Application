import { useState } from "react";
import FilmsLogo from "../assets/logos/VFilms Logo.png";
import NavIcon from "../assets/icons&images/nav-icon.png";
import { NavLink, useNavigate } from "react-router-dom";
import openImg from "../assets/icons&images/Open.svg";
import mailImg from "../assets/icons&images/mail.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setisOpen] = useState(false);

  useGSAP(() => {
    gsap.from(".closed-btn", {
      x: -100,
      opacity: 0,
      duration: 0.6,
    });

    gsap.from(".logo-div", {
      z: -1,
      opacity: 0,
      duration: 0.6,
    });
  }, [isOpen]);

  return (
    <div className="w-screen overflow-hidden h-14 p-1 px-5 mt-2 z-50 bg-[#f0e5e125] ">
      <div className="flex justify-between items-center ">
        {/* Logo Div */}
        <div
          onClick={() => navigate("/")}
          className="logo-div w-28 md:w-32 md:h-15 h-10 flex items-center pb-2"
        >
          <img
            className="h-[80%] w-[80%] items-center"
            src={FilmsLogo}
            alt=""
          />
        </div>
        {isOpen ? (
          <OpenNav navigate={navigate} setisOpen={setisOpen} />
        ) : (
          <div
            onClick={() => {
              setisOpen(true);
            }}
            className={`closed-btn p-2 ${isOpen ? "translate-x-96" : "translate-x-0"}`}
          >
            <img className="h-6" src={NavIcon} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

export const OpenNav = ({ setisOpen, navigate }) => {
  useGSAP(() => {
    gsap.from(".openNav", {
      x: 100,
      opacity: 0,
      stagger: {
        amount: 0.3,
      },
      duration: 0.4,
    });
  });

  return (
    <div
      className={`openNav absolute top-5 right-0 flex flex-col sm:flex-row-reverse  text-sm pr-1 `}
    >
      <div className="p-2 flex justify-end" onClick={() => setisOpen(false)}>
        <img className="h-10" src={openImg} alt="" />
      </div>

      <div className="flex flex-col sm:flex-row sm:gap-2 sm:items-center gap-2 items-end">
        {["Services", "Their Stories", "Our Stories", "Varnan"].map(
          (item, idx) => (
            <div className="openNav" key={idx}>
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={`font-content text-end mr-5`}
              >
                {item}
              </NavLink>
            </div>
          )
        )}

        <div className="font-content text-end mr-4">
          <button
            onClick={() => navigate("/contact-us")}
            className="openNav py-2 ml-2 sm:ml-0 px-4 text-white bg-[#F15D2B] flex gap-1 rounded-full"
          >
            Let's talk <img className="h-5" src={mailImg} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

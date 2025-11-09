import React from "react";
import MainRoutes from "./routes/MainRoutes";
import bg from "./assets/icons&images/BG.png";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <div
        className="min-h-screen overflow-x-hidden bg-repeat  bg-[#FF9D7D]/70 text-3xl  "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <MainRoutes />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={3}         // prevent toast spam
        style={{ zIndex: 9999 }} // make sure it overlays everything
      />
      {/* <div className="h-[50vh] bg-green-300">TEST SCROLL</div> */}
    </>
  );
};

export default App;

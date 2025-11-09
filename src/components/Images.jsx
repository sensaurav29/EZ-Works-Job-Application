import React from "react";

const Images = ({ imageUrl, rotateDegree, tape, tapeRotate }) => {
  return (
    <>
      <div className={`relative tape rotate-${tapeRotate}`}>
        <img src={tape} className="absolute z-10" alt="" />
        <img className={`z-0 absolute top-2 h-[70vh] rotate-${rotateDegree}`} src={imageUrl} alt="" />
      </div>

     
    </>
  );
};

export default Images;

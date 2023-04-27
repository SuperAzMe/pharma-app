import React from "react";
import AboutImage from "../assets/AboutPage.jpg";
import Footers from "./footers";
import ScrollToTopButton from "./ScrollToTopButton";
const WellenaPage = () => {
  return (
    <div>
      <div className=" px-[80px] ml-[-80px] mr-[-80px] ">
        <img
          src={AboutImage}
          className="w-[2000px] h-[350px]  justify-center"
          alt=""
        />
        <div className="absolute text-5xl text-white top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Wellena
        </div>
        <div className="absolute text-3xl text-white top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Our Products/ Wellena
        </div>
      </div>
      <div className="w-[10%] h-[2px] float-left mt-[50px] mr-[45%] mb-[50px] ml-[45%] bg-[#171717]"></div>
      <div>
        <p>&nbsp;</p>
      </div>
      <div className="grid grid-cols-2 justify-center mx-10  ">
        <div className="">
          <h3 className="text-[40px] text-[#004E7B]">
            <b>Wellena Gold Tablets</b>
          </h3>
        </div>
        <div className="ml-10">
          <h3 className="text-[40px] text-[#004E7B]">
            <b>Wellena Gold Syrup</b>
          </h3>
          <p className="text-[20px]">
            Amino Acids, Multiminerals & Multivitamins Syrup
          </p>
        </div>
        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
      </div>
      <Footers />
      <ScrollToTopButton />
    </div>
  );
};

export default WellenaPage;

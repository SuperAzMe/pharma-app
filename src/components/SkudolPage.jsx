import React from "react";
import AboutImage from "../assets/AboutPage.jpg";
import Footers from "./footers";
import ScrollToTopButton from "./ScrollToTopButton";
const SkudolPage = () => {
  return (
    <div>
      <div className=" px-[80px] ml-[-80px] mr-[-80px] ">
        <img
          src={AboutImage}
          className="w-[2000px] h-[350px]  justify-center"
          alt=""
        />
        <div className="absolute text-5xl text-white top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Skudol
        </div>
        <div className="absolute text-3xl text-white top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Our Products/ Skudol
        </div>
      </div>
      <div className="w-[10%] h-[2px] float-left mt-[50px] mr-[45%] mb-[50px] ml-[45%] bg-[#171717]"></div>
      <div>
        <p>&nbsp;</p>
      </div>
      <div className="grid grid-cols-2 justify-center mx-10  ">
        <div className="">
          <h3 className="text-[40px] text-[#004E7B]">
            <b>Skudol Tablets</b>
          </h3>
          <p className="text-[20px]">
            Tramadol Hydrochloride 37.5mg & Acetaminophen 325 mg Tablets
          </p>
        </div>
        <div className="ml-10">
          <h3 className="text-[40px] text-[#004E7B]">
            <b>Skudol-D</b>
          </h3>
          <p className="text-[20px]">
            Tramadol 37.5mg, Paracetamol 325 mg & Domperidone 10 mg Tablets
          </p>
        </div>
        <div className="">
          <h3 className="text-[40px] text-[#004E7B]">
            <b>Skudol-Semi</b>
          </h3>
          <p className="text-[20px]">
            Tramadol 18.75mg + Acetominophen 162.75mg Tablets
          </p>
        </div>
        <div className="ml-10">
          <h3 className="text-[40px] text-[#004E7B]">
            <b>Skudol-PLUS</b>
          </h3>
          <p className="text-[20px]">
            Each Bilayered Table Contains: Tramadol 50 mg & Diclofenac 75 mg (SR)
          </p>
        </div>
        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
      </div>
      <Footers />
      <ScrollToTopButton />
    </div>
  );
};

export default SkudolPage;

import React from "react";
import { Link } from "react-router-dom";
import AboutImage from "../assets/AboutPage.jpg";
import skuferz from "../assets/skuferz.jpg";
import wellena from "../assets/wellena.jpg";
import skudol from "../assets/skudol.jpg";
import nplin from "../assets/nplin.jpg";
import joyzyme from "../assets/joyzyme.jpg";
import callik from "../assets/callik.jpg";
import joyfen from "../assets/joyfen.jpg";
import joycox from "../assets/joycox.jpg";
import rabtiva from "../assets/rabtiva.jpg";
import clavator from "../assets/32.jpg";
import montifab from "../assets/Montifab.jpg";


const Skills = () => {
  return (
    <div>
      <div className=" px-[80px] ml-[-80px] mr-[-80px] ">
        <img
          src={AboutImage}
          className="w-[2000px] h-[350px]  justify-center"
          alt=""
        />
        <div className="absolute text-5xl text-white top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Our Products
        </div>
        <div className="absolute text-3xl text-white top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Home/ Our Products
        </div>
      </div>
      <div className="w-[10%] h-[2px] float-left mt-[50px] mr-[45%] mb-[50px] ml-[45%] bg-[#171717]"></div>
      <div>
        <p>&nbsp;</p>
      </div>
      <div
        name="skills"
        className="w-full h=screen bg-[#E7E0D3] pt-10 mt-[-20px]"
      >
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-20 p-4 flex flex-col  w-full h-full ">
          <div>
            <p className="text-4xl font-bold inline border-b-4 text-black">
              Our Products
            </p>
            <p className="py-4 text-black">
              This are the Brands under our Company
            </p>
          </div>

          <div className="bg-[#EAEBEA] text-black w-full grid grid-cols-2 sm:grid-cols-3 text-center md-10">
            <Link to={"/skuferz"} smooth={true} duration={500}>
              <div className="shadow-md shadow-[#040c16]  hover:scale-110 cursor-pointer duration-500">
                <img
                  className="w-20 mx-auto pt-10"
                  src={skuferz}
                  alt="Skuferz Icon"
                />
                <p className="my-4">Skuferz</p>
              </div>
            </Link>

            <Link to={"/wellena"} smooth={true} duration={500}>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 cursor-pointer duration-500">
                <img
                  className="w-20 mx-auto pt-10"
                  src={wellena}
                  alt="Wellena Icon"
                />
                <p className="my-4">Wellena</p>
              </div>
            </Link>

            <Link to={"/skudol"} smooth={true} duration={500}>
              <div className="shadow-md shadow-[#040c16]  hover:scale-110 cursor-pointer duration-500">
                <img
                  className="w-20  mx-auto pt-10"
                  src={skudol}
                  alt="Skudol Icon"
                />
                <p className="my-4">Skudol</p>
              </div>
            </Link>

            <Link to={"/nplin"} smooth={true} duration={500}>
              <div className="shadow-md shadow-[#040c16]  hover:scale-110 cursor-pointer duration-500">
                <img
                  className="w-20 mx-auto pt-10"
                  src={nplin}
                  alt="nplin Icon"
                />
                <p className="my-4">NPLIN</p>
              </div>
            </Link>

            <Link to={"/joyzyme"} smooth={true} duration={500}>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 cursor-pointer duration-500">
                <img
                  className="w-20 mx-auto pt-10"
                  src={joyzyme}
                  alt="Joyzyme Icon"
                />
                <p className="my-4">Joyzyme</p>
              </div>
            </Link>

            <Link to={"/callik"} smooth={true} duration={500}>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 cursor-pointer duration-500">
                <img
                  className="w-20 mx-auto pt-10"
                  src={callik}
                  alt="Callik Icon"
                />
                <p className="my-4">Callik</p>
              </div>
            </Link>

            <Link to={"/joyfen"} smooth={true} duration={500}>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 cursor-pointer duration-500">
                <img
                  className="w-20 mx-auto pt-10"
                  src={joyfen}
                  alt="Joyfen Icon"
                />
                <p className="my-4">Joyfen</p>
              </div>
            </Link>

            <Link to={"/joycox"} smooth={true} duration={500}>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 cursor-pointer duration-500">
                <img
                  className="w-20 mx-auto pt-10"
                  src={joycox}
                  alt="Joycox Icon"
                />
                <p className="my-4">Joycox</p>
              </div>
            </Link>

            <Link to={"/clavator"} smooth={true} duration={500}>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 cursor-pointer duration-500">
                <img
                  className="w-20 mx-auto pt-10"
                  src={clavator}
                  alt="clavator Icon"
                />
                <p className="my-4">Clavator</p>
              </div>
            </Link>

            <Link to={"/rabtiva"} smooth={true} duration={500}>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 cursor-pointer duration-500">
                <img
                  className="w-20 mx-auto pt-10"
                  src={rabtiva}
                  alt="Rabtiva Icon"
                />
                <p className="my-4">Rabtiva</p>
              </div>
            </Link>
            <Link to={"/montifab"} smooth={true} duration={500}>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 cursor-pointer duration-500">
                <img
                  className="w-20 mx-auto pt-10"
                  src={montifab}
                  alt="Montifab Icon"
                />
                <p className="my-4">Montifab</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

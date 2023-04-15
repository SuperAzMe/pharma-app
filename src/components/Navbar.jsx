import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className=" w-full h-[80px] flex justify-between items-center px-4 bg-[#171717] text-gray-300">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
      </div>

      <div className="absolute left-20">
        <p>skUds Lifecare</p>
      </div>

      {/* menu on the nav*/}
      <ul className="hidden md:flex">
        <li>
          <Link
            to={"/"}
            className="hover:bg-[#94a3b8] hover:rounded-lg hover:p-2 hover:text-[#1e293b] active:bg-[#171717] focus:outline-none   ..."
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to ={"/about"}
            className="hover:bg-[#94a3b8] hover:rounded-lg hover:p-2 hover:text-[#1e293b] active:bg-[#171717] focus:outline-none    ..."
            smooth={true}
            duration={500}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to={"/products"}
            className="hover:bg-[#94a3b8] hover:rounded-lg hover:p-2 hover:text-[#1e293b] active:bg-[#171717] focus:outline-none  transition-all ..."
            smooth={true}
            duration={500}
          >
            Our Products
          </Link>
        </li>
        <li>
          <Link
            to={"/career"}
            className="hover:bg-[#94a3b8] hover:rounded-lg hover:p-2 hover:text-[#1e293b] active:bg-[#171717] focus:outline-none  ..."
            smooth={true}
            duration={500}
          >
            Career
          </Link>
        </li>
        <li>
          <Link
            to={"/contact"}
            className="hover:bg-[#94a3b8] hover:rounded-lg hover:p-2 hover:text-[#1e293b] active:bg-[#171717] focus:outline-none  ..."
            smooth={true}
            duration={500}
          >
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      {/* <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div> */}

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#171717] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      {/* <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  duration-300 bg-blue-600 ">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  duration-300 bg-[#333333] ">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  duration-300 bg-[#565f69] ">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;

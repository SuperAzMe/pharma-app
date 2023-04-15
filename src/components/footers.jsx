import React from "react";
import Logo from "../assets/logo.png";
import { TbMapSearch, TbPhoneCall, TbMail } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footers = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="w-full ml-80 justify-center max-w-screen-xl p-4 py-6 lg:py-6 text-[15px]">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 ml-[80px]">
            <a href="https://flowbite.com/" className="flex items-center">
              <img src={Logo} className="h-8 mr-3" alt="FlowBite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                skUds
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 ml-40 gap-10 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Useful Links
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li>
                  <a className="hover:underline">
                    <Link
                      to={"/"}
                      onClick={() => {
                        Window.scrollTo(0, 0);
                      }}
                    >
                      Home
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="hover:underline">
                    <Link
                      to={"/about"}
                      onClick={() => {
                        Window.scrollTo(0, 0);
                      }}
                    >
                      About Us
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="hover:underline">
                    <Link
                      to={"/"}
                      onClick={() => {
                        Window.scrollTo(0, 0);
                      }}
                    >
                      Our Products
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="hover:underline">
                    <Link
                      to={"/career"}
                      onClick={() => {
                        Window.scrollTo(0, 0);
                      }}
                    >
                      Career
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="hover:underline">
                    <Link
                      to={"/contact"}
                      onClick={() => {
                        Window.scrollTo(0, 0);
                      }}
                    >
                      Contact Us
                    </Link>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mr-[30x]">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact Information
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <div>
                  <li className="flex mb-4">
                    <div>
                      <p>
                        <TbMapSearch />
                      </p>
                    </div>
                    <span className="ml-2 mt-[-4px] pr-2">
                      <p>
                        I-339, Titanium City Center Mall 100 Feet Road, Anand
                        Nagar, Satellite, Ahmedabad 380015
                      </p>
                    </span>
                  </li>
                </div>
                <div>
                  <li className="flex mb-4">
                    <div>
                      <p>
                        <TbPhoneCall />
                      </p>
                    </div>
                    <span className="ml-2 mt-[-4px] pr-2">
                      <p>+91 9376124288</p>
                    </span>
                  </li>
                </div>
                <div>
                  <li className="flex mb-4">
                    <div>
                      <p>
                        <TbMail />
                      </p>
                    </div>
                    <span className="ml-2 mt-[-4px] pr-2">
                      <p>skudspharmaceuticals@gmail.com</p>
                    </span>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <p className="hover:underline">
              © 2023 skuds™ . All Rights Reserved.
            </p>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footers;

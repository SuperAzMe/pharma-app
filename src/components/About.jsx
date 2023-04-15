import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div name="about">
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
      <div className="grid grid-cols-2 ml-5">
        <div>
          <img
            src={require("../assets/home1.jpg")}
            alt=""
            width={657.48}
            height={438.57}
          />
        </div>
        <div className="ml-[-120px]">
          <h1 className="text-[40px]">
            <b>skUds LIFECARE PVT. LTD.</b>
          </h1>
          <p className="mt-10">
            Skuds Lifecare is a reputable integrated pharmaceutical company
            headquartered in Ahmedabad, Gujarat. They specialize in marketing
            high-quality finished products in the Indian sub-continent. Skuds
            Lifecare is committed to producing top-notch drugs at manufacturing
            units that are WHO-GMP certified and FDA compliant. As an ISO
            9001:2015 certified company, Skuds Lifecare ensures that their
            products meet stringent quality standards. Their team is dedicated
            to providing innovative therapeutic solutions and is ready to face
            any challenges ahead.
          </p>

          <p className="mt-10 hover:text-[#dc3545] hover:cursor-pointer">
            <Link to={"/about"} onClick={() => {Window.scrollTo(0,0)}}>Read More..</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

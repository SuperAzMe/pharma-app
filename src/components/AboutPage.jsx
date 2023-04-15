import React from "react";
import AboutImage from "../assets/AboutPage.jpg";
import Footers from "./footers";
import ScrollToTopButton from "./ScrollToTopButton";

const AboutPage = () => {
  return (
    <div>
      <div className=" px-[80px] ml-[-80px] mr-[-80px]">
        <img
          src={AboutImage}
          className="w-[2000px] h-[350px]  justify-center"
          alt=""
        />
        <div className="absolute text-5xl text-white top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          About Us
        </div>
        <div className="absolute text-3xl text-white top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Home/ About Us
        </div>
      </div>
      <div className="w-[10%] h-[2px] float-left mt-[70px] mr-[45%] mb-[50px] ml-[45%] bg-[#171717]"></div>
      <div>
        <p>&nbsp;</p>
      </div>
      <div className="grid grid-cols-2 ml-5">
        <div>
          <img
            src={require("../assets/home1.jpg")}
            alt=""
            width={657.48}
            height={438.57}
          />
        </div>
        <div className="ml-[-120px] mt-[-30px]">
          <p className="mt-5">
            <div>
              Skuds Lifecare is a reputable integrated pharmaceutical company
              headquartered in Ahmedabad, Gujarat. They specialize in marketing
              high-quality finished products in the Indian sub-continent. Skuds
              Lifecare is committed to producing top-notch drugs at
              manufacturing units that are WHO-GMP certified and FDA compliant.
            </div>
            <p>&nbsp;</p>
            <div>
              As an ISO 9001:2015 certified company, Skuds Lifecare ensures that
              their products meet stringent quality standards. Their team is
              dedicated to providing innovative therapeutic solutions and is
              ready to face any challenges ahead.
            </div>
            <p>&nbsp;</p>
            <div>
              {" "}
              skUds Healthcare has an extensive and varied collection of
              pharmaceutical products that encompass a broad spectrum of
              therapeutic categories, including orthopaedics, neurology,
              gastroenterology, analgesics, anti-depressants, and anxiolytics.
              The company provides formulations in all available dosage forms,
              ensuring that patients can obtain the required medication in the
              most suitable and efficacious delivery mode.
            </div>
            <p>&nbsp;</p>
            <div>
              What sets skUds Healthcare apart is our unwavering focus on
              providing quality and cost-effective health solutions. Our
              commitment to our guiding values of customer focus, passion,
              collaboration, transparency, and integrity is at the core of
              everything we do. By embodying these values in every action we
              take, we are able to achieve operational excellence and make a
              positive impact in the healthcare industry. At skUds Healthcare,
              our values are the foundation of our commitment to patients and
              our dedication to making a difference.
            </div>
          </p>
          <p>&nbsp; &nbsp; &nbsp;</p>
        </div>
      </div>
      <div>
        <Footers />
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default AboutPage;

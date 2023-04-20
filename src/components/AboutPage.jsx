import React from "react";
import AboutImage from "../assets/AboutPage.jpg";
import Footers from "./footers";
import ScrollToTopButton from "./ScrollToTopButton";

const AboutPage = () => {
  return (
    <div>
      <div className=" px-[80px] ml-[-80px] mr-[-80px] ">
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
      <div className="grid grid-cols-2 ml-5 ">
        <div>
          <img
            src={require("../assets/home1.jpg")}
            alt=""
            className=""
            width={657.48}
            height={438.57}
          />
        </div>
        <div className="ml-[-120px] mt-[-30px]">
          <p className="mt-5">
            <div>Welcome to Skuds Pharmaceuticals!</div>
            <p>&nbsp;</p>
            <div>
              We are an up and coming pharmaceutical company committed to
              revolutionizing the healthcare industry with our high-quality
              products and services. Our mission is to make a positive impact on
              humanity by providing affordable and accessible healthcare
              solutions.
            </div>
            <p>&nbsp;</p>
            <div>
              At Skuds Pharmaceuticals, we understand that the quality of a
              pharmaceutical product is crucial for its efficacy and safety.
              Therefore, we take great care in sourcing our raw materials from
              verified supply chain partners and performing comprehensive
              testing on all our ingredients. We have in-house testing
              capabilities such as HPLC and GC, which enable us to test for
              impurities like Ethylene Glycol and Diethylene Glycol in Propylene
              Glycol, Glycerin, PEG, Sorbitol used as base for liquid
              formulations.
            </div>
            <p>&nbsp;</p>
            <div>
              {" "}
              Despite being a relatively new player in the industry, we are
              proud to say that we have already made significant strides in
              fulfilling our mission. During the Covid-19 pandemic, we remained
              committed to supplying high-quality healthcare products to our
              customers, despite the extreme shortage of Propylene Glycol. We
              procured it from verified supply chain partners and continued with
              our process of testing by GC, even though it caused us commercial
              losses due to delayed supplies.
            </div>
            <p>&nbsp;</p>
            <div>
              At Skuds Pharmaceuticals, we believe that everyone deserves access
              to affordable and high-quality healthcare. We continuously strive
              to innovate and improve our products and services to meet the
              ever-changing needs of our customers. Join us on this journey as
              we strive to make a positive impact on humanity, one healthcare
              solution at a time.
            </div>
            <p>&nbsp;</p>
            <div>
              Thank you for choosing Skuds Pharmaceuticals as your trusted
              healthcare partner.
            </div>
            <p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; </p>
          </p>
        </div>
      </div>
      <div>
        <p>&nbsp; &nbsp; &nbsp;</p>
        <Footers />
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default AboutPage;

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
            <b>skUds PHARMACEUTICALS PVT. LTD.</b>
          </h1>
          <p className="mt-10">
            We are committed to providing high-quality healthcare solutions that
            make a positive impact on humanity. Our stringent quality standards
            ensure that our products are safe and effective, and we source our
            raw materials from verified supply chain partners. Despite the
            challenges posed by the Covid-19 pandemic, we remained committed to
            supplying high-quality healthcare products to our customers. Join us
            on our mission to provide affordable and accessible healthcare
            solutions. Thank you for choosing Skuds Pharmaceuticals as your
            trusted healthcare partner.
          </p>

          <p className="mt-10 hover:text-[#dc3545] hover:cursor-pointer">
            <Link
              to={"/about"}
              onClick={() => {
                Window.scrollTo(0, 0);
              }}
            >
              Read More..
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

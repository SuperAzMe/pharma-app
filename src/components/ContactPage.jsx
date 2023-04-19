import React from "react";
import AboutImage from "../assets/AboutPage.jpg"
import Footers from "./footers";
import ScrollToTopButton from "./ScrollToTopButton";
import { useState } from "react";

const ContactPage = () => {

  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const submitContact = async (e) => {
    e.preventDefault();
    const res = await fetch("https://pharma-app-cb174-default-rtdb.firebaseio.com/contact.json", {
      method: "POST",
      headers: {
        "Content_Type": "Application/json"
      },
      body: JSON.stringify({
        name,
        number,
        email,
        message
      })
    });
    setName("");
    setEmail("");
    setMessage("");
    setNumber("");
  }
    return (
      <div>
        <div className=" px-[80px] ml-[-80px] mr-[-80px]">
          <img
            src={AboutImage}
            className="w-[2000px] h-[350px]  justify-center"
            alt=""
          />
          <div className="absolute text-5xl text-white top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Contact
          </div>
          <div className="absolute text-3xl text-white top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Home/ Contact
          </div>
        </div>
        <div>
          <h1 className="text-center text-[#919191] text-[40px] my-10">
            Leave a <span className="text-[#171717]">Message</span>
          </h1>
        </div>

        <div>
          <form
            className="bg-[#EAEBEA] text-gray-700 body-font w-full"
            action=""
            method="POST"
            onSubmit={submitContact}
          >
            <div className="container px-5 py-24 pt-[] mx-auto">
              <div className="lg:w-1/2 md:w-2/3 mx-auto mt-[-50px]">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <input
                        type="text"
                        id="number"
                        name="number"
                        placeholder="Phone"
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setNumber(e.target.value)}
                        value={number}
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full">
                    <div className="relative">
                      <input
                        type="email"
                        id="address"
                        name="address"
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-black  text-base outline-none text-gray-700 py-1 px-3  leading-6 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Address"
                      ></input>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-black h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        placeholder="Message"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-2 w-full">
                    <button className="bg-[#0F172A] text-[#FFFFFF] rounded-3xl ml-[15px] mt-10 px-[50px] py-[10px] text-[20px]  hover:bg-white hover:text-black">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <Footers />
        <ScrollToTopButton />
      </div>
    );
}
 
export default ContactPage;
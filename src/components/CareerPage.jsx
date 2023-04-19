import React,{ useState } from "react";
import Footers from "./footers";
import AboutImage from "../assets/AboutPage.jpg";
import ScrollToTopButton from "./ScrollToTopButton";
import {getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {storage} from "../firebaseConfig.js";

const CareerPage = () => 
{
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [altNum, setAltNum] = useState();
  const [email, setEail] = useState();
  const [edu, setEdu] = useState();
  const [exp, setExp] = useState();
  const [gen, setGen] = useState();
  const [add, setAdd] = useState();
  const [message, setMessage] = useState();
  const [file, setFile] = useState();
  const [fileUrl, setFileUrl] = useState();
  
  const CareerHandler = (e) => {
    e.preventDefault();
    const uploadForm = async(durl) => {
      const res = await fetch("https://pharma-app-cb174-default-rtdb.firebaseio.com/career.json", {
        method: "POST",
        headers: {
          "Content_Type": "Application/json"
        },
        body: JSON.stringify({
          name,
          number,
          email,
          altNum,
          education: edu,
          experience: exp,
          Gender: gen,
          address: add,
          message,
          Resume: durl,
        })
      });
      setName("");
      setAltNum("");
      setMessage("");
      setNumber("");
      setGen("");
      setEail("");
      setExp("");
      }
    // console.log(file);
    if(file){
      const imageRef=ref(storage,`images/${file.name}`);
      uploadBytes(imageRef, file).then(snapshot => {
        return getDownloadURL(snapshot.ref)
      })
      .then(downloadURL => {
        setFileUrl(downloadURL);
        console.log('Download URL', downloadURL)
        uploadForm(downloadURL);
      })
    }
    


  };
 
  return (
    <div>
      <div className=" px-[80px] ml-[-80px] mr-[-80px]">
        <img
          src={AboutImage}
          className="w-[2000px] h-[350px]  justify-center"
          alt=""
        />
        <div className="absolute text-5xl text-white top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Career
        </div>
        <div className="absolute text-3xl text-white top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Home/ Career
        </div>
      </div>
      <div>
        <h1 className="text-center text-[#919191] text-[40px] my-10">
          Apply <span className="text-[#171717]">Now!!</span>
        </h1>
      </div>
      <div>
        <form
          className="bg-[#EAEBEA] text-gray-700 body-fontw-full"
          action=""
          method="POST"
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
                      placeholder="Name of Applicant"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      onChange = {(e) => setName(e.target.value)}
                      value = {name}
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <input
                      type="text"
                      id="number"
                      name="number"
                      placeholder="Contact No."
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      onChange = {(e) => setNumber(e.target.value)}
                      value = {number}
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <input
                      type="text"
                      id="number"
                      name="number"
                      placeholder="Alternate Contact No."
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      onChange = {(e) => setAltNum(e.target.value)}
                      value = {altNum}
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="E-mail"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      onChange = {(e) => setEail(e.target.value)}
                      value = {email}
                    />
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative">
                    <input
                      type="text"
                      id="text"
                      name="text"
                      placeholder="Education"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      onChange = {(e) => setEdu(e.target.value)}
                      value = {edu}
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <input
                      type="text"
                      id="text"
                      name="text"
                      placeholder="Total Work Experience"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      onChange = {(e) => setExp(e.target.value)}
                      value = {exp}
                    />
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative">
                    <select
                      name="gender"
                      id="gender"
                      className="w-full h-10 bg-gray-100 rounded border border-gray-300 focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out invalid:text-[green]"
                      onChange = {(e) => setGen(e.target.value)}
                      value = {gen}
                      placeholder="Gender"
                    >
                      <option value="gender" disabled selected>
                        Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Others</option>
                    </select>
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <input
                      type="text"
                      id="text"
                      name="text"
                      placeholder="Current Organisation"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <input
                      type="file"
                      id="file"
                      name="file"
                      placeholder="Resume Upload"
                      className=""
                      onChange = {(e) => setFile(e.target.files[0])}
                      // value = {file}
                      required
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <textarea
                      id="address"
                      name="address"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-black h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      placeholder="Address"
                      onChange = {(e) => setAdd(e.target.value)}
                      value = {add}
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-black h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      placeholder="Message"
                      onChange = {(e) => setMessage(e.target.value)}
                      value = {message}
                    ></textarea>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-2 w-full">
                  <button className="bg-[#0F172A] text-[#FFFFFF] rounded-3xl ml-[15px] mt-10 px-[50px] py-[10px] text-[20px]  hover:bg-white hover:text-black"
                  onClick={CareerHandler}>
                    Submit
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
};

export default CareerPage;

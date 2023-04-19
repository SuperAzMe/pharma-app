import { useState } from "react";


const Enquiry = () => {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const SubmitEnquiry = async (e) => {
    e.preventDefault();
    const res = await fetch("https://pharma-app-cb174-default-rtdb.firebaseio.com/enquiry.json", {
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
    <div className="mt-[100px] bg-[#EAEBEA] p-5">
      <h2 className="text-center text-[#919191] text-[40px]">
        Enquiry <span className="text-[#171717]">Now</span>
      </h2>

      <form action="" method="POST">
        <div className=" flex flex-row col-lg-2 col-md-12 justify-center p-10">
          <div>
            <input
              type="text"
              name="url"
              placeholder="Type Name"
              className="ml-[20px] bg-[#FFFFFF] rounded-l-lg p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              name="url"
              placeholder="Mobile Number"
              className="ml-[20px] bg-[#FFFFFF] rounded-l-lg p-2"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              name="url"
              placeholder="Your Email"
              className="ml-[20px] bg-[#FFFFFF] rounded-l-lg p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              name="url"
              placeholder="Message"
              className="ml-[20px] bg-[#FFFFFF] rounded-l-lg p-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div>
            <button className="bg-[#0F172A] text-[#FFFFFF] rounded-lg ml-[15px] p-[10px] text-[20px] pl-10 pr-10" type="submit"
            onClick={SubmitEnquiry}>
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Enquiry;

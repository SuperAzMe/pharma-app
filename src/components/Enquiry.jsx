const Enquiry = () => {
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
            />
          </div>
          <div>
            <input
              type="text"
              name="url"
              placeholder="Mobile Number"
              className="ml-[20px] bg-[#FFFFFF] rounded-l-lg p-2"
            />
          </div>
          <div>
            <input
              type="text"
              name="url"
              placeholder="Your Email"
              className="ml-[20px] bg-[#FFFFFF] rounded-l-lg p-2"
            />
          </div>
          <div>
            <input
              type="text"
              name="url"
              placeholder="Message"
              className="ml-[20px] bg-[#FFFFFF] rounded-l-lg p-2"
            />
          </div>
          <div>
            <button className="bg-[#0F172A] text-[#FFFFFF] rounded-lg ml-[15px] p-[10px] text-[20px] pl-10 pr-10">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Enquiry;

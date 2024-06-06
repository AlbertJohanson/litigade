import React from "react";

const Landing = () => {
  return (
    <section className="landing_container flex flex-col lg:flex-row py-[140px] justify-center lg:">
      <div className="flex flex-col lg:justify-center lg:align-start">
        <div className="flex flex-col mb-[40px] lg:justify-center">
          <h2 className="text-4xl lg:text-6xl px-[25px] tracking-[0.2px] font-bold leading-10 text-[#252B42] text-center lg:text-start">
            Help to reclaim your  <br className="hidden lg:block"/> life <br className="block lg:hidden"/>
            and freedom
          </h2>
        </div>
        <div className="flex flex-col mb-[40px]">
          <h4 className="text-xl px-[15px] leading-7 font-medium text-[#737373] text-center lg:text-start">
            We know how large objects will act, but things on a <br className="hidden lg:block"/>small scale.
          </h4>
        </div>
        <div className="flex flex-col lg:flex-row px-[90px] lg:px-[0px]">
          <button className="bg-[#784F33] rounded-[37px] font-bold py-[10px] px-[38px] mb-[20px] lg:mr-[10px]">
            <a href="#" className="text-white">
              Get Quote now
            </a>
          </button>
          <button className="bg-transparent border-[#784F33] font-bold border-2 rounded-[37px] py-[10px] px-[38px] mb-[20px]">
            <a href="#" className="text-[#784F33]">
              Learn More
            </a>
          </button>
        </div>
      </div>
      {/* Form */}
      <div className="px-[30px] mt-[0px]">
        <form className="flex flex-col px-[40px] py-[40px] rounded-lg bg-[#FFFFFF]">
          <h3 className="text-[#252B42] text-2xl font-bold text-center mb-[40px]">
            Book Appointment
          </h3>
          <label className="text-sm	font-bold mb-[15px]">
            Name
            <span aria-hidden="true" className="text">
              *
            </span>
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="bg-[#F9F9F9] border-[#BDBDBD] rounded border-2 p-[15px] mb-[15px]"
          />
          <label className="text-sm	font-bold mb-[15px]">
            Email
            <span aria-hidden="true" className="text">
              *
            </span>
          </label>
          <input
            placeholder="example@gmail.com"
            type="email"
            className="bg-[#F9F9F9] border-[#BDBDBD] rounded border-2 p-[15px] mb-[15px]"
          />
          <label className="text-sm	font-bold mb-[15px]">
            Department
            <span aria-hidden="true" className="text">
              *
            </span>
          </label>
          <select className="bg-[#F9F9F9] border-[#BDBDBD] rounded border-2 p-[15px] mb-[15px]">
            <option disabled={true} defaultValue="">
              Please Select
            </option>
            <option>Marketing</option>
            <option>Development</option>
            <option>Design</option>
          </select>
          <label className="text-sm	font-bold mb-[15px]">
            Time
            <span aria-hidden="true" className="text">
              *
            </span>
          </label>
          <select className="bg-[#F9F9F9] border-[#BDBDBD] rounded border-2 p-[15px] mb-[15px]">
            <option disabled={true} defaultValue="">
              4:00 Available
            </option>
            <option>8:00 Available</option>
            <option>9:00 Available</option>
            <option>10:00 Available</option>
          </select>

          <button className="py-[15px] px-[40px] bg-[#295C7A] rounded text-sm text-[#FFFFFF] font-bold mt-[15px]">
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
};

export default Landing;

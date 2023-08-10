import React from "react";

const Newsletter = () => {
  return (
    <div className="max-w-[1520px] m-auto text-white px-4 bg-[#24262b]">
      <div className="mx-auto grid lg:grid-cols-2">
        <div className="my-4">
          <h1>Need advice on how to improve your flow state?</h1>
          <p>Sign Up to join our newssletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex items-center justify-between w-full">
            <input
              type="email"
              placeholder="email"
              className=" p-2 focus:outline-none flex w-[78%] rounded-md text-black"
            />
            <button className="bg-[#00df9a] text-white rounded-md w-[20%] font-medium p-2">Notify me
            </button>
          </div>
          <p className="my-3">
            We are concerned about the security of your data, Read{""}{" "}
            <span className="text-[#00df9a]">Privacy Policy</span>
          </p>
        </div>
      </div>
      <hr className="bg-gray-700 border-1" />
    </div>
  );
};

export default Newsletter;

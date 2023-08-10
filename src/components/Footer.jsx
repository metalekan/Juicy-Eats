import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaDribbbleSquare,
  FaGithubSquare,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]">
      <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-200">
        <div className="">
          <h1 className="w-full text-3xl font-bold text-orange-500">
            JuicyEats
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quia amet delectus cumque Molestias quis similique aut obcaecati!
          </p>
          <div className="flex justify-between md:w-[70%] my-6">
            <FaDribbbleSquare size={30} />
            <FaFacebookSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaInstagram size={30} />
            <FaGithubSquare size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div className="">
            <h6 className="font-medium text-[#9b9b9b]">Country</h6>
            <ul>
              <li className="py-2 text-sm">Ghana</li>
              <li className="py-2 text-sm">USA</li>
              <li className="py-2 text-sm">India</li>
              <li className="py-2 text-sm">Nigeria</li>
            </ul>
          </div>
          <div className="">
            <h6 className="font-medium text-[#9b9b9b]">City</h6>
            <ul>
              <li className="py-2 text-sm">Kiev</li>
              <li className="py-2 text-sm">Cairo</li>
              <li className="py-2 text-sm">Sydney</li>
              <li className="py-2 text-sm">Tokyo</li>
            </ul>
          </div>
          <div className="">
            <h6 className="font-medium text-[#9b9b9b]">Places</h6>
            <ul>
              <li className="py-2 text-sm">Ghana</li>
              <li className="py-2 text-sm">USA</li>
              <li className="py-2 text-sm">India</li>
              <li className="py-2 text-sm">Poland</li>
            </ul>
          </div>
          <div className="">
            <h6 className="font-medium text-[#9b9b9b]">Area</h6>
            <ul>
              <li className="py-2 text-sm">Ghana</li>
              <li className="py-2 text-sm">USA</li>
              <li className="py-2 text-sm">India</li>
              <li className="py-2 text-sm">Lagos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

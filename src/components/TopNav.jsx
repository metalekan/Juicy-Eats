import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBoxesPacking,
  faCartShopping,
  faClose,
  faHeartPulse,
  faMagnifyingGlass,
  faStar,
  faUser,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

const TopNav = () => {
  const [sideNav, setSideNav] = useState(false);

  // console.log(sideNav);

  return (
    <div className="max-w-[1520] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div
          onClick={() => {
            setSideNav(!sideNav);
          }}
          className="cursor-pointer"
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Juicy <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-orange-700 text-white rounded-full p-2 text-bold">
            Free
          </p>
          <p className="p-2 text-bold">Delivery</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          className="bg-transparent w-full p-2 focus:outline-none"
          type="text"
          placeholder="search meals"
        />
      </div>
      <button className="bg-orange-700 text-white hidden md:flex items-center py-2 px-2 rounded-full outline-none">
        <FontAwesomeIcon icon={faCartShopping} /> Cart
      </button>
      {sideNav ? (
        <div  onClick={() => {
          setSideNav(!sideNav);
        }} className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      <div
        className={
          sideNav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-200"
        }
      >
        <FontAwesomeIcon
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => {
            setSideNav(!sideNav);
          }}
          icon={faClose}
        />
        <h2 className="text-2xl p-4">
          Juicy <span className="text-orange-700 font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-900">
            <li className="text-xl py-4 flex items-center">
              <FontAwesomeIcon className="mr-4 p-1 text-white bg-black rounded-full" icon={faUser} />
              My Account
            </li>
            <li className="text-xl py-4 flex items-center">
              <FontAwesomeIcon className="mr-4 p-1 text-white bg-black rounded-full" icon={faBoxesPacking} />
              Delivery
            </li>
            <li className="text-xl py-4 flex">
              <FontAwesomeIcon className="mr-4 p-1 text-white bg-black rounded-full" icon={faStar} />
              My Favourite
            </li>
            <li className="text-xl py-4 flex">
              <FontAwesomeIcon className="mr-4 p-1 text-white bg-black rounded-full" icon={faWallet} />
              My Wallet
            </li>
            <li className="text-xl py-4 flex">
              <FontAwesomeIcon className="mr-4 p-1 text-white bg-black rounded-full" icon={faHeartPulse} />
              Help
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopNav;

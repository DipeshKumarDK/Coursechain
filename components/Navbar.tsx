"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo-dark.png";
import profile from "../assets/profile.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { RiArrowDropRightLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [visible, setVisible] = useState(1);
  const [teachVisible, setTeachVisible] = useState(0);
  const [learnVisible, setLearnVisible] = useState(0);

  const [smallVisible, setSmallVisible] = useState(0);

  const changeVisible = () => {
    if (visible === 0) {
      setVisible(1);
    } else {
      setVisible(0);
    }
  };

  const changeSmallVisible = () => {
    if (smallVisible === 0) {
      setSmallVisible(1);
    } else {
      setSmallVisible(0);
    }
  };

  return (
    <>
      <section className="md:flex hidden border-b-[1px] border-t-[1px] border-slate-200 pl-5 pr-5 bg-[#04151b] text-white top-0">
        <div className="flex flex-col justify-center">
        <Image src={logo} alt="Logo" className="h-10 w-16" />
        </div>
        <section className="flex flex-grow justify-between h-full w-full pl-6 pr-6">
          <div className="flex" style={{ position: "relative" }}>
            {/* <h4 className="pt-5 pb-5 text-sm font-semibold cursor-pointer text-[#c1e9f8]" onMouseEnter={()=>setVisible(1)} onMouseLeave={()=>setVisible(0)}>Categories</h4> */}
            <h4
              className="mt-3 mb-3 hover:bg-slate-200 hover:text-slate-800 rounded-md pt-2 pb-2 pl-3 pr-3 text-sm font-semibold cursor-pointer text-[#c1e9f8]"
              onClick={changeVisible}
            >
              Categories
            </h4>
            {/* <section className={`p-1 bg-white flex ${visible === 1 ? "":"hidden"}`} style={{position: 'absolute', top: '60px'}} onMouseEnter={()=>setVisible(1)} onMouseLeave={()=>setVisible(0)}>
            <div className="w-[300px] pt-1 pb-1 pl-2 pr-2">
              <div className="flex justify-between pt-2 pb-2 text-sm">
                <h3 className="text-slate-800">Development</h3>
                <RiArrowDropRightLine className="h-6 w-6 text-slate-800"/>
              </div>
              <div className="flex justify-between pt-2 pb-2 text-sm">
                <h3 className="text-slate-800">Business</h3>
                <RiArrowDropRightLine className="h-6 w-6 text-slate-800"/>
              </div>
              <div className="flex justify-between pt-2 pb-2 text-sm">
                <h3 className="text-slate-800">Finance & Accounting</h3>
                <RiArrowDropRightLine className="h-6 w-6 text-slate-800"/>
              </div>
              <div className="flex justify-between pt-2 pb-2 text-sm">
                <h3 className="text-slate-800">IT & Software</h3>
                <RiArrowDropRightLine className="h-6 w-6 text-slate-800"/>
              </div>
              <div className="flex justify-between pt-2 pb-2 text-sm">
                <h3 className="text-slate-800">Personal Development</h3>
                <RiArrowDropRightLine className="h-6 w-6 text-slate-800"/>
              </div>
              <div className="flex justify-between pt-2 pb-2 text-sm">
                <h3 className="text-slate-800">Math & Logic</h3>
                <RiArrowDropRightLine className="h-6 w-6 text-slate-800"/>
              </div>
              <div className="flex justify-between pt-2 pb-2 text-sm">
                <h3 className="text-slate-800">Design</h3>
                <RiArrowDropRightLine className="h-6 w-6 text-slate-800"/>
              </div>
              <div className="flex justify-between pt-2 pb-2 text-sm">
                <h3 className="text-slate-800">Health & Fitness</h3>
                <RiArrowDropRightLine className="h-6 w-6 text-slate-800"/>
              </div>
              <div className="flex justify-between pt-2 pb-2 text-sm">
                <h3 className="text-slate-800">Marketing</h3>
                <RiArrowDropRightLine className="h-6 w-6 text-slate-800"/>
              </div>
              <div className="flex justify-between pt-2 pb-2 text-sm">
                <h3 className="text-slate-800">Music</h3>
                <RiArrowDropRightLine className="h-6 w-6 text-slate-800"/>
              </div>
            </div> 
          </section> */}
          </div>
          <div className="flex flex-grow border-[1px] border-slate-100 ml-5 rounded-l-full rounded-r-full w-fit pr-2 mt-1 mb-1">
            <input
              type="text"
              className="h-12 bg-[#04151b] outline-none rounded-l-full rounded-r-full w-full p-1 pl-3 pr-3 placeholder:text-slate-200"
              placeholder="Search here"
            />
            <div className="flex flex-col justify-center">
              <FiSearch className="h-8 w-8 p-1 mt-1 mb-1 bg-white text-slate-800 rounded-full" />
            </div>
          </div>
          <div
            className="flex justify-end ml-5"
            style={{ position: "relative" }}
          >
            <div
              className={`p-3 bg-white w-[300px] text-black ${
                teachVisible === 1 ? "" : "hidden"
              }`}
              style={{ position: "absolute", top: "60px", left: "0px" }}
              onMouseEnter={() => setTeachVisible(1)}
              onMouseLeave={() => setTeachVisible(0)}
            >
              <h3 className="font-bold text-center text-lg leading-5">
                Turn what you know into an opportunity and reach millions around
                the world.
              </h3>
              <h4 className="mt-3 w-full pt-2 pb-2 text-center bg-black text-white">
                Learn More
              </h4>
            </div>
            <h4
              className="text-sm font-semibold pt-5 pb-5 text-[#c1e9f8] cursor-pointer lg:block md:hidden"
              onMouseEnter={() => setTeachVisible(1)}
              onMouseLeave={() => setTeachVisible(0)}
            >
              Teach on Udemy
            </h4>
            <h4
              className="text-sm ml-5 font-semibold pt-5 pb-5 cursor-pointer"
              style={{ position: "relative" }}
              onMouseEnter={() => setLearnVisible(1)}
              onMouseLeave={() => setLearnVisible(0)}
            >
              My Learning
            </h4>
            <div
              className={`p-3 bg-white w-[250px] text-black ${
                learnVisible === 1 ? "" : "hidden"
              }`}
              style={{ position: "absolute", top: "60px", left: "0px" }}
              onMouseEnter={() => setLearnVisible(1)}
              onMouseLeave={() => setLearnVisible(0)}
            >
              <h3 className="font-bold text-center text-lg leading-5">
                Continue your learning journey from where you left it.
              </h3>
              <h4 className="mt-3 w-full pt-2 pb-2 text-center bg-black text-white">
                Go to My Learning
              </h4>
            </div>
            <AiOutlineHeart className="h-6 w-6 ml-5 mt-[18px] mb-4 lg:block md:hidden" />
            <AiOutlineShoppingCart className="h-6 w-6 ml-5 mt-[18px] mb-4" />
            <AiOutlineBell className="h-6 w-6 ml-5 mt-[18px] mb-4 lg:block md:hidden" />
            <Image
              src={profile}
              alt="profile"
              className="h-8 w-8 ml-5 rounded-full mt-[14px] mb-3"
            />
          </div>
        </section>
      </section>
      <section
        className={`hidden justify-between pt-2 pb-2 xl:pl-24 xl:pr-24 lg:pl-12 lg:pr-12 pl-6 pr-6 border-b-[1px] border-t-[1px] border-slate-100 shadow-md shadow-white bg-[#04151b] text-white ${
          visible === 1 ? "md:flex" : "md:hidden"
        }`}
      >
        <h4 className="text-sm hover:bg-slate-200 hover:text-slate-800 rounded-md pt-2 pb-2 pl-3 pr-3 text-[#c1e9f8]">Development</h4>
        <h4 className="text-sm hover:bg-slate-200 hover:text-slate-800 rounded-md pt-2 pb-2 pl-3 pr-3">Business</h4>
        <h4 className="text-sm hover:bg-slate-200 hover:text-slate-800 rounded-md pt-2 pb-2 pl-3 pr-3 text-[#c1e9f8]">Finance & Accounting</h4>
        <h4 className="text-sm hover:bg-slate-200 hover:text-slate-800 rounded-md pt-2 pb-2 pl-3 pr-3">IT & Software</h4>
        <h4 className="text-sm hover:bg-slate-200 hover:text-slate-800 rounded-md pt-2 pb-2 pl-3 pr-3 text-[#c1e9f8]">Design</h4>
        <h4 className="text-sm hover:bg-slate-200 hover:text-slate-800 rounded-md pt-2 pb-2 pl-3 pr-3">Marketing</h4>
        <h4 className="text-sm hover:bg-slate-200 hover:text-slate-800 rounded-md pt-2 pb-2 pl-3 pr-3 text-[#c1e9f8] lg:block hidden">
          Personal Development
        </h4>
        <h4 className="text-sm text-[#c1e9f8] hover:bg-slate-200 hover:text-slate-800 rounded-md pt-2 pb-2 pl-3 pr-3 xl:block hidden">
          Health & Fitness
        </h4>
        <h4 className="text-sm hover:bg-slate-200 hover:text-slate-800 rounded-md pt-2 pb-2 pl-3 pr-3 xl:block hidden">Music</h4>
      </section>
      <section
        className="flex md:hidden justify-between pr-3 border-b-[1px] border-t-[1px] border-slate-200 bg-[#09384b] text-white"
        style={{ position: "relative" }}
      >
        <RxHamburgerMenu
          className="h-[60px] w-[60px] p-[15px]"
          onClick={changeSmallVisible}
        />
        <section
          className={`p-1 bg-white flex ${smallVisible === 1 ? "" : "hidden"}`}
          style={{ position: "absolute", top: "60px" }}
        >
          <div className="w-[260px] pt-1 pb-1 pl-2 pr-2">
            <h2 className="font-semibold text-slate-600 mb-1 mt-1">Learn</h2>
            <div className="flex justify-between pt-2 pb-2 text-sm">
              <h3 className="text-slate-800">My Learning</h3>
              <RiArrowDropRightLine className="h-6 w-6 text-slate-800" />
            </div>
            <div className="mt-2 mb-2 h-[1px] bg-slate-400"></div>
            <h2 className="font-semibold text-slate-600 mb-1 mt-5">
              Categories
            </h2>
            <div className="flex justify-between pt-2 pb-2 text-sm">
              <h3 className="text-slate-800">Development</h3>
              <RiArrowDropRightLine className="h-6 w-6 text-slate-800" />
            </div>
            <div className="flex justify-between pt-2 pb-2 text-sm">
              <h3 className="text-slate-800">Business</h3>
              <RiArrowDropRightLine className="h-6 w-6 text-slate-800" />
            </div>
            <div className="flex justify-between pt-2 pb-2 text-sm">
              <h3 className="text-slate-800">Finance & Accounting</h3>
              <RiArrowDropRightLine className="h-6 w-6 text-slate-800" />
            </div>
            <div className="flex justify-between pt-2 pb-2 text-sm">
              <h3 className="text-slate-800">IT & Software</h3>
              <RiArrowDropRightLine className="h-6 w-6 text-slate-800" />
            </div>
            <div className="flex justify-between pt-2 pb-2 text-sm">
              <h3 className="text-slate-800">Personal Development</h3>
              <RiArrowDropRightLine className="h-6 w-6 text-slate-800" />
            </div>
            <div className="flex justify-between pt-2 pb-2 text-sm">
              <h3 className="text-slate-800">Math & Logic</h3>
              <RiArrowDropRightLine className="h-6 w-6 text-slate-800" />
            </div>
            <div className="flex justify-between pt-2 pb-2 text-sm">
              <h3 className="text-slate-800">Design</h3>
              <RiArrowDropRightLine className="h-6 w-6 text-slate-800" />
            </div>
            <div className="flex justify-between pt-2 pb-2 text-sm">
              <h3 className="text-slate-800">Health & Fitness</h3>
              <RiArrowDropRightLine className="h-6 w-6 text-slate-800" />
            </div>
            <div className="flex justify-between pt-2 pb-2 text-sm">
              <h3 className="text-slate-800">Marketing</h3>
              <RiArrowDropRightLine className="h-6 w-6 text-slate-800" />
            </div>
            <div className="flex justify-between pt-2 pb-2 text-sm">
              <h3 className="text-slate-800">Music</h3>
              <RiArrowDropRightLine className="h-6 w-6 text-slate-800" />
            </div>
          </div>
        </section>
        <Image src={logo} alt="Logo" className="h-14 w-14" />
        <div className="flex justify-end">
          <AiOutlineShoppingCart className="h-6 w-6 ml-5 mt-[18px] mb-4" />
          <Image
            src={profile}
            alt="profile"
            className="h-8 w-8 ml-5 rounded-full mt-[14px] mb-3"
          />
        </div>
      </section>
    </>
  );
}

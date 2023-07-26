"use client";

import { useState } from "react";
import ProfileImage from "./ProfileImage";
import THProfile from "./THProfile";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function CreateProfileMid() {

  const [filters, setFilters] = useState(0);
  
  const changeFilters = () => {
    if(filters === 0){
        setFilters(1)
    }else{
        setFilters(0);
    }
  }

  return (
    <div className="xl:pl-20 xl:pr-20 lg:pl-14 lg:pr-14 md:pl-10 md:pr-10 sm:pl-6 sm:pr-6 pl-2 pr-2 pt-12 pb-8 bg-black text-white">
      <h2 className="font-semibold text-3xl">Set Up Your Profile</h2>
      <section className="mt-10 md:flex hidden border-b-[0.5px] border-slate-500">
        <h3 className="pl-3 pr-3 pt-3 pb-3 font-semibold border-b-[2px] border-slate-200">TH Profile</h3>
        <h3 className="pl-3 pr-3 pt-3 pb-3 font-semibold">Profile Picture</h3>
        <h3 className="pl-3 pr-3 pt-3 pb-3 font-semibold">Privacy Setting</h3>
      </section>
      <div className="mt-8 md:hidden" style={{position: 'relative'}}>
            <h4 className="font-semibold mb-4">Select Options</h4>
            <div  onClick={changeFilters} className="w-[180px] cursor-pointer pt-4 pb-4 pl-3 pr-3 bg-[#051b24] text-white flex justify-between border-[1px] border-slate-200">
              <h3 className="text-slate-300">Options</h3>
              <RiArrowDropDownLine className="h-6 w-6 text-white bg-[#051b24] ml-2" />
            </div>
            <div
            className={`w-[180px] bg-white pt-1 pb-1 text-slate-800 border-[1px] border-slate-200 ${
              filters === 1 ? "" : "hidden"
            }`}
            style={{ position: "absolute", top: "98px" }}
          >
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
            TH Profile
            </h3>
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
            Profile Picture
            </h3>
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
            Privacy Setting
            </h3>
          </div>
          </div> 
      {/* <THProfile/> */}
      <ProfileImage/>
    </div>
  );
}
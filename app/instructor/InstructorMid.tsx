"use client";

import React, { useState } from "react";
import {MdVideoSettings} from "react-icons/md"
import Image from "next/image";
import logo1 from "../../assets/logo-dark.png";
import logo2 from "../../assets/short-logo.png"
import {RiMessage2Line} from "react-icons/ri"
import {IoStatsChartSharp} from "react-icons/io5"
import {BsQuestionCircle} from "react-icons/bs"
import Courses from "./Courses";
import Message from "./Message";
import Statistics from "./Statistcs";
import Recommendations from "./Recommendations";

export default function InstructorMid() {
    
    const [visible, setVisible] = useState(0);
  
    const changeVisible = () => {
      if (visible === 0) {
        setVisible(1);
      } else {
        setVisible(0);
      }
    };

    return (
      <div className="flex text-white">
        <section className={`min-h-screen bg-[#094c5b] pt-4 pb-4 ${visible === 1?'w-[250px] absolute z-20':''}`} onMouseEnter={() => setVisible(1)} onMouseLeave={() => setVisible(0)}>
            <Image src={logo1} alt="Logo" className={`h-20 w-28 pl-3 pr-3 pt-3 pb-3 ${visible === 1?'':'hidden'}`} />
            <Image src={logo2} alt="Logo" className={`h-8 w-8 ml-4 mr-4 mt-4 mb-4 ${visible === 1?'hidden':''}`} />
            <div className="flex pl-4 pr-4 pt-4 pb-4">
                <MdVideoSettings className="h-8 w-8 text-white"/>
                <div className={`flex flex-col justify-center ${visible === 1?'':'hidden'}`}>
                  <h3 className="ml-4 font-semibold">Courses</h3>
                </div>
            </div>
            <div className="flex pl-4 pr-4 pt-4 pb-4">
                <RiMessage2Line className="h-8 w-8 text-white"/>
                <div className={`flex flex-col justify-center ${visible === 1?'':'hidden'}`}>
                  <h3 className="ml-4 font-semibold">Messages</h3>
                </div>
            </div>
            <div className="flex pl-4 pr-4 pt-4 pb-4">
                <IoStatsChartSharp className="h-8 w-8 text-white"/>
                <div className={`flex flex-col justify-center ${visible === 1?'':'hidden'}`}>
                  <h3 className="ml-4 font-semibold">Statistics</h3>
                </div>
            </div>
            <div className="flex pl-4 pr-4 pt-4 pb-4">
                <BsQuestionCircle className="h-8 w-8 text-white"/>
                <div className={`flex flex-col justify-center ${visible === 1?'':'hidden'}`}>
                  <h3 className="ml-4 font-semibold">Explore</h3>
                </div>
            </div>
        </section>
        <section className="bg-black flex-grow min-h-screen max-h-screen overflow-y-scroll no-scrollbar">
           {/* <Courses/> */}
           <Message/>
           {/* <Statistics/> */}
           {/* <Recommendations/> */}
        </section>
      </div>
    );
  }
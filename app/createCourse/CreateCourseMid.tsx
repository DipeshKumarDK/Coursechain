"use client";

import React, { use, useState } from "react";

import Curriculum from "./Curriculum";
import Film from "./Film";
import Landing from "./Landing";
import Learner from "./Learner";
import Price from "./Price";
import SetUp from "./SetUp";
import Structure from "./Structure";
import {RxHamburgerMenu} from 'react-icons/rx'

export default function CreateCourseMid() {

  const [visible, setVisible] = useState(0);

  const changeVisible = () => {
    if(visible === 0){
        setVisible(1)
    }else{
        setVisible(0);
    }
  }

  return (
    <div className="pt-6 pb-6 xl:pl-24 xl:pr-24 lg:pl-8 lg:pr-8 flex xl:gap-[40px] lg:gap-[35px] justify-between bg-[#04151b] text-white">
      <RxHamburgerMenu onClick={changeVisible} className="h-8 w-8 text-white absolute top-[70px] ml-2 lg:hidden cursor-pointer"/>
      <section className="pt-2 pb-2 xl:w-1/5 lg:w-1/4 lg:block hidden">
        <div className="pt-8 pb-8">
            <h3 className="font-semibold text-lg pl-6">Plan Your Course</h3>
            <h4 className="mt-4 pt-2 pb-2 pl-6 text-[0.9rem] border-l-[5px] border-green-400 text-green-400">Intended Learners</h4>
            <h4 className="pt-2 pb-2 pl-6 text-[0.9rem]">Course Structure</h4>
            <h4 className="pt-2 pb-2 pl-6 text-[0.9rem]">Setup And Demo Video</h4>
        </div>
        <div className="pt-8 pb-8">
            <h3 className="font-semibold text-lg pl-6">Create your content</h3>
            <h4 className="mt-4 pt-2 pb-2 pl-6 text-[0.9rem]">Film And Edit</h4>
            <h4 className="pt-2 pb-2 pl-6 text-[0.9rem]">Curriculum</h4>
        </div>
        <div className="pt-8 pb-8">
            <h3 className="font-semibold text-lg pl-6">Plan Your Course</h3>
            <h4 className="mt-4 pt-2 pb-2 pl-6 text-[0.9rem]">Course Landing Page</h4>
            <h4 className="pt-2 pb-2 pl-6 text-[0.9rem]">Pricing</h4>
        </div>
        <h3 className="bg-purple-600 rounded pt-3 pb-3 text-center mt-4 ml-6">Finish</h3>
      </section>
      <section className={`pt-2 pb-2 xl:w-1/5 lg:w-1/4 lg:hidden ${visible === 0 ? 'hidden' : ''} absolute bg-[#04151b] pr-4 ml-2 border-[1px] border-slate-300 top-[122px]`}>
        <div className="pt-3 pb-3">
            <h3 className="font-semibold text-lg pl-2 pr-2">Plan Your Course</h3>
            <h4 className="mt-2 pt-2 pb-2 pl-2 pr-2 text-[0.9rem]  text-green-400">Intended Learners</h4>
            <h4 className="pt-2 pb-2 pl-2 pr-2 text-[0.9rem]">Course Structure</h4>
            <h4 className="pt-2 pb-2 pl-2 pr-2 text-[0.9rem]">Setup And Demo Video</h4>
        </div>
        <div className="pt-3 pb-3">
            <h3 className="font-semibold text-lg pl-2 pr-2">Create your content</h3>
            <h4 className="mt-2 pt-2 pb-2 pl-2 pr-2 text-[0.9rem]">Film And Edit</h4>
            <h4 className="pt-2 pb-2 pl-2 pr-2 text-[0.9rem]">Curriculum</h4>
        </div>
        <div className="pt-3 pb-3">
            <h3 className="font-semibold text-lg pl-2 pr-2">Plan Your Course</h3>
            <h4 className="mt-2 pt-2 pb-2 pl-2 pr-2 text-[0.9rem]">Course Landing Page</h4>
            <h4 className="pt-2 pb-2 pl-2 pr-2 text-[0.9rem]">Pricing</h4>
        </div>
        <h3 className="bg-purple-600 rounded pt-3 pb-3 text-center mt-4 ml-2">Finish</h3>
      </section>
      <section className="border-[1px] xl:w-4/5 lg:w-3/4 w-full lg:ml-0 lg:mr-0 ml-2 mr-2 lg:mt-0 mt-[40px] border-slate-400 shadow-slate-500 flex-grow min-h-[100vh]">
        {/* <Learner/> */}
        {/* <Structure/> */}
        {/* <SetUp/> */}
        {/* <Film/> */}
        {/* <Curriculum/> */}
        {/* <Landing/> */}
        <Price/>
      </section>
    </div>
  );
}
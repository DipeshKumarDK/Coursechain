"use client";

import React, { use, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

export default function Landing() {

  const [language, setLanguage] = useState(0);
  const [level, setLevel] = useState(0);
  const [category, setCategory] = useState(0);

  const changeLanguage = () => {
    if(language === 0){
        setLanguage(1)
    }else{
        setLanguage(0);
    }
  }

  const changeLevel = () => {
    if(level === 0){
        setLevel(1)
    }else{
        setLevel(0);
    }
  }

  const changeCategory = () => {
    if(category === 0){
        setCategory(1)
    }else{
        setCategory(0);
    }
  }

  return (
    <div className="">
      <section className="md:pt-10 md:pb-10 pt-6 pb-6 md:pl-8 md:pr-8 sm:pl-5 sm:pr-5 pl-2 pr-2 border-b-[1px] border-slate-400">
        <h2 className="font-semibold text-2xl">Create Course Landing Page</h2>
      </section>
      <section className="pt-14 pb-14 md:pl-8 md:pr-8 sm:pl-5 sm:pr-5 pl-2 pr-2">
        <h3 className="text-slate-300">
          Your course landing page is crucial to your success on Udemy. If it’s
          done right, it can also help you gain visibility in search engines
          like Google. As you complete this section, think about creating a
          compelling Course Landing Page that demonstrates why someone would
          want to enroll in your course.
        </h3>
        <div className="md:pt-10 pt-6 pb-4">
          <section className="">
            <h4 className="font-semibold">Course Title*</h4>
            <input
              type="text"
              className="placeholder:text-slate-400 w-full p-2 bg-[#04151b] border-[1px] border-slate-300 mt-2"
              placeholder="Enter Section Title*"
            />
            <h4 className="mt-5 font-semibold">Course Subtitle*</h4>
            <input
              type="text"
              className="placeholder:text-slate-400 w-full p-2 bg-[#04151b] border-[1px] border-slate-300 mt-2"
              placeholder="Section Video or article*"
            />
            <h4 className="mt-5 font-semibold">Course Description*</h4>
            <textarea
              rows={5}
              className="placeholder:text-slate-400 w-full p-2 bg-[#04151b] border-[1px] border-slate-300 mt-2"
              placeholder="Enter Section Description*"
            />
          </section>
        </div>
        <section className="md:pt-10 pt-6 pb-4">
          <h4 className="font-semibold">Basic Info</h4>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[15px] mt-3">
            <div className="" style={{position: 'relative'}}>
              <div className="flex border-[1px] border-slate-300 pt-1 pb-1 pl-1 pr-1 justify-between">
              <div className="flex flex-col justify-center">
                <input
                  type="text"
                  className="placeholder:text-slate-400 p-2 bg-[#04151b] flex-grow focus:outline-0"
                  placeholder="Select Language"
                />
              </div>
              <div className="flex flex-col justify-center">
                <IoIosArrowDropdown className="h-8 w-8 cursor-pointer" onClick={changeLanguage}/>
              </div>
              </div>
              <div className={`w-full bg-slate-200 text-slate-800 z-20 p-3 ${language===0?'hidden':''}`} style={{position: 'absolute', top:'49px'}}>
                <h3 className="font-semibold hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1">Hindi</h3>
                <h3 className="font-semibold hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1">English</h3>
              </div>
            </div>
            

            <div className="" style={{position: 'relative'}}>
              <div className="flex border-[1px] border-slate-300 pt-1 pb-1 pl-1 pr-1 justify-between">
              <div className="flex flex-col justify-center">
                <input
                  type="text"
                  className="placeholder:text-slate-400 p-2 bg-[#04151b] flex-grow focus:outline-0"
                  placeholder="Select Level"
                />
              </div>
              <div className="flex flex-col justify-center">
                <IoIosArrowDropdown className="h-8 w-8 cursor-pointer" onClick={changeLevel}/>
              </div>
              </div>
              <div className={`w-full bg-slate-200 text-slate-800 z-20 p-3 ${level===0?'hidden':''}`} style={{position: 'absolute', top:'49px'}}>
                <h3 className="font-semibold hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1">Basic</h3>
                <h3 className="font-semibold hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1">Intermediate</h3>
                <h3 className="font-semibold hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1">Advanced</h3>
              </div>
            </div>

            <div className="" style={{position: 'relative'}}>
              <div className="flex border-[1px] border-slate-300 pt-1 pb-1 pl-1 pr-1 justify-between">
              <div className="flex flex-col justify-center">
                <input
                  type="text"
                  className="placeholder:text-slate-400 p-2 bg-[#04151b] flex-grow focus:outline-0"
                  placeholder="Select Level"
                />
              </div>
              <div className="flex flex-col justify-center">
                <IoIosArrowDropdown className="h-8 w-8 cursor-pointer" onClick={changeCategory}/>
              </div>
              </div>
              <div className={`w-full bg-slate-200 text-slate-800 z-20 p-2 ${category===0?'hidden':''}`} style={{position: 'absolute', top:'49px'}}>
                <h3 className="font-semibold hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1">Development</h3>
                <h3 className="font-semibold hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1">Business</h3>
                <h3 className="font-semibold hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1">Finance & Accounting</h3>
                <h3 className="font-semibold hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1">IT & Software</h3>
                <h3 className="font-semibold hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1">Design</h3>
                <h3 className="font-semibold hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1">Marketing</h3>
                <h3 className="font-semibold hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1">Personal Development</h3>
                <h3 className="font-semibold hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1">Health & Fitness</h3>
                <h3 className="font-semibold hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1">Music</h3>
              </div>
            </div>
          </div>
        </section>
        <section className="md:pt-8 md:pb-8 pt-4 pb-4">
          <h4 className="font-semibold">Course Image*</h4>
          <input
            type="file"
            className="placeholder:text-slate-400 w-full p-2 bg-[#04151b] border-[1px] border-slate-300 mt-2"
            placeholder="Image*"
          />
        </section>
        <section className="pt-2 pb-2">
          <h4 className="font-semibold">Promotional Video*</h4>
          <input
            type="file"
            className="placeholder:text-slate-400 w-full p-2 bg-[#04151b] border-[1px] border-slate-300 mt-2"
            placeholder="Video*"
          />
        </section>
      </section>
    </div>
  );
}

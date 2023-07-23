"use client";

import React, { useState } from "react";
import AllCourseCard from "@/components/AllCourseCard";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function AllCourses() {
  const [visible, setVisible] = useState(0);
  const [filters, setFilters] = useState(0);

  const changeFilters = () => {
    if(filters === 0){
        setFilters(1)
    }else{
        setFilters(0);
    }
  }

  return (
    <div className="lg:pl-24 lg:pr-24 md:pl-14 md:pr-14 sm:pl-8 sm:pr-8 pl-3 pr-3 md:pt-12 md:pb-12 pt-6 pb-6 bg-black text-white">
      <h3 className="text-2xl">All Development Courses</h3>
      <div className="flex mt-6" style={{position: 'relative'}}>
        <h3 className="w-[100px] pt-4 pb-4 bg-[#0b313f] text-white text-center border-[1px] cursor-pointer border-slate-200" onClick={changeFilters}>
          Filters
        </h3>
        <div className={`${filters === 0 ? 'hidden':''} flex mt-6 p-3 w-[200px] bg-white text-slate-900`} style={{position: 'absolute', top:'33px'}}>
        <section className={`pt-2 w-full ${filters === 0 ? 'hidden':''}`}>
          <section className="pb-4 w-full">
            <h2 className="text-xl">Rating</h2>
            <div className="pt-4">
              <div className="flex">
                <input type="radio" name="title" value="A"></input>
                <h3 className="ml-4">4.5⭐ & more </h3>
              </div>
              <div className="flex mt-2">
                <input type="radio" name="title" value="A"></input>
                <h3 className="ml-4">4⭐ & more </h3>
              </div>
              <div className="flex mt-2">
                <input type="radio" name="title" value="A"></input>
                <h3 className="ml-4">3.5⭐ & more </h3>
              </div>
              <div className="flex mt-2">
                <input type="radio" name="title" value="A"></input>
                <h3 className="ml-4">3⭐ & more </h3>
              </div>
            </div>
          </section>
          <section className="pt-4 pb-4 mt-2 border-t-[0.5px] border-slate-300">
            <h2 className="text-xl">Level</h2>
            <div className="pt-4">
              <div className="flex">
                <input type="checkbox" className="h-4 w-4 mt-1" name="title" value="A"></input>
                <h3 className="ml-4">All Levels </h3>
              </div>
              <div className="flex mt-2">
                <input type="checkbox" className="h-4 w-4 mt-1" name="title" value="A"></input>
                <h3 className="ml-4">Beginner </h3>
              </div>
              <div className="flex mt-2">
                <input type="checkbox" className="h-4 w-4 mt-1" name="title" value="A"></input>
                <h3 className="ml-4">Intermediate </h3>
              </div>
              <div className="flex mt-2">
                <input type="checkbox" className="h-4 w-4 mt-1" name="title" value="A"></input>
                <h3 className="ml-4">Advanced </h3>
              </div>
            </div>
          </section>
          <section className="pt-4 pb-4 mt-2 border-t-[0.5px] border-slate-300">
            <h2 className="text-xl">Price</h2>
            <div className="pt-4">
              <div className="flex">
                <input type="checkbox" className="h-4 w-4 mt-1" name="title" value="A"></input>
                <h3 className="ml-4">Free </h3>
              </div>
              <div className="flex mt-2">
                <input type="checkbox" className="h-4 w-4 mt-1" name="title" value="A"></input>
                <h3 className="ml-4">Paid </h3>
              </div>
            </div>
          </section>
        </section>
      </div>
        <div style={{ position: "relative" }}>
          <div
            className="w-[160px] pt-4 pb-4 ml-3 pl-3 pr-3 bg-[#0b313f] text-white flex justify-between border-[1px] border-slate-200"
            onMouseEnter={() => setVisible(1)}
            onMouseLeave={() => setVisible(0)}
          >
            <h3 className="">Sort By</h3>
            <RiArrowDropDownLine className="h-6 w-6 text-white bg-[#0b313f] ml-2" />
          </div>
          <div
            className={`w-[160px] ml-3 bg-white text-slate-800 border-[1px] border-slate-200 ${
              visible === 1 ? "" : "hidden"
            }`}
            style={{ position: "absolute", top: "57px" }}
            onMouseEnter={() => setVisible(1)}
            onMouseLeave={() => setVisible(0)} 
          >
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              Most Popular
            </h3>
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              Highest Rated
            </h3>
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              Newest
            </h3>
          </div>
        </div>
      </div>
      <section className={`mt-4`}>
          <AllCourseCard />
          <AllCourseCard />
          <AllCourseCard />
        </section>
    </div>
  );
}

"use client";

import AllCourseCard from "@/components/AllCourseCard";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import Journey from "./Journey";

export default function Courses() {
  const [filters, setFilters] = useState(0);

  const changeFilters = () => {
    if (filters === 0) {
      setFilters(1);
    } else {
      setFilters(0);
    }
  };

  return (
    <div className="pl-10 pr-10 pt-20 pb-20">
      <h2 className="text-3xl font-semibold">Courses</h2>
      <div className="flex mt-10 justify-between">
      <div className="flex">
        <div className="flex">
          <input
            className="border-[1px] border-slate-300 pl-2 pr-2 pt-3 pb-3 w-[250px] placeholder:text-slate-300 bg-transparent"
            placeholder="Enter course name to seach"
          />
          <div className="flex flex-col justify-center bg-slate-200 text-slate-800 pl-3 pr-3">
            <FiSearch className="h-8 w-8" />
          </div>
        </div>
        <div className="ml-6" style={{ position: "relative" }}>
          <div
            onClick={changeFilters}
            className="w-[180px] cursor-pointer pt-4 pb-4 pl-3 pr-3 bg-[#051b24] text-white flex justify-between border-[1px] border-slate-200"
          >
            <h3 className="text-slate-300">Options</h3>
            <RiArrowDropDownLine className="h-6 w-6 text-white bg-[#051b24] ml-2" />
          </div>
          <div
            className={`w-[180px] bg-white pt-1 pb-1 text-slate-800 border-[1px] border-slate-200 ${
              filters === 1 ? "" : "hidden"
            }`}
            style={{ position: "absolute", top: "57px" }}
          >
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              Newest
            </h3>
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              Oldest
            </h3>
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              A-Z
            </h3>
          </div>
        </div>
        </div>
        <div className="flex flex-col bg-[#094c5b] pl-3 pr-3 rounded justify-center">
           <h3 className="font-semibold">New Course</h3>
        </div>
      </div>
      <section className="mt-10">
        <AllCourseCard/>
        <AllCourseCard/>
      </section>
      <section className="pt-2 pb-2">
        <Journey/>
      </section>
    </div>
  );
}

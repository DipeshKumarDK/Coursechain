"use client";

import AllCourseCard from "@/components/AllCourseCard";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import Journey from "./Journey";
import Link from "next/link";

export default function Courses({ comp }: { comp: string }) {
  const [filters, setFilters] = useState(0);

  const changeFilters = () => {
    if (filters === 0) {
      setFilters(1);
    } else {
      setFilters(0);
    }
  };

  return (
    <div className={`md:pl-10 md:pr-10 sm:pl-4 sm:pr-4 pl-2 pr-2 md:pt-20 md:pb-20 sm:pt-14 sm:pb-14 pt-8 pb-8 ${comp==='courses'?'':'hidden'}`}>
      <h2 className="sm:text-3xl text-2xl font-semibold">Courses</h2>
      <div className="lg:hidden sm:mt-6 mt-4 w-[130px] flex flex-col bg-[#094c5b] pt-3 pb-3 rounded justify-center">
        <Link href={'/createCourse'} className="font-semibold text-center">New Course</Link>
      </div>
      <div className="flex lg:mt-10 md:mt-8 sm:mt-6 mt-3 justify-between">
      <div className="flex sm:flex-row flex-col">
        <div className="flex">
          <input
            className="border-[1px] border-slate-300 pl-2 pr-2 pt-3 pb-3 sm:w-[250px] w-full placeholder:text-slate-300 bg-transparent"
            placeholder="Enter course name to seach"
          />
          <div className="flex flex-col justify-center bg-slate-200 text-slate-800 pl-3 pr-3">
            <FiSearch className="h-8 w-8"/>
          </div>
        </div>
        <div className="sm:ml-6 sm:mt-0 mt-3" style={{ position: "relative" }}>
          <div
            onClick={changeFilters}
            className="w-[180px] cursor-pointer sm:pt-4 sm:pb-4 pt-3 pb-3 pl-3 pr-3 bg-[#051b24] text-white flex justify-between border-[1px] border-slate-200"
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
        <div className="lg:flex hidden flex-col bg-[#094c5b] pl-3 pr-3 rounded justify-center">
           <Link href={'/createCourse'} className="font-semibold">New Course</Link>
        </div>
      </div>
      <section className="md:mt-10 sm:mt-6 mt-4">
        <AllCourseCard/>
        <AllCourseCard/>
      </section>
      <section className="pt-2 pb-2">
        <Journey/>
      </section>
    </div>
  );
}

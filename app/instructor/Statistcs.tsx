"use client";

import { useState } from "react";
import InstructorReviewCard from "@/components/InstructorReviewCard";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Statistics() {
  const [filters, setFilters] = useState(0);

  const changeFilters = () => {
    if (filters === 0) {
      setFilters(1);
    } else {
      setFilters(0);
    }
  };

  const [sort, setSort] = useState(0);

  const changeSort = () => {
    if (sort === 0) {
      setSort(1);
    } else {
      setSort(0);
    }
  };

  return (
    <div className="md:pl-10 md:pr-10 sm:pl-4 sm:pr-4 pl-2 pr-2 md:pt-20 md:pb-20 sm:pt-14 sm:pb-14 pt-8 pb-8">
      <h3 className="text-3xl font-semibold">Overview</h3>
      <h4 className="text-[0.9rem] text-slate-300 mt-2">
        Get top insights about your performance
      </h4>
      <section className="pt-8 grid lg:grid-cols-4 xs:grid-cols-2  md:gap-[25px] gap-[15px] pb-8">
        <div className="p-4 border-[1px] border-slate-300">
          <h4 className="font-semibold text-slate-300">Total Revenue</h4>
          <h3 className="text-xl font-semibold">$4.5</h3>
          <h4 className="font-semibold text-slate-300">$2.1 This Month</h4>
        </div>
        <div className="p-4 border-[1px] border-slate-300">
          <h4 className="font-semibold text-slate-300">Total Enrollments</h4>
          <h3 className="text-xl font-semibold">500</h3>
          <h4 className="font-semibold text-slate-300">200 This Month</h4>
        </div>
        <div className="p-4 border-[1px] border-slate-300">
          <h4 className="font-semibold text-slate-300">Instructor Ratings</h4>
          <h3 className="text-xl font-semibold">4.2</h3>
          <h4 className="font-semibold text-slate-300">3 This Month</h4>
        </div>
        <div className="p-4 border-[1px] border-slate-300">
          <h4 className="font-semibold text-slate-300">Total Students</h4>
          <h3 className="text-xl font-semibold">230</h3>
          <h4 className="font-semibold text-slate-300">120 This Month</h4>
        </div>
      </section>
      <h3 className="text-3xl font-semibold md:mt-8 sm:mt-6 mt-4">Reviews</h3>
      <section className="pt-6 flex sm:flex-row flex-col sm:gap-[20px] gap-[12px]">
        <div className="mt-1" style={{ position: "relative" }}>
          <h4 className="font-semibold mb-2">Ratings</h4>
          <div
            onClick={changeFilters}
            className="sm:w-[180px] w-full cursor-pointer sm:pt-4 sm:pb-4 pt-3 pb-3 pl-3 pr-3 bg-[#051b24] text-white flex justify-between border-[1px] border-slate-200"
          >
            <h3 className="text-slate-300">All</h3>
            <RiArrowDropDownLine className="h-6 w-6 text-white bg-[#051b24] ml-2" />
          </div>
          <div
            className={`sm:w-[180px] w-full z-20 bg-white pt-1 pb-1 text-slate-800 border-[1px] border-slate-200 ${
              filters === 1 ? "" : "hidden"
            }`}
            style={{ position: "absolute", top: "98px" }}
          >
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              One Star
            </h3>
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              Two Stars
            </h3>
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              Three Stars
            </h3>
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              Four Stars
            </h3>
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              Five Stars
            </h3>
          </div>
        </div>
        <div className="mt-1" style={{ position: "relative" }}>
          <h4 className="font-semibold mb-2">Sort By</h4>
          <div
            onClick={changeSort}
            className="sm:w-[180px] w-full cursor-pointer sm:pt-4 sm:pb-4 pt-3 pb-3 pl-3 pr-3 bg-[#051b24] text-white flex justify-between border-[1px] border-slate-200"
          >
            <h3 className="text-slate-300">Newest First</h3>
            <RiArrowDropDownLine className="h-6 w-6 text-white bg-[#051b24] ml-2" />
          </div>
          <div
            className={`sm:w-[180px] w-full z-20 bg-white pt-1 pb-1 text-slate-800 border-[1px] border-slate-200 ${
              sort === 1 ? "" : "hidden"
            }`}
            style={{ position: "absolute", top: "98px" }}
          >
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              Newest First
            </h3>
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              Oldest First
            </h3>
          </div>
        </div>
      </section>
      <section className="pt-4 lg:w-2/3 grid grid-cols-1 gap-[10px]">
        <InstructorReviewCard />
        <InstructorReviewCard />
        <InstructorReviewCard />
      </section>
    </div>
  );
}

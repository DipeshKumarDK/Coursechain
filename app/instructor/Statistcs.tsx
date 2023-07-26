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
    if (filters === 0) {
      setSort(1);
    } else {
      setSort(0);
    }
  };

  return (
    <div className="pl-10 pr-10 pt-20 pb-20">
      <h3 className="text-3xl font-semibold">Overview</h3>
      <h4 className="text-[0.9rem] text-slate-300 mt-2">
        Get top insights about your performance
      </h4>
      <section className="pt-8 flex gap-[25px] pb-8">
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
      <h3 className="text-3xl font-semibold mt-8">Reviews</h3>
      <section className="pt-6 flex gap-[20px]">
        <div className="mt-1" style={{ position: "relative" }}>
          <h4 className="font-semibold mb-2">Ratings</h4>
          <div
            onClick={changeFilters}
            className="w-[180px] cursor-pointer pt-4 pb-4 pl-3 pr-3 bg-[#051b24] text-white flex justify-between border-[1px] border-slate-200"
          >
            <h3 className="text-slate-300">All</h3>
            <RiArrowDropDownLine className="h-6 w-6 text-white bg-[#051b24] ml-2" />
          </div>
          <div
            className={`w-[180px] bg-white pt-1 pb-1 text-slate-800 border-[1px] border-slate-200 ${
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
            className="w-[180px] cursor-pointer pt-4 pb-4 pl-3 pr-3 bg-[#051b24] text-white flex justify-between border-[1px] border-slate-200"
          >
            <h3 className="text-slate-300">Newest First</h3>
            <RiArrowDropDownLine className="h-6 w-6 text-white bg-[#051b24] ml-2" />
          </div>
          <div
            className={`w-[180px] bg-white pt-1 pb-1 text-slate-800 border-[1px] border-slate-200 ${
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

"use client";

import InstructorQuestionCard from "@/components/InstructorQuestionCard";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Message() {

  const [filters, setFilters] = useState(0);

  const changeFilters = () => {
    if (filters === 0) {
      setFilters(1);
    } else {
      setFilters(0);
    }
  };

  return (
    <div className="md:pl-10 md:pr-10 sm:pl-4 sm:pr-4 pl-2 pr-2 pt-20 pb-20">
      <h3 className="text-2xl font-semibold">Q&A From Your Courses</h3>
      <section>
      <div className="mt-8" style={{ position: "relative" }}>
          <div
            onClick={changeFilters}
            className="w-[180px] cursor-pointer pt-4 pb-4 pl-3 pr-3 bg-[#051b24] text-white flex justify-between border-[1px] border-slate-200"
          >
            <h3 className="text-slate-300">All Questions</h3>
            <RiArrowDropDownLine className="h-6 w-6 text-white bg-[#051b24] ml-2" />
          </div>
          <div
            className={`w-[180px] bg-white pt-1 pb-1 text-slate-800 border-[1px] border-slate-200 ${
              filters === 1 ? "" : "hidden"
            }`}
            style={{ position: "absolute", top: "57px" }}
          >
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              Answered
            </h3>
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              Not Answered
            </h3>
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              All Questions
            </h3>
          </div>
        </div>
      </section>
      <section className="pt-6 lg:w-2/3 grid grid-cols-1 gap-[10px]">
        <InstructorQuestionCard/>
        <InstructorQuestionCard/>
        <InstructorQuestionCard/>
      </section>
    </div>
  );
}
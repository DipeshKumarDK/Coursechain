"use client";

import ReviewCard from "@/components/ReviewCard";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Feedback({ comp }: { comp: string }) {

    const [filters, setFilters] = useState(0);
  
    const changeFilters = () => {
      if(filters === 0){
          setFilters(1)
      }else{
          setFilters(0);
      }
    }
  

    return (
      <div className={`pt-10 pb-12 ${comp === 'review'?'':'hidden'}`}>
         <h2 className="text-xl font-semibold">Student Feedback</h2>
         <div className="mt-6 h-64 w-full border-[2px] border-slate-200"></div>
         <div className="mt-8" style={{position: 'relative'}}>
            <h4 className="font-semibold mb-4">Filter Ratings</h4>
            <div  onClick={changeFilters} className="w-[180px] cursor-pointer pt-4 pb-4 pl-3 pr-3 bg-[#051b24] text-white flex justify-between border-[1px] border-slate-200">
              <h3 className="text-slate-300">All Ratings</h3>
              <RiArrowDropDownLine className="h-6 w-6 text-white bg-[#051b24] ml-2" />
            </div>
            <div
            className={`w-[180px] bg-white text-slate-800 border-[1px] border-slate-200 ${
              filters === 1 ? "" : "hidden"
            }`}
            style={{ position: "absolute", top: "97px" }}
          >
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              All Ratings
            </h3>
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              Five Stars
            </h3>
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              Four Stars
            </h3>
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              Three Stars
            </h3>
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              Two Stars
            </h3>
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              One Star
            </h3>
          </div>
          </div>
          <section className="mt-4 xl:pr-20 lg:pr-12">
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
          </section>
      </div>
    );
  }
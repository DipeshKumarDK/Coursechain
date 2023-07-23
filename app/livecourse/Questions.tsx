"use client";

import QuestionCard from "@/components/QuestionCard";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Questions() {

  const [sorts, setSorts] = useState(0);
  const [filters, setFilters] = useState(0);
  const [ques, setQues] = useState(0);

  const [visible, setVisible] = useState(1);

  const changeFilters = () => {
    if(filters === 0){
        setFilters(1)
    }else{
        setFilters(0);
    }
  }

  const changeSorts = () => {
    if(sorts === 0){
        setSorts(1)
    }else{
        setSorts(0);
    }
  }

  const changeQues = () => {
    if(ques === 0){
        setQues(1)
    }else{
        setQues(0);
    }
  }

  console.log(visible)

  return (
    <div className="pt-8 pb-8 flex justify-center">
      <section className={`w-2/3 ${visible===0 ? '':'hidden'}`}>
        <h3 onClick={()=>setVisible(1)} className="w-[250px] cursor-pointer border-[2px] border-slate-200 text-center font-semibold pt-2 pb-2">
          Back to all questions
        </h3>
        <h2 className="font-semibold text-xl mt-8">Having A Doubt? Ask Here</h2>
        <h4 className="text-sm font-semibold mt-5">Title or summary</h4>
        <input
          className="w-full h-10 border-[2px] border-slate-200 p-2 placeholder:text-slate-300 placeholder:text-sm text-sm mt-2 bg-[#051b24] text-slate-100"
          placeholder="Be clear what you wanna ask..."
        />
        <h4 className="text-sm font-semibold mt-5">Details</h4>
        <textarea
          rows={5}
          className="p-2 border-[2px] border-slate-200 bg-[#051b24] mt-2 w-full placeholder:text-slate-300 placeholder:text-sm text-sm text-slate-100"
          placeholder="Elaborate your issue..."
        />
        <h3 className="pt-3 pb-3 text-center bg-slate-300 text-slate-900 mt-4 text-sm font-semibold">
          PUBLISH
        </h3>
      </section>
      <section className={`w-full pt-4 ${visible===1 ? '':'hidden'}`}>
        <h3 onClick={()=>setVisible(0)} className="w-[250px] cursor-pointer border-[2px] border-slate-200 text-center font-semibold pt-2 pb-2">
          Ask a question
        </h3>
        <div className="flex mt-7">
          <input
            className="w-full h-14 border-[2px] border-slate-200 p-2 placeholder:text-slate-300 placeholder:text-sm text-sm bg-[#051b24] text-slate-100"
            placeholder="Enter particular keyword(s) around which your question is..."
          />
          <AiOutlineSearch className="h-14 w-14 text-slate-900 bg-slate-200 p-4" />
        </div>
        <section className="pt-8 pb-4 flex sm:flex-row flex-col">
          <div style={{position: 'relative'}}>
            <h4 className="font-semibold text-sm mb-2">Filters</h4>
            <div  onClick={changeFilters} className="w-[180px] cursor-pointer pt-4 pb-4 pl-3 pr-3 bg-[#051b24] text-white flex justify-between border-[1px] border-slate-200">
              <h3 className="text-slate-300">All Lectures</h3>
              <RiArrowDropDownLine className="h-6 w-6 text-white bg-[#051b24] ml-2" />
            </div>
            <div
            className={`w-[180px] bg-white text-slate-800 border-[1px] border-slate-200 ${
              filters === 1 ? "" : "hidden"
            }`}
            style={{ position: "absolute", top: "80px" }}
          >
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              All Lectures
            </h3>
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              Current Lecture
            </h3>
          </div>
          </div>
          <div className="sm:ml-3 sm:mt-0 mt-4" style={{position: 'relative'}}>
            <h4 className="font-semibold text-sm mb-2">Sort By</h4>
            <div onClick={changeSorts} className="w-[180px] cursor-pointer pt-4 pb-4 pl-3 pr-3 bg-[#051b24] text-white flex justify-between border-[1px] border-slate-200">
              <h3 className="text-slate-300">Most Recent</h3>
              <RiArrowDropDownLine className="h-6 w-6 text-white bg-[#051b24] ml-2" />
            </div>
            <div
            className={`w-[180px] bg-white text-slate-800 border-[1px] border-slate-200 ${
              sorts === 1 ? "" : "hidden"
            }`}
            style={{ position: "absolute", top: "80px" }}
          >
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              Most Upvoted
            </h3>
            <h3 className="text-sm pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              Most Recent
            </h3>
          </div>
          </div>
          <div className="sm:ml-3" style={{position: 'relative'}}>
            <div onClick={changeQues}  className="w-[200px] cursor-pointer mt-7 pt-4 pb-4 pl-3 pr-3 bg-[#051b24] text-white flex justify-between border-[1px] border-slate-200">
              <h3 className="text-slate-300 font-semibold">Filter Questions</h3>
              <RiArrowDropDownLine className="h-6 w-6 text-white bg-[#051b24] ml-2" />
            </div>
            <div
            className={`w-[250px] bg-white p-2 text-slate-800 border-[1px] border-slate-200 ${
              ques === 1 ? "" : "hidden"
            }`}
            style={{ position: "absolute", top: "80px" }}
          >
            <div className="flex">
                <input type="checkbox" className="h-4 w-4 mt-1" name="title" value="A"></input>
                <h3 className="ml-4">Questions I asked</h3>
              </div>
              <div className="flex mt-2">
                <input type="checkbox" className="h-4 w-4 mt-1" name="title" value="A"></input>
                <h3 className="ml-4">Unanswered questions</h3>
              </div>
          </div>
          </div>
        </section>
        <section className="pt-5 pb-4">
          <h3 className="font-semibold text-lg">
            All questions in this course{" "}
            <span className="text-slate-300 text-sm font-semibold">(357)</span>
          </h3>
          <div className="mt-3">
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
          </div>
        </section>
      </section>
    </div>
  );
}

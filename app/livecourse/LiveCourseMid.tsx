"use client";

import AboutCourse from "./AboutCourse";
import Announcement from "./Announcement";
import Feedback from "./Feedback";
import Questions from "./Questions";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function LiveCourseMid() {

  const [filters, setFilters] = useState(0);
  
  const changeFilters = () => {
    if(filters === 0){
        setFilters(1)
    }else{
        setFilters(0);
    }
  }

  const [comp,setComp] = useState('overview')

  return (
    <div className="bg-black text-white pb-10">
      <section className="w-full lg:h-[80vh] md:h-[60vh] h-[60vh]">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/p3VXJC5j-oM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
      <div className="2xl:pl-56 2xl:pr-56 xl:pl-44 xl:pr-44 lg:pl-32 lg:pr-32 md:pl-16 md:pr-16 sm:pl-10 sm:pr-10 pl-2 pr-2">
        <section className="md:flex hidden border-b-[1px] border-slate-300">
          <h3 onClick={()=>setComp('content')} className={`text-sm cursor-pointer font-semibold pl-4 pr-4 pt-5 pb-5 ${comp==='content'?'border-b-[3px] border-green-400 text-green-400':''}`}>Course Content</h3>
          <h3 onClick={()=>setComp('overview')} className={`text-sm cursor-pointer font-semibold pl-4 pr-4 pt-5 pb-5 ${comp==='overview'?'border-b-[3px] border-green-400 text-green-400':''}`}>Overview</h3>
          <h3 onClick={()=>setComp('qna')} className={`text-sm cursor-pointer font-semibold pl-4 pr-4 pt-5 pb-5 ${comp==='qna'?'border-b-[3px] border-green-400 text-green-400':''}`}>Q&A</h3>
          <h3 onClick={()=>setComp('announcement')} className={`text-sm cursor-pointer font-semibold pl-4 pr-4 pt-5 pb-5 ${comp==='announcement'?'border-b-[3px] border-green-400 text-green-400':''}`}>Announcements</h3>
          <h3 onClick={()=>setComp('review')} className={`text-sm cursor-pointer font-semibold pl-4 pr-4 pt-5 pb-5 ${comp==='review'?'border-b-[3px] border-green-400 text-green-400':''}`}>Reviews</h3>
        </section>
        <div className="mt-8 md:hidden" style={{position: 'relative'}}>
            <h4 className="font-semibold mb-4">Select Options</h4>
            <div  onClick={changeFilters} className="w-[180px] cursor-pointer pt-4 pb-4 pl-3 pr-3 bg-[#051b24] text-white flex justify-between border-[1px] border-slate-200">
              <h3 className="text-slate-300">Options</h3>
              <RiArrowDropDownLine className="h-6 w-6 text-white bg-[#051b24] ml-2" />
            </div>
            <div
            className={`w-[180px] bg-white pt-1 pb-1 text-slate-800 border-[1px] border-slate-200 ${
              filters === 1 ? "" : "hidden"
            }`}
            style={{ position: "absolute", top: "98px" }}
          >
            <h3 onClick={()=>setComp('content')} className="text-sm cursor-pointer pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
            Course Content
            </h3>
            <h3 onClick={()=>setComp('overview')} className="text-sm cursor-pointer pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
            Overview
            </h3>
            <h3 onClick={()=>setComp('qna')} className="text-sm cursor-pointer pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
              Q&A
            </h3>
            <h3 onClick={()=>setComp('announcement')} className="text-sm cursor-pointer pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
            Announcements
            </h3>
            <h3 onClick={()=>setComp('review')} className="text-sm cursor-pointer pt-1 pb-1 pl-2 pr-2 hover:bg-blue-600 hover:text-white">
            Reviews
            </h3>
          </div>
          </div> 
        <section>
            <AboutCourse comp={comp}/>
            <Questions comp={comp}/>
            <Announcement comp={comp}/>
            <Feedback comp={comp}/>
        </section>
      </div>
    </div>
  );
}

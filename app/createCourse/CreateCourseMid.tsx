"use client";

import React, { use, useState } from "react";

import Curriculum from "./Curriculum";
import Film from "./Film";
import Landing from "./Landing";
import Learner from "./Learner";
import Price from "./Price";
import SetUp from "./SetUp";
import Structure from "./Structure";
import {RxHamburgerMenu} from 'react-icons/rx'

export default function CreateCourseMid() {

  const [visible, setVisible] = useState(0);

  const changeVisible = () => {
    if(visible === 0){
        setVisible(1)
    }else{
        setVisible(0);
    }
  }

  const [comp,setComp] = useState('learner')

  return (
    <div className="pt-6 pb-6 xl:pl-24 xl:pr-24 lg:pl-8 lg:pr-8 flex xl:gap-[40px] lg:gap-[35px] justify-between bg-[#04151b] text-white">
      <RxHamburgerMenu onClick={changeVisible} className="h-8 w-8 text-white absolute top-[70px] ml-2 lg:hidden cursor-pointer"/>
      <section className="pt-2 pb-2 xl:w-1/5 lg:w-1/4 lg:block hidden">
        <div className="pt-8 pb-8">
            <h3 className="font-semibold text-lg pl-6">Plan Your Course</h3>
            <h4 onClick={()=>setComp('learner')} className={`mt-4 cursor-pointer pt-2 pb-2 pl-6 text-[0.9rem] ${comp === 'learner'?'border-green-400 text-green-400 border-l-[5px]':''}`}>Intended Learners</h4>
            <h4 onClick={()=>setComp('structure')} className={`pt-2 cursor-pointer pb-2 pl-6 text-[0.9rem] ${comp === 'structure'?'border-green-400 text-green-400 border-l-[5px]':''}`}>Course Structure</h4>
            <h4 onClick={()=>setComp('setup')} className={`pt-2 pb-2 cursor-pointer pl-6 text-[0.9rem] ${comp === 'setup'?'border-green-400 text-green-400 border-l-[5px]':''}`}>Setup And Demo Video</h4>
        </div>
        <div className="pt-8 pb-8">
            <h3 className="font-semibold text-lg pl-6">Create your content</h3>
            <h4 onClick={()=>setComp('film')} className={`mt-4 cursor-pointer pt-2 pb-2 pl-6 text-[0.9rem] ${comp === 'film'?'border-green-400 text-green-400 border-l-[5px]':''}`}>Film And Edit</h4>
            <h4 onClick={()=>setComp('curriculum')} className={`pt-2 cursor-pointer pb-2 pl-6 text-[0.9rem] ${comp === 'curriculum'?'border-green-400 text-green-400 border-l-[5px]':''}`}>Curriculum</h4>
        </div>
        <div className="pt-8 pb-8">
            <h3 className="font-semibold text-lg pl-6">Plan Your Course</h3>
            <h4 onClick={()=>setComp('landing')} className={`mt-4 cursor-pointer pt-2 pb-2 pl-6 text-[0.9rem] ${comp === 'landing'?'border-green-400 text-green-400 border-l-[5px]':''}`}>Course Landing Page</h4>
            <h4 onClick={()=>setComp('pricing')} className={`pt-2 cursor-pointer pb-2 pl-6 text-[0.9rem] ${comp === 'pricing'?'border-green-400 text-green-400 border-l-[5px]':''}`}>Pricing</h4>
        </div>
        <h3 className="bg-purple-600 rounded pt-3 pb-3 text-center mt-4 ml-6">Finish</h3>
      </section>
      <section className={`pt-2 pb-2 xl:w-1/5 lg:w-1/4 lg:hidden ${visible === 0 ? 'hidden' : ''} absolute bg-[#04151b] pr-4 ml-2 border-[1px] border-slate-300 top-[122px]`}>
        <div className="pt-3 pb-3">
            <h3 className="font-semibold text-lg pl-2 pr-2">Plan Your Course</h3>
            <h4 onClick={()=>setComp('learner')} className={`mt-2 cursor-pointer pt-2 pb-2 pl-2 pr-2 text-[0.9rem] ${comp === 'learner'?'text-green-400':''}`}>Intended Learners</h4>
            <h4 onClick={()=>setComp('structure')} className={`pt-2 cursor-pointer pb-2 pl-2 pr-2 text-[0.9rem] ${comp === 'structure'?'text-green-400':''}`}>Course Structure</h4>
            <h4 onClick={()=>setComp('setup')} className={`pt-2 cursor-pointer pb-2 pl-2 pr-2 text-[0.9rem] ${comp === 'setup'?'text-green-400':''}`}>Setup And Demo Video</h4>
        </div>
        <div className="pt-3 pb-3">
            <h3 className="font-semibold text-lg pl-2 pr-2">Create your content</h3>
            <h4 onClick={()=>setComp('film')} className={`mt-2 cursor-pointer pt-2 pb-2 pl-2 pr-2 text-[0.9rem] ${comp === 'film'?'text-green-400':''}`}>Film And Edit</h4>
            <h4 onClick={()=>setComp('curriculum')} className={`pt-2 cursor-pointer pb-2 pl-2 pr-2 text-[0.9rem] ${comp === 'curriculum'?'text-green-400':''}`}>Curriculum</h4>
        </div>
        <div className="pt-3 pb-3">
            <h3 className="font-semibold text-lg pl-2 pr-2">Plan Your Course</h3>
            <h4 onClick={()=>setComp('landing')} className={`mt-2 cursor-pointer pt-2 pb-2 pl-2 pr-2 text-[0.9rem] ${comp === 'landing'?'text-green-400':''}`}>Course Landing Page</h4>
            <h4 onClick={()=>setComp('pricing')} className={`pt-2 cursor-pointer pb-2 pl-2 pr-2 text-[0.9rem] ${comp === 'pricing'?'text-green-400':''}`}>Pricing</h4>
        </div>
        <h3 className="bg-purple-600 rounded pt-3 pb-3 text-center mt-4 ml-2">Finish</h3>
      </section>
      <section className="border-[1px] xl:w-4/5 lg:w-3/4 w-full lg:ml-0 lg:mr-0 ml-2 mr-2 lg:mt-0 mt-[40px] border-slate-400 shadow-slate-500 flex-grow min-h-[100vh]">
        <Learner comp={comp}/>
        <Structure comp={comp}/>
        <SetUp comp={comp}/>
        <Film comp={comp}/>
        <Curriculum comp={comp}/>
        <Landing comp={comp}/>
        <Price comp={comp}/>
      </section>
    </div>
  );
}
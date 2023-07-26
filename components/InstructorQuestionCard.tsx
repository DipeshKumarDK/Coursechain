"use client";

import Image from "next/image";
import pic from "../assets/profile.jpg";
import { BiSolidUpArrowAlt } from "react-icons/bi";
import { LiaCommentSolid } from "react-icons/lia";
import ReplyCard from "./ReplyCard";
import { useState } from "react";

export default function InstructorQuestionCard() {

  const [visible, setVisible] = useState(0);

  const changeVisible = () => {
    if(visible === 0){
        setVisible(1)
    }else{
        setVisible(0)
    }
  }

  return (
    <div className="pt-6 pb-6 pl-3 pr-3 w-full border-[1px] border-slate-300">
      <section className="flex">
        <Image src={pic} alt="" className="rounded-full h-10 w-10" />
        <div className="pl-3 flex flex-col justify-center">
          <h3 className="font-semibold">There is an explanation missing</h3>
        </div>
      </section>
      <h4 className="sm:text-sm text-xs mt-2">
        This course is absolutely beginner-friendly and easy to understand.
        Clarian, the instructor, provides lucid explanations of the topics,
        which makes the course stand out
      </h4>
      <div className="flex mt-5">
        <div className="flex flex-col justify-center">
          <h3 className="text-sm font-semibold">NF Warrior</h3>
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="text-xs ml-3">3 weeks ago</h4>
        </div>
        <BiSolidUpArrowAlt className="ml-5 h-8 w-8 p-2 bg-slate-200 rounded-full text-slate-900 cursor-pointer" />
        <div className="flex flex-col justify-center">
          <h3 className="ml-1 text-sm text-slate-300 font-semibold">22</h3>
        </div>
        <LiaCommentSolid onClick={changeVisible} className="ml-5 h-8 w-8 p-2 bg-slate-200 rounded-full text-slate-900 cursor-pointer" />
        <div className="flex flex-col justify-center">
          <h3 className="ml-1 text-sm text-slate-300 font-semibold">32</h3>
        </div>
      </div>
      <section className={`pt-4 pb-4 ${visible == 1?'':'hidden'}`}>
        <h3 className="font-semibold mb-3">Replies</h3>
        <div className="pl-16">
          <ReplyCard />
          <ReplyCard />
          <ReplyCard />
        </div>
      </section>
    </div>
  );
}
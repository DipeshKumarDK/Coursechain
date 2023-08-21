"use client";

import React, { useState , useRef } from "react";
import type { RootState } from "../GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation"; 
import { IoIosArrowDropdown } from "react-icons/io";

export default function Price( {comp }: { comp: string }) {

  const course = useSelector((state: RootState) => state.createCourse.value);

  const price = useRef() as React.MutableRefObject<HTMLInputElement>

  const router = useRouter();
  const [btn, setBtn] = useState(0)

  const [profile, setProfile] = useState({
    title: course?.payload?.title,
    subtitle: course?.payload?.subtitle,
    description: course?.payload?.description,
    language: course?.payload?.language,
    level: course?.payload?.level,
    category: course?.payload?.category,
    image: course?.payload?.image,
    promotional_video: course?.payload?.promotional_video,
    ownerid: course?.payload?.ownerid,
    username: course?.payload?.username,
    learning: course?.payload?.learning,
    requirements: course?.payload?.requirements,
    price: course?.payload?.price,
    email: course?.payload?.email,
    students: course?.payload?.students,
    section_title: course?.payload?.section_title,
    section_desc: course?.payload?.section_desc,
    section_video: course?.payload?.section_video
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/course/"+course?.payload?._id, {
        method: "PUT",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          title: profile.title,
          subtitle: profile.subtitle,
          description: profile.description,
          language: profile.language,
          level: profile.level,
          category: profile.category,
          image: profile.image,
          promotional_video: profile.promotional_video,
          ownerid: profile.ownerid,
          username: profile.username,
          learning: profile.learning,
          requirements: profile.requirements,
          section_title: profile.section_title,
          section_video: profile.section_video,
          section_desc: profile.section_desc,
          price: price.current.value,
          email: profile.email,
          students: profile.students
        }),
      });
      if (response.status === 200) {
        response.json().then((data) => {
          console.log(data);
          router.push("/home");
        });
      } else {
        console.log("error");
      }
    } catch (e) {
      console.log(e);
    }

    console.log(price.current.value)
  };

  return (
    <div className={`${comp==='pricing'?'':'hidden'}`}>
      <section className="md:pt-10 md:pb-10 pt-6 pb-6 md:pl-8 md:pr-8 sm:pl-5 sm:pr-5 pl-2 pr-2 border-b-[1px] border-slate-400">
        <h2 className="font-semibold text-2xl">Pricing</h2>
      </section>
      <section className="md:pt-14 md:pb-12 sm:pt-8 sm:pb-8 pt-6 pb-6 md:pl-8 md:pr-8 sm:pl-5 sm:pr-5 pl-2 pr-2">
        <h2 className="text-lg font-semibold">Course Price</h2>
        <h3 className="text-slate-300 mt-3">
          Please enter a fair price for your course below and click 'Save'.
          If you intend to offer your course for free, the total length of video
          content must be less than 2 hours.
        </h3>
        <div className="md:pt-10 pt-6 pb-4">
          <section className="">
            <h4 className="font-semibold">Enter A Fair Price</h4>
            <div className="mt-3 flex">
            <div className="flex border-[1px] border-slate-300 pt-1 pb-1 pl-1 pr-1 md:w-1/3 w-2/3 justify-between">
              <div className="flex flex-col w-full justify-center">
                <input
                  type="number"
                  className="placeholder:text-slate-400 p-2 w-full bg-[#04151b] focus:outline-0"
                  placeholder="Enter Price"
                  ref={price}
                />
              </div>
            </div>
            <div onClick={handleSubmit} className="flex flex-col justify-center cursor-pointer bg-purple-600 md:w-1/6 w-2/5 rounded ml-5">
                <h3 className="text-center font-semibold">Save</h3>
            </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

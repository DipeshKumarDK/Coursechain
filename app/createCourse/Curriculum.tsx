"use client";

import React, { useState , useRef } from "react";
import type { RootState } from "../GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation"; 

export default function Curriculum({ comp }: { comp: string }) {
  const course = useSelector((state: RootState) => state.createCourse.value);

  const title = useRef() as React.MutableRefObject<HTMLInputElement>
  const desc = useRef() as React.MutableRefObject<HTMLTextAreaElement>

  const [section_title, set_section_title] = useState(course?.payload?.section_title)
  const [section_desc, set_section_desc] = useState(course?.payload?.section_desc)
  const [section_video, set_section_video] = useState(course?.payload?.section_video)

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
    students: course?.payload?.students
  });

  const handleChange = () => {
    set_section_title([...section_title, title.current.value]);
    set_section_desc([...section_desc, desc.current.value]);
    set_section_video([...section_video, "Video hu bhai"]);
    setBtn(1);
  }

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
          section_title: section_title,
          section_video: section_video,
          section_desc: section_desc,
          price: profile.price,
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
  };

  return (
    <div className={`${comp === "curriculum" ? "" : "hidden"}`}>
      <section className="md:pt-10 md:pb-10 pt-6 pb-6 md:pl-8 md:pr-8 sm:pl-5 sm:pr-5 pl-2 pr-2 border-b-[1px] border-slate-400">
        <h2 className="font-semibold text-2xl">Curriculum</h2>
      </section>
      <section className="lg:pt-14 lg:pb-12 md:pt-10 md:pb-10 sm:pt-6 sm:pb-6 pt-4 pb-4 md:pl-8 md:pr-8 sm:pl-5 sm:pr-5 pl-2 pr-2">
        <h3 className="text-slate-300 xs:text-base text-sm">
          Start putting together your course by creating sections, lectures and
          practice. Start putting together your course by creating sections,
          lectures and practice activities. Use your course outline to structure
          your content and label your sections and lectures clearly. If you’re
          intending to offer your course for free, the total length of video
          content must be less than 2 hours.
        </h3>
        <div className="lg:pt-12 sm:pt-8 pt-6 pb-4">
          <section className="p-4 border-[1px] border-slate-300">
            <h3 className="font-semibold text-lg">Section 1</h3>
            <h4 className="mt-5 text-sm font-semibold">Section Title*</h4>
            <input
              type="text"
              className="placeholder:text-slate-400 w-full p-2 bg-[#04151b] border-[1px] border-slate-300 mt-2"
              placeholder="Enter Section Title*"
              ref={title}
            />
            <h4 className="mt-5 text-sm font-semibold">
              Section Video Or Article*
            </h4>
            <input
              type="file"
              className="placeholder:text-slate-400 w-full p-2 bg-[#04151b] border-[1px] border-slate-300 mt-2"
              placeholder="Section Video or article*"
            />
            <h4 className="mt-5 text-sm font-semibold">Section Description*</h4>
            <textarea
              rows={5}
              className="placeholder:text-slate-400 w-full p-2 bg-[#04151b] border-[1px] border-slate-300 mt-2"
              placeholder="Enter Section Description*"
              ref={desc}
            />
          </section>
        </div>
        <h3 onClick={handleChange} className={`w-[200px] cursor-pointer ${btn === 0 ? "" : "hidden"} font-semibold pt-3 pb-3 border-[1px] border-slate-300 text-center`}>
          + Add Section
        </h3>
        <h3 onClick={handleSubmit} className={`w-[150px] cursor-pointer ${btn === 1 ? "" : "hidden"} font-semibold pt-3 bg-green-700 rounded pb-3 border-[1px] border-slate-300 text-center`}>
          Save
        </h3>
      </section>
    </div>
  );
}

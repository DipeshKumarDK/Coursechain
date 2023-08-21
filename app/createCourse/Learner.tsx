"use client";

import React, { useState, useRef } from "react";
import type { RootState } from "../GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function Learner({ comp }: { comp: string }) {
  const course = useSelector((state: RootState) => state.createCourse.value);

  const learn1 = useRef() as React.MutableRefObject<HTMLInputElement>;
  const learn2 = useRef() as React.MutableRefObject<HTMLInputElement>;
  const learn3 = useRef() as React.MutableRefObject<HTMLInputElement>;
  const learn4 = useRef() as React.MutableRefObject<HTMLInputElement>;
  const req1 = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [learning, setLearning] = useState(course?.payload?.learning);
  const [requirements, setRequirements] = useState(
    course?.payload?.requirements
  );

  const router = useRouter();
  const [btn1, setBtn1] = useState(0);
  const [btn2, setBtn2] = useState(0);

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
    section_video: course?.payload?.section_video,
  });

  const handleChange1 = () => {
    setLearning([...learning, learn1.current.value, learn2.current.value, learn3.current.value, learn4.current.value]);
    console.log(learning)
    setBtn1(1);
  };

  const handleChange2 = () => {
    setRequirements([...requirements, req1.current.value]);
    setBtn2(1);
  };

  const handleSubmit1 = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/course/" + course?.payload?._id, {
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
          learning: learning,
          requirements: profile.requirements,
          section_title: profile.section_title,
          section_video: profile.section_video,
          section_desc: profile.section_desc,
          price: profile.price,
          email: profile.email,
          students: profile.students,
        }),
      });
      if (response.status === 200) {
        response.json().then((data) => {
          console.log(data);
        });
      } else {
        console.log("error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit2 = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/course/" + course?.payload?._id, {
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
          learning: learning,
          requirements: requirements,
          section_title: profile.section_title,
          section_video: profile.section_video,
          section_desc: profile.section_desc,
          price: profile.price,
          email: profile.email,
          students: profile.students,
        }),
      });
      if (response.status === 200) {
        response.json().then((data) => {
          console.log(data);
        });
      } else {
        console.log("error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={`${comp === "learner" ? "" : "hidden"}`}>
      <section className="md:pt-10 md:pb-10 pt-6 pb-6 md:pl-8 pl-3 md:pr-8 pr-3 border-b-[1px] border-slate-400">
        <h3 className="font-semibold text-2xl">Intended Learners</h3>
      </section>
      <div className="pt-10 pb-10 md:pl-8 lg:pr-0 md:pr-8 sm:pl-4 sm:pr-4 pl-2 pr-2 lg:w-5/6 w-full">
        <h4 className="text-slate-300 text-[0.9rem]">
          The following descriptions will be publicly visible on your Course
          Landing Page and will have a direct impact on your course performance.
          These descriptions will help learners decide if your course is right
          for them.
        </h4>
        <h3 className="font-semibold mt-12">
          What will students learn in your course?
        </h3>
        <h4 className="text-slate-300 text-[0.9rem] mt-[5px]">
          You must enter at least 4 learning objectives or outcomes that
          learners can expect to achieve after completing your course.
        </h4>
        <section className="pt-5 pb-5">
          <input
            type="text"
            className="lg:w-5/6 w-full p-3 focus:outline-0 bg-[#04151b] border-[1px] border-slate-300 placeholder:text-slate-400 mt-2 mb-2"
            placeholder="Example: Defines the roles and responsities of a project manager."
            ref={learn1}
          />
          <input
            type="text"
            className="lg:w-5/6 w-full p-3 focus:outline-0 bg-[#04151b] border-[1px] border-slate-300 placeholder:text-slate-400 mt-2 mb-2"
            placeholder="Example: Defines the roles and responsities of a project manager."
            ref={learn2}
          />
          <input
            type="text"
            className="lg:w-5/6 w-full p-3 focus:outline-0 bg-[#04151b] border-[1px] border-slate-300 placeholder:text-slate-400 mt-2 mb-2"
            placeholder="Example: Defines the roles and responsities of a project manager."
            ref={learn3}
          />
          <input
            type="text"
            className="lg:w-5/6 w-full p-3 focus:outline-0 bg-[#04151b] border-[1px] border-slate-300 placeholder:text-slate-400 mt-2 mb-2"
            placeholder="Example: Defines the roles and responsities of a project manager."
            ref={learn4}
          />
          <h3
            onClick={handleChange1}
            className={`w-[150px] mt-3 bg-blue-700 cursor-pointer ${
              btn1 === 0 ? "" : "hidden"
            } font-semibold pt-3 pb-3 border-[1px] border-slate-300 text-center`}
          >
            + Add
          </h3>
          <h3
            onClick={handleSubmit1}
            className={`w-[150px] mt-3 cursor-pointer ${
              btn1 === 1 ? "" : "hidden"
            } font-semibold pt-3 bg-green-700 rounded pb-3 border-[1px] border-slate-300 text-center`}
          >
            Save
          </h3>
        </section>
        <h3 className="font-semibold mt-8">
          What are the requirements or prerequisites for taking your course?
        </h3>
        <h4 className="text-slate-300 text-[0.9rem] mt-[5px]">
          List the required skills, experience, tools or equipment learners
          should have prior to taking your course. If there are no requirements,
          use this space as an opportunity to lower the barrier for beginners.
        </h4>
        <section className="pt-5 pb-5">
          <input
            type="text"
            className="lg:w-5/6 w-full p-3 focus:outline-0 bg-[#04151b] border-[1px] border-slate-300 placeholder:text-slate-400 mt-2 mb-2"
            placeholder="Example: No prior knowledge needed. You can start as a beginner."
            ref={req1}
          />
          <h3
            onClick={handleChange2}
            className={`w-[150px] mt-3 bg-blue-700 cursor-pointer ${
              btn2 === 0 ? "" : "hidden"
            } font-semibold pt-3 pb-3 border-[1px] border-slate-300 text-center`}
          >
            + Add
          </h3>
          <h3
            onClick={handleSubmit2}
            className={`w-[150px] mt-3 cursor-pointer ${
              btn2 === 1 ? "" : "hidden"
            } font-semibold pt-3 bg-green-700 rounded pb-3 border-[1px] border-slate-300 text-center`}
          >
            Save
          </h3>
        </section>
      </div>
    </div>
  );
}

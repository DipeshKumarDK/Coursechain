"use client";

import React, { use, useRef, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import type { RootState } from '../GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { changeUser } from '../GlobalRedux/Features/user/userSlice';
import { useRouter } from "next/navigation";

export default function Landing({ comp }: { comp: string }) {
  const [language, setLanguage] = useState(0);
  const [level, setLevel] = useState(0);
  const [category, setCategory] = useState(0);

  const [mainLanguage, setMainLanguage] = useState("English");
  const [mainLevel, setMainLevel] = useState("Basic");
  const [mainCategory, setMainCategory] = useState("Development");

  const router = useRouter();

  const changeLanguage = () => {
    if (language === 0) {
      setLanguage(1);
    } else {
      setLanguage(0);
    }
  };

  const changeLevel = () => {
    if (level === 0) {
      setLevel(1);
    } else {
      setLevel(0);
    }
  };

  const changeCategory = () => {
    if (category === 0) {
      setCategory(1);
    } else {
      setCategory(0);
    }
  };

  const user = useSelector((state: RootState) => state.user.value);
  console.log(user?.payload?.email)
  console.log(user?.payload?._id)

  const pro = useSelector((state: RootState) => state.profile.value);
  console.log(pro?.payload?.username)

  const [profile, setProfile] = useState({
    title: "",
    subtitle: "",
    description: "",
    // language: "",
    // level: "",
    // category: "",
    image: "image.com",
    promotional_video: "video.com",
    ownerid: user?.payload?._id,
    username: pro?.payload?.username,
    learning: [],
    requirements: [],
    section_title: [],
    section_video: [],
    price: "none",
    email: user?.payload?.email,
    students: 0,
    rating: 0,
    why_right_course: "none",
    for_whom: "none",
    reviews: [],
    announcements: [],
    questions: []
  });

  function handleChange(e: any) {
    const name = e.target.name;
    const value = e.target.value;

    setProfile((prevUser) => ({ ...prevUser, [name]: value }));
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/course", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          title: profile.title,
          subtitle: profile.subtitle,
          description: profile.description,
          language: mainLanguage,
          level: mainLevel,
          category: mainCategory,
          image: profile.image,
          promotional_video: profile.promotional_video,
          ownerid: profile.ownerid,
          username: profile.username,
          learning: profile.learning,
          requirements: profile.requirements,
          section_title: profile.section_title,
          section_video: profile.section_video,
          price: profile.price,
          email: profile.email,
          students: profile.students,
          rating: profile.rating,
          why_right_course: profile.why_right_course,
          for_whom: profile.for_whom,
          reviews: profile.reviews,
          announcements: profile.announcements,
          questions: profile.questions
        }), 
      });
      if (response.status === 200) {
        setProfile({
          title: "",
          subtitle: "",
          description: "",
          // language: "",
          // level: "",
          // category: "",
          image: "",
          promotional_video: "",
          ownerid: user?.payload?._id,
          username: pro?.payload?.username,
          learning: [],
          requirements: [],
          section_title: [],
          section_video: [],
          price: "7",
          email: user?.payload?.email,
          students: 0,
          rating: 0,
          why_right_course: "",
          for_whom: "",
          reviews: [],
          announcements: [],
          questions: []
        });
        response.json().then((data) => {
          console.log(data);
          router.push("/home")
        });
      } else {
        console.log("error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={`${comp === "landing" ? "" : "hidden"}`}>
      <section className="md:pt-10 md:pb-10 pt-6 pb-6 md:pl-8 md:pr-8 sm:pl-5 sm:pr-5 pl-2 pr-2 border-b-[1px] border-slate-400">
        <h2 className="font-semibold text-2xl">Create Course Landing Page</h2>
      </section>
      <section className="pt-14 pb-14 md:pl-8 md:pr-8 sm:pl-5 sm:pr-5 pl-2 pr-2">
        <h3 className="text-slate-300">
          Your course landing page is crucial to your success on Udemy. If it’s
          done right, it can also help you gain visibility in search engines
          like Google. As you complete this section, think about creating a
          compelling Course Landing Page that demonstrates why someone would
          want to enroll in your course.
        </h3>
        <div className="md:pt-10 pt-6 pb-4">
          <section className="">
            <h4 className="font-semibold">Course Title*</h4>
            <input
              type="text"
              className="placeholder:text-slate-400 w-full p-2 bg-[#04151b] border-[1px] border-slate-300 mt-2"
              placeholder="Enter Section Title*"
              value={profile.title}
              onChange={handleChange}
              name="title"
            />
            <h4 className="mt-5 font-semibold">Course Subtitle*</h4>
            <input
              type="text"
              className="placeholder:text-slate-400 w-full p-2 bg-[#04151b] border-[1px] border-slate-300 mt-2"
              placeholder="Enter a subtitle for the course*"
              value={profile.subtitle}
              onChange={handleChange}
              name="subtitle"
            />
            <h4 className="mt-5 font-semibold">Course Description*</h4>
            <textarea
              rows={5}
              className="placeholder:text-slate-400 w-full p-2 bg-[#04151b] border-[1px] border-slate-300 mt-2"
              placeholder="Enter Section Description*"
              value={profile.description}
              onChange={handleChange}
              name="description"
            />
          </section>
        </div>
        <section className="md:pt-10 pt-6 pb-4">
          <h4 className="font-semibold">Basic Info</h4>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[15px] mt-3">
            <div className="" style={{ position: "relative" }}>
              <div className="flex border-[1px] border-slate-300 pt-1 pb-1 pl-1 pr-1 justify-between">
                <div className="flex flex-col justify-center">
                  <input
                    type="text"
                    className="placeholder:text-slate-400 p-2 bg-[#04151b] flex-grow focus:outline-0"
                    placeholder="Select Language"
                    value={mainLanguage}
                    onChange={()=>{}}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <IoIosArrowDropdown
                    className="h-8 w-8 cursor-pointer"
                    onClick={changeLanguage}
                  />
                </div>
              </div>
              <div
                className={`w-full bg-slate-200 text-slate-800 z-20 p-3 ${
                  language === 0 ? "hidden" : ""
                }`}
                style={{ position: "absolute", top: "49px" }}
              >
                <h3
                  onClick={() => setMainLanguage("Hindi")}
                  className="font-semibold cursor-pointer hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1"
                >
                  Hindi
                </h3>
                <h3
                  onClick={() => setMainLanguage("English")}
                  className="font-semibold cursor-pointer hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1"
                >
                  English
                </h3>
              </div>
            </div>

            <div className="" style={{ position: "relative" }}>
              <div className="flex border-[1px] border-slate-300 pt-1 pb-1 pl-1 pr-1 justify-between">
                <div className="flex flex-col justify-center">
                  <input
                    type="text"
                    className="placeholder:text-slate-400 p-2 bg-[#04151b] flex-grow focus:outline-0"
                    placeholder="Select Level"
                    value={mainLevel}
                    onChange={()=>{}}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <IoIosArrowDropdown
                    className="h-8 w-8 cursor-pointer"
                    onClick={changeLevel}
                  />
                </div>
              </div>
              <div
                className={`w-full bg-slate-200 text-slate-800 z-20 p-3 ${
                  level === 0 ? "hidden" : ""
                }`}
                style={{ position: "absolute", top: "49px" }}
              >
                <h3
                  onClick={() => setMainLevel("Basic")}
                  className="font-semibold cursor-pointer hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1"
                >
                  Basic
                </h3>
                <h3
                  onClick={() => setMainLevel("Intermediate")}
                  className="font-semibold cursor-pointer hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1"
                >
                  Intermediate
                </h3>
                <h3
                  onClick={() => setMainLevel("Advanced")}
                  className="font-semibold cursor-pointer hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1"
                >
                  Advanced
                </h3>
              </div>
            </div>

            <div className="" style={{ position: "relative" }}>
              <div className="flex border-[1px] border-slate-300 pt-1 pb-1 pl-1 pr-1 justify-between">
                <div className="flex flex-col justify-center">
                  <input
                    type="text"
                    className="placeholder:text-slate-400 p-2 bg-[#04151b] flex-grow focus:outline-0"
                    placeholder="Select Level"
                    value={mainCategory}
                    onChange={()=>{}}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <IoIosArrowDropdown
                    className="h-8 w-8 cursor-pointer"
                    onClick={changeCategory}
                  />
                </div>
              </div>
              <div
                className={`w-full bg-slate-200 text-slate-800 z-20 p-2 ${
                  category === 0 ? "hidden" : ""
                }`}
                style={{ position: "absolute", top: "49px" }}
              >
                <h3
                  onClick={() => setMainCategory("Development")}
                  className="font-semibold cursor-pointer hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1"
                >
                  Development
                </h3>
                <h3
                  onClick={() => setMainCategory("Business")}
                  className="font-semibold cursor-pointer hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1"
                >
                  Business
                </h3>
                <h3
                  onClick={() => setMainCategory("Finance & Accounting")}
                  className="font-semibold cursor-pointer hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1"
                >
                  Finance & Accounting
                </h3>
                <h3
                  onClick={() => setMainCategory("IT & Software")}
                  className="font-semibold cursor-pointer hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1"
                >
                  IT & Software
                </h3>
                <h3
                  onClick={() => setMainCategory("Design")}
                  className="font-semibold cursor-pointer hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1"
                >
                  Design
                </h3>
                <h3
                  onClick={() => setMainCategory("Marketing")}
                  className="font-semibold cursor-pointer hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1"
                >
                  Marketing
                </h3>
                <h3
                  onClick={() => setMainCategory("Personal Development")}
                  className="font-semibold cursor-pointer hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1"
                >
                  Personal Development
                </h3>
                <h3
                  onClick={() => setMainCategory("Health & Fitness")}
                  className="font-semibold cursor-pointer hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1"
                >
                  Health & Fitness
                </h3>
                <h3
                  onClick={() => setMainCategory("Music")}
                  className="font-semibold cursor-pointer hover:bg-blue-600 hover:rounded hover:text-slate-200 p-1"
                >
                  Music
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className="md:pt-8 md:pb-8 pt-4 pb-4">
          <h4 className="font-semibold">Course Image*</h4>
          <input
            type="file"
            className="placeholder:text-slate-400 w-full p-2 bg-[#04151b] border-[1px] border-slate-300 mt-2"
            placeholder="Image*"
            // value={profile.image}
            // onChange={handleChange}
            // name="image"
          />
        </section>
        <section className="pt-2 pb-2">
          <h4 className="font-semibold">Promotional Video*</h4>
          <input
            type="file"
            className="placeholder:text-slate-400 w-full p-2 bg-[#04151b] border-[1px] border-slate-300 mt-2"
            placeholder="Video*"
            // value={profile.promotional_video}
            // onChange={handleChange}
            // name="promotional_video"
          />
        </section>
        <h3 onClick={handleSubmit}
          className="pt-3 pb-3 cursor-pointer mt-8 w-[100px] text-center rounded bg-[#0f556e]"
        >
          Save
        </h3>
      </section>
    </div>
  );
}

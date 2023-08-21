"use client"

import React, { useState , useEffect } from "react";
import Image from "next/image";
import pic from "../../assets/profile.jpg";
import { AiFillStar } from "react-icons/ai";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { AiFillPlayCircle } from "react-icons/ai";
import type { RootState } from "../GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";

export default function InstructorInfo() {

  const course = useSelector((state: RootState) => state.course.value);
  console.log(course?.payload);

  const [ins, setIns] = useState({
    username: "none",
    headline: "none",
    biography: "none", 
    image: "none"
  })

  const handleGet = async () => {
    try {
      const response = await fetch("/api/profile/get", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body : JSON.stringify({
          email: course?.payload?.email
        })
      });
      if (response.status === 200) {
        response.json().then((data) => {
          console.log(data);
          setIns(data)
        });
      } else {
        console.log(response.status);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleGet()
  }, [course?.payload?.ownerid])

  return (
    <div className="xl:pl-36 xl:pr-36 lg:pl-24 lg:pr-24 md:pl-12 md:pr-12 sm:pl-8 sm:pr-8 xs:pl-4 xs:pr-4 pl-3 pr-3 pt-12 pb-8 flex bg-[#04151b] text-slate-100">
      <div className="">
        <h2 className="text-2xl font-semibold">About The Instructor</h2>
        <section className="flex mt-4">
          <div className="">
            <Image src={pic} className="h-32 w-32 rounded-full" alt="" />
          </div>
          <div className="flex flex-col justify-center pl-3">
            <div className="xs:flex hidden sm:text-base text-sm">
              <AiFillStar className="h-5 w-5" />
              <h4 className="ml-1 text-sm">4.5 Instructor Ratings</h4>
            </div>
            <div className="flex xs:hidden sm:text-base text-sm">
              <AiFillStar className="h-5 w-5" />
              <h4 className="ml-1 text-sm">4.5 Ratings</h4>
            </div>
            <div className="flex mt-2 sm:text-base text-sm">
              <BsFillBookmarkStarFill className="h-5 w-5" />
              <h4 className="ml-1 text-sm">458 User Reviews</h4>
            </div>
            <div className="flex mt-2 sm:text-base text-sm">
              <HiUserGroup className="h-5 w-5" />
              <h4 className="ml-1 text-sm">12985 students</h4>
            </div>
            <div className="flex mt-2 sm:text-base text-sm">
              <AiFillPlayCircle className="h-5 w-5" />
              <h4 className="ml-1 text-sm">27 courses</h4>
            </div>
          </div>
        </section>
        <h4 className="text-[0.9rem] md:text-base sm:text-sm text-sm mt-3">
          {ins?.biography}
        </h4>
      </div>
    </div>
  );
}

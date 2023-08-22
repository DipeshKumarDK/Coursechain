"use client";

import bg from "../../assets/bg1.png";
import Link from "next/link";
import { useState } from "react";

export default function RegisterMid() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [profile, setProfile] = useState({
    email: "",
    username: "",
    headline: "none",
    website: "none",
    twitter: "none",
    linkedin: "none",
    youtube: "none",
    biography: "none",
    image: "none",
    coursesTaken: [],
    wishlist: [],
    coursesMade: [],
    why_perfect_teacher: "none",
    students: 0,
    rating: 0,
  });

  function handleChange(e: any) {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (user.password !== user.cpassword) {
      window.alert("Passwords do not match");
    } else {
      let id = "none";
      try {
        const response = await fetch("/api/user", {
          method: "POST",
          headers: { Content_Type: "application/json" },
          body: JSON.stringify({
            username: user.username,
            email: user.email,
            password: user.password,
          }),
        });
        if (response.status === 200) {
          setUser({
            username: "",
            email: "",
            password: "",
            cpassword: "",
          });
          response.json().then((data) => {
            id = data?.res[0]?._id.toString();
            console.log(id);
          });
        } else {
          console.log("error");
        }
        const resp = await fetch("/api/profile", {
          method: "POST",
          headers: { Content_Type: "application/json" },
          body: JSON.stringify({
            email: user.email,
            username: user.username,
            headline: profile.headline,
            website: profile.website,
            twitter: profile.twitter,
            linkedin: profile.linkedin,
            youtube: profile.youtube,
            biography: profile.biography,
            image: profile.image,
            coursesTaken: profile.coursesTaken,
            coursesMade: profile.coursesMade,
            wishlist: profile.wishlist,
            why_perfect_teacher: profile.why_perfect_teacher,
            students: profile.students,
            rating: profile.rating,
          }),
        });
        if (resp.status === 200) {
          setProfile({
            email: "",
            username: "",
            headline: "",
            website: "",
            twitter: "",
            linkedin: "",
            youtube: "",
            biography: "",
            image: "none",
            coursesTaken: [],
            wishlist: [],
            coursesMade: [],
            why_perfect_teacher: "none",
            students: 0,
            rating: 0,
          });
          resp.json().then((data) => {
            console.log(data);
          });
        } else {
          console.log("error");
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div
      className="bg-black text-white 2xl:pl-96 2xl:pr-96 xl:pl-64 xl:pr-64 lg:pl-44 lg:pr-44 md:pl-28 md:pr-28 sm:pl-10 sm:pr-10 pl-2 pr-2 pt-16 pb-16"
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
      }}
    >
      <h2 className="font-semibold sm:text-2xl text-xl">
        Start Learning With Tutors' Hub
      </h2>
      <form className="mt-6" onSubmit={handleSubmit}>
        <h4 className="font-semibold mb-1">Full Name* </h4>
        <div className="border-[1px] border-slate-200 p-3">
          <input
            name="username"
            type="text"
            className="w-full bg-transparent sm:pt-2 sm:pb-2 pt-1 pb-1 placeholder:text-slate-200 placeholder:text-sm focus:outline-0"
            placeholder="Enter your Name *"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <h4 className="font-semibold mb-1 mt-5">Your Email* </h4>
        <div className="border-[1px] border-slate-200 p-3">
          <input
            type="email"
            className="w-full bg-transparent sm:pt-2 sm:pb-2 pt-1 pb-1 placeholder:text-slate-200 placeholder:text-sm focus:outline-0"
            placeholder="Enter active mail *"
            value={user.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <h4 className="font-semibold mb-1 mt-5">Password* </h4>
        <div className="border-[1px] border-slate-200 p-3">
          <input
            type="password"
            className="w-full bg-transparent sm:pt-2 sm:pb-2 pt-1 pb-1 placeholder:text-slate-200 placeholder:text-sm focus:outline-0"
            placeholder="Create a password *"
            value={user.password}
            onChange={handleChange}
            name="password"
          />
        </div>
        <h4 className="font-semibold mb-1 mt-5">Confirm Password* </h4>
        <div className="border-[1px] border-slate-200 p-3">
          <input
            type="password"
            className="w-full bg-transparent sm:pt-2 sm:pb-2 pt-1 pb-1 placeholder:text-slate-200 placeholder:text-sm focus:outline-0"
            placeholder="Re-enter Password *"
            value={user.cpassword}
            onChange={handleChange}
            name="cpassword"
          />
        </div>
        <button
          type="submit"
          className="pt-3 pb-3 cursor-pointer mt-7 mb-5 w-[100px] text-center rounded bg-[#0f556e]"
        >
          Continue
        </button>
      </form>
      <Link href={"/login"} className="text-sm">
        Already have an account?{" "}
        <span className="underline text-blue-400">Login</span>
      </Link>
    </div>
  );
}

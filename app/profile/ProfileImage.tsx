"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import pic from "../../assets/hacker.webp";
import type { RootState } from '../GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';

export default function ProfileImage({ comp }: { comp: string }) {
  const [profile, setProfile] = useState({
    username: "none",
    headline: "none",
    website: "none",
    twitter: "none",
    linkedin: "none",
    youtube: "none",
    biography: "none", 
    image: "none"
  });

  const user = useSelector((state: RootState) => state.user.value);
  console.log(user?.payload?.email)

  const [searchId, setSearchId] = useState("")

  const handleGet = async () => {
    try {
      const response = await fetch("/api/profile/get", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body : JSON.stringify({
          email: user?.payload?.email
        })
      });
      if (response.status === 200) {
        response.json().then((data) => {
          console.log(data);
          setSearchId(data._id)
          setProfile({
            username: data?.username,
            headline: data?.headline,
            website: data?.website,
            twitter: data?.twitter,
            linkedin: data?.linkedin,
            youtube: data?.youtube,
            biography: data?.biography,
            image:data?.image
          });
        });
      } else {
        console.log("error");
      }
    } catch (e) {
      console.log(e);
    }
  };


  useEffect(() => {
    handleGet()
  }, [user])
  

  function handleChange(e: any) {
    const name = e.target.name;
    const value = e.target.value;

    setProfile((prevUser) => ({ ...prevUser, [name]: value }));
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/profile/"+searchId, {
        method: "PUT",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          username: profile.username,
          headline: profile.headline,
          website: profile.website,
          twitter: profile.twitter,
          linkedin: profile.linkedin,
          youtube: profile.youtube,
          biography: profile.biography,
          image: profile.image
        }),
      });
      if (response.status === 200) {
        setProfile({
          username: "",
          headline: "",
          website: "",
          twitter: "",
          linkedin: "",
          youtube: "",
          biography: "",
          image:""
        });
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
    <div
      className={`pt-10 pb-10 lg:w-1/2 md:w-2/3 sm:w-3/4 w-full ${
        comp === "picture" ? "" : "hidden"
      }`}
    >
      <h3 className="font-semibold text-xl">Profile Image</h3>
      <h4 className="mt-1 text-sm text-slate-300">
        Upload your profile image. You can choose to make it publicly visible or
        not.
      </h4>
      <div className="p-2 border-[1px] border-slate-300 mt-5">
        <Image src={pic} alt="" className="h-[300px] w-full" />
      </div>
      <section className="flex mt-6">
        <input
          type="file"
          className="pt-2 flex-grow pl-2 pr-2 pb-2 border-[1px] border-slate-300"
          placeholder="Select an image"
        />
        <div className="flex flex-col justify-center bg-[#0a3f52] border-[1px] border-slate-300 pl-3 pr-3">
          <h4 className="text-center">Upload Image</h4>
        </div>
      </section>
      <h3
        onClick={handleSubmit}
        className="pt-3 pb-3 mt-7 w-[100px] text-center rounded bg-[#0f556e]"
      >
        Save
      </h3>
    </div>
  );
}

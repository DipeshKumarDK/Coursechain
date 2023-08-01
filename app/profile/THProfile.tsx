"use client";

import { useState } from "react";

export default function THProfile({ comp }: { comp: string }) {
  const [profile, setProfile] = useState({
    userid: "idhubhai",
    username: "",
    headline: "",
    website: "",
    twitter: "",
    linkedin: "",
    youtube: "",
    biography: "",
  });

  function handleChange(e: any) {
    const name = e.target.name;
    const value = e.target.value;

    setProfile((prevUser) => ({ ...prevUser, [name]: value }));
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/profile", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          userid: profile.userid,
          username: profile.username,
          headline: profile.headline,
          website: profile.website,
          twitter: profile.twitter,
          linkedin: profile.linkedin,
          youtube: profile.youtube,
          biography: profile.biography,
          image: "",
        }),
      });
      if (response.status === 200) {
        setProfile({
          userid: "",
          username: "",
          headline: "",
          website: "",
          twitter: "",
          linkedin: "",
          youtube: "",
          biography: "",
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
    <form className={`pt-10 pb-10 ${comp === "profile" ? "" : "hidden"}`} onSubmit={handleSubmit}>
      <div className="grid xs:grid-cols-2 grid-cols-1 sm:gap-[25px] gap-[15px]">
        <section>
          <h4 className="font-semibold mb-1">Full Name</h4>
          <div className="border-[1px] border-slate-200 pt-1 pb-1 pl-2 pr-2">
            <input
              type="text"
              className="w-full bg-transparent sm:pt-2 sm:pb-2 pt-1 pb-1 placeholder:text-slate-200 placeholder:text-sm focus:outline-0"
              placeholder="NF Warrior"
              value={profile.username}
              onChange={handleChange}
              name="username"
            />
          </div>
        </section>
        <section>
          <h4 className="font-semibold mb-1">Website Url</h4>
          <div className="border-[1px] border-slate-200 pt-1 pb-1 pl-2 pr-2">
            <input
              type="text"
              className="w-full bg-transparent sm:pt-2 sm:pb-2 pt-1 pb-1 placeholder:text-slate-200 placeholder:text-sm focus:outline-0"
              placeholder="Url"
              value={profile.website}
              onChange={handleChange}
              name="website"
            />
          </div>
        </section>
        <section>
          <h4 className="font-semibold mb-1">Headline</h4>
          <div className="border-[1px] border-slate-200 pt-1 pb-1 pl-2 pr-2">
            <input
              type="text"
              className="w-full bg-transparent sm:pt-2 sm:pb-2 pt-1 pb-1 placeholder:text-slate-200 placeholder:text-sm focus:outline-0"
              placeholder="Student At Tutors' Hub"
              value={profile.headline}
              onChange={handleChange}
              name="headline"
            />
          </div>
        </section>
        <section>
          <h4 className="font-semibold mb-1">Twitter</h4>
          <div className="border-[1px] border-slate-200 pt-1 pb-1 pl-2 pr-2">
            <input
              type="text"
              className="w-full bg-transparent sm:pt-2 sm:pb-2 pt-1 pb-1 placeholder:text-slate-200 placeholder:text-sm focus:outline-0"
              placeholder="http://twitter.com"
              value={profile.twitter}
              onChange={handleChange}
              name="twitter"
            />
          </div>
        </section>
        <section>
          <h4 className="font-semibold mb-1">LinkedIn</h4>
          <div className="border-[1px] border-slate-200 pt-1 pb-1 pl-2 pr-2">
            <input
              type="text"
              className="w-full bg-transparent sm:pt-2 sm:pb-2 pt-1 pb-1 placeholder:text-slate-200 placeholder:text-sm focus:outline-0"
              placeholder="http://linkedin.com"
              value={profile.linkedin}
              onChange={handleChange}
              name="linkedin"
            />
          </div>
        </section>
        <section>
          <h4 className="font-semibold mb-1">Youtube</h4>
          <div className="border-[1px] border-slate-200 pt-1 pb-1 pl-2 pr-2">
            <input
              type="text"
              className="w-full bg-transparent sm:pt-2 sm:pb-2 pt-1 pb-1 placeholder:text-slate-200 placeholder:text-sm focus:outline-0"
              placeholder="http://youtube.com"
              value={profile.youtube}
              onChange={handleChange}
              name="youtube"
            />
          </div>
        </section>
      </div>
      <section className="mt-[25px]">
        <h4 className="font-semibold mb-1">Biography</h4>
        <div className="border-[1px] border-slate-200 pt-1 pb-1 pl-2 pr-2">
          <textarea
            rows={3}
            className="w-full bg-transparent sm:pt-2 sm:pb-2 pt-1 pb-1 placeholder:text-slate-200 placeholder:text-sm focus:outline-0"
            placeholder="A brief description of you"
            value={profile.biography}
            onChange={handleChange}
            name="biography"
          />
        </div>
      </section>
      <button type="submit" className="pt-3 pb-3 mt-7 w-[100px] text-center rounded bg-[#0f556e]">
        Save
      </button>
    </form>
  );
}

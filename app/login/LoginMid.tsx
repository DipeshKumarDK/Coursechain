'use client'

import bg from "../../assets/bg1.png";
import Link from "next/link";
import {useState} from "react";
import type { RootState } from '../GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { changeUser } from '../GlobalRedux/Features/user/userSlice';
import { useRouter } from 'next/navigation'

export default function LoginMid() {

  // const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const router = useRouter()

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(e: any) {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
      });
      if (response.status === 200) { 
        setUser({
          email: "",
          password: "",
        });
        response.json().then(data => {
          console.log(data);
          dispatch(changeUser(data))
          router.push('/home')
        })
      } else {
        console.log("error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div
      className="bg-black flex flex-col justify-center min-h-[80vh] text-white 2xl:pl-96 2xl:pr-96 xl:pl-64 xl:pr-64 lg:pl-44 lg:pr-44 md:pl-28 md:pr-28 sm:pl-10 sm:pr-10 pl-2 pr-2 pt-16 pb-16"
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
      }}
    > 
      <h2 className="font-semibold sm:text-2xl xs:text-xl text-lg">
        Continue Your Journey With Tutors' Hub
      </h2>
      <form className="mt-3" onSubmit={handleSubmit}>
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
        <button
          type="submit"
          className="pt-3 pb-3 cursor-pointer mt-7 mb-5 w-[100px] text-center rounded bg-[#0f556e]"
        >
          Continue
        </button>
      </form>
      <Link href={'/register'} className="mt-5 text-sm">Don't have an account? <span className="underline text-blue-400">Register</span></Link>
    </div>
  );
}

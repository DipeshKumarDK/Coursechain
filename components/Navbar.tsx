import Image from "next/image";
import logo from "../assets/logo2.png";
import profile from "../assets/profile.jpg";
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineBell } from 'react-icons/ai';

export default function Navbar() {
  return (
    <>
    <section className="flex border-b-[1px] border-t-[1px] border-slate-200 pl-6 pr-6 pt-1 pb-1 bg-[#09384b] text-white">
      <Image src={logo} alt="Logo" className="h-14 w-14" />
      <section className="flex h-full w-full pt-1 pb-1 pl-6 pr-6">
        <div className="flex w-2/3">
          <h4 className="mt-3 mb-3 text-sm font-semibold pt-0.5 text-[#c1e9f8]">Categories</h4>
          <input type="text" className="h-12 border-[1px] border-slate-100 bg-[#09384b] ml-5 rounded-l-full rounded-r-full w-full p-1 pl-3 pr-3 placeholder:text-slate-200" placeholder="Search here" />
        </div>
        <div className="flex w-1/3 justify-between ml-5 pt-2 pb-2">
          <h4 className="text-sm font-semibold pt-0.5 mt-1 mb-1 text-[#c1e9f8]">Teach on Udemy</h4>
          <h4 className="text-sm font-semibold pt-0.5 mt-1 mb-1">My Learning</h4>
          <AiOutlineHeart className="h-6 w-6 mt-1 mb-1"/>
          <AiOutlineShoppingCart className="h-6 w-6 mt-1 mb-1"/>
          <AiOutlineBell className="h-6 w-6 mt-1 mb-1"/>
          <Image src={profile} alt="profile" className="h-8 w-8 rounded-full" />
        </div>
      </section>
    </section>
    <section className="flex justify-between pt-4 pb-4 pl-32 pr-32 border-b-[1px] border-t-[1px] border-slate-100 shadow-md shadow-white bg-[#09384b] text-white">
      <h4 className="text-sm text-[#c1e9f8]">Development</h4>
      <h4 className="text-sm">Business</h4>
      <h4 className="text-sm text-[#c1e9f8]">Finance & Accounting</h4>
      <h4 className="text-sm">IT & Software</h4>
      <h4 className="text-sm text-[#c1e9f8]">Design</h4>
      <h4 className="text-sm">Marketing</h4>
      <h4 className="text-sm text-[#c1e9f8]">Personal Development</h4>
      <h4 className="text-sm">Office Productivity</h4>
      <h4 className="text-sm text-[#c1e9f8]">Health & Fitness</h4>
      <h4 className="text-sm">Music</h4>
    </section>
    </>
  );
}
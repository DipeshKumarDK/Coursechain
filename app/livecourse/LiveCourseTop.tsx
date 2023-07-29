import Image from "next/image";
import logo from "../../assets/logo2.png";
import {AiFillStar} from "react-icons/ai"
import {IoIosShareAlt} from "react-icons/io"
import {BsThreeDotsVertical} from "react-icons/bs"
import Link from "next/link";

export default function LiveCourseTop() {
  return (
    <div className="flex justify-between text-white bg-[#041217] sm:pl-5 sm:pr-5 pl-2 pr-2">
      <Link href={'/home'}>
        <Image src={logo} alt="Logo" className="h-14 w-14 mt-1 mb-1 md:block hidden" />
      </Link>
      <section className="flex flex-col justify-center lg:max-w-[650px] sm:max-w-[300px] max-w-[240px]">
        <h2 className="md:text-lg truncate">
          Complete DApp - Solidity & React - Blockchain Development
        </h2>
      </section>
      <section className="flex">
        <div className="flex-col justify-center md:flex hidden">
        <div className="flex">
          <AiFillStar className="h-4 w-4 mt-[3px] "/>
          <h4 className="ml-1 text-sm">Leave a rating</h4>
        </div>
        </div>
        <div className="md:flex hidden flex-col ml-6 w-[100px] mt-4 mb-4 justify-center border-[1px] border-slate-200">
            <div className="flex justify-center">
          <h4 className="text-sm font-semibold">Share</h4>
          <IoIosShareAlt className="h-4 w-4 mt-[3px] ml-1"/>
          </div>
        </div>
        <div className="flex flex-col ml-2 w-[30px] mt-4 mb-4 p-[6px] justify-center border-[1px] border-slate-200">
            <div className="flex justify-center">
          <BsThreeDotsVertical className="h-4 w-4 mt-[3px]"/>
          </div>
        </div>
      </section>
    </div>
  );
}

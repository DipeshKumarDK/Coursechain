import { BsCheck2 } from "react-icons/bs";
import Image from "next/image";
import pic from "../../assets/course.jpg";

export default function CourseInfo() {
  return (
    <div className="xl:pl-36 xl:pr-36 lg:pl-24 lg:pr-24 md:pl-12 md:pr-12 sm:pl-8 sm:pr-8 xs:pl-4 xs:pr-4 pl-3 pr-3 pt-8 pb-8 md:flex bg-[#04151b] text-slate-100">
      {/* <Image src={pic} alt="" className="w-1/2 h-[500px]"/> */}
      <div className="md:w-1/2 w-full lg:h-[500px] xs:h-[400px] h-[350px]">
        <iframe
          // width="560"
          // height="315"
          className="h-full w-full"
          src="https://www.youtube.com/embed/p3VXJC5j-oM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="md:ml-4 md:mt-0 mt-3 lg:max-h-[500px] max-h-[400px] pl-4 pr-4 pt-3 pb-3 md:w-1/2 w-full overflow-y-scroll no-scrollbar border-[3px] border-slate-300">
        <h2 className="text-2xl font-semibold">Requirements</h2>
        <ul className="mt-3 text-sm">
          <li className="mt-1 text-slate-200">
            No programming needed to get started. You will learn everything from
            the ground up.
          </li>
          {/* <li className="mt-1">No programming needed to get started. You will learn everything from the ground up.</li> */}
        </ul>
        <h2 className="text-2xl font-semibold mt-12">Description</h2>
        <h3 className="mt-4 text-sm text-slate-300">
          Solidity is the most popular blockchain language in the world designed
          to build DApplications (Smart Contracts). It powers Ethereum and there
          is an in-demand exponential growth of high-paying jobs all over the
          world which is changing the way we conduct business. Learning Solidity
          can be likened to learning web development languages years ago - You
          are very much ahead of the game starting today -and that's why you
          want to learn Solidity too. And you have come to the right place!
        </h3>
        <h3 className="text-sm mt-2 font-semibold">Why is this the right course for you?</h3>
        <h3 className="mt-1 text-sm text-slate-300">
          Solidity is the most popular blockchain language in the world designed
          to build DApplications (Smart Contracts). It powers Ethereum and there
          is an in-demand exponential growth of high-paying jobs all over the
          world which is changing the way we conduct business. Learning Solidity
          can be likened to learning web development languages years ago - You
          are very much ahead of the game starting today -and that's why you
          want to learn Solidity too. And you have come to the right place!
        </h3>
        <h3 className="text-sm mt-2 font-semibold">Why am I the perfect teacher for you?</h3>
        <h3 className="mt-1 text-sm text-slate-300">
          Solidity is the most popular blockchain language in the world designed
          to build DApplications (Smart Contracts). It powers Ethereum and there
          is an in-demand exponential growth of high-paying jobs all over the
          world which is changing the way we conduct business. Learning Solidity
          can be likened to learning web development languages years ago - You
          are very much ahead of the game starting today -and that's why you
          want to learn Solidity too. And you have come to the right place!
        </h3>
        <h2 className="text-2xl font-semibold mt-12">
          Who this course is for:
        </h2>
        <div className="mt-3">
          <div className="flex mt-2">
            <BsCheck2 className="h-4 w-4" />
            <h4 className="text-sm ml-4 text-slate-200">
              Code along and become an advanced and confident Solidity developer
              from scratch
            </h4>
          </div>
          <div className="flex mt-2">
            <BsCheck2 className="h-4 w-4" />
            <h4 className="text-sm ml-4 text-slate-200">
              Code along and become an advanced and confident Solidity developer
              from scratch. Be a master.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

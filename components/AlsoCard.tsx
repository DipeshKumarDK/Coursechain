import Image from "next/image";
import pic from "../assets/profile.jpg"
import { HiUserGroup } from "react-icons/hi"
import { GrFavorite } from "react-icons/gr"

export default function AlsoCard() {
    return (
      <div className="border-b-[1px] border-slate-400 flex xs:flex-row flex-col bg-[#04151b] pt-4 pb-4 text-slate-100">
        <Image src={pic} alt="" className="lg:h-24 md:h-32 xs:h-32 h-44 sm:w-1/6 xs:w-2/6 w-full"/>
        <section className="xs:pl-4 xs:pr-4 xs:pt-0 xs:pb-0 pt-2 pb-2 sm:w-4/6 xs:w-4/6 flex flex-col justify-center">
            <h3 className="sm:text-lg font-semibold leading-6">The Best Web Development Course With Backend</h3>
            <h3 className="text-slate-300 sm:text-base text-sm mt-1">Learn from the best in the business. Get a deep knowledge of what's...</h3>
            <div className="flex mt-1">
            <h4 className="text-yellow-300 sm:text-sm text-xs">
              3 ⭐ out of 5
            </h4>
            <HiUserGroup className="h-4 w-5 mt-[1px] ml-4 mr-1"/>
            <h4 className="sm:text-sm text-xs">14432</h4>
            </div>
            <h3 className="font-semibold sm:text-base xs:hidden mt-1">$1330</h3>
            <GrFavorite className="h-8 w-8 mt-1 p-1 border-[0.5px] bg-white rounded-full border-slate-300 xs:hidden"/>
        </section>
        <section className="w-1/6 sm:flex hidden  justify-center">
            <div className="flex flex-col h-full justify-center">
            <h3 className="font-semibold sm:text-base text-sm">$1330</h3>
            <GrFavorite className="h-8 w-8 mt-1 ml-2 p-1 border-[0.5px] bg-white rounded-full border-slate-300"/>
            </div>
        </section>
      </div>
    );
  }
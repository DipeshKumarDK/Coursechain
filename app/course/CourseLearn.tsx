import { BsCheck2 } from "react-icons/bs"

export default function CourseLearn() {
  return (
    <div className="xl:pl-36 xl:pr-36 lg:pl-24 lg:pr-24 md:pl-12 md:pr-12 sm:pl-8 sm:pr-8 xs:pl-4 xs:pr-4 pl-3 pr-3 pt-8 pb-8 bg-[#04151b] text-white flex">
        <section className="p-5 border-[1px] border-slate-300 ">
        <h2 className="text-2xl mb-4">What You'll Learn</h2>
       <section className="grid sm:grid-cols-2 grid-cols-1 md:gap-x-[40px] gap-x-[20px] gap-y-[20px]">
           <div className="flex">
              <BsCheck2 className="h-6 w-6"/>
              <h4 className="text-sm ml-4 text-slate-200">Code along and become an advanced and confident Solidity developer from scratch</h4>
           </div>
           <div className="flex">
              <BsCheck2 className="h-6 w-6"/>
              <h4 className="text-sm ml-4 text-slate-200">Code along and become an advanced and confident Solidity developer from scratch</h4>
           </div>
           <div className="flex">
              <BsCheck2 className="h-6 w-6"/>
              <h4 className="text-sm ml-4 text-slate-200">Code along and become an advanced and confident Solidity developer from scratch. Be a master of coding.</h4>
           </div>
           <div className="flex">
              <BsCheck2 className="h-6 w-6"/>
              <h4 className="text-sm ml-4 text-slate-200">Code along and become an advanced and confident Solidity developer from scratch</h4>
           </div>
           <div className="flex">
              <BsCheck2 className="h-6 w-6"/>
              <h4 className="text-sm ml-4 text-slate-200">Code along and become an advanced and confident Solidity developer from scratch</h4>
           </div>
           <div className="flex">
              <BsCheck2 className="h-6 w-6"/>
              <h4 className="text-sm ml-4 text-slate-200">Code along and become an advanced and confident Solidity developer from scratch</h4>
           </div>
       </section>
       </section>
    </div>
  );
}
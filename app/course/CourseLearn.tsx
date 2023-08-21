"use client";

import { BsCheck2 } from "react-icons/bs";
import type { RootState } from "../GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function CourseLearn() {
  const course = useSelector((state: RootState) => state.course.value);
  console.log(course?.payload);

  return (
    <div className="xl:pl-36 xl:pr-36 lg:pl-24 lg:pr-24 md:pl-12 md:pr-12 sm:pl-8 sm:pr-8 xs:pl-4 xs:pr-4 pl-3 pr-3 pt-8 pb-8 bg-[#04151b] text-white flex">
      <section className="p-5 border-[1px] border-slate-300 w-full">
        <h2 className="text-2xl mb-4">What You'll Learn</h2>
        <section className="grid sm:grid-cols-2 grid-cols-1 md:gap-x-[40px] gap-x-[20px] gap-y-[20px]">
          {course?.payload?.learning?.map((req:string) => {
            return(
            <div className="flex">
              <BsCheck2 className="h-6 w-6" />
              <h4 className="text-sm ml-4 text-slate-200">
                {req}
              </h4>
            </div>
            )
          })}
        </section>
      </section>
    </div>
  );
}

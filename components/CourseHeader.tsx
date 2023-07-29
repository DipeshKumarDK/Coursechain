import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Link from "next/link";

export default function CourseHeader() {
  return (
    <div className="pt-2 pb-2 pl-3 pr-3 flex justify-between bg-black text-white">
      <section className="md:flex hidden">
        <div className="flex flex-col justify-center">
          <MdOutlineArrowBackIosNew className="h-5 mt-[2px] w-5" />
        </div>
        <div className="flex flex-col justify-center">
          <Link href={'/instructor'} className="ml-2">Back to courses</Link>
        </div>
      </section>
      <div className="flex flex-col justify-center">
          <h2 className="font-bold sm:text-lg">Blockchain Course</h2>
        </div>
      <div className="flex flex-col justify-center border-[1px] sm:pl-3 sm:pr-3 pl-2 pr-2 pt-2 pb-2 border-slate-300">
          <h4 className="text-center sm:text-base text-sm">Delete Course</h4>
      </div>
    </div>
  );
}

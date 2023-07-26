import { MdOutlineArrowBackIosNew } from "react-icons/md";

export default function CourseHeader() {
  return (
    <div className="pt-2 pb-2 pl-3 pr-3 flex justify-between bg-black text-white">
      <section className="flex">
        <div className="flex flex-col justify-center">
          <MdOutlineArrowBackIosNew className="h-5 mt-[2px] w-5" />
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="ml-2">Back to courses</h4>
        </div>
      </section>
      <div className="flex flex-col justify-center">
          <h2 className="font-bold text-lg">Blockchain Course</h2>
        </div>
      <div className="flex flex-col justify-center border-[1px] pl-3 pr-3 pt-2 pb-2 border-slate-300">
          <h4 className="text-center">Delete Course</h4>
      </div>
    </div>
  );
}

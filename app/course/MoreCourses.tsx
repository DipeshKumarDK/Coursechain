import HomeCourseCard from "@/components/HomeCourseCard";

export default function MoreCourses() {
  return (
    <div className="xl:pl-36 xl:pr-36 lg:pl-24 lg:pr-24 md:pl-12 md:pr-12 sm:pl-8 sm:pr-8 xs:pl-4 xs:pr-4 pl-3 pr-3 pt-10 pb-10 bg-[#04151b] text-slate-100">
      <div className="">
        <h2 className="md:text-2xl text-xl font-semibold">
          More Courses From NF Warrior
        </h2>
        {/* <div className="h-[2px] w-[100px] bg-white mt-3 rounded"></div> */}
        <div className="lg:grid grid-cols-5 hidden gap-[15px] pt-6">
            <HomeCourseCard/>
            <HomeCourseCard/>
            <HomeCourseCard/>
            <HomeCourseCard/>
            <HomeCourseCard/>
        </div>
        <div className="md:grid lg:hidden hidden grid-cols-4 gap-[15px] pt-6">
            <HomeCourseCard/>
            <HomeCourseCard/>
            <HomeCourseCard/>
            <HomeCourseCard/>
        </div>
        <div className="sm:grid md:hidden hidden grid-cols-3 gap-[15px] pt-6">
            <HomeCourseCard/>
            <HomeCourseCard/>
            <HomeCourseCard/>
        </div>
        <div className="xs:grid sm:hidden hidden grid-cols-2 gap-[15px] pt-6">
            <HomeCourseCard/>
            <HomeCourseCard/>
        </div>
        <div className="xs:hidden grid grid-cols-1 pt-6">
            <HomeCourseCard/>
        </div>
      </div>
    </div>
  );
}

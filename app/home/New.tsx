import HomeCourseCard from "@/components/HomeCourseCard";

export default function New () {
  return (
    <div className="bg-[#082b39] text-white pt-2 pb-14 pl-24 pr-24">
        <h2 className="text-3xl font-semibold">Newly Launched Courses</h2>
        {/* <div className="h-[2px] w-[100px] bg-white mt-3 rounded"></div> */}
        <div className="grid grid-cols-5 gap-[20px] pt-6">
            <HomeCourseCard/>
            <HomeCourseCard/>
            <HomeCourseCard/>
            <HomeCourseCard/>
            <HomeCourseCard/>
        </div>
    </div>
  )
}

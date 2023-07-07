import HomeCourseCard from "@/components/HomeCourseCard";

export default function Top () {
  return (
    <div className="bg-[#082b39] text-white pt-12 pb-12 pl-24 pr-24">
        <h2 className="text-3xl font-semibold">Top Trending Courses</h2>
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

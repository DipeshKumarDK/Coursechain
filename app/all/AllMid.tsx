import HomeCourseCard from "@/components/HomeCourseCard";
import IndividualCourse from "@/components/IndividualCourse";

export default function AllMid() {
  return (
    <div className="pl-24 pr-24 pt-16 pb-16 bg-[#082b39] text-white">
      <h2 className="text-3xl font-semibold">Development Courses</h2>
      <div className="h-[3px] bg-white w-[100px] mt-3 rounded"></div>
      <section className="mt-12">
         <h3 className="text-2xl">Courses to get you started</h3>
         <div className="grid grid-cols-5 gap-[20px] pt-6">
            <HomeCourseCard/>
            <HomeCourseCard/>
            <HomeCourseCard/>
            <HomeCourseCard/>
            <HomeCourseCard/>
        </div>
      </section>
      <section className="mt-16">
         <h3 className="text-2xl mb-4">Featured Course</h3>
         <IndividualCourse/>
      </section>
    </div>
  );
}
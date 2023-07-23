import HomeCourseCard from "@/components/HomeCourseCard";
import IndividualCourse from "@/components/IndividualCourse";

export default function AllMid() {
  return (
    <div className="lg:pl-24 lg:pr-24 md:pl-14 md:pr-14 sm:pl-8 sm:pr-8 pl-3 pr-3 md:pt-16 md:pb-16 sm:pt-10 sm:pb-10 pt-8 pb-8 bg-black text-white">
      <h2 className="sm:text-3xl text-2xl font-semibold">Development Courses</h2>
      <div className="h-[3px] bg-white w-[100px] mt-3 rounded"></div>
      <section className="mt-12">
         <h3 className="sm:text-2xl text-xl">Courses to get you started</h3>
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
        <div className="grid sm:hidden xs:grid-cols-2 grid-cols-1 gap-[15px] pt-6">
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
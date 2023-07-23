import InstructorCard from "@/components/InstructorCard";

export default function Instructors() {
  return (
    <div className="lg:pl-24 lg:pr-24 md:pl-14 md:pr-14 sm:pl-8 sm:pr-8 pl-3 pr-3 pt-2 pb-2 md:block hidden bg-black text-white">
        <h3 className="text-2xl">Popular Instructors</h3>
        <div className="xl:grid lg:hidden md:grid xl:grid-cols-4 grid-cols-2 gap-[12px] pt-6">
            <InstructorCard/>
            <InstructorCard/>
            <InstructorCard/>
            <InstructorCard/>
        </div>
        <div className="xl:hidden lg:grid hidden grid-cols-3 gap-[10px] pt-6">
            <InstructorCard/>
            <InstructorCard/>
            <InstructorCard/>
        </div>
    </div>
  );
}
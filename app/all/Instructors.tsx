import InstructorCard from "@/components/InstructorCard";

export default function Instructors() {
  return (
    <div className="pl-24 pr-24 pt-2 pb-2 bg-[#082b39] text-white">
        <h3 className="text-2xl">Popular Instructors</h3>
        <div className="grid grid-cols-4 gap-[20px] pt-6">
            <InstructorCard/>
            <InstructorCard/>
            <InstructorCard/>
            <InstructorCard/>
        </div>
    </div>
  );
}
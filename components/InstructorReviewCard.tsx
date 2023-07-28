import Image from "next/image";
import pic from "../assets/profile.jpg";

export default function InstructorReviewCard() {
  return (
    <div className="pt-4 pb-4 sm:pl-3 pl-1 sm:pr-2 pr-2 border-[1px]  border-slate-600 w-full">
      <section className="flex">
        <Image
          src={pic}
          alt=""
          className="rounded-full h-12 w-12 sm:block hidden"
        />
        <div className="pl-3 flex flex-col justify-center">
          <h3 className="font-semibold">NF Warrior</h3>
          <div className="text-sm text-slate-200">
            ⭐⭐⭐⭐ <span className="ml-1 text-xs">2 weeks ago</span>
          </div>
          <h4 className="sm:text-sm text-xs mt-2">
            This course is absolutely beginner-friendly and easy to understand.
            Clarian, the instructor, provides lucid explanations of the topics,
            which makes the course stand out
          </h4>
        </div>
      </section>
    </div>
  );
}

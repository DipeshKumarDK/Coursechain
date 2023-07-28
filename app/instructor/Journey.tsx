import Image from "next/image";
import pic1 from "../../assets/teach.png"
import pic2 from "../../assets/videos.png"
import pic3 from "../../assets/audience.png"
import pic4 from "../../assets/improve.png"

export default function Instructor() {
  return (
    <div className="pt-8">
      <h3 className="sm:text-2xl text-xl font-semibold">Your Journey As An Instructor</h3>
      <section className="pt-6 grid lg:grid-cols-4 xs:grid-cols-2 gap-[15px]">
        <div className="border-[1px] border-slate-300 sm:pl-3 sm:pr-3 pl-1 pr-1 pt-4 pb-7 rounded">
            <div className="flex justify-center">
                <Image src={pic1} className="h-24 w-24" alt=""/>
            </div>
            <h3 className="font-semibold mt-2 text-center truncate">Create An Engaging Course</h3>
        </div>
        <div className="border-[1px] border-slate-300 sm:pl-3 sm:pr-3 pl-1 pr-1 pt-4 pb-7 rounded">
            <div className="flex justify-center">
                <Image src={pic2} className="h-24 w-24" alt=""/>
            </div>
            <h3 className="font-semibold mt-2 text-center truncate">Start Creating Videos For Your Course </h3>
        </div>
        <div className="border-[1px] border-slate-300 sm:pl-3 sm:pr-3 pl-1 pr-1 pt-4 pb-7 rounded">
            <div className="flex justify-center">
                <Image src={pic3} className="h-24 w-24" alt=""/>
            </div>
            <h3 className="font-semibold mt-2 text-center truncate">Build An Audience For You</h3>
        </div>
        <div className="border-[1px] border-slate-300 sm:pl-3 sm:pr-3 pl-1 pr-1 pt-4 pb-7 rounded">
            <div className="flex justify-center">
                <Image src={pic4} className="h-24 w-24" alt=""/>
            </div>
            <h3 className="font-semibold mt-2 text-center truncate">Continue Improving Your Courses</h3>
        </div>
      </section>
    </div>
  );
}
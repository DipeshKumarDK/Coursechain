import Image from "next/image";
import pic from "../assets/profile.jpg"

export default function InstructorCard() {
    return (
      <div className="border-[0.5px] border-slate-200 p-4 flex">
        <Image src={pic} alt="pro" className="h-16 w-16 rounded-full"/>
        <div className="ml-4">
            <h3 className="font-semibold">Academy by NF Warrior</h3>
            <h5 className="text-xs text-slate-200">Python, Web Development</h5>
            <h4 className="text-sm text-yellow-300 mt-1">4.7 ⭐ Instructor Rating</h4>
            <h5 className="text-xs text-slate-200 mt-1"><span className="text-white text-sm">2403</span> students engaged</h5>
            <h5 className="text-xs text-slate-200 mt-0.5"><span className="text-white text-sm">23</span> courses uploaded</h5>
        </div>
      </div>
    );
  }
import Image from "next/image";
import pic from "../assets/profile.jpg";

export default function CommentCard() {
  return (
    <div className="border-t-[0.5px] border-slate-300 pt-6 pb-6 w-full">
      <section className="flex">
        <Image src={pic} alt="" className="rounded-full h-10 w-10" />
        <div className="pl-3">
          <h3 className="font-semibold text-sm">NF Warrior</h3>
          <h4 className="text-slate-200 text-xs">⭐⭐⭐⭐ 2 weeks ago</h4>
        </div>
      </section>
      <h4 className="sm:text-sm text-xs mt-3">
        This course is absolutely beginner-friendly and easy to understand.
        Clarian, the instructor, provides lucid explanations of the topics,
        which makes the course stand out
      </h4>
    </div>
  );
}

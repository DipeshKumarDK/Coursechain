import Image from "next/image";
import pic from "../assets/profile.jpg";

export default function ReplyCard() {
  return (
    <div className="pt-3 pb-3 w-full">
      <section className="flex">
        <Image src={pic} alt="" className="rounded-full h-10 w-10" />
        <div className="pl-3 flex flex-col justify-center">
          <h3 className="font-semibold">NF Warrior</h3>
        </div>
      </section>
      <h4 className="sm:text-sm text-xs mt-2 w-3/4">
        This course is absolutely beginner-friendly and easy to understand.
        Clarian, the instructor, provides lucid explanations of the topics,
        which makes the course stand out
      </h4>
    </div>
  );
}
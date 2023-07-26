import Image from "next/image";
import pic from "../../assets/hacker.webp"

export default function ProfileImage() {
  return (
    <div className="pt-10 pb-10 lg:w-1/2 md:w-2/3 sm:w-3/4 w-full">
      <h3 className="font-semibold text-xl">Profile Image</h3>
      <h4 className="mt-1 text-sm text-slate-300">Upload your profile image. You can choose to make it publicly visible or not.</h4>
      <div className="p-2 border-[1px] border-slate-300 mt-5">
        <Image src={pic} alt="" className="h-[300px] w-full"/>
      </div>
      <section className="flex mt-6">
        <input type="file" className="pt-2 flex-grow pl-2 pr-2 pb-2 border-[1px] border-slate-300" placeholder="Select an image"/>
        <div className="flex flex-col justify-center bg-[#0a3f52] border-[1px] border-slate-300 pl-3 pr-3">
            <h4 className="text-center">Upload Image</h4>
        </div>
      </section>
      <h3 className="pt-3 pb-3 mt-7 w-[100px] text-center rounded bg-[#0f556e]">
        Save
      </h3>
    </div>
  );
}

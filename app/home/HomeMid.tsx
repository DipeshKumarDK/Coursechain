import pic from "../../assets/homemid.webp"
import Image from "next/image";

export default function HomeMid() {
  return (
    <div className="pt-24 pb-24 pl-52 pr-44 flex bg-[#082b39] text-white">
      <section className="w-1/2 pl-2 pr-2 pt-6 pb-6">
        <h1 className="text-7xl font-semibold">Learn without limits</h1>
        <h3 className="text-xl text-slate-200 mt-4">
          Start, switch, or advance your career with more than 5,800 courses,
          Professional Certificates, and degrees from world-class universities
          and companies.
        </h3>
        <div className="flex mt-5">
           <h2 className="pt-6 pb-6 pl-10 pr-10 bg-[#b1e1f5] text-slate-900 font-semibold rounded">Join For Free</h2>
           <h2 className="pt-6 pb-6 pl-10 pr-10 border-[2px] border-[#b3e2f4] font-semibold rounded ml-2 text-[#c1e9f8]">Try MyCourse For Teaching</h2>
        </div>
      </section>
      <section className="w-1/2 h-full flex justify-center">
         <Image src={pic} className="h-96 w-96" alt="image"/>
      </section>
    </div>
  );
}

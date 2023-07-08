import pic from "../../assets/homemid.webp"
import Image from "next/image";

export default function HomeMid() {
  return (
    <div className="md:pt-24 md:pb-24 sm:pt-20 sm:pb-20 pt-12 pb-12 2xl:pl-44 2xl:pr-40 xl:pl-32 xl:pr-28 lg:pl-10 lg:pr-6 flex bg-[#082b39] text-white">
      <section className="lg:w-1/2 w-full lg:pl-2 lg:pr-2 md:pl-16 md:pr-16 sm:pl-8 sm:pr-8 pl-4 pr-4 pt-6 pb-6">
        <h1 className="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-semibold">Learn without limits</h1>
        <h3 className="md:text-xl sm:text-base text-sm text-slate-200 mt-4">
          Start, switch, or advance your career with more than 5,800 courses,
          Professional Certificates, and degrees from world-class universities
          and companies.
        </h3>
        <div className="flex mt-5">
           <h2 className="xl:pt-6 xl:pb-6 lg:pt-4 lg:pb-4 sm:pt-3 sm:pb-3 pt-1 pb-2 xl:pl-10 xl:pr-10 lg:pl-6 lg:pr-6 sm:pl-5 sm:pr-5 pl-3 pr-3 bg-[#b1e1f5] text-slate-900 font-semibold rounded sm:text-base text-sm">Join For Free</h2>
           <h2 className="xl:pt-6 xl:pb-6 lg:pt-4 lg:pb-4 sm:pt-3 sm:pb-3 pt-1 pb-2 xl:pl-10 xl:pr-10 lg:pl-6 lg:pr-6 sm:pl-5 sm:pr-5 pl-3 pr-3 border-[2px] border-[#b3e2f4] font-semibold rounded ml-2 text-[#c1e9f8] sm:text-base text-sm">Try MyCourse For Teaching</h2>
        </div>
      </section>
      <section className="w-1/2 h-full lg:flex hidden justify-center">
         <Image src={pic} className="h-96 w-96" alt="image"/>
      </section>
    </div>
  );
}

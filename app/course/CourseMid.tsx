import Image from "next/image";
import pic from "../../assets/course.jpg";
import bg from "../../assets/wave.jpg";

export default function CourseMid() {
  return (
    <div className="xl:pl-36 xl:pr-36 lg:pl-24 lg:pr-24 md:pl-3 md:pr-0 sm:pl-20 sm:pr-20 xs:pl-8 xs:pr-8 pl-3 pr-3 flex bg-[#030e13] text-slate-100">
      <div className="w-7/12 pt-8 pb-8 md:flex hidden flex-col justify-center">
        <h2 className="text-3xl font-semibold">
          The Complete Solidity Course - Blockchain - Zero to Expert
        </h2>
        <h4 className="mt-2">
          Master Solidity and Smart Contracts - Blockchain Development: 2022 -
          Programming & Ethereum - Code Along - DApplications
        </h4>
        <h4 className="mt-2 text-sm">
          <span className="text-yellow-300">4 ⭐ out of 5</span>{" "}
          <span className="text-purple-300">(1770 ratings)</span> 2250 students
        </h4>
        <h4 className="mt-2 text-sm">
          <span className="">Created By </span>{" "}
          <span className="text-purple-300 underline">
            NF Warrior, Akki Goblin
          </span>
        </h4>
        <h2 className="mt-2 font-semibold">Course Amount: $235</h2>
        <h2 className="pt-3 pb-3 w-[200px]  text-center border-[1px] border-slate-200 mt-3">
          Buy This Course
        </h2>
      </div>
      <Image
        src={pic}
        alt=""
        className="clip-your-needful-style w-5/12 md:block hidden"
      />
      <div className="md:hidden pt-4 pb-4">
        <Image
          src={pic}
          alt=""
          className="w-full h-64 rounded"
        />
        <div className="pt-4 pb-1 md:flex flex-col justify-center">
          <h2 className="text-2xl font-semibold">
            The Complete Solidity Course - Blockchain - Zero to Expert
          </h2>
          <h4 className="mt-2">
            Master Solidity and Smart Contracts - Blockchain Development: 2022 -
            Programming & Ethereum - Code Along - DApplications
          </h4>
          <h4 className="mt-2 text-sm">
            <span className="text-yellow-300">4 ⭐ out of 5</span>{" "}
            <span className="text-purple-300">(1770 ratings)</span> 2250
            students
          </h4>
          <h4 className="mt-2 text-sm">
            <span className="">Created By </span>{" "}
            <span className="text-purple-300 underline">
              NF Warrior, Akki Goblin
            </span>
          </h4>
          <h2 className="mt-2 font-semibold">Course Amount: $235</h2>
          <h2 className="pt-3 pb-3 text-center border-[1px] border-slate-200 mt-3">
            Buy This Course
          </h2>
        </div>
      </div>
    </div>
  );
}

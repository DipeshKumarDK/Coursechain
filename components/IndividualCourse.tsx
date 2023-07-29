import Image from "next/image";
import pic from "../assets/purple.jpg";
import Link from "next/link";

export default function IndividualCourse() {
  return (
    <Link href={'/course'} className="border-[1px] border-slate-200 md:p-6 p-2 flex md:flex-row flex-col">
      <Image src={pic} alt="/" className="md:w-2/6 w-full h-64" />
      <section className="md:w-3/6 w-full md:pt-0 pt-4 lg:pl-6 md:pl-4 md:pr-4 lg:pr-6 pl-2 pr-2 flex flex-col justify-between">
        <div>
          <h2 className="md:text-2xl sm:text-xl text-lg font-semibold lg:mr-5">
            Discovering Backend BottleNecks, Exploring The Backend
          </h2>
          <h4 className="text-slate-200 text-sm mt-2">
            Harness Chrome DevTools, MITM Proxy, and Wireshark to Pinpoint and
            Resolve Bottlenecks in Your Backend Stack
          </h4>
          <div className="flex mt-2">
            <h4 className="text-slate-200 text-sm">
              By <span className="text-green-300">NF Warrior</span>
            </h4>
            <h4 className="text-slate-200 text-sm ml-3">
              Uploaded: <span className="text-green-300">10 June 2020</span>
            </h4>
          </div>
          <div className="flex mt-2">
            <h4 className="text-slate-200 text-sm">
            <span className="text-purple-300">Total Hours: </span>10
            </h4>
            <h4 className="text-slate-200 text-sm ml-3">
              <span className="text-purple-300">Rating: </span>3 ⭐ out of 5
            </h4>
          </div>
        </div>
        <h3 className="font-semibold text-lg">$ 520</h3>
      </section>
    </Link>
  );
}

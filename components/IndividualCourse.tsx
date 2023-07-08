import Image from "next/image";
import pic from "../assets/purple.jpg";

export default function IndividualCourse() {
  return (
    <div className="border-[1px] border-slate-200 p-6 flex">
      <Image src={pic} alt="/" className="w-2/6 h-64" />
      <section className="w-3/6 pl-6 pr-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold mr-5">
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
    </div>
  );
}

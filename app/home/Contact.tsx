import { AiFillMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function Contact() {
  return (
    <div className="bg-[#020b0e] text-white pt-10 pb-10 pl-64 pr-64 border-b-[1px] border-slate-200">
      <div className="flex pt-2">
        <section className="w-1/2 pr-10">
          <h2 className="text-3xl font-semibold">Having A Doubt?</h2>
          <div className="h-[2px] w-[100px] bg-white mt-3 rounded"></div>
          <h4 className="mt-4 text-slate-200">
            If You Are Having Any Doubt Related to Any Course, Please Put It
            Down Here. We Will Reach To You As Soon As Possible.
          </h4>
          <div className="flex mt-6 mb-1">
            <AiFillMail className="h-10 w-10 p-1 rounded-full bg-white text-slate-800" />
            <h3 className="ml-4 mt-[6px]">
              <span className="text-green-300">Email: </span>
              kingofkosli@gmail.com
            </h3>
          </div>
          <div className="flex mt-5 mb-1">
            <AiFillLinkedin className="h-10 w-10 p-1 rounded-full bg-white text-slate-800" />
            <h3 className="ml-4 mt-[6px]">
              <span className="text-green-300">LinkedIn: </span>
              https://linkedin.com/ber345pxpe
            </h3>
          </div>
          <div className="flex mt-5 mb-1">
            <AiFillInstagram className="h-10 w-10 p-1 rounded-full bg-white text-slate-800" />
            <h3 className="ml-4 mt-[6px]">
              <span className="text-green-300">Instagram: </span>
              kal.se_pdhai.shuru
            </h3>
          </div>
          <div className="flex mt-5 mb-1">
            <AiFillTwitterCircle className="h-10 w-10 p-1 rounded-full bg-white text-slate-800" />
            <h3 className="ml-4 mt-[6px]">
              <span className="text-green-300">Twitter: </span>
              https://twitter.com/kok
            </h3>
          </div>
        </section>
        <section className="w-1/2 pl-2">
          <input
            className="bg-[#020b0e] border-[1px] border-slate-300 text-slate-200 placeholder:text-slate-400 p-2 rounded w-full h-[45px]"
            placeholder="Your name"
            type="text"
          />
          <input
            className="bg-[#020b0e] border-[1px] border-slate-300 text-slate-200 placeholder:text-slate-400 p-2 rounded w-full h-[45px] mt-3"
            placeholder="Enter your email"
            type="email"
          />
          <textarea
            rows={7}
            className="bg-[#020b0e] border-[1px] border-slate-300 text-slate-200 placeholder:text-slate-400 p-2 rounded w-full mt-3"
            placeholder="Elaborate your concern"
          />
          <h2 className="w-24 pt-2 pb-2 bg-green-700 text-white text-center rounded-md mt-2 border-[1px] border-slate-300 cursor-pointer">Submit</h2>
        </section>
      </div>
    </div>
  );
}

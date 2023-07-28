import { IoIosArrowDropdown } from "react-icons/io";

export default function Price() {
  return (
    <div className="">
      <section className="md:pt-10 md:pb-10 pt-6 pb-6 md:pl-8 md:pr-8 sm:pl-5 sm:pr-5 pl-2 pr-2 border-b-[1px] border-slate-400">
        <h2 className="font-semibold text-2xl">Pricing</h2>
      </section>
      <section className="md:pt-14 md:pb-12 sm:pt-8 sm:pb-8 pt-6 pb-6 md:pl-8 md:pr-8 sm:pl-5 sm:pr-5 pl-2 pr-2">
        <h2 className="text-lg font-semibold">Course Price</h2>
        <h3 className="text-slate-300 mt-3">
          Please enter a fair price for your course below and click 'Save'.
          If you intend to offer your course for free, the total length of video
          content must be less than 2 hours.
        </h3>
        <div className="md:pt-10 pt-6 pb-4">
          <section className="">
            <h4 className="font-semibold">Enter A Fair Price</h4>
            <div className="mt-3 flex">
            <div className="flex border-[1px] border-slate-300 pt-1 pb-1 pl-1 pr-1 md:w-1/3 w-2/3 justify-between">
              <div className="flex flex-col w-full justify-center">
                <input
                  type="number"
                  className="placeholder:text-slate-400 p-2 w-full bg-[#04151b] focus:outline-0"
                  placeholder="Enter Price"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center bg-purple-600 md:w-1/6 w-2/5 rounded ml-5">
                <h3 className="text-center font-semibold">Save</h3>
            </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

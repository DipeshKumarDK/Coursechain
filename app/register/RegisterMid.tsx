import bg from "../../assets/bg1.png";

export default function RegisterMid() {
  return (
    <div
      className="bg-black text-white 2xl:pl-96 2xl:pr-96 xl:pl-64 xl:pr-64 lg:pl-44 lg:pr-44 md:pl-28 md:pr-28 sm:pl-10 sm:pr-10 pl-2 pr-2 pt-16 pb-16"
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
      }}
    >
      <h2 className="font-semibold sm:text-2xl text-xl">
        Start Learning With Tutors' Hub
      </h2>
      <form className="mt-6">
        <h4 className="font-semibold mb-1">Full Name* </h4>
        <div className="border-[1px] border-slate-200 p-3">
          <input
            type="text"
            className="w-full bg-transparent sm:pt-2 sm:pb-2 pt-1 pb-1 placeholder:text-slate-200 placeholder:text-sm focus:outline-0"
            placeholder="Enter your Name *"
          />
        </div>
        <h4 className="font-semibold mb-1 mt-5">Your Email* </h4>
        <div className="border-[1px] border-slate-200 p-3">
          <input
            type="email"
            className="w-full bg-transparent sm:pt-2 sm:pb-2 pt-1 pb-1 placeholder:text-slate-200 placeholder:text-sm focus:outline-0"
            placeholder="Enter active mail *"
          />
        </div>
        <h4 className="font-semibold mb-1 mt-5">Password* </h4>
        <div className="border-[1px] border-slate-200 p-3">
          <input
            type="password"
            className="w-full bg-transparent sm:pt-2 sm:pb-2 pt-1 pb-1 placeholder:text-slate-200 placeholder:text-sm focus:outline-0"
            placeholder="Create a password *"
          />
        </div>
        <h4 className="font-semibold mb-1 mt-5">Confirm Password* </h4>
        <div className="border-[1px] border-slate-200 p-3">
          <input
            type="password"
            className="w-full bg-transparent sm:pt-2 sm:pb-2 pt-1 pb-1 placeholder:text-slate-200 placeholder:text-sm focus:outline-0"
            placeholder="Re-enter Password *"
          />
        </div>
      </form>
      <h3 className="pt-3 pb-3 mt-7 w-[100px] text-center rounded bg-[#0f556e]">
        Continue
      </h3>
      <h2 className="mt-5 text-sm">Already have an account? <span className="underline text-blue-400">Login</span></h2>
    </div>
  );
}

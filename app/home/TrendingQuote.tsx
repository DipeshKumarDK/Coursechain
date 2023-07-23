export default function TrendingQuote() {
    return (
      <div className="bg-[#030e13] text-slate-100 text-center pt-6 pb-6 pl-3 pr-3 md:text-xl sm:text-lg font-semibold">
        <div className="bg-gradient-to-r bg-clip-text text-transparent from-[#c2e1eb] via-[#978be8] to-[#f460d9] animate-myColor">
          <span className="text-green-300">Have a look</span> on the {" "}
          <span className="text-green-300">top trending</span> and
          <span className="text-green-300">newly launched</span> courses.
        </div>
      </div>
    );
  }
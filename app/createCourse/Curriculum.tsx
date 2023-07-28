export default function Curriculum() {
  return (
    <div className="">
      <section className="pt-10 pb-10 pl-8 pr-8 border-b-[1px] border-slate-400">
        <h2 className="font-semibold text-2xl">Curriculum</h2>
      </section>
      <section className="pt-14 pb-12 pl-8 pr-8">
        <h3 className="text-slate-300">
          Start putting together your course by creating sections, lectures and
          practice. Start putting together your course by creating sections,
          lectures and practice activities. Use your course outline to structure
          your content and label your sections and lectures clearly. If you’re
          intending to offer your course for free, the total length of video
          content must be less than 2 hours.
        </h3>
        <div className="pt-12 pb-4">
            <section className="p-4 border-[1px] border-slate-300">
               <h3 className="font-semibold text-lg">Section 1</h3>
               <h4 className="mt-5 text-sm font-semibold">Section Title*</h4>
               <input type="text" className="placeholder:text-slate-400 w-full p-2 bg-[#04151b] border-[1px] border-slate-300 mt-2" placeholder="Enter Section Title*"/>
               <h4 className="mt-5 text-sm font-semibold">Section Video Or Article*</h4>
               <input type="file" className="placeholder:text-slate-400 w-full p-2 bg-[#04151b] border-[1px] border-slate-300 mt-2" placeholder="Section Video or article*"/>
               <h4 className="mt-5 text-sm font-semibold">Section Description*</h4>
               <textarea rows={5} className="placeholder:text-slate-400 w-full p-2 bg-[#04151b] border-[1px] border-slate-300 mt-2" placeholder="Enter Section Description*"/>
            </section>
        </div>
        <h3 className="w-[200px] font-semibold pt-3 pb-3 border-[1px] border-slate-300 text-center">+ Add Section</h3>
      </section>
    </div>
  );
}

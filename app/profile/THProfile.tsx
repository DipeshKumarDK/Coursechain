export default function THProfile() {
  return (
    <form className="pt-10 pb-10">
      <div className="grid xs:grid-cols-2 grid-cols-1 sm:gap-[25px] gap-[15px]">
        <section>
          <h4 className="font-semibold mb-1">Full Name</h4>
          <div className="border-[1px] border-slate-200 pt-1 pb-1 pl-2 pr-2">
            <input
              type="text"
              className="w-full bg-transparent sm:pt-2 sm:pb-2 pt-1 pb-1 placeholder:text-slate-200 placeholder:text-sm focus:outline-0"
              placeholder="NF Warrior"
            />
          </div>
        </section>
        <section>
          <h4 className="font-semibold mb-1">Website Url</h4>
          <div className="border-[1px] border-slate-200 pt-1 pb-1 pl-2 pr-2">
            <input
              type="text"
              className="w-full bg-transparent sm:pt-2 sm:pb-2 pt-1 pb-1 placeholder:text-slate-200 placeholder:text-sm focus:outline-0"
              placeholder="Url"
            />
          </div>
        </section>
        <section>
          <h4 className="font-semibold mb-1">Headline</h4>
          <div className="border-[1px] border-slate-200 pt-1 pb-1 pl-2 pr-2">
            <input
              type="text"
              className="w-full bg-transparent sm:pt-2 sm:pb-2 pt-1 pb-1 placeholder:text-slate-200 placeholder:text-sm focus:outline-0"
              placeholder="Student At Tutors' Hub"
            />
          </div>
        </section>
        <section>
          <h4 className="font-semibold mb-1">Twitter</h4>
          <div className="border-[1px] border-slate-200 pt-1 pb-1 pl-2 pr-2">
            <input
              type="text"
              className="w-full bg-transparent sm:pt-2 sm:pb-2 pt-1 pb-1 placeholder:text-slate-200 placeholder:text-sm focus:outline-0"
              placeholder="http://twitter.com"
            />
          </div>
        </section>
        <section>
          <h4 className="font-semibold mb-1">LinkedIn</h4>
          <div className="border-[1px] border-slate-200 pt-1 pb-1 pl-2 pr-2">
            <input
              type="text"
              className="w-full bg-transparent sm:pt-2 sm:pb-2 pt-1 pb-1 placeholder:text-slate-200 placeholder:text-sm focus:outline-0"
              placeholder="http://linkedin.com"
            />
          </div>
        </section>
        <section>
          <h4 className="font-semibold mb-1">Youtube</h4>
          <div className="border-[1px] border-slate-200 pt-1 pb-1 pl-2 pr-2">
            <input
              type="text"
              className="w-full bg-transparent sm:pt-2 sm:pb-2 pt-1 pb-1 placeholder:text-slate-200 placeholder:text-sm focus:outline-0"
              placeholder="http://youtube.com"
            />
          </div>
        </section>
      </div>
      <section className="mt-[25px]">
        <h4 className="font-semibold mb-1">Biography</h4>
        <div className="border-[1px] border-slate-200 pt-1 pb-1 pl-2 pr-2">
          <textarea
            rows={3}
            className="w-full bg-transparent sm:pt-2 sm:pb-2 pt-1 pb-1 placeholder:text-slate-200 placeholder:text-sm focus:outline-0"
            placeholder="A brief description of you"
          />
        </div>
      </section>
      <h3 className="pt-3 pb-3 mt-7 w-[100px] text-center rounded bg-[#0f556e]">
        Save
      </h3>
    </form>
  );
}

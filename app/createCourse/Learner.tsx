export default function Learner() {
  return (
    <div className="">
      <section className="md:pt-10 md:pb-10 pt-6 pb-6 md:pl-8 pl-3 md:pr-8 pr-3 border-b-[1px] border-slate-400"> 
        <h3 className="font-semibold text-2xl">Intended Learners</h3>
      </section>
      <div className="pt-10 pb-10 md:pl-8 lg:pr-0 md:pr-8 sm:pl-4 sm:pr-4 pl-2 pr-2 lg:w-5/6 w-full">
        <h4 className="text-slate-300 text-[0.9rem]">
          The following descriptions will be publicly visible on your Course
          Landing Page and will have a direct impact on your course performance.
          These descriptions will help learners decide if your course is right
          for them.
        </h4>
        <h3 className="font-semibold mt-12">
          What will students learn in your course?
        </h3>
        <h4 className="text-slate-300 text-[0.9rem] mt-[5px]">
          You must enter at least 4 learning objectives or outcomes that
          learners can expect to achieve after completing your course.
        </h4>
        <section className="pt-5 pb-5">
          <input
            type="text"
            className="lg:w-5/6 w-full p-3 focus:outline-0 bg-[#04151b] border-[1px] border-slate-300 placeholder:text-slate-400 mt-2 mb-2"
            placeholder="Example: Defines the roles and responsities of a project manager."
          />
          <input
            type="text"
            className="lg:w-5/6 w-full p-3 focus:outline-0 bg-[#04151b] border-[1px] border-slate-300 placeholder:text-slate-400 mt-2 mb-2"
            placeholder="Example: Defines the roles and responsities of a project manager."
          />
          <input
            type="text"
            className="lg:w-5/6 w-full p-3 focus:outline-0 bg-[#04151b] border-[1px] border-slate-300 placeholder:text-slate-400 mt-2 mb-2"
            placeholder="Example: Defines the roles and responsities of a project manager."
          />
          <input
            type="text"
            className="lg:w-5/6 w-full p-3 focus:outline-0 bg-[#04151b] border-[1px] border-slate-300 placeholder:text-slate-400 mt-2 mb-2"
            placeholder="Example: Defines the roles and responsities of a project manager."
          />
          <h4 className="mt-3 font-semibold text-blue-500">
            + Add more to your course
          </h4>
        </section>
        <h3 className="font-semibold mt-8">
          What are the requirements or prerequisites for taking your course?
        </h3>
        <h4 className="text-slate-300 text-[0.9rem] mt-[5px]">
          List the required skills, experience, tools or equipment learners
          should have prior to taking your course. If there are no requirements,
          use this space as an opportunity to lower the barrier for beginners.
        </h4>
        <section className="pt-5 pb-5">
          <input
            type="text"
            className="lg:w-5/6 w-full p-3 focus:outline-0 bg-[#04151b] border-[1px] border-slate-300 placeholder:text-slate-400 mt-2 mb-2"
            placeholder="Example: No prior knowledge needed. You can start as a beginner."
          />
          <h4 className="mt-3 font-semibold text-blue-500">
            + Add more to your course
          </h4>
        </section>
      </div>
    </div>
  );
}

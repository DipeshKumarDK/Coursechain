import Learner from "./Learner";

export default function CreateCourseMid() {
  return (
    <div className="pt-6 pb-6 pl-24 pr-24 flex gap-[40px] justify-between bg-[#04151b] text-white">
      <section className="pt-2 pb-2 w-[300px]">
        <div className="pt-8 pb-8">
            <h3 className="font-semibold text-lg pl-6">Plan Your Course</h3>
            <h4 className="mt-4 pt-2 pb-2 pl-6 text-[0.9rem] border-l-[5px] border-green-400 text-green-400">Intended Learners</h4>
            <h4 className="pt-2 pb-2 pl-6 text-[0.9rem]">Course Structure</h4>
            <h4 className="pt-2 pb-2 pl-6 text-[0.9rem]">Setup And Demo Video</h4>
        </div>
        <div className="pt-8 pb-8">
            <h3 className="font-semibold text-lg pl-6">Create your content</h3>
            <h4 className="mt-4 pt-2 pb-2 pl-6 text-[0.9rem]">Film And Edit</h4>
            <h4 className="pt-2 pb-2 pl-6 text-[0.9rem]">Curriculum</h4>
        </div>
        <div className="pt-8 pb-8">
            <h3 className="font-semibold text-lg pl-6">Plan Your Course</h3>
            <h4 className="mt-4 pt-2 pb-2 pl-6 text-[0.9rem]">Course Landing Page</h4>
            <h4 className="pt-2 pb-2 pl-6 text-[0.9rem]">Pricing</h4>
            <h4 className="pt-2 pb-2 pl-6 text-[0.9rem]">Course Messages</h4>
        </div>
        <h3 className="bg-purple-600 rounded pt-3 pb-3 text-center mt-4">Finish</h3>
      </section>
      <section className="border-[1px] border-slate-400 shadow-slate-500 flex-grow min-h-[100vh]">
        <Learner/>
      </section>
    </div>
  );
}
import CommentCard from "@/components/CommentCard";

export default function Comments() {
  return (
    <div className="xl:pl-36 xl:pr-36 lg:pl-24 lg:pr-24 md:pl-12 md:pr-12 sm:pl-8 sm:pr-8 xs:pl-4 xs:pr-4 pl-3 pr-3 pt-7 pb-4 flex bg-[#04151b] text-slate-100">
      <div className="">
        <h2 className="text-2xl font-semibold">
        ⭐ 4.5 Course Ratings
        </h2> 
        <section className="grid sm:grid-cols-2 grid-cols-1 sm:gap-x-[20px] mt-7">
          <CommentCard/>
          <CommentCard/>
          <CommentCard/>
          <CommentCard/>
        </section>
        <h3 className="pt-2 pb-2 w-[130px] text-center sm:text-base text-sm border-[1px] border-slate-200 cursor-pointer">Show More</h3>
      </div>
    </div>
  );
}
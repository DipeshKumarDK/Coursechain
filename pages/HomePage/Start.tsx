import { FaUserGraduate } from 'react-icons/fa';

export default function Start() {
  return (
    <div className="bg-[#09384b] text-white pt-12 pb-12 pl-24 pr-24">
        <h2 className="text-3xl font-semibold">Let's Start Learning, NF Warrior</h2>
        <div className="h-[2px] w-[100px] bg-white mt-3 rounded"></div>

        <section className="grid grid-cols-3 gap-[20px] pt-10">
          <div className='flex border-[1px] border-slate-200 p-4'>
            <div className='h-full flex flex-col justify-center'>
            <FaUserGraduate className='h-16 w-16'/>
            </div>
            <div className='pl-4 pr-4'>
              <h3 className='text-lg font-semibold'>Explore Trending Courses</h3>
              <h4 className='text-slate-200 mt-1 text-sm'>Go through a bunch of interesting courses and find the best one for you.</h4>
              <h3 className='underline mt-1 text-blue-400 cursor-pointer'>Explore</h3>
            </div>
          </div>
          <div className='flex border-[1px] border-slate-200 p-4'>
            <div className='h-full flex flex-col justify-center'>
            <FaUserGraduate className='h-16 w-16'/>
            </div>
            <div className='pl-4 pr-4'>
              <h3 className='text-lg font-semibold'>Explore Trending Courses</h3>
              <h4 className='text-slate-200 mt-1 text-sm'>Go through a bunch of interesting courses and find the best one for you.</h4>
              <h3 className='underline mt-1 text-blue-400 cursor-pointer'>Explore</h3>
            </div>
          </div>
          <div className='flex border-[1px] border-slate-200 p-4'>
            <div className='h-full flex flex-col justify-center'>
            <FaUserGraduate className='h-16 w-16'/>
            </div>
            <div className='pl-4 pr-4'>
              <h3 className='text-lg font-semibold'>Explore Trending Courses</h3>
              <h4 className='text-slate-200 mt-1 text-sm'>Go through a bunch of interesting courses and find the best one for you.</h4>
              <h3 className='underline mt-1 text-blue-400 cursor-pointer'>Explore</h3>
            </div>
          </div>
        </section>
    </div>
  );
}

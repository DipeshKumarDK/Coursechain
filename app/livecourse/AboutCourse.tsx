import Image from "next/image";
import pic from "../../assets/profile.jpg";

export default function AboutCourse() {
  let arr = [
    "Solidity",
    "Hardhat",
    "Truffle",
    "Blockchain",
    "Web3.js",
    "Ether.js",
    "Figma",
  ];

  return (
    <section className="pt-3 pb-3">
      <div className="pt-8 pb-8 border-b-[0.5px] border-slate-500 pl-5 pr-5">
        <h2 className="sm:text-xl text-lg font-semibold">About This Course</h2>
        <h4 className="text-slate-200 sm:text-[1rem] text-[0.85rem] mt-3 sm:w-2/3">
          Master DApp Development - Smart Contracts - Solidity, Web3, React,
          Mocha, Ethereum Blockchain Programming for Front-end
        </h4>
      </div>
      <div className="pt-8 pb-8 flex sm:flex-row flex-col border-b-[0.5px] pl-5 pr-12 border-slate-500">
        <section className="sm:w-1/3 w-full">
          <h3 className="font-semibold sm:text-lg">Some Stats</h3>
        </section>
        <div className="sm:w-2/3 w-full xs:grid-cols-2 grid-cols-1 sm:justify-start justify-between">
        <section className="">
          <h3 className="sm:mt-0 mt-1 sm:text-base text-sm">Students: 202013</h3>
          <h3 className="sm:mt-2 mt-1 sm:text-base text-sm">Language: English</h3>
        </section>
        <section className="">
          <h3 className="sm:mt-0 mt-1 sm:text-base text-sm">Ratings: 4.5</h3>
          <h3 className="sm:mt-2 mt-1 sm:text-base text-sm">Total Lectures: 12</h3>
        </section>
        </div>
      </div>
      <div className="pt-8 pb-8 border-b-[0.5px] pl-5 pr-12 border-slate-500">
        <section className="w-full">
          <h3 className="font-semibold sm:text-lg">Description</h3>
        </section>
        <section className="w-full mt-2">
          <h3 className=" sm:text-[1rem] text-[0.85rem]">
            Become a Complete DApp Developer by learning the best in demand
            skills taught by renown engineer and full stack developer Clarian
            North. Join in early on an exciting technology implementing global
            changes to multiple industries and businesses. This is the course
            you've been looking for to code along and become a modern DApp
            developer in 2022. It does so much more than just provide you with
            the basics to building smart contracts. This course covers
            everything you need to know to work on professional projects: from
            absolute no starting knowledge to producing a final project you can
            be proud to put on your resume. There are many courses out there on
            the internet and it's easy to get lost in the sea of information, so
            here is why this course will accelerate your learning path towards
            truly leveling up your skills:
          </h3>
          <h3 className="mt-5 sm:text-[1rem] text-[0.85rem]">
            This is the definitive DApp Developer Bootcamp course. After
            completing the final project, you will have extensively gone through
            the following tools and technologies:
          </h3>
          <ul className={"list-disc list-inside mt-2"}>
            {arr.map((item) => {
              return <li className="mt-1 sm:text-[1rem] text-[0.85rem]">{item}</li>;
            })}
          </ul>
          <h3 className="mt-5 sm:text-[1rem] text-[0.85rem]">
            I have put into this course the best techniques and tools that I’ve
            used throughout my entire professional career. There are countless
            tutorials and master classes out there and it is very easy to get
            lost on a forum wasting time reading over differing opinions
            endlessly. But none of that gives you a true learning experience to
            understanding what’s going on under the hood and being able to
            succeed not just in the course, but in your projects and career
            thereafter. This course is the solution for those who are stuck
            trying to figure out how to get things to work and overwhelmed with
            tutorials as well as those who want to get into modern tech, but
            aren’t sure where to start and don’t have the money to spend. This
            course embodies all of my years of experiences including the best
            things that work as well as the trappings to avoid, so you don’t
            have to waste hours upon hours for nothing going back and instead
            just focus on moving forward and staying on track with the most
            modern tools available.
          </h3>
          <h3 className="mt-5 font-semibold">
            Are there any course requirements or prerequisites?
          </h3>
          <h3 className="mt-2 sm:text-[1rem] text-[0.85rem]">No requirements.</h3>
          <h3 className="mt-5 font-semibold">Who this course is for?</h3>
          <ul className={"list-disc list-inside mt-2"}>
            {arr.map((item) => {
              return <li className="mt-1 sm:text-[1rem] text-[0.85rem]">{item}</li>;
            })}
          </ul>
        </section>
      </div>
      <div className="pt-8 pb-8 border-b-[0.5px] pl-5 pr-12 border-slate-500">
        <section className="w-full">
          <section className="flex mt-4">
            <div className="">
              <Image src={pic} className="h-32 w-32 rounded-full" alt="" />
            </div>
            <div className="ml-3 flex flex-col justify-center pb-1">
              <h3 className="font-semibold sm:text-lg">NF Warrior</h3>
              <h3 className="mt-1 text-sm">Renowned Tech turned Instructor</h3>
            </div>
          </section>
          <h3 className="mt-2 sm:text-[1rem] text-[0.85rem]">
            Clarian is the instructor with recognized industry certification and
            the resume to back it. His students have gone on and continue
            working and contributing to some of the biggest and most reputable
            Production companies in the world like Universal, Google, Amazon,
            Warner, The BBC, Spotify, Landr, Splice etc… Clarian is the CEO of
            Orbital LLC, a consultations and tech development interacting
            worldwide including leading Silicon Valley companies as well as top
            40 blockchain protocols amongst Solana and NEAR. Senior project
            engineer with over 90K enrollments on coding courses and training
            modules worldwide - enrollments from Google and Amazon developers
            and contractors. International work experience from New York to
            Berlin, Clarian (alias of Maurice K) has contributed to a number of
            viral streams and grown a unique digital imprint in over 80
            countries world wide. Clarian has been featured in Rolling Stone,
            Billboard, Guardian, Yahoo Finance, Bloomberg, Clash, Broadway, New
            York & Vulture, Vice among many others as an innovator and
            trailblazer in both audio engineering and tech. Having taken a
            signature approach to production design which has launched and
            contributed to multiple independent and major outfits and projects,
            Clarian has worked and contributed for world leading brands from
            Universal to Emirates, ambisonic cutting edge VR interoperability
            for Guy Laliberte's PY1 and his own EPs have been featured on
            namestay labels such as Kompakt, based In Germany.
          </h3>
        </section>
      </div>
      
    </section>
  );
}

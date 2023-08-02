"use client"

import React , {useEffect} from 'react'
import pic from "../assets/profile.jpg";
import Image from "next/image";
import Link from "next/link";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

export default function HomeCourseCard() {

  // const { ref, inView } = useInView();
  // const animation = useAnimation();

  // useEffect(() => {
  //   if (inView) {
  //     animation.start({
  //       rotateY: 0,
  //       transition: {
  //         duration: 2,
  //         type: "spring",
  //       },
  //     });
  //   }
  //   if (!inView) {
  //     animation.start({
  //       rotateY: 180,
  //     });
  //   }
  // }, [inView]);

  return (
    <div className="bg-[#09384b] text-white border-[1px] border-slate-500 rounded">
      <Link href={"/course"}>
        <Image src={pic} alt="Image" className="w-full h-44 rounded-t" />
        <div className="pl-3 pr-3 pt-4 pb-4">
          <h2 className="text font-semibold leading-5">
            Getting Started With Web3 Development
          </h2>
          <h4 className="mt-1 text-xs text-slate-200">NF Warrior, SE Syrax</h4>
          <h3 className="mt-1 text-sm font-semibold">$25</h3>
        </div>
      </Link>
    </div>
  );
}

"use client";

import React, { useEffect } from "react";
import HomeCategory from "@/components/HomeCategory";
import bg from '../../assets/bg1.png'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Explore () {

  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        rotateX: 0,
        transition: {
          duration: 5,
          type: "spring",
        },
      });
    }
    if (!inView) {
      animation.start({
        rotateX: 720,
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className="bg-[#04151b] text-white pt-8 pb-10 xl:pl-24 xl:pr-24 lg:pl-16 lg:pr-16 md:pl-12 md:pr-12 sm:pl-6 sm:pr-6 pl-3 pr-3" style={{
      backgroundImage: `url(${bg.src})`,
      width: '100%',
      height: '100%',
    }}>
        <motion.h2 animate={animation} className="md:text-3xl text-2xl font-semibold text-center">Explore The Categories</motion.h2>
        <div className="flex justify-center">
          <div className="h-[2px] w-[100px] bg-white mt-3 rounded"></div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-[10px] gap-x-[15px] pt-10">
            <HomeCategory title={"Development"} number={200} image={1}/>
            <HomeCategory title={"Business"} number={340} image={2}/>
            <HomeCategory title={"Finance & Accounting"} number={450} image={3}/>
            <HomeCategory title={"IT & Software"} number={120} image={4}/>
            <HomeCategory title={"Design"} number={870} image={5}/>
            <HomeCategory title={"Marketing"} number={2000} image={6}/>
            <HomeCategory title={"Personal Development"} number={1230} image={7}/>
            <HomeCategory title={"Math & Logic"} number={234} image={8}/>
            <HomeCategory title={"Health & Fitness"} number={2332} image={9}/>
            <HomeCategory title={"Music"} number={2325} image={10}/>
        </div>
    </div>
  )
}
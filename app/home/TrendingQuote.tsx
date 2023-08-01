"use client"

import React , {useEffect} from 'react'
import { motion , useAnimation } from "framer-motion"
import {useInView} from "react-intersection-observer";

export default function TrendingQuote() {

  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 7,
          type: "spring",
        },
      }); 
    }
    if (!inView) {
      animation.start({
        opacity:0.1,
      });
    }
  }, [inView]);

    return (
      <div ref={ref} className="bg-[#030e13] text-slate-100 text-center pt-6 pb-6 pl-3 pr-3 md:text-xl sm:text-lg font-semibold">
        <motion.div animate={animation} className="bg-gradient-to-r bg-clip-text text-transparent from-[#c2e1eb] via-[#978be8] to-[#f460d9] animate-myColor">
          <span className="text-green-300">Have a look</span> on the {" "}
          <span className="text-green-300">top trending</span> and {" "}
          <span className="text-green-300">newly launched</span> courses.
        </motion.div>
      </div>
    );
  }
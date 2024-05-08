"use client";

import Brain from "@/components/brain";
import {
  easeInOut,
  easeOut,
  motion,
  useInView,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();

  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const journeyRef = useRef();

  const isJourneyRefInView = useInView(journeyRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      v
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 text-white lg:w-2/3 lg:pr-0 xl:w-1/2">
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p>
              lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
              amet lorem Ipsum dolor sit amet, consectet tempor inv sapien sed
              diam non pro
            </p>
            <span>
              lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
              amet
            </span>
            <div className=""></div>
            <motion.div
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "20px" }}
              transition={{ repeat: Infinity, duration: 1, ease: easeOut }}
            >
              <img
                src="/svg2.png"
                alt=""
                width={30}
                height={30}
                className="rounded-full"
              />
            </motion.div>
          </div>
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            <motion.div
              initial={{ x: "-700px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="skill-list flex gap-4 flex-wrap"
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-[#2bffbc] text-black hover:bg-[#3d2070] hover:text-white">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-[#2bffbc] text-black hover:bg-[#3d2070] hover:text-white">
                ReactJs
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-[#2bffbc] text-black hover:bg-[#3d2070] hover:text-white">
                NodeJs
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-[#2bffbc] text-black hover:bg-[#3d2070] hover:text-white">
                Tailwind CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-[#2bffbc] text-black hover:bg-[#3d2070] hover:text-white">
                MongoDb
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-[#2bffbc] text-black hover:bg-[#3d2070] hover:text-white">
                Next.JS
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 1, ease: easeInOut }}
            >
              <img
                src="/svg2.png"
                alt=""
                width={30}
                height={30}
                className="rounded-full"
              />
            </motion.div>
          </div>
          <div
            className="flex flex-col gap-12 justify-center text-white pb-48"
            ref={journeyRef}
          >
            <motion.h1
              initial={{ x: "-700px" }}
              animate={isJourneyRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-bold text-2xl"
            >
              JOURNEY
            </motion.h1>
            <motion.div className="">
              <motion.div
                initial={{ x: "-700px" }}
                animate={isJourneyRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.6 }}
                className=" flex justify-between h-48"
              >
                <div className="w-1/3 ">
                  <div className="bg-white font-semibold rounded-b-lg rounded-s-lg text-black">
                    Aspiring Web Developer
                  </div>
                  <div className="p-3 text-sm italic">
                    Frequently looking for Web Developer Position
                  </div>
                </div>
                {/* LINK */}
                <div className="w-1/6 ">
                  <div className="w-1 h-full bg-gray-600 rounded relative ">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3 "></div>
              </motion.div>
              <motion.div
                initial={{ x: "-900px" }}
                animate={isJourneyRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.8 }}
                className=" flex justify-between h-48"
              >
                <div className="w-1/3 "></div>
                {/* LINK */}
                <div className="w-1/6 ">
                  <div className="w-1 h-full bg-gray-600 rounded relative ">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3 ">
                  {" "}
                  <div className="bg-white font-semibold rounded-b-lg rounded-s-lg text-black">
                    Aspiring Web Developer
                  </div>
                  <div className="p-3 text-sm italic">
                    Frequently looking for Web Developer Position
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: "-700px" }}
                animate={isJourneyRefInView ? { x: 0 } : {}}
                transition={{ delay: 1 }}
                className=" flex justify-between h-48"
              >
                <div className="w-1/3 ">
                  {" "}
                  <div className="bg-white font-semibold rounded-b-lg rounded-s-lg text-black">
                    Aspiring Web Developer
                  </div>
                  <div className="p-3 text-sm italic">
                    Frequently looking for Web Developer Position
                  </div>
                </div>
                {/* LINK */}
                <div className="w-1/6 ">
                  <div className="w-1 h-full bg-gray-600 rounded relative ">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3 "> </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30 overflow-hidden">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;

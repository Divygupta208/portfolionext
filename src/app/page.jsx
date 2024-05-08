"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

const Homepage = () => {
  const images = [
    "/hello.png",
    "/hey.png",
    "you there_.png",
    "hey how you been.png",
  ];
  const transitionDuration = 2;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, transitionDuration * 1000);

    return () => clearInterval(interval);
  }, []);

  const router = useRouter();

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="h-full w-full  relative">
          {images.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt=""
              className="h-full w-full object-contain absolute top-0 lg:-left-[10vw] left-0 transition-opacity duration-1000"
              style={{
                opacity: index === currentImageIndex ? 1 : 0,
                zIndex: index === currentImageIndex ? 1 : 0,
              }}
            />
          ))}
        </div>

        <div className="h-1/2 lg:h-full lg:w-1/2 text-white flex flex-col gap-8 items-center justify-center">
          <h1 className="md:text-4xl font-bold lg:text-6xl text-2xl">
            Crafting Digital Experiences , Designing Tomorrow
          </h1>
          <p className="md:text-xl text-sm">
            Welcome, to my digital canvas. I am an aspiring Web Developer , my
            portfolio showcase my commitment to excellence.
          </p>

          <div className="flex gap-4">
            <button
              className="md:p-4 p-2 rounded-lg ring-2 ring-black bg-green-400 "
              onClick={() => router.push("/portfolio")}
            >
              My Works
            </button>
            <button
              className="md:p-4 p-2 rounded-lg ring-2 ring-black bg-violet-600 "
              onClick={() => router.push("/contact")}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;

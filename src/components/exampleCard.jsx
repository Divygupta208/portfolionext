import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Example = ({ itemImage, itemLink }) => {
  return (
    <div className="grid w-full place-content-center  px-4 py-12 text-slate-900">
      <TiltCard itemImage={itemImage} itemLink={itemLink} />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ itemImage, itemLink }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-32 w-60 md:h-52 md:w-[45vw] lg:w-[39vw] lg:h-80 rounded-xl bg-gradient-to-br from-slate-800 to-slate-600"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-black shadow-2xl"
      >
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          <img src={itemImage} width={800} />
        </p>
        <Link href={itemLink} className="flex justify-center">
          <button className="p-1 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-violet-800 text-white font-semibold rounded">
            See Demo
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Example;

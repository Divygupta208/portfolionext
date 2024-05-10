"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/contact", title: "Contact" },
  { url: "/portfolio", title: "Portfolio" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "#FFF",
    },
  };
  const centerVariant = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "#FFF",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div className="hidden md:flex gap-4 text-white w-1/3 ">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      <div className="lg:flex xl:w-1/3 xl:justify-center xl:mr-56">
        <Link
          href={"/"}
          className="text-sm bg-[#5e12b5] rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1 ml-2">DG</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      <div className=" hidden md:flex gap-4">
        <Link href={"https://www.linkedin.com/in/divy-gupta-939187190/"}>
          <Image
            src="/linkedin.png"
            alt=""
            width={24}
            height={24}
            className="bg-white rounded-full"
          />
        </Link>
        <Link href={"https://github.com/Divygupta208"}>
          <Image
            src="/github.png"
            alt=""
            width={24}
            height={24}
            className="bg-white rounded-full"
          />
        </Link>
        <Link href={"#"}>
          <Image
            src="/instagram.png"
            alt=""
            width={24}
            height={24}
            className="bg-white rounded-full"
          />
        </Link>
      </div>
      <div className="md:hidden">
        <button
          className="w-8 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={topVariant}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={centerVariant}
            className="w-10 h-1 bg-white rounded"
          ></motion.div>
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={bottomVariant}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center z-50 justify-center gap-8 text-4xl"
          >
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link href={link.url} key={link.title}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

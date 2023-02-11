import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="./pic.png"
        className="mt-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB04]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I am currently a student pursuing a Bachelor of Technology degree in
          Information Technology from an engineering college. My passion for
          coding has driven me to develop a deep interest in computer
          programming. Throughout my studies, I have had the opportunity to
          delve into various aspects of computer science and engineering,
          including algorithms, data structures, software development, and web
          development. I am constantly striving to improve my skills and
          knowledge, taking on new coding projects as a way to challenge myself
          and grow as a software engineer. My ultimate goal is to become a
          well-rounded individual in the field of technology and to make a
          meaningful contribution to the industry through my work.
        </p>
      </div>
    </motion.div>
  );
}

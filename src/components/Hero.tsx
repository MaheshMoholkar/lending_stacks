"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";
import { SlideUp } from "../animations/animate";

function Hero() {
  return (
    <section>
      <div className="relative z-0 flex flex-col justify-center items-center text-center h-[350px] text-white bg-gradient-to-r from-black from-0% to-secondary to-95%">
        <motion.h1
          variants={SlideUp(0.2, 100)}
          initial="initial"
          animate="animate"
          className="text-4xl md:text-6xl text-gray-300 mb-4"
        >
          Simplify Lending:
        </motion.h1>
        <motion.h2
          variants={SlideUp(0.4, 100)}
          initial="initial"
          animate="animate"
          className="text-4xl flex-wrap md:text-6xl text-gray-300 mb-8"
        >
          Innovative Lending Marketplace
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 mt-4 md:gap-20">
          <Button delay={1} text="Contact Us" />
          <Button delay={1} text="Apply" />
        </div>
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          src="hero-bg.jpg"
          alt="hero-bg"
          className="absolute -z-10 bg-cover h-full top-0 right-0 md:top-auto md:right-0 md:bottom-0 md:w-2/5 max-w-full"
        />
      </div>
    </section>
  );
}

export default Hero;

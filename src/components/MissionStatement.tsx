"use client";

import { motion } from "framer-motion";
import { SlideUp } from "../animations/animate";

function MissionStatement() {
  return (
    <section className="py-10 md:py-20">
      <motion.div
        variants={SlideUp(0.8, 200)}
        initial="initial"
        animate="animate"
        className="container mx-auto px-4"
      >
        <div className="bg-gray-100 p-8 md:p-12 rounded-3xl shadow-md w-4/5 md:1/2 lg:w-1/3 mx-auto text-center">
          <p className="text-lg md:text-xl leading-none font-semibold text-gray-600">
            Lending Stacks offers nationwide lending solutions. Our mission is
            to empower borrowers or brokers by providing a one-stop platform for
            accessing multiple solutions.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default MissionStatement;

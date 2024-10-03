"use client";

import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../animations/animate";

function CustomerSegments() {
  const segments = [
    {
      title: "Customers",
      text: "Unlock Multiple Lending Solutions with a Tap! Choose your preferred lenders based on soft quotes.",
      img: "customers.png",
      imgAlt: "customers",
    },
    {
      title: "Brokers",
      text: "Effortless Loan Closures nationwide with Our CRM/PRM Solutions and Loan Marketplace.",
      img: "brokers.png",
      imgAlt: "brokers",
    },
    {
      title: "Lenders",
      text: "Access qualified leads nationwide and triple your funded loan amount.",
      img: "lenders.png",
      imgAlt: "lenders",
    },
  ];

  return (
    <section className="py-20">
      <div className="flex flex-col items-center space-y-12 md:space-y-24">
        {segments.map((segment, index) => (
          <div
            key={segment.title}
            className={`flex flex-col-reverse ${
              index % 2 === 1
                ? "md:flex-row-reverse md:gap-48"
                : "md:flex-row md:space-x-16 md:gap-24"
            } items-center`}
          >
            <motion.div
              variants={SlideRight(index / 5, 50)}
              initial="initial"
              whileInView="animate"
              className="flex flex-col items-center md:items-start max-w-72"
            >
              <p className="text-xl md:text-3xl font-bold text-gray-600 mb-4 mt-6 md:mt-0">
                {segment.title}:
              </p>
              <p className="text-lg md:text-2xl text-center md:text-start text-gray-600">
                {segment.text}
              </p>
            </motion.div>
            <motion.img
              variants={SlideLeft(index / 5, 50)}
              initial="initial"
              whileInView="animate"
              src={segment.img}
              alt={segment.imgAlt}
              className="w-32 md:w-64"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomerSegments;

"use client";

import { SlideLeft } from "@/animations/animate";
import { motion } from "framer-motion";
import Image from "next/image";

const loanTypes = [
  { name: "Hard Money", icon: "/hardmoney.svg" },
  { name: "Residential", icon: "/residential.svg" },
  { name: "Commercial", icon: "/commercial.svg" },
  { name: "Equipment", icon: "/equipment.svg" },
  { name: "Construction", icon: "/construction.svg" },
  { name: "Line of Credit", icon: "/lineofcredit.svg" },
  { name: "SBA/Business", icon: "/sba.svg" },
];

function Features() {
  const itemCount = loanTypes.length;

  const getGridClasses = () => {
    if (itemCount <= 3) {
      return "grid grid-cols-3";
    } else {
      return "grid grid-cols-3 md:grid-cols-4 lg:flex";
    }
  };

  const getItemClasses = (index: number) => {
    if (itemCount === 1) {
      return "col-start-2 col-span-1";
    } else if (itemCount === 2) {
      return index === 0 ? "col-start-1 col-span-1" : "col-start-3 col-span-1";
    } else if (itemCount === 3) {
      return "col-span-1";
    } else if (itemCount % 3 === 1 && index === itemCount - 1) {
      return "col-start-2 col-span-1 md:col-start-auto lg:col-start-auto";
    } else if (itemCount % 3 === 2 && index >= itemCount - 2) {
      return index === itemCount - 2
        ? "col-start-1 col-span-1 md:col-start-auto lg:col-start-auto"
        : "col-start-3 col-span-1 md:col-start-auto lg:col-start-auto";
    } else {
      return "col-span-1";
    }
  };

  return (
    <section>
      <div className="flex flex-col mx-auto bg-box w-fit py-12 px-12">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-600 mb-12">
          Loan Type
        </h2>
        <div className={`${getGridClasses()} gap-7 md:gap-14`}>
          {loanTypes.map((loan, index) => (
            <motion.div
              key={index}
              variants={SlideLeft(index / 4, 50)}
              initial="initial"
              whileInView="animate"
              className={`flex flex-col items-center ${getItemClasses(index)}`}
            >
              <div className="flex items-center justify-center w-20 h-20 md:w-16 md:h-16">
                <Image src={loan.icon} alt={loan.name} height={56} width={56} />
              </div>
              <p className="text-xs text-gray-600 font-semibold text-center">
                {loan.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

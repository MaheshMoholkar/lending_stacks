"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { SlideDown, SlideLeft, SlideRight } from "../animations/animate";
import { useRouter } from "next/navigation";

const Header = ({ styles }: { styles: string }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    "About Us",
    "Borrower",
    "Referrals",
    "Brokers",
    "Lenders",
    "Funded Loans",
    "Resources",
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="relative">
      <div className={`z-10 text-white px-4 md:px-20 pt-4 ${styles}`}>
        <div className="container mx-auto flex justify-between items-center">
          <motion.img
            onClick={() => router.push("")}
            variants={SlideRight(0.2, 100)}
            initial="initial"
            whileInView="animate"
            src="logo.png"
            alt="logo"
            className="w-32 max-w-full cursor-pointer"
          />
          <nav className="hidden md:flex space-x-4">
            {navLinks.map((link, index) => (
              <motion.a
                variants={SlideDown(index / 10, 50)}
                initial="initial"
                whileInView="animate"
                key={link}
                href="#"
                className="hover:text-gray-300"
              >
                {link}
              </motion.a>
            ))}
          </nav>
          <motion.button
            variants={SlideLeft(0.2, 15)}
            initial="initial"
            whileInView="animate"
            className="md:hidden"
            onClick={toggleMenu}
          >
            <Menu width={32} />
          </motion.button>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-80 z-20 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMenu}
        ></div>

        <div
          className={`fixed z-30 top-0 right-0 w-full max-w-xs bg-black text-white h-full transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4">
            <motion.img
              variants={SlideDown(0.2, 50)}
              initial="initial"
              whileInView="animate"
              src="logo.png"
              alt="logo"
              className="w-32 max-w-full"
            />
            <motion.button
              variants={SlideDown(0.4, 50)}
              initial="initial"
              whileInView="animate"
              onClick={toggleMenu}
              className="text-white"
            >
              <X width={32} />
            </motion.button>
          </div>
          <nav className="flex flex-col space-y-8 px-4 py-4">
            {navLinks.map((link, index) => (
              <motion.a
                variants={SlideLeft(index / 10, 50)}
                initial="initial"
                whileInView="animate"
                key={link}
                href="#"
                className="pl-10 hover:text-gray-300"
              >
                {link}
              </motion.a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

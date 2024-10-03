"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { SlideDown, SlideUp } from "../animations/animate";

const Footer = ({ styles }: { styles: string }) => {
  const contactInfo = [
    {
      type: "Mail",
      icon: Mail,
      info: "jay@lendingstacks.com",
      link: "mailto:jay@lendingstacks.com",
    },
    {
      type: "Mail",
      icon: Mail,
      info: "jennifer@lendingstakcs.com",
      link: "mailto:jennifer@lendingstacks.com",
    },
    {
      type: "Phone",
      icon: Phone,
      info: "425 683 8393",
      link: "tel:425 683 8393",
    },
  ];

  const sections = [
    {
      title: "Let's Start",
      items: ["Customers", "Referral Partners", "Brokers", "Lenders"],
    },
    {
      title: "Resources",
      items: [
        "Accounting",
        "Construction Contractors",
        "Realtors",
        "Merchants",
        "Insurance",
        "Payroll",
      ],
    },
    {
      title: "Contact Us",
      items: ["Apply", "Contact Request"],
    },
  ];

  return (
    <footer className={`text-white p-10 ${styles}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row">
          {/* Logo and Contact Info */}
          <div className="flex flex-col space-y-4 ml-4 md:ml-0 md:items-center md:w-1/4">
            <motion.img
              variants={SlideDown(0.2, 50)}
              initial="initial"
              whileInView="animate"
              src="/logo.png"
              alt="Lending Stacks"
              className="w-32"
            />
            <div className="space-y-2">
              {contactInfo.map(({ icon: Icon, info, link }, index) => (
                <motion.p
                  variants={SlideUp(index / 3, 50)}
                  initial="initial"
                  whileInView="animate"
                  key={index}
                  className="flex items-center"
                >
                  <Icon className="mr-2" size={16} />
                  <a href={link}>{info}</a>
                </motion.p>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="grid grid-cols-2 gap-4 md:flex md:flex-row justify-center md:space-y-0 md:space-x-20 lg:space-x-32 md:w-3/4">
            {sections.map((section, index) => (
              <div key={index} className="flex flex-col space-y-4 ml-4 md:ml-0">
                <motion.h3
                  variants={SlideDown(0.2, 50)}
                  initial="initial"
                  whileInView="animate"
                  className="text-2xl font-semibold mb-4"
                >
                  {section.title}
                </motion.h3>
                <div className="flex flex-col space-y-1 font-semibold">
                  {section.items.map((item, idx) => (
                    <motion.a
                      variants={SlideUp(idx / 3, 20)}
                      initial="initial"
                      whileInView="animate"
                      href={item.replace(" ", "-").toLowerCase()}
                      key={idx}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

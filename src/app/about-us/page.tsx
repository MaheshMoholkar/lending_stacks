import React from "react";
import ContactForm from "@/components/ContactForm";

function AboutUs() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left half - Information */}
      <div className="lg:w-1/2 h-fit p-8 md:p-16 lg:p-24 flex justify-center">
        <div className="p-6 md:p-12 bg-gradient-to-r from-zinc-300 from-0% to-white to-95% rounded-4xl">
          <h3 className="text-neutral-500 font-bold text-lg md:text-2xl lg:text-4xl text-center mb-8">
            Your Success, Our Mission
          </h3>
          <div className="flex flex-col px-4 md:px-12 leading-none justify-items-center text-sm md:text-lg text-neutral-500 font-bold text-start space-y-2 md:space-y-6">
            Lending Stacks is a leading commercial loan brokerage firm dedicated
            to connecting borrowers and brokers with the most suitable lenders.
            <p className="mt-2">
              We leverage cutting-edge technology to streamline the loan
              process, ensuring that our clients receive the most accurate and
              competitive terms available.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:w-1/2">
        <ContactForm />
      </div>
    </div>
  );
}

export default AboutUs;

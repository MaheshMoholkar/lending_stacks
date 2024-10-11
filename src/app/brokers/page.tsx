import React from "react";
import ContactForm from "@/components/ContactForm";

function Brokers() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left half - Information */}
      <div className="lg:w-1/2 h-fit p-8 md:p-16 lg:p-24 flex justify-center">
        <div className="p-6 md:p-12 bg-gradient-to-r from-zinc-300 from-0% to-white to-95% rounded-4xl">
          <h3 className="text-neutral-500 font-bold text-lg md:text-2xl lg:text-4xl text-center mb-8">
            Steamlined Loans Requests and Transparent Princing and terms.
          </h3>
          <div className="flex flex-col px-4 md:px-12 leading-none justify-items-center text-sm md:text-lg text-neutral-500 font-bold text-start space-y-2 md:space-y-6">
            At Lending Stacks, we&apos;re revolutionizing the lending landscape
            for brokers, Out platform offers a seamless experience, allowing
            brokers to submit loan requests efficiently per customer and track
            loan status.
            <p className="mt-2">
              But that&apos;s not all-we go beyond by providing direct access to
              eligible lenders for each deal. Brokers can connect directly with
              lenders that offer best terms and pricing.
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

export default Brokers;

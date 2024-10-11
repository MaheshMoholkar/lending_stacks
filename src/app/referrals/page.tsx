import React from "react";
import ContactForm from "@/components/ContactForm";

function Lenders() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left half - Information */}
      <div className="lg:w-1/2 h-fit p-8 md:p-16 lg:p-24 flex justify-center">
        <div className="p-6 md:p-12 bg-gradient-to-r from-zinc-300 from-0% to-white to-95% rounded-4xl">
          <h3 className="text-neutral-500 font-bold text-lg md:text-2xl lg:text-4xl text-center mb-8">
            Join Our Referral Program: Earn Rewards for Helping Clients!
          </h3>
          <div className="flex flex-col px-4 md:px-12 leading-none justify-items-center text-sm md:text-lg text-neutral-500 font-bold text-start space-y-2 md:space-y-6">
            At Lending Stacks, we value collaboration. If you&apos;re a
            professional assisting clients in finding optimal financing
            solutions, we invite you to be part of our referral network.{" "}
            <p className="mt-2">
              When you refer clients to us, you&apos;ll not only help them
              secure the best financing but also earn rewards for your valuable
              partnership. Let&apos;s empower clients together!
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

export default Lenders;

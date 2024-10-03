import ContactForm from "@/components/ContactForm";

function ContactUs() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left half - Information */}
      <div className="lg:w-1/2 h-fit p-8 md:p-16 lg:p-24 flex justify-center">
        <div className="p-6 md:p-12 bg-gradient-to-r from-zinc-300 from-0% to-white to-95% rounded-4xl">
          <h3 className="text-neutral-500 font-bold text-lg md:text-2xl lg:text-4xl text-center mb-8">
            Smart Financing Choices for Your Financial Growth
          </h3>
          <div className="flex flex-col px-4 md:px-12 leading-none justify-items-center text-sm md:text-lg  text-neutral-500 font-bold text-start space-y-2 md:space-y-6">
            <p>
              Lending Stacks is a trusted partner in financial empowerment. We
              understand that every financial journey is unique, which is why we
              offer tailored solutions for our clients.
            </p>
            <p>
              From competitive loan options to expert guidance, we&apos;re here
              to stack the odds in your favor. Let&apos;s build your financial
              success!
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

export default ContactUs;

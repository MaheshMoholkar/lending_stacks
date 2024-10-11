import Button from "./ui/Button";

function Hero() {
  return (
    <section>
      <div className="relative z-0 flex flex-col justify-center items-center text-center h-[350px] text-white bg-gradient-to-r from-black from-0% to-secondary to-95%">
        <h1 className="text-4xl md:text-6xl text-gray-300 mb-4">
          Simplify Lending:
        </h1>
        <h2 className="text-4xl flex-wrap md:text-6xl text-gray-300 mb-8">
          Innovative Lending Marketplace
        </h2>
        <div className="flex flex-col md:flex-row gap-8 mt-4 md:gap-20">
          <Button delay={1} text="Contact Us" />
          <Button delay={1} text="Apply" />
        </div>
        <img
          src="hero-bg.jpg"
          alt="hero-bg"
          className="absolute -z-10 opacity-10 bg-cover h-full top-0 right-0 md:top-auto md:right-0 md:bottom-0 md:w-2/5 max-w-full"
        />
      </div>
    </section>
  );
}

export default Hero;

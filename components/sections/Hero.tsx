import { TypewriterEffect } from "../Typewriter";
import { WavyBackground } from "../WavyBackground";

const Hero = () => {
  const words = [

    {
      text: "I'm",
    },
    {
      text: "a",
    },
    {
      text: "Full",
    },
    {
      text: "Stack",
    },
    {
      text: "Developer.",
      className: "dark:text-black-500",
    },
  ];


  return (
    // <section id="hero" className="h-screen flex flex-col items-center justify-center bg-primary text-center text-dark">

    //   <h1 className="text-6xl text-dark font-bold mb-4">Hi, I am Saad</h1>
    //   <TypewriterEffect words={words} />




    // </section>


    <WavyBackground id='hero' className="max-w-4xl mx-auto pb-0">
      <p className="text-4xl lg:text-7xl text-dark font-bold inter-var text-center p-4">
        {/* <TypewriterEffect words={firstLine} /> */}
        Hi, I&apos;m Saad
      </p>
      {/* <p className="text-base md:text-lg mt-4 text-dark font-normal inter-var text-center"> */}
      <TypewriterEffect words={words} />
      {/* </p> */}
    </WavyBackground>
  );
};

export default Hero;


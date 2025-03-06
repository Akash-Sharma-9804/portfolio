import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ParticlesComponent from "./TsParticle";



const Hero = () => {

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
    

   
      <ParticlesComponent />
      
      <div className="  h-screen w-full " id="hero">
        <div className="flex mt-10 justify-center">
          <div className="center p-10  pointer-events-none mt-20 text-center items-center gap-8 flex flex-col w-full">
            <motion.h1  whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:0.8}} className="text-5xl font-bold bg-gradient-to-r from-zinc-500 to-sky-700 bg-clip-text text-transparent">
              HELLO WORLD.
            </motion.h1>
            <motion.h1  whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1.5}} className="text-4xl flex  flex-wrap gap-2 text-white justify-center  ">
              {" "}
              Hii I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                {" "}
                Akash Sharma
              </span>{" "}
            </motion.h1>
            <h1 className="text-3xl text-white font-semibold">I'm a</h1>
            <div>
              <TypeAnimation
                className="text-3xl bg-gradient-to-r from-zinc-500 to-sky-700 bg-clip-text text-transparent font-bold "
                sequence={[
                  // Same substring at the start will only be typed once, initially

                  "Web Developer",
                  1000,
                  "Designer",
                  1000,
                  "Programmer",
                  1000,
                  "Freelancer",
                  1000,
                ]}
                speed={50}
                //   style={{ fontSize: '20px' }}
                repeat={Infinity}
              />
            </div>
            <button onClick={scrollToContact}
        className="pointer-events-auto p-3 bg-[radial-gradient(circle_500px_at_50%_300px,#3e3e3e,#000)] cursor-pointer  w-fit rounded-md mt-5 font-bold text-white inline-block">
        {" "}
        Hire Me{" "}
      </button>
          
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Hero;

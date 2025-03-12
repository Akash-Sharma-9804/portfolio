import React from "react";
import profilepic from "../assets/profilepic.png";
import { animate, motion } from "framer-motion";
import { Link } from "react-router-dom";

const iconvariation= (duration)=>({
        initial:{y:5},
        animate:{
            y:[5, -5],
            transition:{
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType:"reverse",
            },
        },
});
const cvDownload = () => {
  // Path to my CV file
  const cvUrl = './cv/Resume of Akash Sharma.pdf';


  const link = document.createElement('a');
  link.href = cvUrl;
  link.download = 'Resume of Akash Sharma.pdf'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const About = () => {
  const openGithub = () => {
    window.open("https://github.com/Akash-Sharma-9804", "_blank"); 
  };
  return (
    <div className="flex flex-col mb-8 justify-center items-center  text-white" id="about" >
      <h1  className="text-4xl mt-16 border-slate-400 border-l-0 border-r-0 border-t-0 border-4 bg-gradient-to-r from-zinc-500 to-sky-700 bg-clip-text text-transparent  font-bold  py-5 my-5 ">
        About Me
      </h1>
      <div className="sm:flex grid w-4/5 justify-around mt-5 sm:p-5 gap-10">
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        className="left flex mt-5 flex-col gap-10">
          <img className="h-64 w-96 rounded-md" src={profilepic} alt="" />
          <button className="bg-[radial-gradient(circle_500px_at_50%_100px,#3e3e3e,transparent)] text-white cursor-pointer hover:scale-105  font-semibold p-3    rounded-md" onClick={cvDownload}>
            Download Resume
          </button>
          <div className="icons flex gap-10 ml-6 mb-4">
                <motion.img 
                variants={iconvariation(3)}
                initial= "initial"
                animate="animate"
                className="h-8 w-8 hover:scale-105 cursor-pointer " src="./images/instagram.png" alt="" />
                <motion.img  variants={iconvariation(5)}
                initial= "initial"
                animate="animate"
                 className="h-8 w-8 hover:scale-125 cursor-pointer " src="./images/facebook.png" alt="" />
                <motion.img  variants={iconvariation(3)}
                initial= "initial"
                animate="animate" className="h-8 w-8 hover:scale-105 cursor-pointer " src="./images/gmail.png" alt="" />
                <motion.img  variants={iconvariation(5)}
                initial= "initial"
                animate="animate" className="h-8 w-8 hover:scale-105 cursor-pointer " src="./images/whatsapp.png" alt="" />
          </div>
        </motion.div>
        <motion.div 
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:100}}
         transition={{duration:1}}
        className="right w-4/5 row-start-1 flex flex-col ml-7 sm:ml-0 gap-10">
          <p className="text-wrap text-justify text-white">
            {" "}
            Passionate and driven, I am a Web Developer skilled in crafting dynamic, user-friendly
websites and applications. With a strong foundation in HTML, CSS, and JavaScript, I
specialize in building intuitive, user-focused interfaces. My prociency with modern tools
like React, Tailwind CSS, and Express empowers me to create visually stunning and
highly interactive frontends that captivate users.
On the backend, I excel in developing scalable and secure solutions using Node.js and
MongoDB, ensuring robust performance for web applications. Skilled in Git for seamless
collaboration and Python for versatile problem-solving, I blend functionality with design
to craft intuitive, impactful web experiences.
Inspired by minimalist yet innovative approaches, I aim to blend functionality with design
and trends to deliver intuitive user experiences. Whether crafting dynamic applications or
collaborating on impactful projects, I strive to create digital experiences that resonate and
leave a lasting impact.
Ready to turn your Vision into Reality? Let's collaborate to create a website that's not
only functional but also engaging and user-friendly!
          </p>
          <div>
            <motion.ul  whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:50}}
       transition={{duration:0.5}}>
              <li  whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:50}}
       transition={{duration:0.5}} className="flex gap-5  items-center">
                <span className="text-lg font-bold text-teal-300 gap-5">
                  Name :
                </span>
                Akash Sharma
              </li>
              <li className="flex gap-5  items-center">
                <span className="text-lg font-bold text-teal-300 gap-5">
                  Country:
                </span>
                India
              </li>
              <li className="flex gap-5  items-center">
                <span className="text-lg font-bold text-teal-300 gap-5">
                  EMAIl:
                </span>
                akashsharma9804@gmail.com
              </li>
              <li className="flex gap-5  items-center">
                <span className="text-lg font-bold text-teal-300 gap-5" >
                  Github :
                </span>
                <div className="relative group">

                <img className="h-8 w-8 hover:scale-110 cursor-pointer " onClick={openGithub} src="./images/github.png" alt="" />
                <div
        className="absolute -right-11 top-0 p-1 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
        <p className="text-white text-xs   font-semibold">Github</p>
      </div>
        </div>
              </li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
      <motion.hr
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:50}}
       transition={{duration:0.5}}
      className="h-px w-2/3 mb-2 z-10 my-8 bg-gray-200 border-0  " />
    </div>
  );
};

export default About;

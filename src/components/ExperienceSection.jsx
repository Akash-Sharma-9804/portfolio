import React from "react";
import { motion } from "framer-motion";

const iconvariation = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const experiences = [
  {
    role: "Web-Designing",
    company: " Hewlett-Packard HP",
    duration: "2019 - 2020",
    description: "Front-End Development using HTML,CSS, JAVASCRIPT..",
  },
  {
    role: "B.Sc Computer Science ",
    company: "Calcutta University",
    duration: "2020 - 2023",
    description: "",
  },
  {
    role: "Web-Developer",
    company: " Unified Mentor ",
    duration: "2024 - 2024",
    description: "1 month online internship for Frontend Development.",
  },
  {
    role: "MERN STACK  Development",
    company: "",
    duration: "2024 - 2024",
    description:
      "I have learned the MERN stack, which includes MongoDB for database management, Express.js for backend frameworks, React for building dynamic user interfaces, and Node.js for server-side scripting. ",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-16  mx-10 " id="education">
      <div className="container mx-auto">
        <h2 className="text-center mt-5 text-4xl underline-offset-8 underline decoration-slate-600 bg-gradient-to-r from-zinc-500 to-sky-700 bg-clip-text text-transparent font-bold mb-12">
          Education
        </h2>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          className="text-center">
          <span className="inline-block bg-gray-200 px-4 py-2 rounded-full text-gray-700 font-semibold text-sm">
            WORK EXPERIENCE
          </span>
        </motion.div>

        <div className="relative mt-12">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-800 sm:bg-gray-300"></div>

          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative sm:flex items-center ${
                  index % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row"
                }`}>
                <div className="w-1/2"></div>

                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 1.5 }}
                  className="sm:w-1/3  text-center">
                  <div className="p-6 mx-5 bg-[radial-gradient(circle_500px_at_50%_300px,#3e3e3e,#000)] sm:bg-[radial-gradient(circle_500px_at_50%_300px,#3e3e3e,transparent)] text-white shadow-lg rounded-lg">
                    <h3 className="text-xl font-bold">{experience.role}</h3>
                    <p className="text-gray-500">
                      {experience.company} - {experience.duration}
                    </p>
                    <p className="text-zinc-100 mt-2">
                      {experience.description}
                    </p>
                  </div>
                </motion.div>

                <div className="absolute -top-4 sm:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 w-6 sm:w-12 h-6 sm:h-12 rounded-full flex items-center justify-center">
                  <div className="bg-white  w-3 sm:w-6 h-3 sm:h-6 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <motion.hr
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="h-px w-2/3  mx-auto z-10 my-10 bg-gray-200 border-0  "
        />
      </div>
      <div className="flex flex-col justify-center items-center ">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="text-4xl p-2 my-10 bg-gradient-to-r from-zinc-500 to-sky-700 bg-clip-text text-transparent font-bold  ">
          Technologies
        </motion.h1>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="sm:flex  grid grid-flow-col gap-2 sm:gap-5 rounded-md bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] p-5   sm:p-10">
          <div className="relative group">
            <motion.img
              variants={iconvariation(3)}
              initial="initial"
              animate="animate"
              className="h-10 w-10 cursor-pointer"
              src="./images/html.png"
              alt=""
            />
            <div className="absolute -top-6 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white p-1 text-xs font-semibold">HTML</p>
            </div>
          </div>
          <div className="relative group">
          <motion.img
            variants={iconvariation(6)}
            initial="initial"
            animate="animate"
            className="h-10 w-10 cursor-pointer"
            src="./images/css.png"
            alt=""
          />
           <div className="absolute -top-6 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white p-1 text-xs font-semibold">CSS</p>
            </div>

            </div>
            <div className="relative group">
          <motion.img
            variants={iconvariation(3)}
            initial="initial"
            animate="animate"
            className="h-10 w-10 cursor-pointer"
            src="./images/nodejs.png"
            alt=""
          />
           <div className="absolute -top-6 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white p-1 text-xs font-semibold">NODE Js.</p>
            </div>

            </div>
            <div className="relative group">
          <motion.img
            variants={iconvariation(6)}
            initial="initial"
            animate="animate"
            className="h-10 w-10 cursor-pointer"
            src="./images/javascript.png"
            alt=""
          />
           <div className="absolute -top-6 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white p-1 text-xs font-semibold">JavaScript</p>
            </div>

            </div>
          <div className="relative group">
          <motion.img
            variants={iconvariation(3)}
            initial="initial"
            animate="animate"
            className="h-10 w-10 cursor-pointer"
            src="./images/python.png"
            alt=""
          />
           <div className="absolute -top-6 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white p-1 text-xs font-semibold">Python</p>
            </div>

            </div>
            <div className="relative group">
          <motion.img
            variants={iconvariation(6)}
            initial="initial"
            animate="animate"
            className="h-10 w-10 cursor-pointer"
            src="./images/react.png"
            alt=""
          />
           <div className="absolute -top-6 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white p-1 text-xs font-semibold">React</p>
            </div>

            </div>
            <div className="relative group">
          <motion.img
            variants={iconvariation(3)}
            initial="initial"
            animate="animate"
            className="h-10 w-10 cursor-pointer"
            src="./images/mongodb1.png"
            alt=""
          />
           <div className="absolute -top-6 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white p-1 text-xs font-semibold">MongoDb</p>
            </div>

            </div>
            <div className="relative group">
          <motion.img
            variants={iconvariation(6)}
            initial="initial"
            animate="animate"
            className="h-10 w-10 cursor-pointer"
            src="./images/github.png"
            alt=""
          />
           <div className="absolute -top-6 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white p-1 text-xs font-semibold">Github</p>
            </div>

            </div>
        </motion.div>
      </div>
      <motion.hr
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="h-px w-2/3  mx-auto z-10 my-10 bg-gray-200 border-0  "
      />
    </section>
  );
};

export default ExperienceSection;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const project = [
  {
    id: "1",
    title: "Netflix-Clone",
    img: "./images/netflix.png",
    skill: " HTML, CSS , React,Node JS & Mongo DB",
    link: "https://netflix-clone-three-chi-72.vercel.app",
    desc: "A full MERN-stack Project. Created a Netflix-Clone using  HTML, CSS , React,Node JS & Mongo DB for the front-end and backends..",
  },
  {
    id: "2",
    title: "Fiverr-Clone",
    img: "./images/fiverr.png",
    skill: " HTML, CSS , React,Node JS & Mongo DB",
    link: "https://gorgeous-pithivier-3060a5.netlify.app",
    desc: "A full MERN-stack Project. Created a Fiverr-Clone using  HTML, CSS , React,Node JS & Mongo DB for the front-end and backends..",
  },
   {
    id: "3",
    title: "SwiftCart",
    img: "./images/SwiftCart.png",
    skill: " HTML, CSS , React",
    link: "https://swift-cart-flax.vercel.app/",
    desc: " Developed a E-commerse website with react and tailwind and used FakeStoreApi for database for products.",
  },
  {
    id: "4",
    title: "Zomato-UI",
    img: "./images/Zomato.png",
    skill: " HTML, CSS , React",
    link: "https://akash-sharma-9804.github.io/Zomato-clone-React/",
    desc: "A full working Zomato UI clone. It includes features like a responsive homepage showcasing restaurants, restaurant details pages, dynamic filters. Built with React for the frontend.",
  },
  {
    id: "5",
    title: "Weather-App",
    img: "./images/Wetherapp.png",
    skill: " JavaScript, HTML, and CSS",
    link: "https://akash-sharma-9804.github.io/Weather-app/",
    desc: " Developed a web app to track global weather using JavaScript, HTML, and CSS Integrated Open Weather APIs for real-time weather data",
  },
];


const openGithub = () => {
  window.open("https://github.com/Akash-Sharma-9804", "_blank"); // Replace with your desired URL
};
const Projects = () => {
  return (
    <div className="my-4 p-5 flex flex-col justify-center items-center" id="project">
      <h1 className="text-4xl p-2 mt-16 border-slate-400 border-l-0 border-r-0 border-t-0 border-4 mb-10 bg-gradient-to-r from-zinc-500 to-sky-700 bg-clip-text text-transparent font-bold   ">
        Projects
      </h1>
      <div className="sm:flex grid grid-flow-row flex-wrap gap-5 justify-center items-center ">
        {project.map((items) => {
          return (
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1 }}
              key={items.id}
              className="rounded-md bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] text-white p-5 w-80  sm:w-[500px] ">
              <div className="flex flex-col ">
                <img
                  className="h-72  w-full  rounded-lg"
                  src={items.img}
                  alt={items.title}
                />
                <div className="flex flex-col mt-2 gap-5">
                  <span className="text-2xl font-bold text-center bg-gradient-to-r from-zinc-500 to-sky-700 bg-clip-text text-transparent">
                    {items.title}
                  </span>
                  <span>Made using : {items.skill}</span>
                  <span className="text-gray-500 text-justify">
                    {items.desc}
                  </span>
                  {/* <Link to={items.link}> View Live Page</Link> */}
                  <a
                    className="p-2 text-center   hover:text-green-600 bg-slate-600 rounded-md font-bold"
                    href={items.link} target="_blank"
                    rel="noopener noreferrer">
                      
                    View Live Page
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-5 my-10 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] p-5 rounded-md">
        <h1 className="text-xl font-bold text-slate-100">
          Visit My Page :{" "}
        </h1>
        <div className="relative group">

        <img
          className="h-10 w-10 hover:scale-110 cursor-pointer"
          src="./images/github.png"
          alt=""
          onClick={openGithub}
          />
        <div
        className="absolute -top-10   p-2 w-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
        <p className="text-white text-xs   font-semibold">github.com/Akash-Sharma-9804</p>
      </div>
        </div>
      </motion.div>
      <motion.hr
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="h-px w-2/3  mx-auto z-10 my-10 bg-gray-200 border-0  " 
      />
    </div>
  );
};

export default Projects;

import React from "react";

import { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    const formData = new FormData(event.target);

    formData.append("access_key", "7c75a889-3493-46ba-82f1-a8b674c301a8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div
      className=" bg-[url('./images/bg.jpg')] bg-cover bg-center   bg-repeat sm:h-screen  max-w-screen-2xl flex items-center justify-center"
      id="contact">
      <div className="backdrop-blur-3xl	mt-20 sm:mt-20 mb-5 rounded-lg shadow-lg w-4/5 md:w-2/3 lg:w-11/12   sm:flex">
        {/* Left Section */}
        <div className=" md:flex  flex-col justify-center  gap-5 p-8 rounded-l-lg text-white">
          <h1 className="sm:text-5xl text-3xl mb-5 font-extrabold">
            Let's build Great <span className="text-red-600"> apps</span>{" "}
            Together.
          </h1>
          <p className="text-wrap w-3/4 text-lg text-slate-400 sm:text-xl">
            I'am here to bring your concept to life , manage your ongoing
            project , or expand your existing development team.
          </p>
          <h1 className="sm:text-3xl text-2xl my-5 font-bold">
            Let's work together <span className="text-green-600"> today.</span>{" "}
          </h1>
          <span className="flex gap-5 text-xs sm:text-base items-center">
            Email: akashsharma9804@gmail.com
          </span>
          <div className=" mt-10   p-5">
            <div className="flex gap-2 sm:gap-10">
              <h1 className="text-lg  sm:flex items-center "> Socials :</h1>
                <div className="relative group">
              <img
                className="h-6 w-6 sm:h-10 sm:w-10 cursor-pointer  hover:scale-110  bg-slate-400 rounded-xl "
                src="./images/github.png"
                alt=""
              />
              <div
        className="absolute -top-9 p-1 w-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <p className="text-white text-xs   font-semibold">github.com/Akash-Sharma-9804</p>
      </div>
              </div>
              <div className="relative group">
              <img
                className="h-6 w-6 sm:h-10 sm:w-10 cursor-pointer  hover:scale-110  rounded-xl"
                src="./images/linkdin.png"
                alt=""
              />
              <div
        className="absolute -top-9 p-1 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <p className="text-white text-xs   font-semibold">linkedin.com/in/akash-sharma-a9a971331</p>
      </div>

      </div>
      <div className="relative group">
              <img
                className="h-6 w-6 sm:h-10 sm:w-10 cursor-pointer  hover:scale-110  rounded-xl "
                src="./images/instagram.png"
                alt=""
              />
              <div
        className="absolute -top-6 p-1 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <p className="text-white text-xs   font-semibold">itz_akash_98</p>
      </div>

      </div>
      <div className="relative group">
              <img
                className="h-6 w-6 sm:h-10 sm:w-10 cursor-pointer  hover:scale-110   rounded-xl"
                src="./images/gmail.png"
                alt=""
              />
              <div
        className="absolute -top-6 p-1 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <p className="text-white text-xs   font-semibold">akashsharma9804@gmail.com</p>
      </div>

      </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full mb-5 sm:mb-0 sm:rounded-r-lg  rounded-b-lg sm:rounded-b-none bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-center text-2xl mb-5 font-bold text-white">
            Let's Connect.
          </h2>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-base  text-slate-100 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name..."
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 mt-1 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-base text-slate-100 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email...."
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 mt-1 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-base text-slate-100 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message...."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 mt-1 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 text-lg font-semibold text-center rounded-md transition ${
                isSubmitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
              }`}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {successMessage && (
              <p className="mt-4 text-green-400 text-center">
                {successMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import Image from "next//image";
import { motion } from "framer-motion";
import { variants } from "./Variant";
import { FacebookOutlined, LinkedinOutlined, MailOutlined, MobileOutlined } from "@ant-design/icons";

const Contact = () => {  

  return (
    <section id="contact" className="h-auto pt-0 md:pt-5">
      <div className="container py-20">
        <div className="text-center">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="mb-12 text-4xl text-gray-700 font-bold tracking-wide"
          >
            <span className="text-amber-400">Contact</span> Me
          </motion.h2>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-center mb-5"
          >
            Got a question or just want to say hello? Go ahead.
          </motion.p>
          <motion.div className="flex mb-6 items-center justify-center mb-5"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 2, ease: "easeInOut" }}
          >
                  <p className="pl-3">
                  <a href="mailto:athelay.lwin@gmail.com" className="inline-block pr-5">
                    <MailOutlined className="hover:text-amber-500" /> 
                    </a>
                    <a href="tel:+9595153855" className="inline-block pr-5">
                    <MobileOutlined className="hover:text-amber-500" /> 
                    </a>
                    <a href="https://www.linkedin.com/in/the-the-lwin-81487921/"  target="_blank" rel="noopener noreferrer" className="inline-block pr-5">
                      <LinkedinOutlined className="hover:text-amber-500" />
                    </a>
                    {/* <a href="tel:+9595153855" className="inline-block">
                      <FacebookOutlined className="hover:text-amber-500" />
                    </a> */}
                  </p>
                </motion.div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full">
            <div className="contact">
              <motion.h2
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="uppercase font-bold text-xl text-gray-700 mb-5 ml-3"
              >
                Sent Me Some Message
              </motion.h2>
              <motion.form
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 2, ease: "easeInOut" }}
                id="contactForm"
                action="assets/contact.php"
              >
                <div className="flex flex-wrap">
                  <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                    <div className="mx-3">
                      <input
                        type="text"
                        className="form-input rounded"
                        id="name"
                        name="name"
                        placeholder="Name"
                        required
                        data-error="Please enter your name"
                      />
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                    <div className="mx-3">
                      <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        className="form-input rounded"
                        name="email"
                        required
                        data-error="Please enter your email"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="mx-3">
                      <input
                        type="text"
                        placeholder="Subject"
                        id="subject"
                        name="subject"
                        className="form-input rounded"
                        required
                        data-error="Please enter your subject"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="mx-3">
                      <textarea
                        className="form-input rounded"
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        data-error="Write your message"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="submit-button mx-3">
                      <button
                        className="bg-zinc-200 px-14 py-3 hover:bg-zinc-100 transition ease-in-out border border-zinc-300 rounded shadow-md"
                        id="form-submit"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </motion.form>
            </div>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="px-0 md:px-10 w-full sm:w-1/2 lg:w-1/2 py-10 md:py-0"
          >
            <div className="pl-3 md:pl-12">
              
              <Image
              className="img-fluid mx-auto rounded-md"
              src="/img/mp-contact.svg"
              alt=""
              width="500"
              height="500"
            />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

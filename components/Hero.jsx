import React from "react";
import Image from "next//image";
import { motion } from "framer-motion";
import { variants } from "./Variant";

const Hero = () => {
  return (
    <section id="hero-area" className="w-full hero pt-0 md:pt-5"
    //  style={{background: "#7e807c", color: "white"}}
     >
      <div className="container">
        <div className="flex flex-wrap justify-center items-center h-auto min-h-screen">
          <div className="w-full sm:w-1/2 md:w-1/2 self-center md:pl-20">
            <div>
              <motion.h2
                className="text-4xl font-bold mb-10 color-"
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <span className="text-amber-400">Frontend</span> & <br /> Wordpress Developer
              </motion.h2>
              <motion.p
                className="mb-10"
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                I&apos;m a frontend and wordpress cms developer who has been building
                for the web in some capacity since 2007. I specialise in
                accessibility, performance and usability without sacrificing
                creativity.
              </motion.p>
              <motion.p
                className="mb-10"
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                Over a decade of experience building products for clients, I
                have worked with a wide range of clients from small startups to
                large corporations.
              </motion.p>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                I like to craft solid and scalable frontend products with great
                user experiences.
              </motion.p>
            </div>
          </div>
          <motion.div
            className="w-full md:w-1/2 py-10 md:py-0 text-center"
            // initial="hidden"
            // animate="visible"
            // variants={variants}
            // transition={{ duration: 2, ease: "easeInOut" }}
          >
            <Image
              className="img-fluid mx-auto rounded-md"
              src="/../public/img/ttl.jpg"
              alt=""
              width="350"
              height="350"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

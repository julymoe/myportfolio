import React from "react";
import Image from "next//image";
import { motion } from "framer-motion";
import { variants } from "./Variant";

const SkillTool = () => {
  return (
    <section id="tool" className="h-auto md:px-20 pt-0 md:pt-5">
      <div className="container py-20">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="mb-12 text-4xl text-gray-700 font-bold tracking-wide text-center"
        >
          <span className="text-amber-400">Skills</span> & Tools
        </motion.h2>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="mb-14 text-center"
        >
          The skills, tools and technologies I use to life:
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="grid grid-cols-3 md:grid-cols-7 gap-x-4 gap-y-14 justify-items-center text-center"
        >
          <div className="box-icon">
            <i
              className="text-7xl devicon-html5-plain colored"
              aria-hidden="true"
            ></i>
            <p>HTML5</p>
          </div>
          <div className="box-icon">
            <i
              className="text-7xl devicon-css3-plain colored"
              aria-hidden="true"
            ></i>
            <p>CSS3</p>
          </div>
          <div className="box-icon">
            <i className="text-7xl devicon-javascript-plain colored"></i>
            <p>JavaScript</p>
          </div>
          <div className="box-icon">
            <i
              className="text-7xl devicon-jquery-plain colored"
              aria-hidden="true"
            ></i>
            <p>jQuery</p>
          </div>
          <div className="box-icon">
            <i
              className="text-7xl devicon-sass-original colored"
              aria-hidden="true"
            ></i>
            <p>SASS</p>
          </div>
          <div className="box-icon">
            <i className="text-7xl devicon-tailwindcss-plain colored"></i>
            <p>Tailwind CSS</p>
          </div>
          <div className="box-icon">
            <i className="text-7xl devicon-bootstrap-plain colored"></i>
            <p>Bootstrap</p>
          </div>
          <div className="box-icon">
            <i
              className="text-7xl devicon-react-original colored"
              aria-hidden="true"
            ></i>
            <p>ReactJs</p>
          </div>
          <div className="box-icon">
            <i
              className="text-7xl devicon-nextjs-original-wordmark colored"
              aria-hidden="true"
            ></i>
            <p>NextJs</p>
          </div>
          <div className="box-icon">
            <i
              className="text-7xl devicon-git-plain colored"
              aria-hidden="true"
            ></i>
            <p>Git</p>
          </div>
          <div className="box-icon">
            <i
              className="text-7xl devicon-github-plain colored"
              aria-hidden="true"
            ></i>
            <p>Github</p>
          </div>
          <div className="box-icon">
            <i className="text-7xl devicon-bitbucket-original colored"
              aria-hidden="true"></i>
            <p>Bitbucket</p>
          </div>                   
          <div className="box-icon">
            <i className="text-7xl devicon-firebase-plain colored"></i>
            <p>Firebase</p>
          </div>
          <div className="box-icon">
            <i
              className="text-7xl devicon-typescript-plain colored"
              aria-hidden="true"
            ></i>
            <p>TypeScript</p>
          </div>
          <div className="box-icon">
            <i
              className="text-7xl devicon-visualstudio-plain colored"
              aria-hidden="true"
            ></i>
            <p>VS Code</p>
          </div>
          <div className="box-icon">
            <i
              className="text-7xl devicon-wordpress-plain colored"
              aria-hidden="true"
            ></i>
            <p>WordPress</p>
          </div>
          <div className="box-icon">
            <i
              className="text-7xl devicon-woocommerce-plain colored"
              aria-hidden="true"
            ></i>
            <p>Woocommerce</p>
          </div>
          <div className="box-icon">
            <i className="text-7xl devicon-graphql-plain colored"></i>
            <p>Graphql</p>
          </div>
          <div className="box-icon">
            <i className="text-7xl devicon-laravel-plain colored"></i>
            <p>Laravel</p>
          </div>
          <div className="box-icon">
            <i className="text-7xl devicon-vuejs-plain colored"></i>
            <p>Vue</p>
          </div>
          <div className="box-icon">
            <i className="text-7xl devicon-photoshop-plain colored"></i>
            <p>Photoshop</p>
          </div>
          <div className="box-icon">
            <i className="text-7xl devicon-mysql-plain-wordmark colored"></i>
            <p>MySql</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillTool;

import React from "react";
import Image from "next//image";
import { motion } from "framer-motion";
import { variants, ExpVariants } from "./Variant";

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen h-auto w-full pt-0 md:pt-5">
      <div className="container py-20">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="mb-12 text-4xl text-gray-700 font-bold tracking-wide text-center"
        >
         <span className="text-amber-400"> My</span> Experience
        </motion.h2>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="text-center md:px-52"
        >
          I’ve worked on a handful of web projects over the past over 11 years,
          some of which were for the following organizations:
        </motion.p>

        <motion.article 
          initial="hidden"
          whileInView="visible"
          variants={ExpVariants}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="">
          <div className="flex flex-col lg:flex-row justify-between py-10">
            <h3 className="text-2xl">
              <span className="font-bold">Aiden Creative Myanmar</span> - Senior
              Frontend & Wordpress Developer
            </h3>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1  font-semibold text-gray-700 mr-2 mb-2 mt-5 lg:mt-0 text-center">
              2018 - 2019
            </span>
          </div>
          <div>
            <p className="pb-7">
              I orchestrated and developed the frontend infrastructure, design
              and functionality for hellotax's new JavaScript-centric app
              powered by Vue and also managed a co-engineer.
            </p>
            <ul className="marker:text-amber-300 list-disc list-inside">
              <li>
                {" "}
                Crafted a scalable component library that enforced accessibility
                and fluency across the application.
              </li>
              <li>
                Built a multi-role user authentication system from the ground up
                with JavaScript.
              </li>
              <li>
                {" "}
                Implemented a client-side localization system for the entire
                app.
              </li>
              <li>
                Built a client-side multilingual routing system with solid
                navigation guards.
              </li>
              <li>
                Engineered fail-safe optimized utility libraries to minimize
                runtime errors and unusability in production.
              </li>
            </ul>
            <p className="py-7">Projects I've worked on</p>
            <ul>
              <li>
                <a
                  href="http://myanmarcentretower.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://myanmarcentretower.com
                </a>
              </li>
              <li>
                <a
                  href="http://hagl.com.mm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://hagl.com.mm
                </a>
              </li>
              <li>
                <a
                  href="https://komy4u.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://komy4u.com
                </a>
              </li>
              <li>
                <a
                  href="https://thetrever.com.sg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://thetrever.com.sg
                </a>
              </li>
              <li>
                <a
                  href="https://uel.sg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://uel.sg
                </a>
              </li>
            </ul>
          </div>
        </motion.article>

        <motion.article
          initial="hidden"
          whileInView="visible"
          variants={ExpVariants}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="flex flex-col lg:flex-row justify-between py-10">
            <h3 className="text-2xl">
              <span className="font-bold">Revo Tech / Revo Digital</span> -
              Senior Frontend & Wordpress Developer / Team Leader
            </h3>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 mt-5 lg:mt-0 text-center">
              2014 - 2018
            </span>
          </div>
          <div>
            <p>
              I orchestrated and developed the frontend infrastructure, design
              and functionality for hellotax's new JavaScript-centric app
              powered by Vue and also managed a co-engineer.
            </p>
            <ul className="marker:text-amber-300 list-disc list-inside">
              <li>
                {" "}
                Crafted a scalable component library that enforced accessibility
                and fluency across the application.
              </li>
              <li>
                Built a multi-role user authentication system from the ground up
                with JavaScript.
              </li>
              <li>
                {" "}
                Implemented a client-side localization system for the entire
                app.
              </li>
              <li>
                Built a client-side multilingual routing system with solid
                navigation guards.
              </li>
              <li>
                Engineered fail-safe optimized utility libraries to minimize
                runtime errors and unusability in production.
              </li>
            </ul>
            <p className="py-7">Projects I've worked on</p>
            <ul>
              <li>
                <a
                  href="http://www.mpt.com.mm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://www.mpt.com.mm
                </a>
              </li>
              <li>
                <a
                  href="http://kbzbank.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://kbzbank.com
                </a>
              </li>
              <li>
                <a
                  href="http://www.grandroyal-group.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://www.grandroyal-group.com
                </a>
              </li>
              <li>
                <a
                  href="http://www.nissan.com.mm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://www.nissan.com.mm
                </a>
              </li>
              <li>
                <a
                  href="http://www.jfemeranti.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://www.jfemeranti.com
                </a>
              </li>
              <li>
                <a
                  href="http://www.earthgroupofcompanies.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://www.earthgroupofcompanies.com
                </a>
              </li>
              <li>
                <a
                  href="http://www.dutchlady.com.mm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://www.dutchlady.com.mm
                </a>
              </li>
            </ul>
          </div>
        </motion.article>

        <motion.article
          initial="hidden"
          whileInView="visible"
          variants={ExpVariants}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="flex flex-col lg:flex-row justify-between py-10">
            <h3 className="text-2xl">
              <span className="font-bold">GlobalWave Technology Pte. Ltd.</span>{" "}
              - Frontend Developer / Designer
            </h3>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 mt-5 lg:mt-0 text-center">
              2010 - 2014
            </span>
          </div>
          <div>
            <p>
              I orchestrated and developed the frontend infrastructure, design
              and functionality for hellotax's new JavaScript-centric app
              powered by Vue and also managed a co-engineer.
            </p>
            <ul className="marker:text-amber-300 list-disc list-inside">
              <li>
                Crafted a scalable component library that enforced accessibility
                and fluency across the application.
              </li>
              <li>
                Built a multi-role user authentication system from the ground up
                with JavaScript.
              </li>
              <li>
                Implemented a client-side localization system for the entire
                app.
              </li>
              <li>
                Built a client-side multilingual routing system with solid
                navigation guards.
              </li>
              <li>
                Engineered fail-safe optimized utility libraries to minimize
                runtime errors and unusability in production.
              </li>
            </ul>
            <p className="py-7">Projects I've worked on</p>
            <ul>
              <li>
                <a
                  href="http://www.globalwavetechnology.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://www.globalwavetechnology.com
                </a>
              </li>
              <li>
                <a
                  href="http://www.awaldaw.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://www.awaldaw.com
                </a>
              </li>
              <li>
                <a
                  href="http://dev.conference.crpp.nie.edu.sg/2013"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://dev.conference.crpp.nie.edu.sg/2013
                </a>
              </li>
              <li>
                <a
                  href="http://www.ycdc.com.mm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://www.ycdc.com.mm
                </a>
              </li>
              <li>
                <a
                  href="http://www.radiances.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://www.radiances.net
                </a>
              </li>
              <li>
                <a
                  href="https://www.gmsuite.biz/clubmarriott"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.gmsuite.biz/clubmarriott
                </a>
              </li>
              <li>
                <a
                  href="http://www.globalpos.com.mm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://www.globalpos.com.mm
                </a>
              </li>
            </ul>
          </div>
        </motion.article>

        <motion.article
          initial="hidden"
          whileInView="visible"
          variants={ExpVariants}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="flex flex-col lg:flex-row justify-between py-10">
            <h3 className="text-2xl">
              <span className="font-bold">Exotic Myanmar Travel & Tour</span> -
              Web Developer / Designer
            </h3>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 mt-5 lg:mt-0 text-center">
              2009 - 2010
            </span>
          </div>
          <div>
            <p>
              I orchestrated and developed the frontend infrastructure, design
              and functionality for hellotax's new JavaScript-centric app
              powered by Vue and also managed a co-engineer.
            </p>
            <ul className="marker:text-amber-300 list-disc list-inside">
              <li>
                Crafted a scalable component library that enforced accessibility
                and fluency across the application.
              </li>
              <li>
                Built a multi-role user authentication system from the ground up
                with JavaScript.
              </li>
              <li>
                Implemented a client-side localization system for the entire
                app.
              </li>
              <li>
                Built a client-side multilingual routing system with solid
                navigation guards.
              </li>
              <li>
                Engineered fail-safe optimized utility libraries to minimize
                runtime errors and unusability in production.
              </li>
            </ul>
            <p className="py-7">Projects I've worked on</p>
            <ul>
              <li>
                <a
                  href="http://www.exoticmyanmartravel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://www.exoticmyanmartravel.com
                </a>
              </li>
            </ul>
          </div>
        </motion.article>

        <motion.article
          initial="hidden"
          whileInView="visible"
          variants={ExpVariants}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="flex flex-col lg:flex-row justify-between py-10">
            <h3 className="text-2xl">
              <span className="font-bold">DPS Co.Ltd, WWW Media</span> - Web
              Developer / Designer
            </h3>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 mt-5 lg:mt-0 text-center">
              2007 - 2009
            </span>
          </div>
          <div>
            <p>
              I orchestrated and developed the frontend infrastructure, design
              and functionality for hellotax's new JavaScript-centric app
              powered by Vue and also managed a co-engineer.
            </p>
            <ul className="marker:text-amber-300 list-disc list-inside">
              <li>
                Crafted a scalable component library that enforced accessibility
                and fluency across the application.
              </li>
              <li>
                Built a multi-role user authentication system from the ground up
                with JavaScript.
              </li>
              <li>
                Implemented a client-side localization system for the entire
                app.
              </li>
              <li>
                Built a client-side multilingual routing system with solid
                navigation guards.
              </li>
              <li>
                Engineered fail-safe optimized utility libraries to minimize
                runtime errors and unusability in production.
              </li>
            </ul>
            <p className="py-7">Over 30 client’s websites</p>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Experience;

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
         <span className="text-amber-400"> Professional</span> Experience
        </motion.h2>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="text-center md:px-52"
        >
          I&apos;ve worked on a handful of web projects over the past over 11 years,
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
              <span className="font-bold">Freelance Developer</span>
            </h3>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1  font-semibold text-gray-700 mr-2 mb-2 mt-5 lg:mt-0 text-center">
              current
            </span>
          </div>
          <div>
            <p className="pb-5">
            She has  been making a living as a remote, freelance web developer—loving and focusing on customized WordPress, Reactjs, Nextjs, Laravel, Vue js and  working as a fundamental part of several IT teams and projects. And now seek new challenge opportunities as permanent positions. 
            </p>
            
            <p className="py-7">Projects I&apos;ve worked on</p>
            <ul>
              <li>
                <a
                  href="https://winhan.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://winhan.vercel.app/
                </a>
              </li>
              <li>
                <a
                  href="https://www.jfemeranti.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.jfemeranti.com/
                </a>
              </li>
              <li>
                <a
                  href="https://myportfolio-profile.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://myportfolio-profile.netlify.app/
                </a>
              </li>
              <li>
                <a
                  href="https://webnifty.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://webnifty.net
                </a>
              </li>
              <li>
                <a
                  href="https://shwekhunchan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://shwekhunchan.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.mcfblind.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.mcfblind.org
                </a>
              </li>
              <li>
                <a
                  href="https://www.w-winhan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.w-winhan.com
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
            AIDEN CREATIVE MYANMAR is providing the most effective and affordable digital marketing services for SMEs and start-ups, Seo friendly and Creative Website Design.
            </p>
            <ul className="marker:text-amber-300 list-disc list-inside">
              <li>
              Develop customized websites with Wordpress CMS and develop mobile responsive layout with bootstrap and custom css.
              </li>
              <li>
              Collaborate with UI designers to develop site features and functionality
              </li>
              <li>
              Experience with the frontend frameworks (Vue js)
              </li>
              <li>
              Collaborate with project manager and team members by projects (mobile responsive, frontend)
              </li>
              <li>
              Fixing the bug that come from UAT Testing and site performance
              </li>
              <li>Handling project new flow, project old flow, new module, customized module, 
maintenance, and fix bugs from clients.
</li>
            </ul>
            <p className="py-7">Projects I&apos;ve worked on</p>
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
            REVO DIGITAL is an international team of digital natives based in Yangon that helps businesses formulate and execute digital strategies that are manageable and measurable based on our clients&apos;​ needs and users&apos;​ preferences.
            </p>
            <ul className="marker:text-amber-300 list-disc list-inside">
              <li>
              Develop customized websites with Wordpress CMS and develop mobile responsive layout with bootstrap and custom css.
              </li>
              <li>
              Collaborate with UI designers to develop site features and functionality
              </li>
              <li>
              Lead wordpress team , share and care new team members
              </li>
              <li>
              Collaborate with project manager and team members by projects (mobile, frontend)
</li>
              <li>
              Fix Bug for UAT testing and site performance
              </li>
              <li>Develop, test and deploy dynamic web-based solutions</li>
              <li>Develop whole project structure</li>
              <li>Working on fast iteration cycles and tight deadlines using an agile/waterfall methodology</li>
              <li>Handling project new flow, project old flow, new module, customized module, 
maintenance, and fix bugs from clients.
</li>
            </ul>
            <p className="py-7">Projects I&apos;ve worked on</p>
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
              <span className="font-bold">GlobalWave Technology Pte. Ltd.</span>
              - Frontend Developer / Designer
            </h3>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 mt-5 lg:mt-0 text-center">
              2010 - 2014
            </span>
          </div>
          <div>
            <p>
            GLOBAL WAVE TECHNOLOGY is a IT company which develops products and solutions regards with hospitality (Gold Shop POS system, hotel management, fingerprint) for various business and functionalities, LMS system, web and app development, HR, payroll management system as well as inventory control solution.
            </p>
            <ul className="marker:text-amber-300 list-disc list-inside">
              <li>
              Develop web applications with CMS, Php and Moodle LMS
              </li>
              <li>
              Design and Content Assembly
              </li>
              <li>
              Fixing the bug that come from UAT Testing
              </li>
              <li>
              Maintenance and Enhancement
              </li>
              <li>
              Experience developing enterprise applications/solutions
              </li>
              <li>Strong understanding of SVN, Scrum</li>
              <li>Learn new technologies for projects</li>
            </ul>
            <p className="py-7">Projects I&apos;ve worked on</p>
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
            EXOTIC is a successful and famous Tours, Cruises and Car Rental company in Myanmar.
            </p>
            <ul className="marker:text-amber-300 list-disc list-inside">
              <li>
              Design and Develop with Php, Wordpress, Bootstrap framework
              </li>
              <li>
              Fixing the bug that come from UAT Testing
              </li>
              <li>
              Maintenance and Enhancement
              </li>
              <li>
              Discuss with MD and team member for detail process
              </li>
            </ul>
            <p className="py-7">Projects I&apos;ve worked on</p>
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
            DPS specializes in small to enterprise business Websites and Map services company with High Performance in Myanmar.
            </p>
            <ul className="marker:text-amber-300 list-disc list-inside">
              <li>
              Develop and design client&apos;s websites
              </li>
              <li>
              Fixing the bug that come from UAT Testing
              </li>
              <li>
              Maintenance and Enhancement
              </li>
              <li>
              Discuss with customer for detail process
              </li>
            </ul>
            <p className="py-7">Over 30 client&apos;s websites</p>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Experience;

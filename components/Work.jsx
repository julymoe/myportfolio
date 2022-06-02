import React, { useEffect, useRef, useState } from "react";
import Image from "next//image";
import { MotionConfig } from "framer-motion";
import { motion } from "framer-motion";
import { variants } from "./Variant";

const Work = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const carousel = useRef();

  return (
    <>
    <section id="work" className="h-auto px-20 pt-0 md:pt-5">
      <div className="container pt-20 pb-5">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="mb-12 text-4xl text-gray-700 font-bold tracking-wide text-center"
        >
          <span className="text-amber-400">My</span> Works
        </motion.h2>
        <motion.div
          initial={{ scale: 0, y: "120px", opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0.7, 1], scale: 1, y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="text-center mb-5"
        >
          Selected projects I&apos;ve worked on in the past.
        </motion.div>
      </div>
      <motion.div className="text-center flex gap-5 justify-center items-center border border-dashed border-gray-300 rounded-lg bg-yellow-100 w-fit py-2 px-5 mx-auto mb-7" 
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <Image src="/../public/img/grab.png"  alt="" width="35" height="35" />
        <span className="text-yellow-700">Drag to the right to see more !</span>
      </motion.div>
    </section>
    
    <motion.div
          whileTap={{ cursor: "grabbing" }}
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="carousel overflow-hidden"
          ref={carousel}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex flex-row gap-y-5 gap-x-5 md:gap-x-14 inner-carousel p-5 pb-20"
          >
            <div className="h-auto  item basis-1/3 cursor-grab grow-1 shrink-0 shadow-xl transition ease-in-out rounded hover:-translate-y-1 hover:scale-110 border-t border-zinc-200">
              <div className="p-7">
                <h3 className="text-2xl font-semibold">Artist WinHan</h3>
                <a href="https://winhan.vercel.app/" target="_blank" rel="noopener noreferrer">https://winhan.vercel.app/</a>
              </div>
              <div className="px-6 pt-4 pb-5">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Reactjs
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Wordpress as headless CMS
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Graphql Apollo
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Sass
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Framer Motion
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Emailjs
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Vercel
                </span>
              </div>
            </div>
            <div className="h-auto item basis-1/3 cursor-grab grow-1 shrink-0 shadow-xl transition ease-in-out rounded hover:-translate-y-1 hover:scale-110 border-t border-zinc-200">
              <div className="p-7">
                <h3 className="text-2xl font-semibold">Webnifty Web Dev. Company</h3>
                <a href="https://webnifty.net/" target="_blank" rel="noopener noreferrer">https://webnifty.net/</a>
              </div>
              <div className="px-6 pt-4 pb-5">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Nextjs
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Dato as headless CMS
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Graphql
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Tailwind Css
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Framer Motion
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Emailjs
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Vercel
                </span>
              </div>
            </div>
            <div className="h-auto item basis-1/3 cursor-grab grow-1 shrink-0 shadow-xl transition ease-in-out rounded hover:-translate-y-1 hover:scale-110 border-t border-zinc-2">
              <div className="p-7">
                <h3 className="text-2xl font-semibold">My Portfolio</h3>
                <a href="https://myportfolio-profile.netlify.app/" target="_blank" rel="noopener noreferrer">https://myportfolio-profile.netlify.app/</a>
              </div>
              <div className="px-6 pt-4 pb-5">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Nextjs
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Tailwind Css
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Framer Motion
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Emailjs
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Netlify
                </span>
              </div>
            </div>
            <div className="h-auto item basis-1/3 cursor-grab grow-1 shrink-0 shadow-xl transition ease-in-out rounded hover:-translate-y-1 hover:scale-110 border-t border-zinc-2">
              <div className="p-7">
                <h3 className="text-2xl font-semibold">Komy4u Online Shopping</h3>
                <a href="https://komy4u.com/" target="_blank" rel="noopener noreferrer">https://komy4u.com/</a>
              </div>
              <div className="px-6 pt-4 pb-5">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Laravel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Bootstrap
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Vue
                </span>
              </div>
            </div>
            <div className="h-auto item basis-1/3 cursor-grab grow-1 shrink-0 shadow-xl transition ease-in-out rounded hover:-translate-y-1 hover:scale-110 border-t border-zinc-2">
              <div className="p-7">
                <h3 className="text-2xl font-semibold">HAGL Group</h3>
                <a href="http://hagl.com.mm/" target="_blank" rel="noopener noreferrer">http://hagl.com.mm/</a>
              </div>
              <div className="px-6 pt-4 pb-5">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Wordpress (Customized)
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Bootstrap
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #ACFpro
                </span>
              </div>
            </div>
            <div className="h-auto item basis-1/3 cursor-grab grow-1 shrink-0 shadow-xl transition ease-in-out rounded hover:-translate-y-1 hover:scale-110 border-t border-zinc-2">
              <div className="p-7">
                <h3 className="text-2xl font-semibold">Myanmar Center Tower</h3>
                <a href="http://www.myanmarcentretower.com/" target="_blank" rel="noopener noreferrer">http://www.myanmarcentretower.com/</a>
              </div>
              <div className="px-6 pt-4 pb-5">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Wordpress (Customized)
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Bootstrap
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #ACFpro
                </span>
              </div>
            </div>
            <div className="h-auto item basis-1/3 cursor-grab grow-1 shrink-0 shadow-xl transition ease-in-out rounded hover:-translate-y-1 hover:scale-110 border-t border-zinc-2">
              <div className="p-7">
                <h3 className="text-2xl font-semibold">KBZ Bank</h3>
                <a href="https://www.kbzbank.com/" target="_blank" rel="noopener noreferrer">https://www.kbzbank.com/</a>
              </div>
              <div className="px-6 pt-4 pb-5">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Wordpress (Customized)
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Bootstrap
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Multi Languages
                </span>
              </div>
            </div>
            <div className="h-auto item basis-1/3 cursor-grab grow-1 shrink-0 shadow-xl transition ease-in-out rounded hover:-translate-y-1 hover:scale-110 border-t border-zinc-2">
              <div className="p-7">
                <h3 className="text-2xl font-semibold">MPT Telecommunication</h3>
                <a href="https://www.mpt.com.mm/" target="_blank" rel="noopener noreferrer">https://www.mpt.com.mm/</a>
              </div>
              <div className="px-6 pt-4 pb-5">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Wordpress (Customized)
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Bootstrap
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Multi Languages
                </span>
              </div>
            </div>
            <div className="h-auto item basis-1/3 cursor-grab grow-1 shrink-0 shadow-xl transition ease-in-out rounded hover:-translate-y-1 hover:scale-110 border-t border-zinc-2">
              <div className="p-7">
                <h3 className="text-2xl font-semibold">JFE Meranti</h3>
                <a href="https://www.jfemeranti.com/" target="_blank" rel="noopener noreferrer">https://www.jfemeranti.com/</a>
              </div>
              <div className="px-6 pt-4 pb-5">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Wordpress (Customized)
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Bootstrap
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Multi Languages
                </span>
              </div>
            </div>
            <div className="h-60 bg-slate-50 item basis-1/3 cursor-grab grow-1 shrink-0 "></div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Work;

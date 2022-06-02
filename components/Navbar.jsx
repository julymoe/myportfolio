import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { motion, useCycle } from "framer-motion";
import { itemVariants, sideVariants } from "./Variant";
import { AlignRightOutlined, CloseOutlined } from "@ant-design/icons";

const links = [
  { name: "Home", to: "/", id: 1 },
  { name: "Work", to: "/work", id: 2 },
  { name: "Experience", to: "/experience", id: 3 },
  { name: "Skill & Tool", to: "/tool", id: 4 },
  { name: "Contact", to: "contact", id: 5 },
];

const Navbar = () => {
  const router = useRouter();

  const [open, cycleOpen] = useCycle(false, true);

  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(15);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 15 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  return (
    <header id="header-wrap" className="relative">
      {/* <!-- Navbar Start -->       */}
      <div className="navigation fixed top-0 left-0 w-full z-30 duration-300">
        <nav
          className="navbar py-2 navbar-expand-lgrelative duration-300"
          style={{
            //background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
            background: `rgba(255, 255, 255)`,
            padding: `${padding}px 0px`,
            boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
          }}
        >
          <div className="container flex justify-between items-center">
            <Link href="/">
              <a className="navbar-brand font-bold text-2xl">TTL</a>
            </Link>

            {open && (
              <motion.aside
                initial={{ width: 0 }}
                animate={{
                  width: 300,
                }}
                exit={{
                  width: 0,
                  transition: { delay: 0.7, duration: 0.3 },
                }}
                className="fixed top-0 right-0 w-1/3 bg-amber-300 z-20 h-screen"
              >
                <motion.div
                  className="sideMenu"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={sideVariants}
                >
                  {links.map(({ name, to, id }) => (
                    <motion.a
                      key={id}
                      href={to}
                      whileHover={{ scale: 1.1 }}
                      variants={itemVariants}
                    >
                      {name}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.aside>
            )}

            <div
              className="collapse navbar-collapse hidden lg:block duration-300 shadow absolute top-100 left-0 mt-full bg-white z-20 px-5 w-full lg:static lg:bg-transparent lg:shadow-none"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto justify-center items-center lg:flex">
                <Link href="/">
                  <li className="nav-item">
                    <a
                      className={router.pathname == "/" ? "text-amber-400" : ""}
                    >
                      Home
                    </a>
                  </li>
                </Link>
                <Link href="/work">
                  <li className="nav-item page-scroll mix-blend-difference">
                    <a
                      className={
                        router.pathname == "/work" ? "text-amber-400" : ""
                      }
                    >
                      Work
                    </a>
                  </li>
                </Link>
                <Link href="/experience">
                  <li className="nav-item page-scroll">
                    <a
                      className={
                        router.pathname == "/experience" ? "text-amber-400" : ""
                      }
                    >
                      Experience
                    </a>
                  </li>
                </Link>
                <Link href="/tool">
                  <li className="nav-item page-scroll">
                    <a
                      className={
                        router.pathname == "/tool" ? "text-amber-400" : ""
                      }
                    >
                      Skills & Tools
                    </a>
                  </li>
                </Link>
                {/* <Link href="/resume">
                            <li className="nav-item page-scroll"><a className={router.pathname == "/resume" ? "text-amber-400" : ""}>Resume</a></li>
                          </Link> */}
                <Link href="/contact">
                  <li className="nav-item page-scroll">
                    <a
                      className={
                        router.pathname == "/contact" ? "text-amber-400" : ""
                      }
                    >
                      Contact
                    </a>
                  </li>
                </Link>
              </ul>
            </div>

            <div className="header-btn fixed z-30 right-16 top-0 sm:block lg:hidden">
              <div className="btn-container">
                <button
                  onClick={cycleOpen}
                  className="focus:outline-none bg-transparent text-gray-900 text-2xl font-bold py-2 px-4 hover:text-amber-600"
                >
                  {open ? <CloseOutlined /> : <AlignRightOutlined />}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

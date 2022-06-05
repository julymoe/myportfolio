import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/tailwind.css";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            //opacity: 0,
            scaleX: 0,
          },
          pageAnimate: {
            //opacity: 1,
            scaleX: 1,
          },
          pageExit: {
            opacity: 0,
            // x: "100vw",
            // scaleX: 10.5,
            scaleX: 0,
            backgroundColor: "FloralWhite",
            filter: `invert(0.5)`,
            // filter: `blur(1rem)`,
            // filter: `opacity(50%)`,
            transition: { duration: 1, ease: "easeInOut" },
          },
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;

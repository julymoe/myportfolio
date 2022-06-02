import Head from "next/head";
import Image from "next/image";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SkillTool from "../components/SkillTool";
import Work from "../components/Work";
import Experience from "../components/Experience";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <main>
        <Hero />
      </main>
    </div>
  );
}

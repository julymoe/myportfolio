import Head from "next/head";
import Hero from "../components/Hero";
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

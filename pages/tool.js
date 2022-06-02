import React from "react";
import SkillTool from "../components/SkillTool";
import Head from "next/head";

const tool = () => {
  return (
    <>
      <Head>
        <title>My Skills & Tools</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        ></link>
      </Head>
      <SkillTool />
    </>
  );
};

export default tool;

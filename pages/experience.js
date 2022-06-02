import React from 'react'
import Experience from '../components/Experience'
import Head from 'next/head'

const experience = () => {
  return (
    <>
      <Head>
        <title>My Skills & Tools</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        ></link>
      </Head>
      <Experience />
    </>
  )
}

export default experience
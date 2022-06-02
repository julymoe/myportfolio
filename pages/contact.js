import React from 'react'
import Contact from '../components/Contact'
import Head from 'next/head'

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        ></link>
      </Head>
      <Contact />
    </>
  )
}

export default contact
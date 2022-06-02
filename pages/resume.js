import React from 'react'
import Resume from '../components/Resume'
import Head from 'next/head'

const resume = () => {
  return (
    <>
      <Head>
        <title>My Resume</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        ></link>
      </Head>
      <Resume />
    </>
  )
}

export default resume
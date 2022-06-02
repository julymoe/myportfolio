import React from 'react'
import Work from '../components/Work'
import Head from 'next/head'

const work = () => {
  return (
    <>
      <Head>
        <title>My Works</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        ></link>
      </Head>
      <Work />
    </>
  )
}

export default work
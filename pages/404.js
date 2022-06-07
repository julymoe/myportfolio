import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next//image";

const notFound = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <div classclassName="flex items-center justify-center">
        <div className="px-4 lg:py-12">
          <div className="lg:gap-4 lg:flex">
            <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
              <h1 className="font-bold text-amber-400 text-9xl">404</h1>
              <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                <span className="text-red-500">Oops!</span> Page not found
              </p>
              <p className="mb-8 text-center text-gray-500 md:text-lg">
                The page you’re looking for doesn’t exist.
              </p>
              <Link href="/">
                <a
                    className="px-6 py-2 text-sm font-semibold text-amber-500 bg-blue-100"
                >
                    Go home
                </a>
              </Link>              
            </div>
            <div className="mt-4">
            <Image
              className="img-fluid mx-auto rounded-md"
              src="/img/404.svg"
              alt=""
              width="500"
              height="500"
            />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default notFound;

import React from "react";
import myPhoto from "../images/photo.jpg";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function Home() {
  return (
    <>
      <section className="md:w-[1000px] sm:py-16 md:pt-36 flex gap-4 sm:flex-col sm:items-center md:flex-row justify-between">
        <img
          className="rounded-full drop-shadow-md shadow-orange-800 shadow-xl sm:mb-7"
          src={myPhoto}
          alt=""
          width={250}
          height={500}
        />
        <div className="flex flex-col gap-3 items-center">
          <p className="sm:text-xl md:text-2xl font-[Ubuntu] opacity-75">
            Hi i'am
          </p>
          <h2 className="sm:text-xl md:text-4xl font-[Ubuntu] font-bold">
            Diyor
          </h2>
          <h3 className="sm:text-xl md:text-2xl font-[Ubuntu] opacity-75">
            Front End Devoloper
          </h3>
          <div className="flex items-start gap-3">
            <a
              className="text-5xl text-black hover:drop-shadow-lg"
              href="https://github.com/DiyorbekBek"
            >
              <AiFillGithub />
            </a>
            <a
              className="text-5xl text-blue-700 hover:drop-shadow-lg"
              href="https://www.linkedin.com/in/diyorbekumaraliyev/"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </section>

      <section
        id="about"
        className=" sm:py-16 md:pt-36 flex gap-4 sm:flex-col sm:items-center md:flex-row justify-between"
      >
        {/* <h1>About</h1> */}
      </section>
    </>
  );
}

export default Home;

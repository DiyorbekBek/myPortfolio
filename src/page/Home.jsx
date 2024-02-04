import React from "react";
import myPhoto from "../images/photo.jpg";
import js from "../images/js.png";
import sass from "../images/sass.png";
import reactjs from "../images/reactJS.png";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { DiJsBadge } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { FaMedal } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { DiHtml5 } from "react-icons/di";
import { DiCss3Full } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { IoIosMail } from "react-icons/io";

function Home() {
  const img =
    "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const najot = "https://api.logobank.uz/media/logos_png/Najot_Talim-01.png";
  return (
    <>
      <section className="md:w-[1000px] sm:py-16 md:pt-36 flex gap-4 sm:flex-col sm:items-center md:flex-row justify-between">
        <img
          className="rounded-full -z-10 drop-shadow-md shadow-orange-800 shadow-xl sm:mb-7"
          src={myPhoto}
          alt=""
          width={250}
          height={500}
        />
        <div className="flex flex-col gap-3 items-center">
          <p className="sm:text-xl md:text-2xl font-[Ubuntu] opacity-75">
            Hi i'am
          </p>
          <h2 className="sm:text-3xl md:text-5xl font-[Ubuntu] font-bold">
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

      <section id="about" className="pt-10 flex flex-col py-7">
        <p className="text-center font-[Ubuntu]">Explore My</p>
        <h1 className="text-center font-[Ubuntu] sm:text-4xl md:text-6xl font-bold pb-10">
          <span className="text-red-600">Abo</span>ut
        </h1>

        <div className="flex sm:flex-col gap-5 md:flex-row md:justify-between md:w-[1000px] pt-5 items-center">
          <img
            className="rounded-lg"
            src={img}
            alt=""
            width={300}
            height={400}
          />
          <div className="w-96 flex flex-col gap-3">
            <div className="border sm:p-9 md:p-2 rounded-lg flex gap-2 flex-col items-center bg-gradient-to-r from-sky-500 to-slate-200">
              <p className="text-3xl">
                <FaMedal />
              </p>
              <h3 className="font-[Ubuntu] sm:text-2xl md:text-3xl font-bold">
                Experience
              </h3>
              <p className="sm:text-xl opacity-75 font[Ubuntu]">1 year</p>
              <p className="sm:text-xl opacity-75 font[Ubuntu]">
                Frontend Devoloper
              </p>
            </div>
            <div className="border sm:p-9 md:p-2 rounded-lg flex gap-2 flex-col items-center bg-gradient-to-r from-sky-500 to-slate-200">
              <p className="text-3xl">
                <PiStudentBold />
              </p>
              <h3 className="font-[Ubuntu] sm:text-2xl md:text-3xl font-bold">
                Education
              </h3>
              <p className="sm:text-xl opacity-75 font[Ubuntu]">1 year</p>
              <img src={najot} alt="" width={100} height={100} />
            </div>
            <p className="font-[Ubuntu] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              est! Mollitia ab inventore dicta quasi deleniti illo quisquam
              aspernatur quae!
            </p>
          </div>
        </div>
      </section>

      <section id="experience">
        <p className="text-center font-[Ubuntu]">Get To Know More</p>
        <h1 className="text-center font-[Ubuntu] sm:text-4xl md:text-6xl font-bold pb-10">
          Experi<span className="text-red-600">ence</span>
        </h1>
        <div className="py-7 flex justify-center">
          <ul className="border grid bg-gradient-to-r from-cyan-500 to-slate-100 rounded-xl p-10 grid-cols-2 md:gap-x-56 sm:gap-x-16 md:gap-y-3 ">
            <li className="flex gap-3">
              <p className="sm:text-2xl md:text-4xl text-red-500">
                <DiHtml5 />
              </p>
              <div>
                <h5 className="font-[Ubuntu] font-bold sm:text-xl md:text-2xl">
                  HTML5
                </h5>
                <p className="font-[Ubuntu] opacity-75">Basic</p>
              </div>
            </li>
            <li className="flex gap-3">
              <p className="sm:text-2xl md:text-4xl text-blue-600">
                <DiCss3Full />
              </p>
              <div>
                <h5 className="font-[Ubuntu] font-bold sm:text-xl md:text-2xl">
                  CSS
                </h5>
                <p className="font-[Ubuntu] opacity-75">Basic</p>
              </div>
            </li>
            <li className="flex gap-3">
              <p className="sm:text-2xl md:text-4xl text-yellow-400">
                <DiJsBadge />
              </p>
              <div>
                <h5 className="font-[Ubuntu] font-bold sm:text-xl md:text-2xl">
                  JS
                </h5>
                <p className="font-[Ubuntu] opacity-75">Basic</p>
              </div>
            </li>
            <li className="flex gap-3">
              <p className="sm:text-2xl md:text-4xl text-blue-500">
                <DiReact />
              </p>
              <div>
                <h5 className="font-[Ubuntu] font-bold sm:text-xl md:text-2xl">
                  REACT
                </h5>
                <p className="font-[Ubuntu] opacity-75">Basic</p>
              </div>
            </li>
            <li className="flex gap-3">
              <p className="sm:text-2xl md:text-4xl text-pink-500">
                <DiSass />
              </p>
              <div>
                <h5 className="font-[Ubuntu] font-bold sm:text-xl md:text-2xl">
                  SASS
                </h5>
                <p className="font-[Ubuntu] opacity-75">Basic</p>
              </div>
            </li>
            <li className="flex gap-3">
              <p className="sm:text-2xl md:text-4xl text-black">
                <AiFillGithub />
              </p>
              <div>
                <h5 className="font-[Ubuntu] font-bold sm:text-xl md:text-2xl">
                  GitHub
                </h5>
                <p className="font-[Ubuntu] opacity-75">Basic</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="projects" className="py-7">
        <p className="text-center font-[Ubuntu]">Browse My Recent</p>
        <h1 className="text-center font-[Ubuntu] sm:text-4xl md:text-6xl font-bold pb-10">
          <span className="text-red-600">Pro</span>jects
        </h1>
        <ul className="flex gap-5 md:flex-row sm:flex-col">
          <li className="md:w-[900px] p-2 rounded-md flex flex-col items-center bg-gradient-to-r from-sky-500 to-slate-200">
            <img
              className="border border-white p-2 rounded-md"
              src={js}
              alt=""
              width={300}
            />
            <h6 className="font-[Ubuntu] font-bold text-2xl mt-4">
              Project in JS
            </h6>
            <div className="flex gap-6 mt-3">
              <a
                className="btn btn-info btn-sm text-white"
                href="https://github.com/DiyorbekBek/9-darsUserRendm.git"
              >
                GitHub
              </a>
              <a
                className="btn btn-info btn-sm text-white"
                href="https://user-random-dyr.netlify.app/"
              >
                Live Demo
              </a>
            </div>
          </li>
          <li className="md:w-[900px] p-2 rounded-md flex flex-col items-center bg-gradient-to-r from-sky-500 to-slate-200">
            <img
              className="border border-white p-2 rounded-md"
              src={reactjs}
              alt=""
              width={300}
            />
            <h6 className="font-[Ubuntu] font-bold text-2xl mt-4">
              Project in Rect.js
            </h6>
            <div className="flex gap-6 mt-3">
              <a
                className="btn btn-info btn-sm text-white"
                href="https://github.com/DiyorbekBek/recipe.git"
              >
                GitHub
              </a>
              <a
                className="btn btn-info btn-sm text-white"
                href="https://reliable-travesseiro-d3351e.netlify.app/"
              >
                Live Demo
              </a>
            </div>
          </li>
          <li className="md:w-[900px] p-2 rounded-md flex flex-col items-center bg-gradient-to-r from-sky-500 to-slate-200">
            <img
              className="border border-white p-2 rounded-md"
              src={sass}
              alt=""
              width={300}
            />
            <h6 className="font-[Ubuntu] font-bold text-2xl mt-4">
              Project in Sass
            </h6>
            <div className="flex gap-6 mt-3">
              <a
                className="btn btn-info btn-sm text-white"
                href="https://github.com/DiyorbekBek/designo.git"
              >
                GitHub
              </a>
              <a
                className="btn btn-info btn-sm text-white"
                href="https://designo-dyr-imth.netlify.app/"
              >
                Live Demo
              </a>
            </div>
          </li>
        </ul>
      </section>

      <section id="contact" className="flex flex-col items-center py-7">
        <p className="text-center font-[Ubuntu]">Get In Touch</p>
        <h1 className="text-center font-[Ubuntu] sm:text-4xl md:text-6xl font-bold pb-10">
          Cont<span className="text-red-600">act</span>
        </h1>
        <div className="flex p-2 border-2 rounded-2xl gap-4">
          <div className="flex gap-1">
            <span className="text-2xl">
              <IoIosMail />
            </span>
            <a
              className="underline font-[Ubuntu] hover:text-blue-600"
              href="https://mail.google.com/mail/diyorbek2017u"
            >
              diyorbek2017u@gmail.com
            </a>
          </div>
          <div className="flex gap-1">
            <span className="text-2xl text-blue-500">
              <AiFillLinkedin />
            </span>
            <a
              className="underline font-[Ubuntu] hover:text-blue-600"
              href="https://www.linkedin.com/in/diyorbekumaraliyev/"
            >
              Diyorbek Umaraliyev
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

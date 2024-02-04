import React from "react";

function Navbar() {
  return (
    <>
      <header className="py-4 bg-stone-800 fixed w-full">
        <div className="flex max-container justify-between">
          <a
            className="font-[Montserrat] tracking-wider sm:text-xl md:text-3xl font-bold text-white"
            href="/"
          >
            Diyor<span className="text-red-600">Web</span>
          </a>

          <ul className="flex items-center gap-3">
            <li>
              <a
                className="btn sm:btn-sm bg-inherit text-white hover:text-slate-950"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="btn sm:btn-sm bg-inherit text-white hover:text-slate-950"
                href="#experience"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className="btn sm:btn-sm bg-inherit text-white hover:text-slate-950"
                href="#projects"
              >
                Project
              </a>
            </li>
            <li>
              <a
                className="btn sm:btn-sm bg-inherit text-white hover:text-slate-950"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Navbar;

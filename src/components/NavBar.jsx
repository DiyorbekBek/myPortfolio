import React from "react";

function Navbar() {
  return (
    <>
      <header className="py-4 bg-stone-800">
        <div className="flex max-container justify-between">
          <a
            className="font-[Montserrat] tracking-wider sm:text-xl md:text-3xl font-bold text-white"
            href="/"
          >
            Diyor Web
          </a>
          <ul className="flex items-center gap-3">
            <li>
              <a className="btn sm:btn-sm bg-inherit text-white" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="btn sm:btn-sm bg-inherit text-white" href="#">
                Project
              </a>
            </li>
            <li>
              <a className="btn sm:btn-sm bg-inherit text-white" href="#">
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

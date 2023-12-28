"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed w-full h-20 shadow-xl z-50">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <h1 className="text-3xl">Navbar</h1>
        <div className="">
          {/* Mobile Nav */}
          <FiMenu
            className="w-8 h-8 md:hidden"
            onClick={() => setIsMenuOpen(true)}
          />
          {isMenuOpen && (
            <div className="h-screen w-full bg-black/60 left-0 top-0 absolute transition-all duration-300 ease-in md:hidden" />
          )}
          <div
            className={`flex flex-col justify-between h-screen bg-white w-3/4 sm:w-3/5 md:w-2/5 top-0 absolute z-[100] p-4 transition-all duration-300 ease-in md:hidden ${
              isMenuOpen ? "left-0" : "-left-full"
            }`}
          >
            <div className="flex justify-between items-center">
              <h1 className="text-3xl">Navbar</h1>
              <IoClose
                className="w-8 h-8"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
            <ul className="">
              <li className="my-4 hover:font-bold">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="my-4 hover:font-bold">
                <Link href={"#about"}>About</Link>
              </li>
              <li className="my-4 hover:font-bold">
                <Link href={"#skills"}>Skills</Link>
              </li>
              <li className="my-4 hover:font-bold">
                <Link href={"#projects"}>Projects</Link>
              </li>
              <li className="my-4 hover:font-bold">
                <Link href={"#contact"}>Contact</Link>
              </li>
            </ul>
            <div className="mb-4">
              <p className="mb-6 text-purple-800">Let's Connect</p>
              <ul className="flex items-center">
                <li className="p-3 mr-4 rounded-full shadow-xl bg-white">
                  <Link href={"#"}>
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li className="p-3 mr-4 rounded-full shadow-xl bg-white">
                  <Link href={"#"}>
                    <FaGithub />
                  </Link>
                </li>
                <li className="p-3 mr-4 rounded-full shadow-xl bg-white">
                  <Link href={"#"}>
                    <MdEmail />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <ul className="flex justify-between items-center ml-4">
              <li className="m-4 hover:border-b-2 border-[#1f2937]">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="m-4 hover:border-b-2 border-[#1f2937]">
                <Link href={"#about"}>About</Link>
              </li>
              <li className="m-4 hover:border-b-2 border-[#1f2937]">
                <Link href={"#skills"}>Skills</Link>
              </li>
              <li className="m-4 hover:border-b-2 border-[#1f2937]">
                <Link href={"#projects"}>Projects</Link>
              </li>
              <li className="m-4 hover:border-b-2 border-[#1f2937]">
                <Link href={"#contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

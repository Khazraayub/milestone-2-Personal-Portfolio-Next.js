"use client"

import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6"

export default function Footer() {
    return (

        <footer className="text-white bg-slate-950 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-White">
      
      <span className="ml-3 text-white text-xl">Portfolio</span>
    </a>
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">Copyright &copy; 2024 —
      <a href="https://twitter.com/knyttneve" className="text-white ml-1" rel="noopener noreferrer" target="_blank">Designed by Khazra Shaikh &#9829; All right Reserved</a>
    </p>
    <div className="container border-t-0 border-gray-300 flex justify-end sm:px-4 py-9 mx-auto items-center w-[100%]">
          <ul className="flex gap-4 sm:gap-9 text-[20px] sm:text-[25px]  ">
            <li className="hover:animate-bounce   hover:text-blue-500 rounded-full p-2 bg-gray-600">
              <Link
                className=" rounded-xl"
                target="_blank"
                href={"https://www.linkedin.com/in/khazra-ayub-99b762260/"}
              >
                <FaLinkedin />
              </Link>
            </li>
            <li className="hover:animate-bounce hover:text-gray-400  rounded-full p-2 bg-gray-600">
              <Link
                className="rounded-xl"
                target="_blank"
                href={"https://github.com/Khazraayub"}
              >
                <FaGithub />
              </Link>
            </li>
            <li className=" hover:animate-bounce hover:text-orange-500  rounded-full p-2 bg-gray-600">
              <Link
                className="rounded-xl"
                target="_blank"
                href={"#"}
              >
                <MdEmail />
              </Link>
            </li>

            <li className="hover:animate-bounce rounded-full p-2 bg-gray-600">
              <Link className="rounded-xl  hover:text-blue-900" href={"#"}>
                <FaSquareFacebook />
              </Link>
            </li>
          </ul>
        </div>
  </div>
</footer>


    );
}

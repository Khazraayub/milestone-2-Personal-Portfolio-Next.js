import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <main>
        <title>Khazra Shaikh Portfolio</title>
   
    <section className="text-white bg-slate-800 min-h-[100%] body-font relative">
         <div className="container mx-auto flex px-3 sm:py-24 py-12 md:flex-row items-center flex-col-reverse">
        <div className="text-left sm:pl-4 lg:flex-grow md:w-1/2 lg:pl-16 md:pl-2 flex flex-col md:items-center items-center ">
         
    
          <h1 className="mb-5 mt-6 font-extrabold text-teal-300 text-[30px] sm:text-5xl text-center ">
            About Me
          </h1>
          

          <p className="mb-8 sm:text-[16px]  text-[14px] sm:leading-7 sm:px-5 pl-1 ">
          Assalamualaikum!
          I am Khazra Ayub.
          Alhamdulillah Telecom Engineer graduate from Mehran University of Engineering and Technology. 
          Want to enhance my knowledge and skills. My goal is to seeking and leverage knowledge in my field.
          Looking to utilize my technology and leadership skills in an esteemed organization. 
          Well versed with research-oriented marketing abilities and product analysis.
          I’m a dedicated front-end developer with expertise
          in HTML, CSS, JavaScript, TypeScript, and Tailwind CSS.
          I enjoy transforming ideas into interactive, responsive, and 
          visually engaging digital experiences. With a keen eye for detail and a strong foundation
          in modern web technologies, I build projects that are both functional and user-friendly.
          </p>
        </div>
        <div className=" lg:max-w-lg lg:w-full w-5/6 md:w-1/2 mb-8 md:mb-0 mt-20 sm:mt-2 ">
        <Image
            className="p-0 img rounded-full hover:bg-teal-300 hover:scale-105 duration-300 ease-linear cursor-pointer sm:pl-2  object-cover object-center mx-auto w-[22rem]"
            src="/images/download.png"
            width={500}
            height={500}
            alt={"picture"}
          ></Image>
        </div>
        </div>
    </section>
    </main>
  )
}

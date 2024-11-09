"use client"
import Image from "next/image";
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    
       <section className="text-white bg-slate-800 body-font">
  <div className="container mx-auto flex flex-col px-5 py-20 justify-center items-center">
     <img className="lg:w-1/4 md:w-1/4 w-4/6 mb-10 object-cover object-center img rounded-full  hover:scale-105 duration-300 ease-linear cursor-pointer " alt="hero" src="images/image1.jfif"/>
    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
       <h1 className="title-font sm:text-4xl font-extrabold text-3xl mb-4  text-teal-300"><Typewriter
  options={{
  strings: ['Telecom Engineer', 'Web Developer'],
     autoStart: true,
     loop: true,
   }}
 /></h1>
       <p className=" mb-8 leading-relaxed">Assalamualaikum! I’m a Khazra Shaikh Telecom Engineer and a love for crafting efficient and visually compelling digital experiences. I specialize in building responsive, user-centered websites and applications that look great on any device, and I'm currently exploring advanced tools like Next.js and Tailwind CSS to take my projects to the next level.</p>
      
   </div>
  </div>
 </section> 



  );
}
import React from 'react'

export default function Contact() {
  return (
    <main>
    <title>Khazra Shaikh Portfolio</title>
    <section className="text-white bg-slate-800 min-h-[100%] body-font relative">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-5xl text-2xl font-extrabold title-font mb-4 text-teal-300">Contact Me</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Feel free to ask anything</p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-300">Name</label>
              <input type="text" id="name" name="name" className="w-full  hover:bg-white bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="email" className="leading-7 text-sm text-gray-300">Email</label>
              <input type="email" id="email" name="email" className="w-full hover:bg-white bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="message" className="leading-7 text-sm text-gray-300">Message</label>
              <textarea id="message" name="message" className="w-full hover:bg-white bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>
          <div className="p-2 w-full">
            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Submit</button>
          </div>
          
        </div>
      </div>
    </div>
  </section>
  </main>
  )
}

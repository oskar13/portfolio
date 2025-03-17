import Image from "next/image"

export default function MainContactFooter() {
    return (
        <footer id='contact' className="w-full min-h-screen flex items-center justify-center bg-slate-900">
        <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
          <div className="w-full text-7xl font-bold">
            <h1 className="w-full md:w-2/3">That&apos;s it for now.</h1>
          </div>
          <div className="flex mt-8 flex-col md:flex-row md:justify-between mb-4">
            <p className="w-full md:w-2/3 text-gray-400 text-xl">Thank you for visiting my website. If you have any more
              questions, you can reach me through the links bellow.</p>

          </div>
          <div className="flex flex-col">
            <div className="flex flex-wrap justify-center pb-4">
              <a href="https://github.com/oskar13" target="_blank"
                className="bg-cyan-800 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center m-2 sm:w-40">
                <Image
                  src="./icons/github.svg"
                  width={500}
                  height={500}
                  alt="Github"
                  className="w-5 h-5 fill-current inline"
                />&nbsp;GitHub</a>
              <a href="https://www.linkedin.com/in/joosep-oskar-ehaver-93478911b/" target="_blank"
                className="bg-cyan-800 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center m-2 sm:w-40">
                <Image
                  src="./icons/linkedin.svg"
                  width={500}
                  height={500}
                  alt="Linkedin"
                  className="w-5 h-5 fill-current inline invert"
                />&nbsp;Linkedin</a>
              <a href="https://www.facebook.com/oskar.ehaver" target="_blank"
                className="bg-cyan-800 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center m-2 ">
                <Image
                  src="./icons/facebook.svg"
                  width={500}
                  height={500}
                  alt="Facebook"
                  className="w-5 h-5 fill-current inline invert"
                />&nbsp;Facebook</a>
              <a href="#"
                className="bg-cyan-800 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center m-2 sm:w-40">
                <Image
                  src="./icons/email.svg"
                  width={500}
                  height={500}
                  alt="Email"
                  className="w-5 h-5 fill-current inline invert"
                />&nbsp;E-mail</a>
            </div>
            <hr className="border-gray-600" />
            <p className="w-full text-center my-12 text-gray-600">Copyright © 2025 Joosep Oskar Ehaver</p>
          </div>
        </div>
      </footer>
    ) 
}
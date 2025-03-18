
import MainContactFooter from "../components/MainContactFooter";
import Image from "next/image";

import background from "../../public/img/booknfly/background.jpg"

export const metadata = {
  title: "Case Study: Book n Fly",
  description: "A Spring Boot app with React frontend, for searching flight and generating seat maps.",
};

export default function AboutPage() {
  return (
    <>
    <main> 

    <section className={`bg-gradient-to-b from-indigo-800 to-purple-800 bg-cover`}
    style={{ backgroundImage: `url(${background.src})`}}
    >
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1
                className="max-w-2xl mb-4 text-4xl  tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                <span className="font-bold" >Case Study:</span> Book&nbsp;n&apos;&nbsp;Fly</h1>
              <p className="max-w-2xl mb-6  lg:mb-8 md:text-lg lg:text-xl text-slate-700 px-4 py-3 bg-white rounded-xl">
              This project showcases a flight search and seat recommendation web app built for CGI summer internship application. It features a <strong>Spring Boot</strong> backend and <strong>React</strong> frontend, containerized with <strong>Docker</strong>. Using SerpAPI for real Google Flights data or mock data for offline testing.
              </p>

              <a href="https://github.com/oskar13/cgi-summer-internship-2025" target="_blank" 
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border-2 rounded-lg  focus:ring-4  text-white border-sky-700 hover:bg-sky-900 focus:ring-gray-800 bg-sky-700">
                <Image
                  src="./icons/github.svg"
                  width={500}
                  height={500}
                  alt="Github"
                  className="w-5 h-5 fill-current inline"
                />&nbsp;View On GitHub
              </a>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Image
                src="./img/booknfly/logo.svg"
                alt="Mini Tracker Logo"
                width={1217}
                height={360}
              />
            </div>
          </div>
        </section>




        <section className="max-w-screen-lg px-4 my-8 mx-auto ">
          <div className="mb-8">
            <h2 className="text-4xl mb-4">Overview</h2>
            <div className="sm:px-4">

                <p className="mb-4">The goal was to create a functional tool to search for flights and receive seat recommendations. The project integrates a Spring Boot backend, a React frontend, and Docker containerization, with real flight data sourced via SerpAPI’s Google Flights integration and a mock API for offline testing.</p>

              <p>The assignment required a web application with two core functionalities:</p>
            
                <ul className="list-disc pl-8 mb-4">
                    <li><strong>Flight Selection:</strong> Enable users to search flights based on criteria such as destination, date, flight time, and price.
                    </li>
                    <li><strong>Seat Recommendation:</strong> Recommend seats on a flight based on user preferences (e.g., window seat, extra legroom, proximity to exits) and display them on a seat plan with randomly generated occupied seats.</li>
                </ul>
                <p>Additional stretch goals included integrating real airline data, supporting flight transfers, and adding tests, seat classes, all while ensuring clear documentation and ease of deployment.</p>
                

            </div>
          </div>

        </section>

        <section className="max-w-screen-lg px-4 mx-auto">
          <h2 className="text-4xl mb-4">Planning</h2>
          <div className="sm:px-4">

            <p>The development began with a research phase to identify suitable flight data APIs, leading to the selection of SerpAPI for its access to Google Flights data. Functional requirements were defined, providing structure despite not all goals being fully met due to time constraints.</p>
          </div>
        </section>




        <section className="max-w-screen-lg px-4 mx-auto">

        <Image
            src={"./img/booknfly/diagram.svg"}
            width={200}
            height={100}
            className="w-full"
            alt="System Diagram"
        />


          <h2 className="text-4xl mb-4">Implementation</h2>
          <div className="sm:px-4">
            <p>The project was split into two main directories: <code>/frontend</code> for the React application and <code>/backend</code> for the Spring Boot service. <br /> Three deployment options were provided:</p>
            <ul className="list-disc pl-8 mb-4">
              <li><strong>Docker Hub:</strong> Prebuilt image for quick testing.</li>
                <li><strong>Local Docker Build: </strong>Custom image creation with some flexibility.</li>
                <li><strong>Local Development:</strong> Manual setup for backend (Maven/IDE) and frontend (npm).</li>
            </ul>
            <p>The flight search allowed searching based on user inputs and selection of the data source, mock or real data. Seat recommendations were visualized on a static seat plan with random occupancy. Mock data ensured functionality without an API key, enhancing ease of development and testing.</p>
          </div>
        </section>

        <section className="max-w-screen-lg px-4 my-8 mx-auto">
          <h2 className="text-4xl mb-4">Results</h2>
          <div className="sm:px-4">
            <p className="mb-2">The application successfully met core requirements:</p>
            <ul className="list-disc pl-8 mb-4">
              <li>Users could input search details, seat preferences and access real or mock data.</li>
              <li>A mock seat plan was displayed with seat recommendations.</li>
              <li>Dockerization and detailed setup instructions ensured easy deployment.</li>
            </ul>
          </div>
        </section>



    </main>
    <MainContactFooter />
    </>
  )
}
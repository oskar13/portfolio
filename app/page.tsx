import Image from 'next/image'
import Link from 'next/link';
import Slideshow from './components/Slideshow';
import MainContactFooter from './components/MainContactFooter';

const rmEventImages = [
  "/img/rmevent/1.png",
  "/img/rmevent/2.png",
  "/img/rmevent/3.png",
];

const booknFly = [
  "/img/booknfly/1.jpg",
  "/img/booknfly/2.jpg",
  "/img/booknfly/3.jpg",
];

export default function Home() {
  return (
    <main>





      {//<!-- Hero Section -->
      }
      <section className="bg-slate-800">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1
              className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              Hello, I am Oskar.<br /> <span className="text-cyan-200 bg-gradient-to-b from-cyan-200 to-cyan-600 inline-block text-transparent bg-clip-text">Full-Stack</span> Problem Solver <span
                className="text-3xl">🛠️</span></h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">With
              a background in software development and Asian studies, I combine technical expertise with a deep
              understanding of culture and communication. Whether crafting tailored web solutions or providing
              strategic consultations, I bridge the gap between technology and people.</p>
            <a href="#portfolio"
              className="underline inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 ring-primary-900">
              Skip to Portfolio
              <Image
                src="./icons/skip.svg"
                width={500}
                height={500}
                alt="Skip"
                className="w-5 h-5 ml-2 -mr-1 invert"
              />
            </a>
            <a href="#contact" id="contact-now"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border-2 rounded-lg  focus:ring-4  text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
              Contact Now
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img className=" border-4 border-white rounded-full overflow-hidden shadow-lg" src="img/profile.jpg"
              alt="Joosep Oskar Ehaver" />
          </div>
        </div>
      </section>


      <section id='about-me' className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 text-center">
        <h2 className="text-4xl mb-4 font-bold text-slate-700">About Me</h2>
        <div className='grid grid-cols-1'>
          <div>
            <p>

            </p>
          </div>
          <div>
            <h3 className='text-2xl mb-4 font-bold text-slate-700'>Skills</h3>
            <p className="text-xl italic text-gray-800 font-light mb-4">Here is a list of technologies I have actually used in projects and course work.</p>
            <h4 className='bg-blue-200 inline-block py-1 px-2 rounded-lg text-lg mb-4 mt-4  text-slate-700 font-semibold'>Programming Languages:</h4>
            <div className='mb-8'>
              <a href="https://go.dev/" className="bg-blue-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">Go</a>
              <a href="https://www.java.com/en/" className="bg-blue-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">Java</a>
              <a href="https://en.wikipedia.org/wiki/C%2B%2B" className="bg-blue-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">C / C++</a>
              <a href="https://www.php.net/" className="bg-blue-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">PHP</a>
              <a href="https://www.python.org/" className="bg-blue-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">Python</a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" className="bg-blue-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">JavaScript</a>
              <a href="https://www.typescriptlang.org/" target="_blank" className="bg-blue-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">TypeScript</a>
            </div>

            <h4 className='bg-purple-200 inline-block py-1 px-2 rounded-lg text-lg mb-4 mt-4  text-slate-700 font-semibold'>Frameworks/Libraries Backend:</h4>
            <div className='mb-8'>
              <a href="https://spring.io/projects/spring-boot" target="_blank" className="bg-purple-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">Spring Boot</a>
              <a href="https://nextjs.org/" target="_blank" className="bg-purple-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">Next.js</a>
              <a href="https://nodejs.org/en" target="_blank" className="bg-purple-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">Node.js</a>
              <a href="https://hibernate.org/" target="_blank" className="bg-purple-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">Hibernate</a>
            </div>


            <h4 className='bg-yellow-200 inline-block py-1 px-2 rounded-lg text-lg mb-4 mt-4  text-slate-700 font-semibold'>Frameworks/Libraries Frontend:</h4>
            <div className='mb-8'>
              <a href="https://react.dev/" target="_blank" className="bg-yellow-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">React</a>
              <a href="https://socket.io/" target="_blank" className="bg-yellow-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">Socket.io</a>
              <a href="https://getbootstrap.com/" className="bg-yellow-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">Bootstrap</a>
              <a href="https://tailwindcss.com/" className="bg-yellow-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">TailwindCSS</a>
            </div>

            <h4 className='bg-green-200 inline-block py-1 px-2 rounded-lg text-lg mb-4 mt-4  text-slate-700 font-semibold'>Tools & DevOps:</h4>
            <div className='mb-8'>
              <a href="https://git-scm.com/" target="_blank" className="bg-green-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">Git</a>
              <a href="https://cmake.org/" className="bg-green-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">CMake</a>
              <a href="https://gradle.org/" className="bg-green-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">Gradle</a>
              <a href="https://www.docker.com/" className="bg-green-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">Docker</a>
              <a href="https://github.com/features/actions" target="_blank" className="bg-green-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">Github Actions</a>


            </div>

            <h4 className='bg-gray-200 inline-block py-1 px-2 rounded-lg text-lg mb-4 mt-4  text-slate-700 font-semibold'>Databases:</h4>
            <div>
              <a href="https://www.mysql.com/" target="_blank" className="bg-gray-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">MySQL</a>
              <a href="https://www.postgresql.org/" className="bg-gray-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">PostgreSQL</a>
              <a href="https://www.mongodb.com/" className="bg-gray-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">MongoDB</a>


            </div>
          </div>
        </div>
      </section>




      <section id="portfolio"
        className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 text-center">
        <h2 id="portfolio" className="text-4xl mb-4 font-bold text-slate-700">Portfolio</h2>
        <p className="text-xl italic text-gray-800 font-light mb-4">Here are some of my projects...</p>







        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="grid gap-4">
            <div>




              <img className="h-auto max-w-full rounded-lg mb-4" src="img/tracker/1.png" alt="" />


              <h3 className="text-3xl mb-2"><strong className="text-cyan-700">Full-Stack Application:</strong> <strong className='text-slate-700'>Mini Tracker</strong> <br /> <span className="italic text-2xl">A Lightweight Torrent Tracker & Community Hub</span></h3>
              <p className="mb-4 leading-8"><strong className="text-gray-700">Tech Stack: </strong>
                <a href="https://go.dev/" className="bg-blue-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">Go</a>

                <a href="https://www.docker.com/" className="bg-green-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">Docker</a>

                <a href="https://www.mysql.com/" className="bg-gray-300 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">MySQL</a>

                <a href="https://getbootstrap.com/" className="bg-yellow-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">Bootstrap</a>

                <a href="https://tailwindcss.com/" className="bg-yellow-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">TailwindCSS</a>

                <a href="https://en.wikipedia.org/wiki/BitTorrent" className="bg-purple-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">BitTorrent</a>

              </p>
              <p className="mb-4">Mini Tracker is a small/mid-scale torrent tracker and web platform built in Go making possible to <strong>share large files between friends or within an organization</strong>.
                Featuring both public and private tracking modes. It includes community features like invite-based accounts, chat and user-managed access rules for torrents.
                Designed with <strong>easy deployment via Docker</strong>, it offers a simple interface for sharing large using
                the
                BitTorrent protocol, <strong>a low-cost P2P alternative to cloud solutions</strong>.
              </p>
              <div className="flex align-middle items-center justify-center mb-4">
                <a href="https://github.com/oskar13/mini-tracker" target="_blank"
                  className="mr-4 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-slate-500 border-2 rounded-lg  focus:ring-4  text-white border-slate-400 hover:bg-gray-700 focus:ring-gray-800">
                  <Image
                    src="./icons/github.svg"
                    width={500}
                    height={500}
                    alt="Github"
                    className="w-5 h-5 fill-current inline"
                  />
                  &nbsp;
                  Browse On GitHub
                </a>

                <a href="#" target="_blank"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-emerald-600 border-2 rounded-lg  focus:ring-4  text-white border-emerald-600 hover:bg-emerald-700 focus:ring-emerald-200">
                  <Image
                    src="./icons/liveplay.svg"
                    width={500}
                    height={500}
                    alt="View Live"
                    className="w-6 h-6 fill-current inline invert"
                  />
                  View Live
                </a>
              </div>
              <div className="flex align-middle items-center justify-center">
                <Link
                  className="mr-4 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-slate-500 border-2 rounded-lg  focus:ring-4  text-white border-slate-400 hover:bg-gray-700 focus:ring-gray-800"

                  href="./minitracker-case-study.html">

                  <Image
                    src="./icons/inspect.svg"
                    width={500}
                    height={500}
                    alt="Case Study"
                    className="w-4 h-4 fill-current inline invert"
                  />
                  &nbsp;
                  Case Study
                </Link>

              </div>
            </div>
          </div>






          <div className="grid gap-4">
            <div>




              <Slideshow images={booknFly} />


              <h3 className="text-3xl mb-2"><strong className="text-cyan-700">Java Spring Boot and React:</strong> <strong className='text-slate-700'>Book n&apos; Fly</strong> <br /> <span className="italic text-2xl">Search Google Flights</span></h3>
              <p className="mb-4 leading-8"><strong className="text-gray-700">Tech Stack: </strong>
                <a href="https://www.java.com/en/" className="bg-blue-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">Java</a>
                <a href="https://www.typescriptlang.org/" target="_blank" className="bg-blue-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">TypeScript</a>

                <a href="https://www.docker.com/" className="bg-green-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">Docker</a>

                <a href="https://spring.io/projects/spring-boot" className="bg-purple-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">Spring Boot</a>

                <a href="https://react.dev/" className="bg-yellow-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">React</a>

                <a href="https://tailwindcss.com/" className="bg-yellow-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">TailwindCSS</a>

              </p>
              <p className="mb-4">Book n’ Fly is a flight search and seat recommendation web app built with a <strong>Spring Boot</strong> backend and a React frontend. Designed for the CGI summer internship application, it integrates real flight data via SerpAPI’s Google Flights API while also supporting offline testing with a mock data mode. Packaged with <strong>Docker</strong> for easy deployment, it offers multiple setup options, from a prebuilt Docker image to local development.
              </p>
              <div className="flex align-middle items-center justify-center mb-4">
                <a href="https://github.com/oskar13/cgi-summer-internship-2025" target="_blank"
                  className="mr-4 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-slate-500 border-2 rounded-lg  focus:ring-4  text-white border-slate-400 hover:bg-gray-700 focus:ring-gray-800">
                  <Image
                    src="./icons/github.svg"
                    width={500}
                    height={500}
                    alt="Github"
                    className="w-5 h-5 fill-current inline"
                  />
                  &nbsp;
                  Browse On GitHub
                </a>

                <a href="http://booknfly.jooseposkarehaver.com" target="_blank"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-emerald-600 border-2 rounded-lg  focus:ring-4  text-white border-emerald-600 hover:bg-emerald-700 focus:ring-emerald-200">
                  <Image
                    src="./icons/liveplay.svg"
                    width={500}
                    height={500}
                    alt="View Live"
                    className="w-6 h-6 fill-current inline invert"
                  />
                  View Live
                </a>
              </div>
              <div className="flex align-middle items-center justify-center">
                <Link
                  className="mr-4 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-slate-500 border-2 rounded-lg  focus:ring-4  text-white border-slate-400 hover:bg-gray-700 focus:ring-gray-800"

                  href="./book-n-fly.html">

                  <Image
                    src="./icons/inspect.svg"
                    width={500}
                    height={500}
                    alt="Case Study"
                    className="w-4 h-4 fill-current inline invert"
                  />
                  &nbsp;
                  Case Study
                </Link>

              </div>
            </div>
          </div>






        </div>




        <div className="md:grid md:grid-cols-2 gap-4 py-8 md:py-16">
          
            <div className='grid gap-4'>
            <Slideshow images={rmEventImages} interval={3000} />
              <h3 className="text-3xl mb-2"><strong className="text-cyan-700">Next.js Site:</strong> RM Event <br /> <span className="italic text-2xl">Web Design and Development (Under Construction)</span></h3>
              <p className="mb-4 leading-8"><strong className="text-gray-700">Tech Stack: </strong>
                <a href="https://www.typescriptlang.org/" target="_blank" className="bg-blue-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">TypeScript</a>
                <a href="https://www.mongodb.com/" target='_blank' className="bg-gray-300 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">MongoDB</a>
                <a href="https://tailwindcss.com/" target="_blank" className="bg-yellow-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">TailwindCSS</a>
                <a href="https://nextjs.org/" target="_blank" className="bg-purple-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">Next.js</a>
                <a href="https://payloadcms.com/" target="_blank" className="bg-purple-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">Payload CMS</a>
                <a href="https://github.com/features/actions" target="_blank" className="bg-purple-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">Github Actions</a>
              </p>
              <p className="mb-4">
                A high-performance, multi-language landing page built with Next.js and Payload CMS. The project is designed to be lightweight, flexible and scalable, with a headless CMS for content management and MongoDB as the database.
              </p>
              <p>
                <a href="https://github.com/oskar13/rm-event" target="_blank"
                  className="mr-4 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-slate-500 border-2 rounded-lg  focus:ring-4  text-white border-slate-400 hover:bg-gray-700 focus:ring-gray-800">
                  <Image
                    src="./icons/github.svg"
                    width={500}
                    height={500}
                    alt="Github"
                    className="w-5 h-5 fill-current inline"
                  />
                  &nbsp;
                  Browse On GitHub
                </a>
                <a href="http://rmevent.ee" target="_blank"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-emerald-600 border-2 rounded-lg  focus:ring-4  text-white border-emerald-600 hover:bg-emerald-700 focus:ring-emerald-200">
                  <Image
                    src="./icons/liveplay.svg"
                    width={500}
                    height={500}
                    alt="View Live"
                    className="w-6 h-6 fill-current inline invert"
                  />
                  View Live
                </a>
              </p>
            </div>
        



          <div className="grid gap-4">
            <div>
              <video muted autoPlay className="h-auto max-w-full rounded-lg mb-4" loop src="img/rae/video.mp4"></video>
              <h3 className="text-3xl mb-2"><strong className="text-cyan-700">WordPress Theme:</strong> Rae Meierei Restoran&nbsp;Club <br /> <span className="italic text-2xl">Web Design and Development</span></h3>
              <p className="mb-4 leading-8"><strong className="text-gray-700">Tech Stack: </strong>
                <a href="https://www.php.net/" className="bg-blue-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">PHP</a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="bg-blue-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">JavaScript</a>
                <a href="https://tailwindcss.com/" className="bg-yellow-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">TailwindCSS</a>
                <a href="https://wordpress.org/" className="bg-purple-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm inline-block mr-1">WordPress</a>
              </p>
              <p className="mb-4">A fully responsive WordPress theme built with TailwindCSS for a restaurant club.
                Theme is
                integrated with <a className="underline text-cyan-800" href="https://wpml.org/"
                  target="_blank">WPML</a> and <a className="underline text-cyan-800" href="https://www.advancedcustomfields.com/"
                    target="_blank">ACF</a> for managing multiple language content through the admin interface. Features a third-party
                JavaScript
                gallery for showcasing interior. Optimized for performance and seamless user experience across
                devices.
              </p>
              <p>
                <a href="https://web.archive.org/web/20240830132035/https://raemeiereiclub.ee/" target="_blank"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-slate-500 border-2 rounded-lg  focus:ring-4  text-white border-slate-400 hover:bg-gray-700 focus:ring-gray-800">
                  Visit&nbsp;<i className="font-light">(Archived)</i>
                </a>
              </p>
            </div>

          </div>



        </div>
      </section>





      {//<!-- Education section-->
      }
      <section className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16">
        <h2 id="education" className="text-4xl mb-4 font-bold text-slate-700 text-center">📚 Education</h2>

        <ul className="">
          <li className='mb-4'>

            <div className="flex md:gap-6 gap-4">
              <div className='w-[10%] pt-2'>
                <Image
                  src="./icons/kood.svg"
                  width={400}
                  height={400}
                  alt="Baltic Computer Systems"
                  className='w-full h-auto'
                />
              </div>
              <div className="mb-8 flex-1">
                <h3 className="text-2xl">Kood/Jõhvi - Software Development - Ongoing</h3>
                <p className="text-gray-600 text-sm mb-2">January 2024 - July 2025</p>
                <p>Currently enrolled in an innovative, project-based software development program focused on
                  real-world coding challenges.</p>
                <p>Developing expertise in software architecture, system design, and full-stack application
                  development through hands-on projects using <strong>Golang</strong> and <strong>JavaScript</strong>.
                </p>
              </div>
            </div>
          </li>
          <li className='mb-4'>
            <div className="flex md:gap-6 gap-4">
              <div className='w-[10%] pt-2'>
                <Image
                  src="./icons/bcs.svg"
                  width={400}
                  height={400}
                  alt="Baltic Computer Systems"
                  className='w-full h-auto'
                />


              </div>
              <div className="mb-8 flex-1">
                <h3 className="text-2xl">BCS Training - Java Junior Back-End Developer Course</h3>
                <p className="text-gray-600 text-sm mb-2">November 2022 - February 2023</p>
                <p>450-hour intensive program focused on <strong>Spring Boot</strong> for back-end development.
                  Covered <strong>Hibernate</strong>, <strong>SQL</strong> databases, and <strong>RESTful API design</strong>.
                  Gained hands-on experience in building scalable applications and following best coding
                  practices.
                </p>
              </div>
            </div>
          </li>
          <li className='mb-4'>
            <div className="flex md:gap-6 gap-4">
              <div className='w-[10%] pt-2'>
                <Image
                  src="./icons/tlu.svg"
                  width={100}
                  height={100}
                  alt="Tallinn University"
                  className='w-full h-auto'
                />
              </div>
              <div className="mb-8 flex-1">
                <h3 className="text-2xl">Tallinn University / B.A. Asian Studies<span className="italic text-gray-500">
                  - Incomplete</span></h3>
                <p className="text-gray-600 text-sm mb-2">January 2017 - May 2020</p>
                <p>Specialized in Japanese culture and language, with a side focus on anthropology.
                  Developed strong intercultural communication skills and a deep understanding of East Asian
                  history and society.

                </p>
              </div>
            </div>
          </li>

          <li >
            <div className="flex md:gap-6 gap-4">
              <div className='w-[10%] pt-2'>
                <Image
                  src="./icons/tlu.svg"
                  width={100}
                  height={100}
                  alt="Tallinn University"
                  className='w-full h-auto'
                />
              </div>
              <div className="mb-8 flex-1">
                <h3 className="text-2xl">Tallinn University / B.S. Computer Science <span
                  className="italic text-gray-500"> - Incomplete</span></h3>
                <p className="text-gray-600 text-sm mb-2">September 2013 - May 2016</p>
                <p>Progressed through the majority of the program, gaining theoretical knowledge and practical experience with databases, algorithms
                  and data structures. Completed courses in <strong>JavaScript</strong>, <strong>Java</strong>, <strong>C/C++</strong>, <strong>PHP</strong>, <strong>Python</strong>.
                  Participated in multiple hackathons, working in teams to develop ideas to MVPs under time
                  constraints.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>


      <section className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 text-center">
        <h2 id="cv" className="text-4xl mb-4 font-bold text-slate-700">Curriculum Vitae</h2>
        <p className="text-xl italic text-gray-800 font-light mb-4">Skip the clutter - download my CV and get the full
          picture in one click.</p>
        <p className="relative items-center"><a className="w-52 drop-shadow-md inline-flex items-center justify-center mb-4"
          target="_blank" href="/downloads/cv.pdf"><img src="img/cv.png" alt="CV preview" /></a></p>

        <p> <a href="/downloads/cv.pdf" target="_blank"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-slate-700 border rounded-lg  focus:ring-4  text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
          Download PDF
        </a></p>
      </section>


      <MainContactFooter />



    </main>
  );
}

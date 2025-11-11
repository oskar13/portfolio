
import MainContactFooter from "../components/MainContactFooter";
import Image from "next/image";

import background from "../../public/img/mortalis/header.webp"


export const metadata = {
    title: "Case Study: Mortalis Game",
    description: "Various full stack projects for the upcoming Mortalis Back To The Roots MMO",
};


export default function Mortalis() {
    return (
        <>
            <main>

                <section className={`bg-gradient-to-b from-indigo-800 to-purple-800 bg-cover`}
                    style={{ backgroundImage: `url(${background.src})` }}
                >
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1
                                className="max-w-2xl mb-4 text-4xl  tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                                <span className="font-bold" >Case Study:</span> Web Projects for Mortalis Game</h1>
                            <p className="max-w-2xl mb-6  lg:mb-8 md:text-lg lg:text-xl text-slate-700 px-4 py-3 bg-white rounded-xl">
                                <span className="text-cyan-600 font-bold">Mortalis: Back to the Roots</span> is an upcoming, ground-breaking, survival MMORPG. My task was to rebuild their website and community portal with future expansions in mind.
                            </p>

                            <a href="https://mortalisgame.com" target="_blank"
                                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border-2 rounded-lg  focus:ring-4  text-white border-sky-700 hover:bg-sky-900 focus:ring-gray-800 bg-sky-700">
                                <Image
                                    src="./img/mortalis/logo.svg"
                                    width={500}
                                    height={500}
                                    alt="Github"
                                    className="w-5 h-5 fill-current inline"
                                />&nbsp;Visit the Site
                            </a>
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <Image
                                src="./img/mortalis/logo.svg"
                                alt="Mortalis Logo"
                                width={1217}
                                height={360}
                            />
                        </div>
                    </div>
                </section>




                <section className="max-w-screen-lg px-4 my-8 mx-auto ">
                    <div className="mb-8">
                        <h2 className="text-4xl mb-4">Introduction</h2>
                        <div className="sm:px-4">

                            <p className="mb-4">When I joined Mortalis Game as a web developer, my goal was to rebuild their website and start putting down the specifications for the community portal - Survivors Camp. Quickly it became obvious that the old site running on WordPress was too slow and the capabilities were limited, especially with the upcoming requirements for the Survivors Camp. So I started putting together a new tech stack that would be easy to maintain and extend as needed because at that point we didn&apos;t know what we were exactly going to build.</p>

                        </div>
                    </div>

                </section>






                <section className="max-w-screen-lg px-4 my-8 mx-auto">
                    <h2 className="text-4xl mb-4">System Architecture</h2>
                    <div className="sm:px-4">

                        <ol className="list-decimal ml-6 space-y-6">
                            <li>
                                <strong>Marketing Website (Next.js)</strong>
                                <ul className="list-disc ml-5 mt-2">
                                    <li><strong>Purpose:</strong> Hosts landing pages and other primarily static content for public users.</li>
                                    <li><strong>Technology:</strong> Built with Next.js, optimized for SEO and fast load times, statically generated.</li>
                                    <li>
                                        <strong>Functionality:</strong>
                                        <ul className="list-circle ml-5">
                                            <li>Serves static pages and general marketing information.</li>
                                            <li>Does not include any backend APIs or dynamic user interactions.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>Survivors Camp (Next.js + API Layer)</strong>
                                <ul className="list-disc ml-5 mt-2">
                                    <li><strong>Purpose:</strong> Acts as the main interactive application for the user community.</li>
                                    <li>
                                        <strong>Technology:</strong>
                                        <ul className="list-circle ml-5">
                                            <li>Built with Next.js for both frontend and server-side rendering.</li>
                                            <li>Includes a quite large backend API layer for internal and external integrations.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>Functionality:</strong>
                                        <ul className="list-circle ml-5">
                                            <li>Provides APIs consumed by external services (e.g., the Discord bot, scheduler, etc.).</li>
                                            <li>
                                                Hosts a frontend interface displaying WordPress posts, which are:
                                                <ul className="list-circle ml-5">
                                                    <li>Pulled from a headless WordPress instance.</li>
                                                    <li>Synced into a local PostgreSQL database for faster access and consistency.</li>
                                                </ul>
                                            </li>
                                            <li>Maintains account metadata, but not the actual authentication or identity data.</li>
                                            <li>Provides pages and APIs for game client authentication.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>Authentication Server (“Auth Server”)</strong>
                                <ul className="list-disc ml-5 mt-2">
                                    <li><strong>Purpose:</strong> Central authority for user identity and authentication.</li>
                                    <li><strong>Technology:</strong> Golang, PostgreSQL, JWT, OAuth2.0, SSO, etc.</li>
                                    <li>
                                        <strong>Functionality:</strong>
                                        <ul className="list-circle ml-5">
                                            <li>Manages all user accounts, authentication, and identity data.</li>
                                            <li>
                                                The community portal syncs account data from this service.
                                            </li>
                                            <li>Ensures a consistent identity system across multiple services.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>Discord Bot</strong>
                                <ul className="list-disc ml-5 mt-2">
                                    <li><strong>Purpose:</strong> Connects Survivors Camp and the Discord server to enrich user interaction.</li>
                                    <li><strong>Technology:</strong> Golang, SQLite</li>
                                    <li>
                                        <strong>Functionality:</strong>
                                        <ul className="list-circle ml-5">
                                            <li>Fetches and updates user data via the community portal’s APIs.</li>
                                            <li>Provides rich user profiles and synchronized information between the web portal and the Discord community.</li>
                                            <li>Posts periodic messages to the Discord server to keep users engaged and informed, like weekly leaderboards, etc.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                        </ol>


                    </div>
                </section>

                <section className="max-w-screen-lg px-4 my-8 mx-auto">
                    <h2 className="text-4xl mb-4">Screenshots</h2>
                    <h3 className=" text-2xl mb-4">Main Page</h3>
                    <a href="./img/mortalis/1.webp" target="_blank" rel="noopener noreferrer">
                        <Image
                            src={"./img/mortalis/1.webp"}
                            width={200}
                            height={100}
                            className="w-full mb-4"
                            alt="Main page of application"
                        />
                    </a>

                    <h3 className=" text-2xl mb-4">News Page</h3>
                    <p className="mb-4">Here you can see posts from WordPress backend that are displayed by Next.js</p>
                    <a href="./img/mortalis/2.webp" target="_blank" rel="noopener noreferrer">
                        <Image
                            src={"./img/mortalis/2.webp"}
                            width={200}
                            height={100}
                            className="w-full mb-4"
                            alt="Flight page"
                        />
                    </a>

                    <h3 className=" text-2xl mb-4">Whitepaper</h3>
                    <a href="./img/mortalis/3.webp" target="_blank" rel="noopener noreferrer">
                        <Image
                            src={"./img/mortalis/3.webp"}
                            width={200}
                            height={100}
                            className="w-full mb-4"
                            alt="Flight page"
                        />
                    </a>

                    <h3 className=" text-2xl mb-4">Survivors Camp Front Page</h3>

                    <a href="./img/mortalis/4.webp" target="_blank" rel="noopener noreferrer">
                        <Image
                            src={"./img/mortalis/4.webp"}
                            width={200}
                            height={100}
                            className="w-full mb-4"
                            alt="Flight page"
                        />
                    </a>

                    <h3 className=" text-2xl mb-4">Survivors Camp - Dashboard</h3>

                    <a href="./img/mortalis/5.webp" target="_blank" rel="noopener noreferrer">
                        <Image
                            src={"./img/mortalis/5.webp"}
                            width={200}
                            height={100}
                            className="w-full mb-4"
                            alt="Flight page"
                        />
                    </a>

                    <p className="mb-4">We provide users statistics to track how much RS they have accumulated, what is the global supply doing and how they are ranking compared to their peers.</p>

                    <a href="./img/mortalis/6.webp" target="_blank" rel="noopener noreferrer">
                        <Image
                            src={"./img/mortalis/6.webp"}
                            width={200}
                            height={100}
                            className="w-full mb-4"
                            alt="Flight page"
                        />
                    </a>          

                    <h3 className=" text-2xl mb-4">Survivors Camp - Account Settings</h3>

                    <p className="mb-4">The account system allows users to link and unlink different identity providers. Like mentioned before, by linking discord user unlocks more features we can offer them, extending Survivors Camp functionality beyond just a webpage. </p>

                    <a href="./img/mortalis/7.webp" target="_blank" rel="noopener noreferrer">
                        <Image
                            src={"./img/mortalis/7.webp"}
                            width={200}
                            height={100}
                            className="w-full mb-4"
                            alt="Flight page"
                        />
                    </a>

                                        <h3 className=" text-2xl mb-4">Survivors Camp - Profile</h3>

                    <p className="mb-4">Users are able to customize their profile which can be loaded Discord and used in various other services in the future.</p>

                    <a href="./img/mortalis/8.webp" target="_blank" rel="noopener noreferrer">
                        <Image
                            src={"./img/mortalis/8.webp"}
                            width={200}
                            height={100}
                            className="w-full mb-4"
                            alt="Flight page"
                        />
                    </a>

                </section>



            </main>
            <MainContactFooter />
        </>
    )
}
import Image from "next/image";

export const metadata = {
  title: "Case Study: Minitorrent",
  description: "Minitorrent is a Go-based torrent tracker with public/private sharing, Docker deployment, and community features like chat, profiles, and invites.",
};

export default function AboutPage() {
  return (

    <>
      <main>

        {//<!-- Introduction header -->
        }
        <section className="bg-gradient-to-b from-indigo-800 to-purple-800">
          <div className="grid max-w-screen-lg px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1
                className="max-w-2xl mb-4 text-4xl  tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                <span className="font-bold" >Case Study:</span> Mini Tracker</h1>
              <p className="max-w-2xl mb-6  lg:mb-8 md:text-lg lg:text-xl text-gray-200 px-4">
                Mini Tracker is a lightweight, self-hosted <strong>torrent tracker</strong> and community hub. Built with <strong>Go</strong> and <strong>Docker</strong> for easy deployment. Minitorrent provides a streamlined, decentralized alternative to traditional cloud storage solutions.
              </p>

              <a href="https://github.com/oskar13/mini-tracker" target="_blank" id="contact-now"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border-2 rounded-lg  focus:ring-4  text-white border-purple-700 hover:bg-purple-700 focus:ring-gray-800 bg-violet-900">
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
                src="./img/mini_tracker.svg"
                alt="Mini Tracker Logo"
                width={1217}
                height={360}
              />
            </div>
          </div>
        </section>




        <section className="max-w-screen-lg px-4 py-8 mx-auto md:grid-cols-12 md:grid md:gap-4">
          <div className=" md:col-span-6 items-center md:mb-0 mb-8">
            <h2 className="text-4xl mb-4">The Problem</h2>
            <div className="px-4">
              <p>Handling large files can be expensive and cumbersome when relying on traditional cloud storage providers.
                Setting up an FTP server is an option but uploading large files can be interrupted by network disconnections, requiring users to restart the process from scratch.
                Additionally when creating torrents of files, privacy concerns arise when sharing files on public torrent trackers, and widely known public trackers may be blocked by ISPs or
                attract unwanted attention.</p>
            </div>
          </div>
          <Image
          src={"./img/p2p_info.svg"}
          width={728}
          height={446}
          alt="Graphic about cloud storage vs P2P"
          className="w-full md:col-span-6">

          </Image>
        </section>

        <section className="max-w-screen-lg px-4 py-8 mx-auto">
          <h2 className="text-4xl mb-4">The Solution</h2>
          <div className="px-4">

            <p>Mini Tracker leverages the BitTorrent protocol to facilitate large file transfers while maintaining control over access and privacy. </p>
            <p>The idea is simple: let users spin up their own tracker, upload torrents, and share them with fine-tuned visibility settings, from fully public to locked-down private links or group-only access. A web interface using Bootstrap ties it all together, offering user profiles, community hubs, and a chat system to foster collaboration. Whether it’s friends swapping encrypted backups or colleagues distributing a massive dataset, Mini Tracker keeps it minimal, cost-effective, and under the radar - no cloud subscriptions or complex server configs required.</p>
          </div>
        </section>

        <section className="max-w-screen-lg px-4 py-8 mx-auto">

          <h2 className="text-4xl mb-4">Development</h2>
          <div className="px-4">
            <p>The development process began with planning the initial functional requirements, designing a MySQL database schema, and implementing a torrent parser. The tracker was built in Go, featuring both public and private torrent tracking modes. A web interface was created to facilitate user interaction, community features, and torrent management.</p>
            <h3 className="text-lg mb-1">Key development outcomes:</h3>
            <ul className="list-disc pl-8 mb-4">
              <li>Invite-based user registration to maintain a private network.</li>
              <li>MySQL/MariaDB database with JSON field support for metadata storage for efficient storage.</li>
              <li>Implementation of a simple chat system and user profiles.</li>
              <li>Docker support for easy deployment and scalability.</li>
              <li>Admin panel built using TailwindCSS for lightweight styling.</li>
            </ul>
          </div>
        </section>

        <section className="max-w-screen-lg px-4 py-8 mx-auto">
          <h2 className="text-4xl mb-4">Lessons Learned & Future Plans</h2>
          <div className="px-4">
            <p className="mb-2">Building Mini Tracker highlighted significant limitations in BitTorrent&apos;s design. While highly efficient for file distribution, the protocol lacks inherent privacy protections and access control. Without built-in encryption or mechanisms to prevent unauthorized peers from accessing data, true security remains elusive. Mini Tracker&apos;s implementation of unique tracking URLs and user authentication mitigates visibility concerns but does not offer a comprehensive solution. A fundamental overhaul of the protocol would be necessary to achieve robust security, which extends beyond this project’s current scope. However, the community features, such as secure decryption key sharing via chat, serve as a practical measure for encrypting sensitive files prior to distribution.</p>
            <p className="mb-2">Looking ahead, WebRTC integration presents an opportunity to enhance security. Its encrypted, browser-based peer-to-peer channels could serve as an alternative or complement to BitTorrent, reducing reliance on trackers and improving confidentiality. Additional plans include tighter Discord integration for seamless sharing and refining user-managed access rules to enhance privacy controls. For now, Mini Tracker serves as a proof of concept - lightweight, functional, and well-positioned for future evolution.</p>
            <h3 className="text-lg mb-1">Future development plans include:</h3>
            <ul className="list-disc pl-8 mb-4">
              <li>Exploring <a className="underline text-sky-700 cursor-pointer" href="https://en.wikipedia.org/wiki/WebRTC">WebRTC</a>-based P2P file transfers to provide encrypted, real-time sharing without a tracker.</li>
              <li>Enhancing access control mechanisms for better user authentication and authorization.</li>
              <li>Developing additional community features, such as user reputation tracking and group-based permissions.</li>
            </ul>
            <p>Mini Tracker aims to remain a lightweight yet powerful solution for private torrent tracking, enabling users to share large files securely and efficiently.</p>
          </div>
        </section>


      </main>


      <footer>Insert nav footer here</footer>
    </>


  );
}
import Header from "~/components/header/Header";
import Cursor from "~/components/cursor/Cursor";
import Gallery from "~/components/gallery/Gallery";
import Image from "~/components/image/Image";
import { headshot as headshotBlur } from "~/components/gallery/Blur";

import { useInView } from "react-intersection-observer";

const photoWidth = "25.5rem";
const photoHeight = "32.25rem";
const photoWidthSmall = "12.75rem";
const photoHeightSmall = "16.125rem";

export default function Home() {
  const { ref: refTitle, inView: inViewTitle } = useInView({
    threshold: 0,
  });
  return (
    <main className="h-dvh flex flex-col overflow-hidden bg-neutral-950">
      <Cursor/>
      <Header/>
      <div className="flex-1 overflow-y-scroll snap-y snap-proximity h-[calc(100vh-theme(spacing.16))]">
        <section  ref={refTitle} className="h-full text-neutral-50 flex flex-col items-center justify-center text-center font-raleway">
          <h1
            className={`pb-10 text-7xl text-neutral-50 md:text-9xl ${
              inViewTitle ? "fade-title-text" : ""
            }`}
          >
            Sarah Meyers
          </h1>
          <p className="text-lg text-neutral-50 md:text-2xl">Senior Full-Stack Software Engineer</p>
        </section>
        <section className="h-full text-neutral-50 grid grid-cols-1 items-center justify-center md:grid-cols-2">
          <div className="text-md mx-10 font-raleway text-neutral-50">
            <div className="line bg-neutral-50"></div>
            <h1 className="pb-4 text-2xl">About</h1>
            <p>
              San Diego based software developer who likes to spend her time with
              hobbies like fashion and video games when she isn&apos;t designing and developing full-stack websites.
            </p>
            <p>
              Pursuing my passion for frontend development, user-centered design, and problem solving, leveraging my 7+ years of full-stack experience.
            </p>
          </div>
          <div
            className="relative mx-auto mr-10 overflow-hidden rounded-full hidden md:block">
            <Image
              src="/images/headshot.jpg"
              alt="Picture of Sarah Meyers"
              width={photoWidth}
              height={photoHeight}
              blur={headshotBlur}
            />
          </div>
          <div
            className="relative mx-auto overflow-hidden rounded-full block md:hidden">
            <Image
              src="/images/headshot.jpg"
              alt="Picture of Sarah Meyers"
              width={photoWidthSmall}
              height={photoHeightSmall}
              blur={headshotBlur}
            />
          </div>
        </section>
        <section className="h-full snap-start text-neutral-50 font-raleway">
          <div className="p-10">
            <div className="line bg-neutral-50"></div>
            <h1 className="pb-5 text-2xl">Experience</h1>
            <h2 className="pb-2 text-lg">Acrisure - Software Engineer</h2>
            <p className="pb-2 text-sm">July 2024 - Present</p>
            <h3 className="text-md pb-5 italic">San Diego, CA</h3>
            <ul className="experience-list mx-5 list-outside list-disc">
              <li>
                Technical lead for multiple full-stack projects, ensuring on-time delivery through cross-functional collaboration with product and design teams, proactive stakeholder communication, and mentorship of junior engineers.
              </li>
            </ul>

            <br/>
            
            <h2 className="pb-2 text-lg">Viasat - Software Engineer</h2>
            <p className="pb-2 text-sm">August 2018 - November 2023</p>
            <h3 className="text-md pb-5 italic">Carlsbad, CA - Remote</h3>
          </div>
        </section>
        <section className="h-full snap-start text-neutral-50 font-raleway">
          <div className="p-10">
            <div className="line bg-neutral-50"></div>
            <h1 className="pb-5 text-2xl">Education</h1>
            <h2 className="pb-2 text-lg">B.S. in Computer Science</h2>
            <p className="pb-2 text-sm">December 2017</p>
            <h3 className="text-md italic">
              University of Maryland, College Park, MD
            </h3>
          </div>
        </section>
        <section className="h-full snap-start text-neutral-50">
          <Gallery />
        </section>
      </div>
    </main>
  );
}

import Header from "~/components/header/Header";
import Cursor from "~/components/cursor/Cursor";
import Gallery from "~/components/gallery/Gallery";
import Image from "~/components/image/Image";

import { useInView } from "react-intersection-observer";

const photoWidth = "25rem";
const photoHeight = "25rem";
const photoWidthSmall = "15rem";
const photoHeightSmall = "15rem";

export default function Home() {
  const { ref: refTitle, inView: inViewTitle } = useInView({
    threshold: 0,
  });
  return (
    <main className="flex h-dvh flex-col overflow-hidden bg-neutral-950">
      <Cursor />
      <Header />
      <div className="h-[calc(100vh-theme(spacing.16))] flex-1 overflow-y-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <section
          ref={refTitle}
          className="font-raleway flex h-full flex-col items-center justify-center text-center text-neutral-50"
        >
          <h1
            className={`pb-10 text-7xl text-neutral-50 md:text-9xl ${
              inViewTitle ? "fade-title-text" : ""
            }`}
          >
            Sarah Meyers
          </h1>
          <p className="text-lg text-neutral-50 md:text-2xl">
            Senior Full-Stack Software Engineer
          </p>
        </section>
        <section className="flex h-full items-center justify-center text-neutral-50">
          <div className="grid w-full grid-cols-1 items-center justify-center md:w-4/5 md:grid-cols-2">
            <div className="text-md font-raleway mx-5 text-neutral-50 md:mx-10">
              <p className="mb-5 rounded-xl bg-neutral-900 p-5">
                San Diego based software developer who likes to spend her time
                with hobbies like fashion and travel.
              </p>
              <p className="mb-5 rounded-xl bg-neutral-900 p-5">
                Pursuing my passion for frontend development, user-centered
                design, and problem solving, leveraging my 7+ years of
                full-stack experience.
              </p>
            </div>
            <div className="relative mx-auto mr-10 hidden overflow-hidden rounded-full md:block">
              <Image
                src="/images/photo.jpg"
                alt="Picture of Sarah Meyers"
                width={photoWidth}
                height={photoHeight}
                preload={true}
              />
            </div>
            <div className="relative mx-auto block overflow-hidden rounded-full md:hidden">
              <Image
                src="/images/photo.jpg"
                alt="Picture of Sarah Meyers"
                width={photoWidthSmall}
                height={photoHeightSmall}
                preload={true}
              />
            </div>
          </div>
        </section>
        <section className="font-raleway m-5 mb-10 flex flex-col items-center justify-center text-neutral-50 md:m-10">
          <h1 className="mb-10 text-4xl">Experience</h1>
          <div className="mb-5 w-full rounded-xl bg-neutral-900 p-5 md:w-4/5">
            <h2 className="pb-2 text-lg">
              Acrisure - Senior Software Engineer
            </h2>
            <p className="pb-2 text-sm">July 2024 - Present</p>
            <h3 className="text-md pb-5 italic">San Diego, CA</h3>
            <ul className="mx-5 list-outside list-disc">
              <li>
                Technical lead for multiple full-stack projects, ensuring
                on-time delivery through cross-functional collaboration with
                product and design teams, proactive stakeholder communication,
                and mentorship of junior engineers.
              </li>
            </ul>
          </div>
          <div className="w-full rounded-xl bg-neutral-900 p-5 md:w-4/5">
            <h2 className="pb-2 text-lg">Viasat - Software Engineer III</h2>
            <p className="pb-2 text-sm">August 2018 - November 2023</p>
            <h3 className="text-md italic">Carlsbad, CA - Remote</h3>
          </div>
        </section>
        <section className="font-raleway m-5 flex flex-col items-center justify-center text-neutral-50 md:m-10">
          <h1 className="mb-10 text-4xl">Education</h1>
          <div className="w-full rounded-xl bg-neutral-900 p-5 md:w-4/5">
            <h2 className="pb-2 text-lg">B.S. in Computer Science</h2>
            <p className="pb-2 text-sm">December 2017</p>
            <h3 className="text-md italic">
              University of Maryland, College Park, MD
            </h3>
          </div>
        </section>
        <section className="flex h-full flex-col items-center justify-center text-neutral-50">
          <Gallery />
        </section>
      </div>
    </main>
  );
}

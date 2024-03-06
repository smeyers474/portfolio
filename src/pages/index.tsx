import Layout from "~/components/layout/Layout";
import Image from "~/components/image/Image";
import Gallery from "~/components/gallery/Gallery";
import { useInView } from "react-intersection-observer";
import { headshot as headshotBlur } from "~/components/gallery/Blur";

const photoWidth = "25.5rem";
const photoHeight = "32.25rem";
const photoWidthSmall = "12.75rem";
const photoHeightSmall = "16.125rem";

export default function Home() {
  const { ref: refTitle, inView: inViewTitle } = useInView({
    threshold: 0,
  });
  const { ref: refImage, inView: inViewImage } = useInView({
    threshold: 0.1,
  });

  return (
    <Layout>
      <div ref={refTitle}>
        <section
          className={`flex h-screen flex-col items-center justify-center bg-[#001f3f] text-center font-raleway ${
            inViewTitle ? "fade-title" : ""
          }`}
        >
          <h1
            className={`pb-10 text-7xl text-white md:text-9xl ${
              inViewTitle ? "fade-title-text" : ""
            }`}
          >
            Sarah Meyers
          </h1>
          <p className="text-lg text-white md:text-2xl">Software Engineer</p>
        </section>
      </div>
      <section>
        <Gallery />
      </section>
      <section
        ref={refImage}
        className="grid min-h-screen grid-cols-1 items-center justify-center bg-[#f6f5ff] md:grid-cols-2"
      >
        <div className="text-md mx-10 font-raleway text-[#001f3f]">
          <div className="line"></div>
          <h1 className="pb-4 text-2xl">About</h1>
          <p>
            San Diego based software developer who likes to spend her time with
            hobbies like fashion and video games. I have 5+ years of
            professional software development experience.
          </p>
        </div>
        <div
          className={`mx-auto mr-10 hidden md:block ${
            inViewImage ? "fade-image" : ""
          }`}
        >
          <Image
            src="/images/headshot.jpg"
            alt="Picture of Sarah Meyers"
            width={photoWidth}
            height={photoHeight}
            blur={headshotBlur}
          />
        </div>
        <div
          className={`mx-auto block md:hidden ${
            inViewImage ? "fade-image" : ""
          }`}
        >
          <Image
            src="/images/headshot.jpg"
            alt="Picture of Sarah Meyers"
            width={photoWidthSmall}
            height={photoHeightSmall}
            blur={headshotBlur}
          />
        </div>
      </section>
    </Layout>
  );
}

import Layout from "~/components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <section
        className="container flex flex-row items-center justify-center gap-4 px-4 py-4"
        // className="container relative min-h-screen flex items-center"
      >
        <div className="w-[10rem] font-raleway text-lg text-[#413e66]">
          {/* add cubes for each section? */}
          <h1 className="pb-4 text-2xl">
            Hi, I&apos;m Sarah a full-stack developer.
          </h1>
          <p>
            Contact me:{" "}
            <a href="mailto: sarmey47@gmail.com">sarmey47@gmail.com</a>
          </p>
          <p>Experience: 5+ years of professional software development</p>
        </div>
      </section>
    </Layout>
  );
}

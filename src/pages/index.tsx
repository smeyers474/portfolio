import Layout from "~/components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="my-10 flex min-h-[20rem] flex-col items-center justify-center bg-white p-10">
        <h1 className="w-[60%] pb-4 font-raleway text-2xl text-[#413e66]">
          Hi, I&apos;m Sarah, a full-stack developer
        </h1>
        <div className="text-md w-[60%] font-raleway text-[#413e66]">
          <p className="mb-10">
            I have 5+ years of professional software development experience
          </p>
          <a className="contact" href="mailto: sarmey47@gmail.com">
            Contact me
          </a>
        </div>
      </section>
    </Layout>
  );
}

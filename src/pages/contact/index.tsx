import Layout from "~/components/layout/Layout";

export default function Page() {
  return (
    <Layout>
      <div className="py-5 font-raleway text-[#413e66]">
        <section className="p-10">
          <div className="line"></div>

          <h1 className="pb-5 text-2xl">Contact Me</h1>
          <a
            className="button text-md text-white"
            href="mailto: sarmey47@gmail.com"
          >
            sarmey47@gmail.com
          </a>
        </section>
        <section className="p-10">
          <div className="line"></div>

          <h1 className="pb-5 text-2xl">Social Media</h1>
          <a
            className="button text-md text-white"
            href="https://www.linkedin.com/in/sarah-meyers-sm/"
            target="_blank"
          >
            LinkedIn
          </a>
        </section>
      </div>
    </Layout>
  );
}

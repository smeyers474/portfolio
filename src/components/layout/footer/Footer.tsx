export default function Footer() {
  return (
    <footer className="bg-[#ffffff] pb-10 font-raleway">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <section className="p-10 font-raleway text-[#413e66]">
          <h1 className="pb-5 text-2xl">Contact Me</h1>
          <a
            className="button text-md text-white"
            href="mailto: sarmey47@gmail.com"
          >
            sarmey47@gmail.com
          </a>
        </section>
        <section className="p-10 font-raleway text-[#413e66]">
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
    </footer>
  );
}

import Layout from "~/components/layout/Layout";
import Image from "~/components/image/Image";

export default function Page() {
  return (
    <Layout>
      <section className="container flex flex-row justify-center gap-4 px-4 py-4">
        <Image
          src="/images/headshot.jpg"
          alt="Picture of Sarah Meyers"
          width="17rem"
          height="21.5rem"
        />
        <div className="text-md w-[10rem] font-raleway text-[#413e66]">
          <div className="line"></div>
          <h1 className="pb-4 text-2xl">About</h1>
          <p>
            San Diego based software developer who likes to spend her time with
            hobbies like fashion and video games.
          </p>
        </div>
      </section>
    </Layout>
  );
}

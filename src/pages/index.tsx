import Layout from "~/components/layout/Layout";
import Image from "~/components/image/Image";

export default function Home() {
  return (
    <Layout>
      <section
        className="container flex flex-row items-center justify-center gap-4 px-4 py-4"
        // className="container relative min-h-screen flex items-center"
      >
        <Image
          src="/images/headshot.jpg"
          alt="Picture of Sarah Meyers"
          width="17rem"
          height="21.5rem"
        />
        <p className="font-raleway text-lg text-[#413e66] w-[10rem]">
          <h1 className="text-2xl pb-4">Hi, I'm Sarah.</h1>
          San Diego based software developer who likes to spend her time
          with hobbies like fashion and video games.
        </p>
      </section>
    </Layout>
  );
}

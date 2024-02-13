import Layout from "~/components/layout/Layout";
import Image from "~/components/image/Image";

export default function Home() {
  return (
    <Layout>
      <div
        className="container flex flex-row items-center justify-center gap-4 px-4 py-4"
        // className="container relative min-h-screen flex items-center"
      >
        <Image
          src="/images/headshot.jpg"
          alt="Picture of Sarah Meyers"
          width="20vw"
          height="50vh"
          objectFit="contain"
        />
        <p className="font-raleway text-2xl text-[#413e66]">
          My name is Sarah Meyers
        </p>
      </div>
    </Layout>
  );
}

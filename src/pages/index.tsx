import Layout from "~/components/layout/Layout";
import Image from "~/components/image/Image";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from San Diego" });

  return (
    <Layout>
      <div
        className="container flex flex-row items-center justify-center gap-4 px-4 py-4"
        // className="container relative min-h-screen flex items-center"
      >
        <Image
          src="/images/headshot.jpg"
          alt="Picture of Sarah Meyers"
          width="50vw"
          height="80vh"
        />
        <p className="font-raleway text-2xl text-black">
          {hello.data ? hello.data.greeting : "Loading tRPC query..."}
        </p>
      </div>
    </Layout>
  );
}

import Image from "next/image";

import Layout from "~/components/layout/Layout";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from San Diego" });

  return (
    <Layout>
      <div
        className="container flex flex-col items-center justify-center gap-4 px-4 py-4"
        // className="container relative min-h-screen flex items-center"
      >
        <Image
          src="/images/headshotfull.png"
          alt="Picture of Sarah Meyers"
          width="333"
          height="408"
          // className="relative object-contain"
          // fill
        />
        <p className="font-raleway text-2xl text-black">
          {hello.data ? hello.data.greeting : "Loading tRPC query..."}
        </p>
      </div>
    </Layout>
  );
}

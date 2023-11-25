import Link from "next/link";

import Layout from "~/components/layout/Layout";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from San Diego" });

  return (
    <Layout>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-4 ">
        <img src="./images/headshot.jpg" alt="headshot" />
        <p className="text-2xl text-black">
          {hello.data ? hello.data.greeting : "Loading tRPC query..."}
        </p>
      </div>
    </Layout>
  );
}

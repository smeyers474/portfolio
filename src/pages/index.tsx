import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from San Diego" });

  return (
    <>
      <Head>
        <title>Sarah Meyers</title>
        <meta name="description" content="Portfolio created by Sarah Meyers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#EBE3F1] to-[#CBC0D3]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
            Sarah Meyers
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-[#AFA4B7]/10 p-4 text-black hover:bg-[#AFA4B7]/20"
              href="https://www.linkedin.com/in/sarah-meyers-sm/"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Contact →</h3>
              <div className="text-lg">
                Linkedin
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-[#AFA4B7]/10 p-4 text-black hover:bg-[#AFA4B7]/20"
              href="/"
              target="_self"
            >
              <h3 className="text-2xl font-bold">Resume →</h3>
              <div className="text-lg">
                Coming soon...
              </div>
            </Link>
          </div>
          <p className="text-2xl text-black">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p>
        </div>
      </main>
    </>
  );
}

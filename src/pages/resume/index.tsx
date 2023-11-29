import Link from "next/link";

import { MdOpenInNew } from "react-icons/md";

import Layout from "~/components/layout/Layout";

export default function Page() {
  return (
    <Layout>
      <div className="container flex flex-col items-center justify-center gap-4 px-4 py-4 ">
        <div className="container flex justify-end">
          <Link
            className="max-w-xs rounded-xl bg-[#AFA4B7]/10 p-3 text-black hover:bg-[#AFA4B7]/20"
            href="/resume.pdf"
            target="_blank"
          >
            <MdOpenInNew />
          </Link>
        </div>
        <iframe src="resume.pdf" width="100%" height="500px" />
      </div>
    </Layout>
  );
}

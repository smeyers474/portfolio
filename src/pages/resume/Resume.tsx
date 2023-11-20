import { pdfjs, Document, Page } from "react-pdf";
import { MdOpenInNew } from "react-icons/md";
import Link from "next/link";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

export default function Home() {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url,
  ).toString();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#EBE3F1] to-[#CBC0D3]">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
          Sarah Meyers
        </h1>
        <div className="container flex justify-end">
          <Link
            className="max-w-xs rounded-xl bg-[#AFA4B7]/10 p-3 text-black hover:bg-[#AFA4B7]/20"
            href="/resume.pdf"
            target="_blank"
          >
            <MdOpenInNew />
          </Link>
        </div>
        <Document file="./resume.pdf">
          <Page key="resume-page" pageNumber={1} />
        </Document>
      </div>
    </main>
  );
}

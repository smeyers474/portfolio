import { pdfjs, Document, Page } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

export default function Resume() {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url,
  ).toString();

  return (
    <Document file="./resume.pdf">
      <Page key="resume-page" pageNumber={1} />
    </Document>
  );
}

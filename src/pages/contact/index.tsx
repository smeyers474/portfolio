import Layout from "~/components/layout/Layout";
import Button from "~/components/button/Button";

import { MdMail, MdOpenInNew } from "react-icons/md";

export default function Page() {
  return (
    <Layout>
      <div className="py-5 font-raleway text-[#413e66]">
        <section className="p-10">
          <div className="line"></div>
          <h1 className="pb-5 text-2xl">Contact Me</h1>
          <div className="flex gap-4">
            <Button
              href="mailto: sarmey47@gmail.com"
              target={undefined}
              display={
                <div className="flex items-center gap-1">
                  sarmey47@gmail.com
                  <MdMail />
                </div>
              }
            />
          </div>
        </section>
        <section className="p-10">
          <div className="line"></div>
          <h1 className="pb-5 text-2xl">Links</h1>
          <div className="flex gap-4">
            <Button
              href="/resume.pdf"
              target="_blank"
              display={
                <div className="flex items-center gap-1">
                  Resume
                  <MdOpenInNew />
                </div>
              }
            />
            <Button
              href="https://www.linkedin.com/in/sarah-meyers-sm/"
              target="_blank"
              display={
                <div className="flex items-center gap-1">
                  LinkedIn
                  <MdOpenInNew />
                </div>
              }
            />
            <Button
              href="https://github.com/smeyers474"
              target="_blank"
              display={
                <div className="flex items-center gap-1">
                  Github
                  <MdOpenInNew />
                </div>
              }
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}

import Layout from "~/components/layout/Layout";
import Button from "~/components/button/Button";

export default function Page() {
  return (
    <Layout>
      <div className="py-5 font-raleway text-[#413e66]">
        <section className="p-10">
          <div className="line"></div>
          <h1 className="pb-5 text-2xl">Contact Me</h1>
          <Button
            href="mailto: sarmey47@gmail.com"
            target={undefined}
            display="sarmey47@gmail.com"
          />
        </section>
        <section className="p-10">
          <div className="line"></div>
          <h1 className="pb-5 text-2xl">Links</h1>
          <div className="flex gap-4">
            <Button
              href="https://www.linkedin.com/in/sarah-meyers-sm/"
              target="_blank"
              display="LinkedIn"
            />
            <Button
              href="https://github.com/smeyers474"
              target="_blank"
              display="Github"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}

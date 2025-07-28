import Layout from "~/components/layout/Layout";
import Button from "~/components/button/Button";

import { MdOpenInNew } from "react-icons/md";

export default function Page() {
  return (
    <Layout>
      <section className="font-raleway text-[#413e66]">
        <div className="px-10 pb-10 pt-5">
          <div className="flex justify-end">
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
          </div>
          <h1 className="pb-5 text-2xl">About</h1>
          <p>
            Pursuing my passion for frontend development, user-centered design, and problem solving with my 6+ years of full-stack and infrastructure experience.
          </p>
        </div>
      </section>
      <section className="bg-[#f6f5ff] font-raleway text-[#413e66]">
        <div className="p-10">
          <h1 className="pb-5 text-2xl">Education</h1>
          <h2 className="pb-2 text-lg">B.S. in Computer Science</h2>
          <p className="pb-2 text-sm">2014-2017</p>
          <h3 className="text-md italic">
            University of Maryland, College Park
          </h3>
        </div>
      </section>
      <section className="font-raleway text-[#413e66]">
        <div className="p-10">
          <h1 className="pb-5 text-2xl">Work Experience</h1>
          <h2 className="pb-2 text-lg">Acrisure - Software Engineer</h2>
          <p className="pb-2 text-sm">July 2024 - Present</p>
          <h3 className="text-md pb-5 italic">San Diego, CA</h3>
          <ul className="experience-list mx-5 list-outside list-disc">
            <li>
              Served as technical lead on a major UX improvement initiative; identified a gap in insurance network accuracy, designed a solution, and led cross-functional implementation
            </li>
            <li>
              Key contributor to a quoting platform supporting 1,000+ monthly users, enabling insurance rate comparisons across 104 carriers in 22 U.S. states
            </li>
            <li>
              Revamped the website login experience by implementing Auth0 best practices and integrating company-wide SSO
            </li>
            <li>
              Troubleshot and enhanced complex systems involving Java APIs, React frontends, MySQL databases, and cloud infrastructure (AWS/GCP)
            </li>
            <li>
              Mentored a junior engineer and coordinated with business stakeholders and third-party vendors to align technical efforts with strategic goals
            </li>
          </ul>
          <br/>
          <h2 className="pb-2 text-lg">Viasat - Software Engineer</h2>
          <p className="pb-2 text-sm">August 2018 - November 2023</p>
          <h3 className="text-md pb-5 italic">Carlsbad, CA - Remote</h3>
          <ul className="experience-list mx-5 list-outside list-disc">
            <li>
              Technical Lead for the launch of an enterprise data catalog; created, prioritized, and delegated tasks, delivering the product ahead of schedule
            </li>
            <li>
              Acted as subject matter expert on the external catalog platform, providing guidance and delivering regular roadmap and feature updates to stakeholders
            </li>
            <li>
              Spearheaded development of an internal data access request platform, eliminating 100+ support emails per month through automation
              <ul className="mx-10 list-outside list-disc">
                <li>
                  Built a modern Next.js web app using the company’s React component library and brand guidelines in collaboration with a product designer via Figma
                </li>
                <li>
                  Designed a secure backend system using a Go REST API and PostgreSQL database
                </li>
                <li>
                  Set up CI/CD workflows with GitHub Actions and end-to-end testing with Cypress
                </li>
              </ul>
            </li>
            <li>
              Led UX research through user interviews and surveys to uncover pain points and prioritize feature development based on actual user needs
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}

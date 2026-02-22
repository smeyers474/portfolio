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
            Pursuing my passion for frontend development, user-centered design, and problem solving, leveraging my 7+ years of full-stack experience.
          </p>
        </div>
      </section>
      <section className="bg-[#f6f5ff] font-raleway text-[#413e66]">
        <div className="p-10">
          <h1 className="pb-5 text-2xl">Education</h1>
          <h2 className="pb-2 text-lg">B.S. in Computer Science</h2>
          <p className="pb-2 text-sm">December 2017</p>
          <h3 className="text-md italic">
            University of Maryland, College Park, MD
          </h3>
        </div>
      </section>
      <section className="font-raleway text-[#413e66]">
        <div className="p-10">
          <h1 className="pb-5 text-2xl">Experience</h1>
          <h2 className="pb-2 text-lg">Acrisure - Software Engineer</h2>
          <p className="pb-2 text-sm">July 2024 - Present</p>
          <h3 className="text-md pb-5 italic">San Diego, CA</h3>
          <ul className="experience-list mx-5 list-outside list-disc">
            <li>
              Technical lead for multiple full-stack projects, ensuring on-time delivery through cross-functional collaboration with product and design teams, proactive stakeholder communication, and mentorship of junior engineers.
            </li>
            <li>
              Technical Lead for consolidating user and client data systems, driving the development of enhanced front-end search functionality to improve accessibility and efficiency, managing changing requirements through a 2-way door approach, and overseeing the migration of more than 40,000 clients.
            </li>
            <li>
              Technical Lead for an end-to-end full-stack feature, implementing MySQL schema updates, backend API integrations, and an enhanced business search and import modal to streamline workflows, utilizing Redux for state management, and collaborating with developers across teams.
            </li>
            <li>
              Technical Lead for a UX initiative, identifying data accuracy gaps, architecting and designing a solution using a Java service and integrations.
            </li>
            <li>
              Revamped the website login experience by integrating company-wide SSO for streamlined authentication, managing stakeholder expectations, accurately planning for scope changes, and coordinating with third-party authentication SaaS providers to ensure seamless integration.
            </li>
            <li>
              Key contributor to a quoting platform supporting 1,000+ monthly users, enabling insurance rate comparisons across 104 carriers U.S. nationwide, coordinating with third-party vendors.
            </li>
          </ul>
          <br/>
          <h2 className="pb-2 text-lg">Viasat - Software Engineer</h2>
          <p className="pb-2 text-sm">August 2018 - November 2023</p>
          <h3 className="text-md pb-5 italic">Carlsbad, CA - Remote</h3>
          <ul className="experience-list mx-5 list-outside list-disc">
            <li>
              Technical Lead for the launch of an enterprise data catalog, delivering the product ahead of schedule.
            </li>
            <li>
              Subject matter expert on the external catalog platform, delivering regular roadmap and feature updates to stakeholders.
            </li>
            <li>
              Spearheaded development of an internal data access request platform, eliminating 100+ support emails per month through automation.
              <ul className="mx-10 list-outside list-disc">
                <li>
                  Built a modern Next.js web app using the company’s React component library and brand guidelines in collaboration with a product designer via Figma.
                </li>
                <li>
                  Designed a secure backend system using a Go REST API and PostgreSQL database.
                </li>
                <li>
                  Set up CI/CD workflows and end-to-end testing.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}

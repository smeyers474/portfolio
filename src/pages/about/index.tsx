import Layout from "~/components/layout/Layout";

export default function Page() {
  return (
    <Layout>
      <section className="font-raleway text-[#413e66]">
        <div className="p-10">
          <h1 className="pb-5 text-2xl">About</h1>
          <p>
            San Diego based software developer who likes to spend her time with
            hobbies like fashion and video games. I have 5+ years of
            professional software development experience.
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
          <h2 className="pb-2 text-lg">Software Engineer III</h2>
          <p className="pb-2 text-sm">August 2018 - November 2023</p>
          <h3 className="text-md pb-5 italic">Viasat, Carlsbad, CA - Remote</h3>
          <ul className="experience-list mx-5 list-outside list-disc">
            <li>
              Technical Lead for enterprise data catalog launch
              <ul className="mx-10 list-outside list-disc">
                <li>
                  Created, prioritized, and designated tasks to 3 engineers that
                  made up the progress of the project which met and exceeded
                  deadlines for product launch
                </li>
                <li>
                  Became subject matter expert on the external data catalog
                  solution
                </li>
                <li>
                  Delivered periodic functionality and roadmap presentations to
                  stakeholders
                </li>
              </ul>
            </li>
            <li>
              Spearheaded the development of an internal data access request web
              application and process
              <ul className="mx-10 list-outside list-disc">
                <li>
                  Developed a Next.js web application following a Figma design
                  document
                </li>
                <li>
                  Worked with an internal team’s custom ReactJS component
                  library and brand design guidelines
                </li>
                <li>
                  Set up a CI/CD pipeline for the project with Github Actions to
                  ensure Cypress end to end tests pass and provide automatic
                  deployment
                </li>
                <li>
                  Replaced hundreds of data access request support emails with a
                  custom website and automatic data access request process
                </li>
                <li>
                  Outlined a plan to redesign the data access request process
                  replacing the Python GraphQL API and DynamoDB database with a
                  Go REST API and a PostgreSQL database
                </li>
                <li>
                  Designed the PostgreSQL table formats to store data for
                  internal customer requests and approvals, prioritizing a
                  simple, maintainable organization of the complex system
                </li>
                <li>
                  Worked with the legal team to ensure sensitive data is labeled
                  and approved properly
                </li>
              </ul>
            </li>
            <li>
              Conducted user experience research for the internal data catalog
              and access request process, which provided data to back up
              prioritizing improvements and new features of future products by
              identifying user needs and pain points through user interviews and
              surveys
            </li>
            <li>
              Provided support for my team’s internal tools and services
              including a Kubernetes cluster, a Trino database, JupyterLab,
              Superset, and Apache Airflow
            </li>
            <li>
              Managed AWS service deployments and resources using YAML
              configuration files, Ansible playbooks, and CloudFormation
            </li>
            <li>
              Created and maintained data ETLs using Apache Spark and Scala to
              load data into S3 from a Kafka data stream and make it accessible
              in Trino
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}

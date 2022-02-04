import { Layout } from "components"
import { NextPage } from "next";

const ProjectPage: NextPage = () => {
  return <Layout>
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          Project
        </h1>

        <p>Manuel Ernesto Robles Hernandez</p>
      </div>
    </header>
  </Layout>;
};

export default ProjectPage;
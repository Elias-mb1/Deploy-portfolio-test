import React from "react"; 

const ProjectCard = ({ title, description, liveLink, repoLink }) => (
  <div className="bg-gray-100 dark:bg-gray-900 border-solid border-2 shadow-lg rounded-lg overflow-hidden m-5">
    <div className="px-6 py-4">
      <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-base">
        {description}
      </p>
    </div>
    <div className="px-6 py-4">
      {liveLink && (
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 font-semibold hover:underline mr-4"
        >
          Live Site
        </a>
      )}
      {repoLink && (
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 font-semibold hover:underline"
        >
          Code Repository
        </a>
      )}
    </div>
  </div>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: "App-design",
      description: "Frontpage App design",
      liveLink: "https://projects-brown-kappa.vercel.app/",
      repoLink: "https://github.com/Elias-mb1/projects.git",
    },
    {
      title: "Calculator",
      description: "Calculator to use when it is needed ",
      liveLink: "https://calculator-page.vercel.app/",
      repoLink: "https://github.com/Elias-mb1/calculator-page.git",
    },
    
    {
      title: "Flight-search-app",
      description: "A app that serach the cheapest flights for you",
      liveLink: "https://flight-search-app-two.vercel.app/",
      repoLink: "https://github.com/Elias-mb1/flight-search-app.git",
    },
  ];

  return (
    <section className="py-20 dark:bg-gray-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
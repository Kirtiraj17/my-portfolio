import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full p-2 py-16">
      <div className="w-full mx-auto max-w-7xl">
        <h2 className="text-blue-600 mb-4">Projects</h2>
        <span className="text-2xl font-bold mb-4">What I have Built</span>
        <div className="md:grid md:grid-cols-2 gap-8 mt-8">
          <ProjectItem
            title={"Toll Calculator"}
            description="React Js"
            imgUrl={"/assets/TollCalculator.png"}
            link={"/toll-calculator"}
          />
          <ProjectItem
            title={"Project 2"}
            description={"React Js"}
            imgUrl={"/assets/TollCalculator.png"}
            link={"/project2"}
          />
          <ProjectItem
            title={"Project 3"}
            description={"React Js"}
            imgUrl={"/assets/TollCalculator.png"}
            link={"/project3"}
          />
          <ProjectItem
            title={"Project 4"}
            description={"React Js"}
            imgUrl={"/assets/TollCalculator.png"}
            link={"/project4"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

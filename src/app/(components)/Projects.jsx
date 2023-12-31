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
            description="React Js / TollGuru API"
            imgUrl={"/assets/TollCalculator.png"}
            link={"/toll-calculator"}
          />
          <ProjectItem
            title={"React Movie App"}
            description={"React Js / Styled Components"}
            imgUrl={"/assets/ReactMovieApp.png"}
            link={"/react-movie-app"}
          />
          {/* <ProjectItem
            title={"Project 3"}
            description={"React Js"}
            imgUrl={"/assets/TollCalculator.png"}
            link={"/project3"}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full p-2 py-16">
      <div className="w-full mx-auto max-w-7xl">
        <h2 className="text-blue-600 mb-4">Projects</h2>
        <span className="text-2xl font-bold mb-4">What I have Built</span>
        <div className="md:grid md:grid-cols-2 gap-8 mt-8">
          <ProjectItem
            title={"Project 1"}
            description={"React Js"}
            imgUrl={"https://source.unsplash.com/random"}
            link={"/project1"}
          />
          <ProjectItem
            title={"Project 1"}
            description={"React Js"}
            imgUrl={"https://source.unsplash.com/random"}
            link={"/project2"}
          />
          <ProjectItem
            title={"Project 1"}
            description={"React Js"}
            imgUrl={"https://source.unsplash.com/random"}
            link={"/project2"}
          />
          <ProjectItem
            title={"Project 1"}
            description={"React Js"}
            imgUrl={"https://source.unsplash.com/random"}
            link={"/project2"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

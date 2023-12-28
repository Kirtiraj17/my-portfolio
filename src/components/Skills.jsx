import {
  HTMLIcon,
  CSSIcon,
  TailwindIcon,
  JSIcon,
  ReactIcon,
  ReduxIcon,
  NextJSIcon,
  WordPressIcon,
  GithubIcon,
  BitbucketIcon,
} from "@/assets/icons";
import React from "react";

const skills = [
  {
    name: "HTML5",
    icon: <HTMLIcon />,
  },
  {
    name: "CSS3",
    icon: <CSSIcon />,
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindIcon />,
  },
  {
    name: "Javascript",
    icon: <JSIcon />,
  },
  {
    name: "React Js",
    icon: <ReactIcon />,
  },
  {
    name: "Redux",
    icon: <ReduxIcon />,
  },
  {
    name: "Next Js",
    icon: <NextJSIcon />,
  },
  {
    name: "WordPress",
    icon: <WordPressIcon />,
  },
  {
    name: "Github",
    icon: <GithubIcon />,
  },
  {
    name: "Bitbucket",
    icon: <BitbucketIcon />,
  },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full md:h-screen p-2 py-16">
      <div className="w-full mx-auto max-w-7xl">
        <h2 className="text-blue-600 mb-4">Skills</h2>
        <span className="text-2xl font-bold mb-4">What I Can Do</span>
        <div className="m-auto max-w-7xl md:flex md:justify-between my-4 w-full">
          <ul className="md:flex md:flex-wrap w-full">
            {skills.map((skill) => (
              <li
                key={skill.name}
                className="md:mr-4 md:basis-1/3 md:max-w-[30%] lg:max-w-[23%] mb-4"
              >
                <div className="p-4 bg-white rounded-xl shadow-xl w-full flex justify-between items-center">
                  {skill.icon}
                  <p className="ml-8 text-lg font-medium">{skill.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;

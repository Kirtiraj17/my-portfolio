import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

const ReactMovieApp = () => {
  return (
    <div className="w-full">
      <div className="relative w-screen h-[30vh] lg:h-[40vh]">
        <div className="w-full h-[30vh] lg:h-[40vh] absolute top-0 left-0 bg-black/80 z-10">
          <Image
            src={"/assets/ReactMovieApp.png"}
            alt="react-movie-app"
            layout="fill"
            className="absolute z-1 object-cover"
          />
          <div className="w-full max-w-7xl text-white absolute top-[70%] left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 p-2">
            <h2 className="py-2">React Movie App</h2>
            <h3>React Js / TheMovieDB API</h3>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="my-4">
            As a personal side project, I developed the React Movie App, a
            movie-searching application designed to fetch comprehensive
            movie-related information. The app utilises TheMovieDB API to
            provide details such as cast, budget, and more for a wide range of
            movies.
          </p>
          <p className="mb-4">
            Users can effortlessly search for any movie and access detailed
            information, including casting, budget, and other relevant details.
            The tech stack used was ReactJS and Styled Components.
          </p>
          <p className="mb-4">
            The primary goal of creating this project was to deepen my
            understanding of React and its implementation. By working on a
            real-world application that interacts with an external API, I gained
            valuable insights into React's capabilities and learned how to
            structure and develop a functional and responsive user interface.
          </p>
          <p className="mb-4">
            The React Movie App stands as a testament to my hands-on experience
            with React and showcases my ability to create a functional and
            aesthetically pleasing application using modern frontend
            technologies.
          </p>
          <button className="text-white opacity-90 hover:opacity-100 py-2 px-8 mt-4 mr-4">
            <Link
              href={"https://react-movie-app-by-kirtiraj.netlify.app/"}
              target="_blank"
            >
              Demo
            </Link>
          </button>
          {/* <button className="text-white opacity-90 hover:opacity-100 py-2 px-8 mt-4">
            <Link
              href={"#"}
              target="_blank"
            >
              Code
            </Link>
          </button> */}
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 p-4 rounded-xl">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-1" />
                React Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-1" />
                TheMovieDB API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-1" />
                Styled Components
              </p>
            </div>
          </div>
        </div>
        <Link
          href={"/#projects"}
          className="underline text-blue-600 cursor-pointer"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default ReactMovieApp;

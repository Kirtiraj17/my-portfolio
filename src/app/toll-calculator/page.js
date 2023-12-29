import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

const TollCalculator = () => {
  return (
    <div className="w-full">
      <div className="relative w-screen h-[30vh] lg:h-[40vh]">
        <div className="w-full h-[30vh] lg:h-[40vh] absolute top-0 left-0 bg-black/80 z-10">
          <Image
            src={"/assets/TollCalculator.png"}
            alt="project1"
            layout="fill"
            className="absolute z-1 object-cover"
          />
          <div className="w-full max-w-7xl text-white absolute top-[70%] left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 p-2">
            <h2 className="py-2">Toll Calculator</h2>
            <h3>React Js / TollGuru API</h3>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="my-4">
            In this project, our goal is to enhance user navigation by
            developing a dynamic web application using React, React-Leaflet,
            Overpass API, OSRM API, and TollGuru API. The primary objective is
            to provide users with real-time information about toll locations
            along their route, displayed interactively on a map. Leveraging
            React for the frontend, React-Leaflet for mapping functionality, and
            Overpass API for retrieving geographic data, we create an intuitive
            interface.
          </p>
          <p className="mb-4">
            The OSRM API comes into play to calculate the most efficient route
            between the user's initial destination and their current location.
            The TollGuru API supplements this by providing comprehensive toll
            information, ensuring users have a clear understanding of toll costs
            and locations along their journey.
          </p>
          <p className="mb-4">
            By combining these technologies, we aim to deliver a seamless and
            user-friendly experience, allowing individuals to plan their routes
            more effectively, save on toll expenses, and make informed decisions
            during their travels. This project showcases the power of modern web
            development tools to enhance the overall navigation experience for
            users.
          </p>
          <p className="mb-4">
            <b>Note:</b> This project utilizes a paid API for toll information, and
            there may be instances where toll details are not available due to
            limitations. Additionally, please be aware that certain features are
            still under development and may not be fully functional at this
            time. We appreciate your understanding as we work to enhance and
            refine the application.
          </p>
          <button className="text-white opacity-90 hover:opacity-100 py-2 px-8 mt-4 mr-4">
            <Link
              href={"https://toll-calculator-sandy.vercel.app/"}
              target="_blank"
            >
              Demo
            </Link>
          </button>
          <button className="text-white opacity-90 hover:opacity-100 py-2 px-8 mt-4">
            <Link
              href={"https://github.com/Kirtiraj17/toll-calculator"}
              target="_blank"
            >
              Code
            </Link>
          </button>
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
                React Leaflet
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-1" />
                TollGuru API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-1" />
                Overpass API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-1" />
                OSRM API
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

export default TollCalculator;

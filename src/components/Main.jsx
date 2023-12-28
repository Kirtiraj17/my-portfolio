import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Main = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] text-center">
      <div className="w-full h-full mx-auto max-w-7xl p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build something together
          </p>
          <h1 className="py-4 text-gray-700">
            <span className="block mb-3">
              Hi, I'm <span className="text-blue-600">Kirtiraj Gawale</span>
            </span>
            <span>A Frontend Developer</span>
          </h1>
          <p className="py-4 text-gray-700 mx-auto max-w-[70%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sit
            esse est id maxime odio doloribus a ipsum debitis explicabo.
          </p>
          <div className="flex justify-center items-center py-4 mx-auto max-w-80">
            <div className="mb-4">
              <ul className="flex justify-between items-center">
                <li className="p-3 mr-4 rounded-full shadow-xl bg-white hover:scale-110">
                  <Link href={"https://www.linkedin.com/in/kirtiraj-gawale-04978114a/"} target="_blank">
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li className="p-3 mr-4 rounded-full shadow-xl bg-white hover:scale-110">
                  <Link href={"https://github.com/Kirtiraj17"} target="_blank">
                    <FaGithub />
                  </Link>
                </li>
                <li className="p-3 rounded-full shadow-xl bg-white hover:scale-110">
                  <Link href={"mailto:kirtirajg1997@gmail.com"} target="_blank">
                    <MdEmail />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, description, imgUrl, link }) => {
  return (
    <>
      <div className="md:hidden mt-8 mb-4 ml-4">
        <h3 className="text-xl tracking-wider">{title}</h3>
        <p className="pt-2 pb-4">{description}</p>
        <Link
          href={link}
          className="text-center py-3 px-8 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:bg-blue-400 hover:text-white"
        >
          More Info
        </Link>
      </div>
      <div className="relative w-full h-72 shadow-xl text-center shadow-gray-400 flex justify-between items-center rounded-xl p-4 group md:hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
        <figure className="relative rounded-xl overflow-hidden w-full h-full">
          <Image
            src={imgUrl}
            alt={title}
            layout="fill"
            className="rounded-xl max-h-96 md:group-hover:opacity-10 hover:scale-105 ease-in duration-300 object-cover"
          />
        </figure>
        <div className="hidden md:group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h3 className="text-2xl text-center text-white tracking-wider">
            {title}
          </h3>
          <p className="pt-2 pb-4 text-center text-white">{description}</p>
          <Link
            href={link}
            className="text-center py-3 px-8 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer md:hover:bg-gray-200"
          >
            More Info
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;

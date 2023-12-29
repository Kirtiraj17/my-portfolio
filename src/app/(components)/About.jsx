import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 py-16 flex items-center">
      <div className="w-full mx-auto max-w-7xl">
        <h2 className="text-blue-600 mb-4">About</h2>
        <span className="text-2xl font-bold mb-4">Who I Am</span>
        <div className="m-auto max-w-7xl md:flex md:justify-between my-4">
          <div className="mb-4 md:basis-2/3 md:mr-8">
            <p className="my-4">
              Experienced and driven Frontend Developer equipped with
              exceptional skills in designing and executing visually captivating
              and user-friendly websites. Demonstrated proficiency in HTML, CSS,
              JavaScript, and ReactJs..
            </p>
            <p className="mb-4">
              I am a passionate frontend developer based in India, with a strong
              foundation in web development. I completed my Bachelor of
              Engineering from Mumbai University in 2019, where I gained a
              comprehensive understanding of software engineering principles.
              Since then, I have been dedicated to honing my skills in frontend
              technologies like JavaScript and React.
            </p>
            <p className="mb-4">
              My journey in web development has equipped me with the expertise
              to create engaging and user-friendly interfaces. I am constantly
              exploring new technologies and methodologies to stay at the
              forefront of the ever-evolving web development landscape. With a
              keen eye for design and a commitment to delivering high-quality
              user experiences, I am excited to contribute to innovative
              projects and bring creative ideas to life.
            </p>
            <Link href={"#projects"} className="underline text-blue-600">
              Checkout some of my latest projects
            </Link>
          </div>
          <figure className="relative w-full h-72 overflow-hidden p-2 rounded-xl shadow-xl md:basis-1/3">
            <Image
              src={"https://source.unsplash.com/random"}
              alt="aboutImg"
              className="rounded-xl max-h-96 object-cover overflow-hidden p-2"
              layout="fill"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default About;

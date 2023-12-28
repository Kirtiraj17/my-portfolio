import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full p-2 py-16">
      <div className="w-full mx-auto max-w-7xl">
        <h2 className="text-blue-600 mb-4">Contact</h2>
        <span className="text-2xl font-bold mb-4">Get In Touch</span>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full rounded-xl shadow-xl shadow-gray-400 p-4">
            <div className="lg:p-4 h-full">
              <div className="rounded-xl overflow-hidden">
                <img
                  src={"https://source.unsplash.com/random"}
                  alt=""
                  className="rounded-xl max-h-[400px] hover:scale-105 ease-in duration-300"
                />
              </div>
              <div className="mt-4">
                <h2 className="py-2">Kirtiraj Gawale</h2>
                <p>Front-End Developer</p>
                <p className="py-4">Contact me and let's talk.</p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me</p>
                <ul className="flex items-center py-4">
                  <li className="p-3 mr-4 rounded-full shadow-xl bg-white hover:scale-110">
                    <Link
                      href={
                        "https://www.linkedin.com/in/kirtiraj-gawale-04978114a/"
                      }
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li className="p-3 mr-4 rounded-full shadow-xl bg-white hover:scale-110">
                    <Link
                      href={"https://github.com/Kirtiraj17"}
                      target="_blank"
                    >
                      <FaGithub />
                    </Link>
                  </li>
                  <li className="p-3 rounded-full shadow-xl bg-white hover:scale-110">
                    <Link
                      href={"mailto:kirtirajg1997@gmail.com"}
                      target="_blank"
                    >
                      <MdEmail />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-full rounded-xl shadow-xl shadow-gray-400 p-4">
            <form className="p-4">
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label htmlFor="name" className="uppercase text-sm py-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="number" className="uppercase text-sm py-2">
                    Phone Number
                  </label>
                  <input
                    id="number"
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="uppercase text-sm py-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="subject" className="uppercase text-sm py-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="uppercase text-sm py-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="10"
                  rows="5"
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                ></textarea>
                <button className="w-full p-4 mt-4 text-gray-100 opacity-90 hover:opacity-100">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href={"/"}>
            <div className="rounded-full shadow-xl shadow-gray-400 cursor-pointer bg-white hover:scale-110 p-4 ease-in duration-300">
              <HiChevronDoubleUp className="text-blue-500" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

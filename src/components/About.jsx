import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 py-16 flex items-center">
      <div>
        <h2 className="text-blue-600 mb-4">About</h2>
        <span className="text-2xl font-bold mb-4">Who I Am</span>
        <div className="m-auto max-w-7xl md:flex md:justify-between my-4">
          <div className="mb-4 md:basis-2/3 md:mr-8">
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              eligendi at sunt blanditiis. Hic laboriosam maiores qui dignissimos
              eius, totam enim tempore cumque voluptate dicta tempora labore numquam
              magnam veritatis.
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              eligendi at sunt blanditiis. Hic laboriosam maiores qui dignissimos
              eius, totam enim tempore cumque voluptate dicta tempora labore numquam
              magnam veritatis.
            </p>
            <Link href={'#projects'} className="underline text-blue-600">Checkout some of my latest projects</Link>
          </div>
          <figure className="p-2 rounded-xl shadow-xl md:basis-1/3">
            <img src={'https://source.unsplash.com/random'} className="rounded-xl max-h-96 bg-cover" />
          </figure>
        </div>

      </div>
    </div>
  );
};

export default About;

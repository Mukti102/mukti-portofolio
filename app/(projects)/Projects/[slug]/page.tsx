import { Carousel } from "flowbite-react";
import Markdown from "markdown-to-jsx";
import { RxArrowTopRight } from "react-icons/rx";
import { GrGithub } from "react-icons/gr";
import fs from "fs";
import path from "path";
import React from "react";
import Button from "@/components/ui/Button";
import { Projects } from "@/data/projects/projects";
import Image from "next/image";
import Caraosel from "@/components/ui/Caraosel";
import Link from "next/link";

interface ProjectPageProps {
  params: { slug: string };
}

const getProjectContent = async (slug: string) => {
  const project = Projects.find((item) => item.description === slug);
  const folder = path.join(
    process.cwd(),
    `data/projects/description/${slug}.md`
  );
  const content = fs.readFileSync(folder, "utf8");

  return {
    project,
    content,
  };
};

const ProjectPage: React.FC<ProjectPageProps> = async ({ params }) => {
  const { project, content } = await getProjectContent(params.slug);

  return (
    <div className="mt-16 w-full px-3 md:px-14 pb-24 pt-10">
      {/* title */}
      <div className="text-2xl w-max text-black mx-auto uppercase font-bold">
        <h1>{project?.title}</h1>
      </div>
      {/* section */}
      <section className="md:flex block  gap-6 mt-5 md:mt-10">
        {/* main */}
        <main className="md:w-[85%] w-full">
          {/* carousel */}
          <Caraosel project={project} />
          <div className="flex mt-5 gap-3">
            <Button
              href={String(project?.link)}
              props="bg-purple-500"
              icon={<RxArrowTopRight />}
            >
              Demo
            </Button>
            <Button
              href={String(project?.github)}
              props="bg-gray-600"
              icon={<GrGithub />}
            >
              Repository
            </Button>
          </div>
          <div>
            <article className="prose text-black prose-slate">
              <Markdown>{content}</Markdown>
            </article>
          </div>
        </main>
        {/* another Projects */}
        <section className="px-5 w-full md:w-[40%]">
          {/* head */}
          <div className="flex justify-between text-sm">
            <div className="font-bold text-lg text-black">
              <h3>Project Lainya</h3>
            </div>
            <a href="/Projects" className="md:text-sm text-xs text-blue-600">
              <span>Lihat Semua</span>
            </a>
          </div>
          <div className="w-full mt-4">
            {/* cards */}
            {Projects.map((item, index) => {
              return (
                <div key={index} className="flex my-3 w-full gap-2">
                  {/* image */}
                  <div className="w-32 h-16 shadow-sm bg-black overflow-hidden rounded-md">
                    <Image
                      alt={item?.image}
                      width={200}
                      height={200}
                      src={item?.image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* title */}
                  <div className="text-[13px] hover:text-blue-600 text-gray-700  font-semibold w-[70%]">
                    <Link href={`/Projects/${item?.description}`}>
                      {item.title}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </div>
  );
};

export async function generateStaticParams() {
  return Projects.map((project) => ({
    slug: project.description,
  }));
}

export default ProjectPage;

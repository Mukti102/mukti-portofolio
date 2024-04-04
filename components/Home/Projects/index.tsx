import Title from "@/components/shared/Title";
import { projects } from "@/data/Projects";
import Card from "./Card";

function Project() {
  return (
    <section className="w-full sm:p-10 p-6 flex flex-col  dark:bg-[#000] bg-white">
      <Title title="Projects" info="This is What i have build" />
      <div className="w-full mt-12 flex flex-wrap justify-center gap-4">
        {projects.map((item, idx) => (
          <Card item={item} key={idx} />
        ))}
      </div>
    </section>
  );
}

export default Project;

import Title from "@/components/shared/Title";
import { projects } from "@/data/Projects";
import Card from "./Card";
import { GridBackgroundDemo } from "@/components/ui/background/GridBg";

function Project() {
  return (
    <>
      <section className="w-full z-40 overflow-hidden relative  sm:p-5 p-6 flex flex-col  dark:bg-secondary bg-white">
        <Title title="Projects" info="This is What i have build" />
        <div className="w-full mt-12 flex flex-wrap justify-center gap-4">
          {projects.map((item, idx) => (
            <Card item={item} key={idx} />
          ))}
        </div>
        <GridBackgroundDemo />
      </section>
    </>
  );
}

export default Project;

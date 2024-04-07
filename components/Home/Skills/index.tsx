import { Skills } from "@/data/Skills";
import SkillCard from "./card";
import Title from "@/components/shared/Title";
function Skils() {
  return (
    <section className="w-full dark:text-slate-50 dark:bg-secondary sm:mt-0 pt-5 flex flex-col items-center sm:px-2 sm:py-10">
      <Title title="Skills" info="List of technologies that i have used" />
      <div className="w-full mt-7 justify-center sm:p-0 p-6 flex flex-wrap gap-4">
        {Skills.map((item, idx) => {
          return <SkillCard item={item} key={idx} />;
        })}
      </div>
    </section>
  );
}

export default Skils;

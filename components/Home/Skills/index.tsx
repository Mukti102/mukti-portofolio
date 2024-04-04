import { Skills } from "@/data/Skills";
import SkillCard from "./card";
function Skils() {
  return (
    <div className="w-full dark:bg-[#000] sm:mt-0 mt-10 flex flex-col items-center sm:px-2 sm:py-10">
      <div className="text-center">
        <h1 className="text-5xl font-[700]">Skills</h1>
        <p className="text-[1.1rem] font-[400] mt-3">
          List Of Technologies that i have used
        </p>
      </div>
      <div className="w-full mt-7 justify-center sm:p-0 p-6 flex flex-wrap gap-4">
        {Skills.map((item, idx) => {
          return <SkillCard item={item} key={idx} />;
        })}
      </div>
    </div>
  );
}

export default Skils;

import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold">Internship Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-end Developer"
            subTitle="Smartiapps Technologies - (2023)"
            result="Chennai"
            des="Smartiapps Technologies's hiring process is an important part of our culture. Smartiapps Technologies care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Oasis Infobyte - (2023)"
            result="Bangalore (Remote)"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Bangalore isn't easy."
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;

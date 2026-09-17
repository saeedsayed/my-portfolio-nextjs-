"use client";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import skillsData from "@/helper/skills.json";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

const Skills = () => {
  return (
    <section id="skills" aria-label="Technical Skills">
      <SectionTitle>Skills</SectionTitle>
      <p className="text-font-sub-color mb-3">
        Modern web technologies, libraries, and tools I use to build scalable
        digital experiences.
      </p>
      <div className="flex gap-3 flex-wrap justify-center">
        {skillsData?.map(({ skillName, skillIcon }, index) => (
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInAnimationVariants}
            custom={index / 2}
            key={skillName}
            title={skillName}
            className="flex flex-col justify-center items-center w-24 h-24 lg:w-32 lg:h-32 rounded-lg text-center shadow-md bg-sub-background cursor-target"
          >
            <Image
              src={skillIcon}
              alt={`${skillName} icon`}
              className="w-12 lg:w-14"
              loading="lazy"
              width={140}
              height={140}
            />
            <p className="text-md lg:text-xl w-full px-2">{skillName}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

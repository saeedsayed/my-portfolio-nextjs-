import SectionTitle from "./SectionTitle";
import MainBtn from "./MainBtn";
import resumeAnimation from "@/public/animation/resume.json";
import Lottie from "lottie-react";

const Resume = () => {
  return (
    <section id="resume" aria-label="Professional Resume" className="h-full">
      <SectionTitle>My resume</SectionTitle>
      <div className="grid md:grid-cols-2 gap-5 h-full">
        <div className="order-2 flex flex-col gap-8 md:order-1">
          <Lottie animationData={resumeAnimation} className="md:order-4" />
          <p className="text-font-sub-color">
            I am a Full Stack Developer with around 4 years of hands-on
            experience building modern, scalable web applications. Explore or
            download my full resume.
          </p>
          {/* ===========
            show resume PDF button 👇
          =============== */}
          <a
            href={"/saeed-MERN-stack.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-md lg:text-lg"
            aria-label="View Saeed Sayed's Resume PDF"
          >
            <MainBtn>Click here to show my resume</MainBtn>
          </a>
        </div>
        {/* ==========
          resume frame 👇
        ============== */}
        <iframe
          src={"/saeed-MERN-stack.pdf"}
          title="Saeed Sayed Resume"
          className="w-full min-h-122.25 h-full order-1 md:order-2 dark:invertD outline outline-offset-4 outline-hover-color rounded-lg cursor-target"
        />
      </div>
    </section>
  );
};

export default Resume;

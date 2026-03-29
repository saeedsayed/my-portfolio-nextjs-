import SectionTitle from "./SectionTitle";
import MainBtn from "./MainBtn";
import resumeAnimation from "@/public/animation/resume.json";
import Lottie from "lottie-react";
// import resumePdf from "@/public/";

const Resume = () => {
  return (
    <div id="resume" className="h-full">
      <SectionTitle>My resume</SectionTitle>
      <div className="grid md:grid-cols-2 gap-5 h-full">
        <div className="order-2 flex flex-col gap-8 md:order-1">
          <Lottie animationData={resumeAnimation} className="md:order-4" />
          <p className="text-font-sub-color">
            I am a front-end developer with a background in web development. I
            have a passion for learning new technologies, and I am always
            looking to improve my skills.
          </p>
          {/* ===========
            show resume PDF button  👇
          =============== */}
          <a
            href={"/saeed-frontend-resume.pdf"}
            target="_blank"
            className="text-sm md:text-md lg:text-lg md:order-"
            rel="noreferrer"
          >
            <MainBtn>Click here to show my resume</MainBtn>
          </a>
        </div>
        {/* ==========
          resume frame  👇
        ============== */}  
        <iframe
          src={"/saeed-frontend-resume.pdf"}
          title="My resume"
          className="w-full min-h-122.25 h-full order-1 md:order-2 dark:invertD outline outline-offset-4 outline-hover-color rounded-lg cursor-target"
        />
      </div>
    </div>
  );
};

export default Resume;

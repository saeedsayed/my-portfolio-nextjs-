import { MdVerified } from "react-icons/md";
import lottieFile from "@/public/animation/code.json";
import SocialNav from "./SocialNav";
import Lottie from "lottie-react";
import SplitText from "./SplitText";
import TextType from "./TextType";

const Hero = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row items-center"
      rel="preload"
    >
      {/* =======
        left section 👇
        =========== */}
      <div className="flex flex-col md:text-start text-center gap-6 md:w-3/5">
        <div className="flex gap-4 justify-center md:justify-start items-end">
          {/* <Image
            src={"/images/avatar.png"}
            alt="my avatar"
            width={200}
            height={200}
            className="cursor-target"
          /> */}
          <div>
            <MdVerified className="text-(--hover-color) text-2xl" />
          </div>
        </div>
        {/* {aboutData?.bigTitle} */}
        <h1 className="md:text-4xl lg:text-4xl text-2xl text-center md:text-left font-bold leading-tight cursor-target">
          {"I'm"} Eng Saeed, <br className="md:hidden" />a{" "}
          <TextType
            text={[
              "Front-end developer",
              "Back-end developer",
              "Full stack developer",
              "MERN stack developer",
              "Software engineer",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="|"
            deletingSpeed={70}
            cursorBlinkDuration={0.5}
          />
        </h1>

        <SplitText
          text="My name is Saeed, I am a Full-Stack Developer with three years of
          professional experience in designing and implementing interactive and
          user-friendly web applications. I specialize in utilizing Next.js for
          developing dynamic front-end interfaces, and I am proficient in the
          MERN stack, which includes MongoDB, Express.js, React/Next.js, and
          Node.js for back-end development. I am committed to creating clean,
          responsive, and scalable digital products that deliver exceptional
          user experiences while ensuring optimal performance and adherence to
          best development practices. My approach combines a focus on quality
          with a dedication to maintaining high standards in all aspects of my
          work. I am continually seeking opportunities for professional growth
          and development, and I am eager to take on new challenges that allow
          me to enhance my skills and contribute to meaningful projects in the
          field of full-stack development. I value collaboration and strive to
          engage with others to drive innovation and achieve shared goals."
          className="text-font-sub-color text-center!  lg:text-left! text-sm lg:text-xl max-w-full cursor-target"
          delay={130}
          duration={2}
          ease="power3.out"
          splitType="lines"
          from={{ opacity: 0, y: 10 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
        />
        {/* <p className="text-font-sub-color">
          My name is Saeed, I am a Full-Stack Developer with three years of
          professional experience in designing and implementing interactive and
          user-friendly web applications. I specialize in utilizing Next.js for
          developing dynamic front-end interfaces, and I am proficient in the
          MERN stack, which includes MongoDB, Express.js, React/Next.js, and
          Node.js for back-end development. I am committed to creating clean,
          responsive, and scalable digital products that deliver exceptional
          user experiences while ensuring optimal performance and adherence to
          best development practices. My approach combines a focus on quality
          with a dedication to maintaining high standards in all aspects of my
          work. I am continually seeking opportunities for professional growth
          and development, and I am eager to take on new challenges that allow
          me to enhance my skills and contribute to meaningful projects in the
          field of full-stack development. I value collaboration and strive to
          engage with others to drive innovation and achieve shared goals.
        </p> */}
        {/* ===========
        social media links 👇
        =============== */}
        <SocialNav />
      </div>
      {/* ========
        right section 👇
        ============ */}
      <div className="flex-1">
        <Lottie animationData={lottieFile} />
      </div>
    </div>
  );
};

export default Hero;

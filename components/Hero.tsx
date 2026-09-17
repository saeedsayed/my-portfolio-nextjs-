import { MdVerified } from "react-icons/md";
import lottieFile from "@/public/animation/code.json";
import SocialNav from "./SocialNav";
import Lottie from "lottie-react";
import SplitText from "./SplitText";
import TextType from "./TextType";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="about"
      aria-label="About Me"
      className="flex flex-col md:flex-row items-center"
    >
      {/* =======
        left section 👇
        =========== */}
      <div className="flex flex-col md:text-start text-center gap-6 md:w-3/5">
        <div className="flex gap-4 justify-center md:justify-start items-end">
          <Image
            src={"/images/me.png"}
            alt="Saeed Sayed - Full Stack & Frontend Developer"
            width={200}
            height={200}
            priority
            className="cursor-target"
          />
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
            className="text-(--hover-color)"
          />
        </h1>

        <SplitText
          text="My name is Saeed. I am a Full Stack Developer with four years of
          professional experience designing and implementing interactive,
          scalable web applications. I specialize in Next.js and React for
          modern front-end interfaces, and Node.js, Express, MongoDB, and PostgreSQL
          for robust back-end services. I build clean, responsive, high-performance
          digital products that deliver exceptional user experiences while adhering
          to modern web standards."
          className="text-font-sub-color text-center! lg:text-left! text-sm lg:text-xl max-w-full cursor-target"
          delay={130}
          duration={2}
          ease="power3.out"
          splitType="lines"
          from={{ opacity: 0, y: 10 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
        />
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
    </section>
  );
};

export default Hero;

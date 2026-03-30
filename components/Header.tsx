"use client";
import { useEffect, useRef, useState } from "react";
import { LightDarkM, sections } from "./index";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import SocialNav from "./SocialNav";
import GlassSurface from "./GlassSurface";
import { AnimatePresence, motion } from "motion/react";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [clock, setClock] = useState("00:00:00 AM");
  const header = useRef<HTMLElement>(null);

  // ========
  // set clock
  // ========
  useEffect(() => {
    const interval = setInterval(() => {
      const d = new Date();
      let h = d.getHours();
      let m = d.getMinutes();
      let s = d.getSeconds();
      let session = "AM";
      if (h > 12) {
        h = h - 12;
        session = "PM";
      }
      h = h == 0 ? 12 : h < 10 ? +"0" + h : h;
      m = m < 10 ? +"0" + m : m;
      s = s < 10 ? +"0" + s : s;
      setClock(h + ":" + m + ":" + s + session);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 200) {
        header.current?.classList?.add("sticky", "top-0");
        header.current?.classList?.remove("-top-32");
      } else if (window.scrollY > 100) {
        header.current?.classList.remove("top-0");
        header.current?.classList.add("-top-32");
      } else {
        header.current?.classList.remove("-top-32");
        header.current?.classList.remove("sticky", "top-0");
      }
    };
  }, []);

  return (
    <header
      ref={header}
      className={`flex justify-evenly px-10d pt-4 gap-3 transition-all duration-500 z-50 `}
    >
      {/*============= 
        pc nav 👇
      ==============*/}
      <nav className="hidden sm:block sm:order-2 w-fit">
        <GlassSurface
          displace={0.5}
          distortionScale={-180}
          className="rounded-full! w-fit!"
          redOffset={0}
          greenOffset={10}
          blueOffset={20}
          brightness={50}
          opacity={1}
          mixBlendMode="screen"
          backgroundOpacity={0.3}
        >
          <ul
            className="gap-6 text-md shadow-lg font-medium bg-bg-nav
          px-6 py-3 rounded-full  flex"
          >
            {sections.map((sec, i) => (
              <li key={i}>
                <a
                  href={`#${sec.to}`}
                  className="opacity-90 hover:opacity-100 hover:scale-110 transition hover:text-hover-color cursor-none cursor-target block"
                >
                  {sec.name}
                </a>
              </li>
            ))}
          </ul>
        </GlassSurface>
      </nav>
      {/*===========
        mobile nav 👇
      ============*/}
      <AnimatePresence>
        {openNav && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`sm:hidden fixed
              inset-0 z-50 w-screen h-screen`}
            onClick={() => setOpenNav(false)}
          >
            <GlassSurface
              displace={0.5}
              distortionScale={-180}
              className="w-10/12! h-fit! m-auto relative mt-8
                pt-5 px-5 rounded-xl"
              redOffset={0}
              greenOffset={10}
              blueOffset={20}
              brightness={50}
              opacity={1}
              mixBlendMode="screen"
              backgroundOpacity={0.6}
              blur={50}
            >
              <motion.ul
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  damping: 18,
                  stiffness: 200,
                }}
                className={`w-full`}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="text-3xl absolute right-5 top-1 duration-500  hover:rotate-180"
                  onClick={() => setOpenNav(false)}
                >
                  <IoMdClose />
                </button>
                {sections.map((sec, i) => (
                  <li
                    key={i}
                    className="py-2 px-3 border-b border-border-color font-medium"
                  >
                    <a
                      href={`#${sec.to}`}
                      className="block"
                      onClick={() => setOpenNav(false)}
                    >
                      {sec.name}
                    </a>
                  </li>
                ))}
                <li className="py-2 ">
                  <SocialNav />
                </li>
              </motion.ul>
            </GlassSurface>
          </motion.nav>
        )}
      </AnimatePresence>
      {/*==========
        button show mobile nav  👇
      =============*/}
      <button
        className="sm:hidden"
        onClick={() => setOpenNav(true)}
        title="open navigation"
        name="open navigation"
      >
        <GlassSurface
          displace={0.5}
          distortionScale={-180}
          className="w-12! h-12! lg:w-16! lg:h-16! rounded-full!  text-2xl"
          redOffset={0}
          greenOffset={10}
          blueOffset={20}
          brightness={50}
          opacity={1}
          mixBlendMode="screen"
        >
          <FaBars />
        </GlassSurface>
      </button>
      {/* ==========
        clock section
      ============== */}
      <div className="flex sm:order-1 items-center text-xl text-(--hover-color) tracking-widest  cursor-target clock-font">
        {clock}
      </div>
      {/*===========
        light/dark button 👇 
      =============*/}

      <LightDarkM />
    </header>
  );
};

export default Header;

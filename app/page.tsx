"use client";
import {
  Contact,
  Footer,
  Header,
  Hero,
  Projects,
  Resume,
  Skills,
  ToTop,
} from "@/components";
import TargetCursor from "@/components/TargetCursor";

export default function Home() {
  return (
    <div className="bg-primary-color text-font-color relative">
      <TargetCursor />
      <div className="sm:w-10/12 m-auto px-4 sm:px-8 lg:px-14 bg-secondary-color border-x border-x-border-color">
        <Header />
        <div className="border-t border-border-color -mx-4 sm:-mx-8 my-8 lg:-mx-14" />
        <Hero />
        <div className="border-t border-border-color -mx-4 sm:-mx-8 my-12 lg:-mx-14" />
        <Skills />
        <div className="border-t border-border-color -mx-4 sm:-mx-8 my-12 lg:-mx-14" />
        <Projects />
        <div className="border-t border-border-color -mx-4 sm:-mx-8 my-12 lg:-mx-14" />
        <Resume />
        <div className="border-t border-border-color -mx-4 sm:-mx-8 my-12 lg:-mx-14" />
        <Contact />
        <div className="border-t border-border-color -mx-4 sm:-mx-8 my-12 lg:-mx-14" />
        <Footer />
        <ToTop />
      </div>
    </div>
  );
}

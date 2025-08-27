"use client";

import ContactMe from "@/components/Contact";
import Introduction from "@/components/Introduction";
import { PersonModel } from "@/components/PersonModel";
import ResumeSection from "@/components/Resume";
import { Timeline } from "@/components/ui/timeline";
import { TIMELINE_DATA } from "@/components/ui/TimeLineData";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrambleTextPlugin, ScrollTrigger, SplitText } from "gsap/all";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin, SplitText);

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  useEffect(() => {
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <>
      <div className="relative h-screen w-ecreen bg-gray-900 overflow-hidden">
        <Canvas shadows camera={{ position: [0, 0, 0], fov: 30 }}>
          <ambientLight intensity={1} />
          <pointLight position={[0.5, 0, 0]} intensity={0.75} />
          <pointLight position={[-0.5, 0, 0]} intensity={0.75} />
          <pointLight position={[0, 2, -1.3]} intensity={1} />
          <PersonModel
            position={isMobile ? [0, -0.93, -0.7] : [0, -1.33, -0.7]}
            scale={isMobile ? 0.5 : 0.76}
          />
        </Canvas>
      </div>
      <div className="absolute top-0 left-0 bottom-0 right-0 pointer-events-none uppercase overflow-x-hidden">
        <Introduction />
      </div>
      <div className="bg-gray-950 text-white w-full">
        <Timeline data={TIMELINE_DATA} />
        <ResumeSection />
        <ContactMe />
      </div>
    </>
  );
}

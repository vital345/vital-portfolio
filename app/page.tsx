"use client";

import ContactMe from "@/components/Contact";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar/Navbar";
import { PersonModel } from "@/components/PersonModel";
import ResumeSection from "@/components/Resume";
import { LoaderOne } from "@/components/ui/loader";
import { Timeline } from "@/components/ui/timeline";
import { TIMELINE_DATA } from "@/components/ui/TimeLineData";
import { useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrambleTextPlugin, ScrollTrigger, SplitText } from "gsap/all";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin, SplitText);

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const { progress } = useProgress();

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsReady(true);
      }, 1500);
    }
  }, [progress]);

  if (!isReady) {
    return (
      <div className="h-screen w-ecreen flex items-center justify-center bg-gray-950/98">
        <LoaderOne />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="">
        <div className="relative h-screen w-ecreen bg-gray-950/98 overflow-hidden">
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
      </div>
    </>
  );
}

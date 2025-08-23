"use client";

import { PersonModel } from "@/components/PersonModel";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrambleTextPlugin, ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin, SplitText);

export default function Home() {
  return (
    <div className="h-screen w-screen bg-gray-950">
      <Canvas shadows camera={{ position: [0, 0, 0], fov: 30 }}>
        {/* <div className="uppercase overflow-x-hidden">
        <Introduction />
        <div className="min-h-[100vh]"></div>
        <div className="min-h-[100vh]"></div>
      </div> */}
        <ambientLight />
        <pointLight position={[-0.1, -0.1, -0.03]} intensity={1} />
        <pointLight position={[0, 0.5, -1.3]} intensity={1} />
        <PersonModel position={[0, -1.35, -0.7]} scale={0.8} />
      </Canvas>
    </div>
  );
}

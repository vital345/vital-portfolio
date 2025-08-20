"use client";

import Introduction from "@/components/Introduction";
import gsap from "gsap";
import { ScrambleTextPlugin, ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin, SplitText);

export default function Home() {
  return (
    <div className="uppercase overflow-x-hidden">
      <Introduction />
      <div className="min-h-[100vh]"></div>
      <div className="min-h-[100vh]"></div>
    </div>
  );
}

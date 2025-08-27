"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import BangaloreHoverCard from "../MapCard";
import Marquee from "../Marquee";
import { SCRAMBLING_CHARS } from "./constants";
import Footer from "./Footer";

const Introduction = () => {
  const introContentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const t1 = gsap.timeline();

    t1.to(introContentRef.current!.children[0], {
      scrambleText: {
        text: introContentRef.current?.children[0].innerHTML || "",
        chars: SCRAMBLING_CHARS,
        speed: 0.4,
      },
      duration: 1,
    })
      .to(
        introContentRef.current!.children[1],
        {
          scrambleText: {
            text: introContentRef.current?.children[1].innerHTML || "",
            chars: SCRAMBLING_CHARS,
            speed: 0.4,
          },
          duration: 2,
        },
        "<=0.2"
      )
      .to(
        introContentRef.current!.children[2],
        {
          scrambleText: {
            text: introContentRef.current?.children[2].innerHTML || "",
            chars: SCRAMBLING_CHARS,
            speed: 0.4,
          },
          duration: 2,
        },
        "<=0.2"
      );
  }, []);

  return (
    <div className="relative text-white h-full w-full" id={"introduction"}>
      <Marquee />
      <div className="p-10 pt-20 lg:p-25 h-full flex flex-col md:p-25 absolute top-0 left-0 justify-between">
        <div
          ref={introContentRef}
          className="intro-details flex flex-col gap-y-4 overflow-x-hidden"
        >
          <p className="text-[16px]">Hi, I am</p>
          <p className="font-black text-6xl md:text-7xl lg:text-9xl uppercase">
            Vital.
          </p>
          <p className="font-semibold text-1xl w-full md:text-2xl lg:text-2xl leading-normal lg:w-2xl md:w-2xl">
            I build scalable, pixel-perfect web apps with React & TypeScript.
          </p>
        </div>
        <div className="">
          <BangaloreHoverCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Introduction;

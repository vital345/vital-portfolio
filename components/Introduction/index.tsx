"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
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
    <div className="relative">
      <Marquee />
      <div className="min-h-screen min-w-screen inset-0 bg-[url('/background.png')] bg-cover bg-center filter brightness-200 contrast-50 opacity-50"></div>
      <div className="p-20 lg:p-60 flex flex-col md:p-40 absolute top-0 left-0">
        <div
          ref={introContentRef}
          className="intro-details flex flex-col gap-y-6 overflow-x-hidden"
        >
          <p className="text-2xl">Hi, my name is</p>
          <p className="font-black text-5xl md:text-6xl lg:text-9xl uppercase">
            Vital.
          </p>
          <p className="font-semibold text-3xl md:text-3xl lg:text-4xl leading-normal lg:w-3xl ">
            I build scalable, pixel-perfect web apps with React & TypeScript.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Introduction;

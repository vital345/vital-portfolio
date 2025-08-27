"use client";

import { EMAIL } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS, SOCIALS } from "./constants";

const Navbar = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const navLinkRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const hamburgerIconRef = useRef<HTMLDivElement | null>(null);

  const navTimeLineRef = useRef<gsap.core.Timeline | null>(null);
  const hamburgerTimeLineRef = useRef<gsap.core.Timeline | null>(null);

  const [menuExpanded, setMenuExpanded] = useState(false);
  const [showNavBurger, setShowNavBurger] = useState(true);

  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([navLinkRef.current?.children, contactRef.current], {
      opacity: 0,
      autoAlpha: 0,
      x: -20,
    });

    navTimeLineRef.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0,
        duration: 1.2,
        ease: "power3.out",
      })
      .to(
        [navLinkRef.current!.children],
        {
          opacity: 1,
          autoAlpha: 1,
          x: 0,
          stagger: 0.4,
          duration: 0.8,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
        },
        "<+0.2"
      );

    hamburgerTimeLineRef.current = gsap
      .timeline({ paused: true })
      .to(hamburgerIconRef.current!.childNodes[0], {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        hamburgerIconRef.current!.childNodes[1],
        {
          rotate: -45,
          y: -3.3,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<"
      );
  }, []);

  useEffect(() => {
    let lastScrollYAxis = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavBurger(
        currentScrollY <= lastScrollYAxis || currentScrollY < 10
      );
      lastScrollYAxis = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeNavMenu = () => {
    setMenuExpanded(false);
    navTimeLineRef.current?.reverse();
    hamburgerTimeLineRef.current?.reverse();
  };

  const toggleMenu = () => {
    if (menuExpanded) {
      closeNavMenu();
    } else {
      setMenuExpanded(true);
      navTimeLineRef.current?.play();
      hamburgerTimeLineRef.current?.play();
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed z-50 bg-black text-white flex flex-col w-full h-full justify-between uppercase px-10 py-28 gap-y-10 md:w-1/2 md:left-1/2"
      >
        {/* Nav items */}
        <div
          ref={navLinkRef}
          className="flex flex-col text-4xl gap-y-3 md:text-6xl lg:text-8xl"
        >
          {NAV_ITEMS.map((navItem) => (
            <Link
              className="font-black"
              href={`${navItem.id}`}
              key={navItem.id}
              onClick={closeNavMenu}
            >
              {navItem.title}
            </Link>
          ))}
        </div>
        {/* contact info */}
        <div
          ref={contactRef}
          className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
        >
          <div className="font-light">
            <p className="tracking-wide text-white/50">EMAIL</p>
            <a
              href={`mailto:${EMAIL}`}
              className="text-xl tracking-widest lowercase text-pretty"
            >
              {EMAIL}
            </a>
          </div>

          <div className="font-light">
            <p className="tracking-wide text-white/50">Social Media</p>
            <p className="flex flex-col flex-wrap md:flex-row gap-x-2">
              {SOCIALS.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="text-sm leading-loose tracking-widest uppercase hover:text-white transition-colors duration-300"
                >
                  {social.name}
                </a>
              ))}
            </p>
          </div>
        </div>
      </nav>
      <div
        className="fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-10"
        onClick={toggleMenu}
        style={
          showNavBurger
            ? { clipPath: "circle(50% at 50% 50%)" }
            : { clipPath: "circle(0% at 50% 50%)" }
        }
        ref={hamburgerIconRef}
      >
        <span className="block w-8 h-0.5 bg-white rounded-full origin-center"></span>
        <span className="block w-8 h-0.5 bg-white rounded-full origin-center"></span>
      </div>
    </>
  );
};

export default Navbar;

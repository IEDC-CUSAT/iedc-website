import React from "react";
import gsap from "gsap";
import "./ScrollSection.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  const textElements = gsap.utils.toArray(".text");

  textElements.forEach((text) => {
    gsap.to(text, {
      backgroundSize: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: text,
        start: "center 80%",
        end: "center 20%",
        scrub: true,
      },
    });
  });
  return (
    <div className="container w-screen h-2/3 justify-start pt-10 flex flex-col gap-2">
      <h1 class="text">
        IEDC<span>IEDC</span>
      </h1>
      <h1 class="text">
        CUSAT<span>CUSAT</span>
      </h1>
      <h1 class="text">
        2024<span>2024</span>
      </h1>
    </div>
  );
};

export default ScrollSection;

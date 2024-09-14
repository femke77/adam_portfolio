import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CardStacking.css";
import ScrollingText from "./ScrollingText";
import data from "../../utils/projectdata.json";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const ProcessAnimation = () => {
  console.log(data.length);

  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current;

    const calculateXPercent = (index) => {
      if (index === data.length) {
        // last card is the larger 'work together' card
        return -index * 32;
      }
      return -index * 100 + (index > 0 ? 4.5 * index : 0);
    };

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 767px)", () => {
        // Horizontal scroll effect
        gsap.to(sections, {
          xPercent: (i) => calculateXPercent(i),
          duration: (i) => 0.5 * i,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 0.1,

            start: "top -70",
            end: `+=${sections.length * 400}vw`,
            invalidateOnRefresh: true,
          },
        });
      });

      return () => {
        mm.revert();
      };
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="projects" className="box">
      <div ref={containerRef}>
        <ScrollingText />
        <div className="">
          <div className="pin-process overflow-hidden ">
            <div className="inner-div">
              {data.map((project, index) => (
                <div
                  ref={(el) => (sectionsRef.current[index] = el)}
                  className="process-item-wrapper black-gradient py-64 py-xl-192 position-relative"
                  key={project.name}
                >
                  <ProjectCard project={project} index={index+1} />
                </div>
              ))}

              {/* Last card not in map, static */}
              <div
                ref={(el) => (sectionsRef.current[data.length] = el)}
                className="process-item-wrapper-last py-64 py-xl-192 position-relative"
              >
                <div className="mw-578px ps-64 d-flex flex-column gap-24 align-items-start">
                  <div className="label-wrapper border rounded border-extra-gray d-inline-flex">
                    <span className="d-flex gap-10 align-items-center justify-content-center py-4 px-12">
                      <span className="fs-14 fs-xl-20 text-extra-gray lh-1"></span>
                    </span>
                  </div>

                  <h1 className="">Let's Work Together!</h1>

                  <div className="fs-16 fs-xl-18 text-extra-gray lh-normal">
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessAnimation;

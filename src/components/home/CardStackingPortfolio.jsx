import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CardStackingPortfolio.css";
import ScrollingText from "./ScrollingText";
import data from "../../utils/projectdata.json";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const ProcessAnimation = () => {
  

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
            end: `+=${sections.length * 600}vw`,
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
  
      <div ref={containerRef} id="projects" style={{overflow: "hidden"}}>
        <ScrollingText />
 
          <div className="pin-process">
            <div className="inner-div">
              {data.map((project, index) => (
                <div
                  ref={(el) => (sectionsRef.current[index] = el)}
                  className="process-item-wrapper"
                  key={project.name}
                >
                  <ProjectCard project={project} index={index + 1} />
                </div>
              ))}

              {/* Last card not in map, static */}
              <div
                ref={(el) => (sectionsRef.current[data.length] = el)}
                className="process-item-wrapper-last"
          
              >
                <div style={{padding: "20px"}}>
                 
                 <span>Contact </span> <h1 style={{fontSize: "4rem"}}>Let's Work Together!</h1>

                  <div >
                    <p>email@gmail.com</p>
                    <p>000-444-5555</p>
                  </div>
                </div>
              </div>
            </div>
    
        </div>
      </div>

      

  );
};

export default ProcessAnimation;

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CardStackingPortfolio.css";
import ScrollingText from "./ScrollingText";
import data from "../../utils/projectdata.json";
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ProcessAnimation = () => {
  const navigate = useNavigate();

  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const [containerWidth, setContainerWidth] = useState(0);  
  const [multiplier, setMultiplier] = useState(0);
  const cardWidth = 50; // Example width of each standard card
  
    const [finalCardWidth, setFinalCardWidth] = useState(0);  
   console.log("final card width", finalCardWidth);
   

  
  // Total width required for standard cards
  const totalScrollWidth = (data.length - 1) * cardWidth;

  useEffect(() => {
    const sections = sectionsRef.current;

    const calculateXPercent = (index) => {
      if (index === data.length) {
        // last card is the larger 'work together' card
        
        return -index * 52;
      }
      
      return -index * 100 +(index > 0 ? 4.5 * index : 0);
    };

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 767px)", () => {  // mobile view is not done. THis cutoff might change
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

console.log("container width", containerRef.current.getBoundingClientRect());
setContainerWidth(containerRef.current.getBoundingClientRect().width);

    
      return () => {
        mm.revert();
      };
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} id="projects" style={{ overflow: "hidden" }}>
      <ScrollingText />
{/* TODO Mobile view is not done at all */}
      <div className="pin-process">
      
          {data.map((project, index) => (
            <div
              ref={(el) => (sectionsRef.current[index] = el)}
              className="process-item-wrapper"
              key={project.name}
            >
              <ProjectCard project={project} index={index + 1} />
            </div>
          ))}
{/* TODO need to make this card take the right size depending on screen width */}

          {/* Last card not in map, static */}
          <div
            ref={(el) => (sectionsRef.current[data.length] = el)}
          
            className="process-item-wrapper-last"
            // style={{width: "60%"}}
          >

            <div style={{display: "flex"}}>

            <div style={{ padding: "25px", flexBasis: "50%"      }}>
              <div>Contact </div>
              <h1 style={{ fontSize: "3.5rem" }}>Let's Work Together!</h1>
              <div style={{ marginLeft: "25px" }}>
              <div
                style={{
                  border: "1px solid black",
                  borderRadius: "10px",
                  width: "40%",
                  textAlign: "center",
                  padding: "4px",
                }}
              >
                email@gmail.com
              </div>
              <div
                style={{
                  border: "1px solid black",
                  borderRadius: "10px",
                  width: "40%",
                  textAlign: "center",
                  padding: "4px",
                  marginTop: "5px"
                }}
              >
                000-000-0000
              </div>
            </div>

            </div>

            
            <div style={{padding: "60px", flexBasis: "50%" }}> <p>We are always happy to talk. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit consequatur rerum sapiente excepturi deserunt ducimus voluptates deleniti alias nemo doloribus beatae vero harum quas enim</p>
            <button onClick={()=>navigate("/Contact")} style={{background: "black", color: "white", borderRadius: "10px", height:"50px", width: "150px"}}>Contact Now</button>
            
            </div>
            </div>
          </div>
        </div>
  
    </div>
  );
};

export default ProcessAnimation;

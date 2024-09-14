import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CardStacking.css";
import ScrollingText from "./ScrollingText";

gsap.registerPlugin(ScrollTrigger);

const ProcessAnimation = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current;

    // Ensure each section is in an array
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 767px)", () => {
        // Horizontal scroll effect
        gsap.to(sections, {
            xPercent: (i) => {
                //need to add adjustments for various view widths
                if (i === sections.length - 1) {
                  return -i * 32; // Adjust for the larger fourth section
                }
                return -i * 100 + (i > 0 ? 4.5 * i : 0); // For first 3 sections (50vw each)
              },
        //   xPercent: (i) => -i * 100 + (i > 0 ? 4.5 * i : 0),
          duration: (i) => 0.5 * i,
          ease: "none", // Linear motion
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 0.1, // Synchronize scroll with animation

            start: "top -70",
            end: `+=${sections.length * 400}vw`, // Total scroll distance based on the number of sections
            invalidateOnRefresh: true, // Refresh trigger on resize
          },
        });
      });

      return () => {
        mm.revert(); // Cleanup GSAP matchMedia when component unmounts
      };
    });

    return () => {
      ctx.revert(); // Cleanup GSAP context when component unmounts
    };
  }, []);

  return (
    <section>
      <div ref={containerRef} className="container">
        <ScrollingText />
        <div className="row">
          <div className="pin-process overflow-hidden">
            <div className="inner-div">
              <div
                ref={(el) => (sectionsRef.current[0] = el)}
                className="process-item-wrapper w-100 black-gradient py-64 py-xl-192 position-relative"
              >
                <div className="mw-578px ps-64 d-flex flex-column gap-24 align-items-start">
                  <div className="label-wrapper border rounded border-extra-gray d-inline-flex">
                    <span className="d-flex gap-10 align-items-center justify-content-center py-4 px-12">
                      <div className="yellow-circle"></div>
                      <span className="fs-14 fs-xl-20 text-extra-gray lh-1">
                        Step 1
                      </span>
                    </span>
                  </div>

                  <h4 className="fs-20 fs-xl-36 text-gradient-white lh-110p letter-spacing pb-12">
                    Understand your business &amp; scaling potential{" "}
                  </h4>

                  <div className="fs-16 fs-xl-18 text-extra-gray lh-normal">
                    <p>
                      We establish the foundation for success. Aligning activity
                      with the business data helps us ensure we achieve the most
                      important goal; Growing in a sustainable &amp; profitable
                      rate.
                    </p>
                  </div>
                </div>

                <div className="number-item black-gradient d-flex justify-content-center align-items-center position-absolute bottom-0">
                  <span className="fw-medium">01 </span>
                </div>
              </div>
              <div
                ref={(el) => (sectionsRef.current[1] = el)}
                className="process-item-wrapper w-100 black-gradient py-64 py-xl-192 position-relative"
              >
                <div className="mw-578px ps-64 d-flex flex-column gap-24 align-items-start">
                  <div className="label-wrapper border rounded border-extra-gray d-inline-flex">
                    <span className="d-flex gap-10 align-items-center justify-content-center py-4 px-12">
                      <div className="yellow-circle"></div>
                      <span className="fs-14 fs-xl-20 text-extra-gray lh-1">
                        Step 2
                      </span>
                    </span>
                  </div>

                  <h4 className="fs-20 fs-xl-36 text-gradient-white lh-110p letter-spacing pb-12">
                    Define a plan of action{" "}
                  </h4>

                  <div className="fs-16 fs-xl-18 text-extra-gray lh-normal">
                    <p>
                      We establish the foundation for success. Aligning activity
                      with the business data helps us ensure we achieve the most
                      important goal; Growing in a sustainable &amp; profitable
                      rate.
                    </p>
                  </div>
                </div>

                <div className="number-item black-gradient d-flex justify-content-center align-items-center position-absolute bottom-0">
                  <span className="fw-medium">02 </span>
                </div>
              </div>
              <div
                ref={(el) => (sectionsRef.current[2] = el)}
                className="process-item-wrapper w-100 black-gradient py-64 py-xl-192 position-relative"
              >
                <div className="mw-578px ps-64 d-flex flex-column gap-24 align-items-start">
                  <div className="label-wrapper border rounded border-extra-gray d-inline-flex">
                    <span className="d-flex gap-10 align-items-center justify-content-center py-4 px-12">
                      <div className="yellow-circle"></div>
                      <span className="fs-14 fs-xl-20 text-extra-gray lh-1">
                        Step 3
                      </span>
                    </span>
                  </div>

                  <h4 className="fs-20 fs-xl-36 text-gradient-white lh-110p letter-spacing pb-12">
                    Execute &amp; measure{" "}
                  </h4>

                  <div className="fs-16 fs-xl-18 text-extra-gray lh-normal">
                    <p>
                      We establish the foundation for success. Aligning activity
                      with the business data helps us ensure we achieve the most
                      important goal; Growing in a sustainable &amp; profitable
                      rate.
                    </p>
                  </div>
                </div>

                <div className="number-item black-gradient d-flex justify-content-center align-items-center position-absolute bottom-0">
                  <span className="fw-medium">03 </span>
                </div>
              </div>
              <div
                ref={(el) => (sectionsRef.current[3] = el)}
                className="process-item-wrapper-last w-100  py-64 py-xl-192 position-relative"
              >
                <div className="mw-578px ps-64 d-flex flex-column gap-24 align-items-start">
                  <div className="label-wrapper border rounded border-extra-gray d-inline-flex">
                    <span className="d-flex gap-10 align-items-center justify-content-center py-4 px-12">
                      <div className="yellow-circle"></div>
                      <span className="fs-14 fs-xl-20 text-extra-gray lh-1">
                        Step 4
                      </span>
                    </span>
                  </div>

                  <h4 className="fs-20 fs-xl-36 text-gradient-white lh-110p letter-spacing pb-12">
                  Let's Work Together!
                  </h4>

                  <div className="fs-16 fs-xl-18 text-extra-gray lh-normal">
                    <p>
                  
                    </p>
                  </div>
                </div>

                {/* <div className="number-item black-gradient d-flex justify-content-center align-items-center position-absolute bottom-0">
                  <span className="fw-medium">04 </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessAnimation;

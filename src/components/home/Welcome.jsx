import { useEffect, useState } from "react";
import "./Welcome.css";
import * as Scroll from "react-scroll";
import WelcomeNoAni from "./WelcomeNoAni";
import { useAnimationContext } from "../../utils/AnimationContext";

// TODO only animate first time user visits the site

export default function Welcome() {
  const { hasAnimated, disableAnimation } = useAnimationContext();

console.log(hasAnimated);




  const scroller = Scroll.scroller;

  const scroll = (selector) => {
    scroller.scrollTo(selector, {
      duration: 1500,
      offset: -75,
      spy: true,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      if (!hasAnimated) {
        disableAnimation();
      }
      // Scroll into the intro section automatically after 4 seconds???
      // scroll("intro");
    }, 4000);
  }, [hasAnimated, disableAnimation]);


  return (
    <div className={hasAnimated ? "title": "animated-title"}>
      <div className="text-top">
        <div>
          <span>Adam </span>
          <span>Mathis</span>
        </div>
      </div>
      <div className="text-bottom">
        <div>Web Developer</div>
      </div>
    </div>
  );
}

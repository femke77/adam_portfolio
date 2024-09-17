import { duration } from "@mui/material";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  // lenis options for configuration
  const lenisOptions = {

    lerp: 0.1,
    duration: 1.2,
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    normalizeWheel: true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
export default SmoothScrolling;
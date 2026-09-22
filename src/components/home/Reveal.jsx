import { useInView } from "react-intersection-observer";

/**
 * Fades + lifts its children into view once, when they enter the viewport.
 */
function Reveal({ children, delay = 0, className = "" }) {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "0px 0px -70px 0px" });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`home-reveal ${inView ? "home-reveal-in" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export default Reveal;

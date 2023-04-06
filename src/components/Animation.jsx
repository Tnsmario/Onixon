import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";

export const Section = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.85, 0.18, 0.27, 0.96) .2s",
        }}
      >
        {children}
      </span>
    </section>
  );
};

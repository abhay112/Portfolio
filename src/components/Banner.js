"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../utils/useMousePosition";
import "../styles/banner.scss";

export default function Banner() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <div className="page-wrapper">
      <div className="banner">
        <motion.div
          className="mask"
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <p
            className="heading-lg"
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            <span>Versatile</span> full-stack developer crafting innovative
            digital solutions with seamless frontend aesthetics and robust
            backend functionality.
          </p>
        </motion.div>

        <div className="banner-body">
          <p className="heading-lg">
          I'm Abhay Verma, a <span>versatile and skilled</span> full-stack developer with a strong focus on delivering high-quality and impactful digital solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

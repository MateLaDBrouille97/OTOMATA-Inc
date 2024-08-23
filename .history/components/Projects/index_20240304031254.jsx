"use client";
// import styles from './style.module.css';
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const anim = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0 },
};

export default function Project({ project }) {
  const [isActive, setIsActive] = useState(false);

  const { title1, title2, src, link } = project;
  return (
    <>
      <Link href={link} legacyBehavior>
        <div
          onMouseEnter={() => {
            setIsActive(true);
          }}
          onMouseLeave={() => {
            setIsActive(false);
          }}
          className={!link?"project2":"project"}
        >
          <p>{title1}</p>
          <motion.div
            variants={anim}
            animate={isActive ? "open" : "closed"}
            className="imgContainer"
          >
            <Image src={src} width={100} height={100} alt=""></Image>
          </motion.div>
          <p>{title2}</p>
        </div>
      </Link>
    </>
  );
}

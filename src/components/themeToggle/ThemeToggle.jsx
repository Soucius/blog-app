"use client";

import styles from "./themeToggle.module.css";
import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  console.log(theme);
  

  return (
    <div className={styles.container} onClick={toggle} style={theme === "dark" ? {backgroundColor: "white"} : {backgroundColor: "#0F172A"}}>
      <Image src="/moon.png" alt="" width={14} height={14} />

      <div className={styles.ball} style={theme === "dark" ? {left: 1, backgroundColor: "#0F172A"} : {right: 1, backgroundColor: "white"}}></div>

      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
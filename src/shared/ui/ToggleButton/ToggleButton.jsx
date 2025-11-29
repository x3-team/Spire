import React, { useState } from "react";
import styles from "./ToggleButton.module.css";

export default function ToggleButton({ leftLabel = "Human Appchain", rightLabel = "Celo Network", onChange={} }) {
  const [active, setActive] = useState("left");

  const toggle = (side) => {
    setActive(side);
    // onChange?.(side);
  };

  return (
    <div className={styles.container}>
      <div className={styles.slider} data-active={active} />
      <button className={styles.btn} onClick={() => toggle("left")}>
        {leftLabel}
      </button>
      <button className={styles.btn} onClick={() => toggle("right")}>
        {rightLabel}
      </button>
    </div>
  );
}
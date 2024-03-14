import { useState, useEffect } from "react";
import styles from "./styles.module.css";

export default function Cursor() {
  // Track the current cursor position
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    // Update the cursor position based on the mouse coordinates.
    setPosition({ x: e.clientX, y: e.clientY });
    const target = e.target;
    setIsPointer(
      window.getComputedStyle(target as Element).getPropertyValue("cursor") ===
        "pointer",
    );
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // The empty dependency array ensures that this effect runs only once on mount.

  // Calculate the size of the cursor based on whether the cursor is over a clickable element.
  const cursorSize = isPointer ? 40 : 20;

  return (
      <div
        className={`${styles.cursor}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
        }}
      ></div>
  );
}

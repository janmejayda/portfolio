import { useEffect, useRef } from "react";

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const spawnRipple = (x, y, soft) => {
      const ripple = document.createElement("span");
      ripple.className = soft ? "click-ripple click-ripple-soft" : "click-ripple";
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      document.body.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    };

    const onDown = (event) => {
      ringRef.current?.classList.add("cursor-down");

      if (reduceMotion) return;
      spawnRipple(event.clientX, event.clientY, false);
      setTimeout(() => spawnRipple(event.clientX, event.clientY, true), 120);
    };

    const onUp = () => {
      ringRef.current?.classList.remove("cursor-down");
    };

    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);

    let onMove;
    let onLeave;

    if (!isTouch) {
      const dot = dotRef.current;
      const ring = ringRef.current;

      document.body.classList.add("has-custom-cursor");

      onMove = (event) => {
        const position = `translate(${event.clientX}px, ${event.clientY}px)`;
        dot.style.transform = position;
        ring.style.transform = position;
        dot.classList.add("cursor-visible");
        ring.classList.add("cursor-visible");
      };

      onLeave = () => {
        dot.classList.remove("cursor-visible");
        ring.classList.remove("cursor-visible");
      };

      window.addEventListener("mousemove", onMove);
      document.addEventListener("mouseleave", onLeave);
    }

    return () => {
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      if (onMove) window.removeEventListener("mousemove", onMove);
      if (onLeave) document.removeEventListener("mouseleave", onLeave);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div className="cursor-ring" ref={ringRef} />
      <div className="cursor-dot" ref={dotRef} />
    </>
  );
}

export default CustomCursor;
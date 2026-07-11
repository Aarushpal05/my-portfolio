import React, { useEffect, useRef, useState } from "react";
import "../css/Banner.css";

export default function Banner() {
  const canvasRef = useRef(null);

  // Typewriter State
  const [typed, setTyped] = useState("");

  // Typewriter Effect
  useEffect(() => {
    const text = "Full Stack Developer ";

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setTyped(text);
      return;
    }

    let charIndex = 0;
    let timeoutId;

    const tick = () => {
      charIndex++;
      setTyped(text.slice(0, charIndex));

      if (charIndex < text.length) {
        timeoutId = setTimeout(tick, 100);
      }
    };

    tick();

    return () => clearTimeout(timeoutId);
  }, []);

  // Background Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    let W, H, dpr, stars, rafId, t = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;

      canvas.width = W * dpr;
      canvas.height = H * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initStars = () => {
      const count = Math.max(120, Math.min(Math.round((W * H) / 2600), 320));

      stars = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.3 + 0.3,
        vy: Math.random() * 0.04 + 0.01,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.01,
      }));
    };

    const step = () => {
      t++;

      ctx.clearRect(0, 0, W, H);

      stars.forEach((s) => {
        s.y += s.vy;

        if (s.y > H) {
          s.y = 0;
          s.x = Math.random() * W;
        }

        const twinkle = 0.5 + 0.5 * Math.sin(t * s.speed + s.phase);
        const alpha = 0.25 + twinkle * 0.65;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();
      });

      rafId = requestAnimationFrame(step);
    };

    const handleResize = () => {
      resize();
      initStars();
    };

    resize();
    initStars();
    step();

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="shb-hero">
      <div className="shb-nebula">
        <div className="shb-cloud shb-cloud--1"></div>
        <div className="shb-cloud shb-cloud--2"></div>
        <div className="shb-cloud shb-cloud--3"></div>
      </div>

      <canvas ref={canvasRef} className="shb-canvas"></canvas>

      <div className="shb-shooting-star shb-shooting-star--1"></div>
      <div className="shb-shooting-star shb-shooting-star--2"></div>
      <div className="shb-shooting-star shb-shooting-star--3"></div>

      <div className="shb-vignette"></div>

      <div className="twh-wrap">
        <span className="twh-eyebrow">Hello, I'm</span>

        <h1 className="twh-heading">
          Ayush Pal

          <span className="twh-type-line">
            <span className="twh-type-text">{typed}</span>
            <span className="twh-cursor"></span>
          </span>
        </h1>

        <p className="twh-sub">
         I build modern, responsive, and scalable web applications using React and Django.
        </p>
      </div>
    </section>
  );
}
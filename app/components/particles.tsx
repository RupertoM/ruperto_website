"use client";

import React, { useRef, useEffect } from "react";
import { useMousePosition } from "@/util/mouse";

interface ParticlesProps {
  className?: string;
  amount?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
}

export default function Particles({
  className = "",
  amount = 75,
  staticity = 40,
  ease = 60,
  refresh = false,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const stars = useRef<any[]>([]);
  const mousePosition = useMousePosition();
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    createCanvas();
    animate();
    window.addEventListener("resize", createCanvas);

    return () => {
      window.removeEventListener("resize", createCanvas);
    };
  }, []);

  useEffect(() => {
    onMouseMove();
  }, [mousePosition.x, mousePosition.y]);

  useEffect(() => {
    createCanvas();
  }, [refresh]);

  const createCanvas = () => {
    resizeCanvas();
    drawParticles();
  };

  const onMouseMove = () => {
    if (canvasRef.current) {
      const dimensions = canvasRef.current.getBoundingClientRect();
      const { w: width, h: height } = canvasSize.current;
      const x = mousePosition.x - dimensions.left - width / 2;
      const y = mousePosition.y - dimensions.top - height / 2;
      const insideChecker =
        x < width / 2 && x > -width / 2 && y < height / 2 && y > -height / 2;
      if (insideChecker) {
        mouse.current.x = x;
        mouse.current.y = y;
      }
    }
  };

  type Star = {
    x: number;
    y: number;
    translateX: number;
    translateY: number;
    size: number;
    alpha: number;
    targetAlpha: number;
    dx: number;
    dy: number;
    magnetism: number;
  };

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      stars.current.length = 0;
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      context.current.scale(dpr, dpr);
    }
  };

  const starParams = (): Star => {
    const x = Math.floor(Math.random() * canvasSize.current.w);
    const y = Math.floor(Math.random() * canvasSize.current.h);
    const translateX = 0;
    const translateY = 0;
    const size = Math.ceil(Math.random() * 3) + 0.5;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.4).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.2;
    const dy = (Math.random() - 0.5) * 0.2;
    const magnetism = 0.1 + Math.random() * 4;
    return {
      x,
      y,
      translateX,
      translateY,
      size,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    };
  };

  const drawStar = (star: Star, update = false) => {
    if (context.current) {
      const { x, y, translateX, translateY, size, alpha } = star;
      context.current.translate(translateX, translateY);
      context.current.beginPath();

      const spikes = 5; // Adjust the number of spikes for the star
      const innerRadius = size / 8;
      const outerRadius = size;

      for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const currX = x + Math.cos((i * Math.PI) / spikes) * radius;
        const currY = y + Math.sin((i * Math.PI) / spikes) * radius;

        if (i === 0) {
          context.current.moveTo(currX, currY);
        } else {
          context.current.lineTo(currX, currY);
        }
      }

      context.current.closePath();
      context.current.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      context.current.fill();
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!update) {
        stars.current.push(star);
      }
    }
  };

  const clearContext = () => {
    if (context.current) {
      context.current.clearRect(
        0,
        0,
        canvasSize.current.w,
        canvasSize.current.h
      );
    }
  };

  const drawParticles = () => {
    clearContext();
    const particleCount = amount;
    for (let i = 0; i < particleCount; i++) {
      const star = starParams();
      drawStar(star);
    }
  };

  const remapValue = (
    value: number,
    start1: number,
    end1: number,
    start2: number,
    end2: number
  ): number => {
    const remapped =
      ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
    return remapped > 0 ? remapped : 0;
  };

  const animate = () => {
    clearContext();
    stars.current.forEach((star: Star, i: number) => {
      // Handle the alpha value
      const edge = [
        star.x + star.translateX - star.size, // distance from left edge
        canvasSize.current.w - star.x - star.translateX - star.size, // distance from right edge
        star.y + star.translateY - star.size, // distance from top edge
        canvasSize.current.h - star.y - star.translateY - star.size, // distance from bottom edge
      ];
      const closestEdge = edge.reduce((a, b) => Math.min(a, b));
      const remapClosestEdge = parseFloat(
        remapValue(closestEdge, 0, 20, 0, 1).toFixed(2)
      );
      if (remapClosestEdge > 1) {
        star.alpha += 0.02;
        if (star.alpha > star.targetAlpha) {
          star.alpha = star.targetAlpha;
        }
      } else {
        star.alpha = star.targetAlpha * remapClosestEdge;
      }
      star.x += star.dx;
      star.y += star.dy;
      star.translateX +=
        (mouse.current.x / (staticity / star.magnetism) - star.translateX) /
        ease;
      star.translateY +=
        (mouse.current.y / (staticity / star.magnetism) - star.translateY) /
        ease;
      // star gets out of the canvas
      if (
        star.x < -star.size ||
        star.x > canvasSize.current.w + star.size ||
        star.y < -star.size ||
        star.y > canvasSize.current.h + star.size
      ) {
        // remove the star from the array
        stars.current.splice(i, 1);
        // create a new star
        const newStar = starParams();
        drawStar(newStar);
        // update the star position
      } else {
        drawStar(
          {
            ...star,
            x: star.x,
            y: star.y,
            translateX: star.translateX,
            translateY: star.translateY,
            alpha: star.alpha,
          },
          true
        );
      }
    });
    window.requestAnimationFrame(animate);
  };

  return (
    <div className={className} ref={canvasContainerRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}

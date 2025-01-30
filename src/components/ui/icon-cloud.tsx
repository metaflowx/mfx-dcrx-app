"use client";

import React, { useState, useEffect, useRef } from "react";

interface IconCloudProps {
  icons?: React.ReactNode[];
  images?: string[];
}

interface Icon {
  x: number;
  y: number;
  z: number;
  id: number;
}

export function IconCloud({ icons, images }: IconCloudProps) {
  const [iconPositions, setIconPositions] = useState<Icon[]>([]);
  const [angle, setAngle] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sphereSize, setSphereSize] = useState(250); // Default sphere size

  // Adjust sphere size based on screen width
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setSphereSize(150); // Smaller size for mobile
      } else if (window.innerWidth < 1024) {
        setSphereSize(200); // Medium size for tablets
      } else {
        setSphereSize(250); // Default size for larger screens
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Generate initial icon positions on a sphere
  useEffect(() => {
    const items = icons || images || [];
    const newIcons: Icon[] = [];
    const numIcons = items.length || 30;

    const offset = 2 / numIcons;
    const increment = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < numIcons; i++) {
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * increment;

      const x = Math.cos(phi) * r;
      const z = Math.sin(phi) * r;

      newIcons.push({
        x: x * sphereSize,
        y: y * sphereSize,
        z: z * sphereSize,
        id: i,
      });
    }
    setIconPositions(newIcons);
  }, [icons, images, sphereSize]);

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setAngle((prev) => ({
          x: prev.x + 0.015, // Adjusted auto-rotation for smoothness
          y: prev.y + 0.015,
        }));
      }
    }, 30);
    return () => clearInterval(interval);
  }, [isHovering]);

  // Mouse hover event handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      setAngle({
        x: mouseY * 0.0025, // Faster Y-axis rotation
        y: -mouseX * 0.0025, // Faster X-axis rotation
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] mx-auto"
      style={{ perspective: "800px" }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {iconPositions.map((icon, index) => {
        const cosX = Math.cos(angle.x);
        const sinX = Math.sin(angle.x);
        const cosY = Math.cos(angle.y);
        const sinY = Math.sin(angle.y);

        const rotatedX = icon.x * cosY + icon.z * sinY;
        const rotatedZ = -icon.x * sinY + icon.z * cosY;
        const rotatedY = icon.y * cosX - rotatedZ * sinX;
        const finalZ = icon.y * sinX + rotatedZ * cosX;

        return (
          <div
            key={icon.id}
            className="absolute w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) 
                          translate3d(${rotatedX}px, ${rotatedY}px, ${finalZ}px)`,
              transition: isHovering ? "transform 0.02s ease-out" : undefined,
            }}
          >
            {icons ? (
              icons[index]
            ) : images ? (
              <img
                src={images[index]}
                alt={`icon-${index}`}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

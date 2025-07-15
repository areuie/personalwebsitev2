"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const isHovering = useRef(false);

  useEffect(() => {
    if (!headerRef.current) return;

    // Parallax effect for stars
    const stars = starsRef.current?.children;
    if (stars) {
      Array.from(stars).forEach((star, index) => {
        const yOffset = index * 20;
        
        gsap.to(star, {
          y: `-${yOffset}px`,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        // Floating animation
        gsap.to(star, {
          y: "-20px",
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!headerRef.current || !stars) return;
      
      const rect = headerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      Array.from(stars).forEach((star) => {
        const starRect = (star as HTMLElement).getBoundingClientRect();
        const starX = starRect.left - rect.left + starRect.width / 2;
        const starY = starRect.top - rect.top + starRect.height / 2;
        
        const deltaX = mouseX - starX;
        const deltaY = mouseY - starY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          const moveX = (deltaX / distance) * force * 20;
          const moveY = (deltaY / distance) * force * 20;
          
          gsap.to(star, {
            x: `-${moveX}px`,
            y: `-${moveY}px`,
            duration: 0.3,
            ease: "power2.out",
          });
        } else {
          gsap.to(star, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      });
    };
    
    const handleMouseEnter = () => {
      if (!headerRef.current || !gradientRef.current) return;
      isHovering.current = true;
      
      // Nebula color shift effect - more gradual
      gsap.to(gradientRef.current, {
        background: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 25%, #ec4899 50%,rgb(255, 255, 255) 75%,rgb(6, 85, 212) 100%)",
        duration: 1.5,
        ease: "power2.inOut",
      });
      
      // Only change particle opacity, no scaling
      if (stars) {
        Array.from(stars).forEach((star, index) => {
          gsap.to(star, {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          });
        });
      }
    };
    
    const handleMouseLeave = () => {
      if (!headerRef.current || !gradientRef.current) return;
      isHovering.current = false;
      
      // Return to original gradient - more gradual
      gsap.to(gradientRef.current, {
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
        duration: 1.5,
        ease: "power2.inOut",
      });
      
      // Return particles to normal opacity only
      if (stars) {
        Array.from(stars).forEach((star, index) => {
          gsap.to(star, {
            opacity: 0.6,
            duration: 0.8,
            ease: "power2.out",
          });
        });
      }
      
      // Remove glow effect
      gsap.to(headerRef.current, {
        boxShadow: "none",
        duration: 1.0,
        ease: "power2.out",
      });
    };
    headerRef.current.addEventListener("mousemove", handleMouseMove);
    headerRef.current.addEventListener("mouseenter", handleMouseEnter);
    headerRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (headerRef.current) {
        headerRef.current.removeEventListener("mousemove", handleMouseMove);
        headerRef.current.removeEventListener("mouseenter", handleMouseEnter);
        headerRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className="relative w-full h-80 bg-gradient-to-b from-blue-900 via-purple-800 to-white overflow-hidden perspective-1000 transition-all duration-500"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Animated gradient background */}
      <div
        ref={gradientRef}
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-800 via-pink-600 to-white opacity-90"
        style={{
          background:
            "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
        }}
      />
      {/* Additional gradient layers for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-900/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-pink-500/20" />
      {/* Floating star-shaped particles */}
      <div ref={starsRef} className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      {/* Glow effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white pointer-events-none" style={{mixBlendMode: "lighten"}} />
    </div>
  );
} 
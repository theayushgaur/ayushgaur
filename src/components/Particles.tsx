
import { useEffect, useRef, useState } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
};

const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>(0);
  const mousePosition = useRef<{ x: number; y: number } | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Initialize particles
  const initParticles = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    particles.current = [];
    const particleCount = Math.min(100, Math.floor(window.innerWidth * 0.04));
    
    for (let i = 0; i < particleCount; i++) {
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        vx: 0,
        vy: 0
      });
    }
    
    setIsInitialized(true);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        if (isInitialized) {
          initParticles();
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mousePosition.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.current.forEach((particle) => {
        // Calculate direction to mouse with easing
        if (mousePosition.current) {
          const dx = mousePosition.current.x - particle.x;
          const dy = mousePosition.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Only move particles within a certain range of the mouse
          if (distance < 300) {
            const influenceFactor = 0.01 * (1 - distance / 300);
            particle.vx = particle.vx * 0.92 + dx * influenceFactor;
            particle.vy = particle.vy * 0.92 + dy * influenceFactor;
          } else {
            // Gradually slow down particles outside the mouse influence
            particle.vx *= 0.98;
            particle.vy *= 0.98;
          }
        } else {
          // No mouse interaction, slowly come to a stop
          particle.vx *= 0.95;
          particle.vy *= 0.95;
        }
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Handle edge cases
        if (particle.x < 0) particle.x = 0;
        if (particle.x > canvas.width) particle.x = canvas.width;
        if (particle.y < 0) particle.y = 0;
        if (particle.y > canvas.height) particle.y = canvas.height;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fill();
      });
      
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Set up event listeners and start animation
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    
    initParticles();
    animate();

    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [isInitialized]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 w-full h-full pointer-events-none"
    />
  );
};

export default Particles;

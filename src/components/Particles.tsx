import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

type Particle = {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
};

const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>(0);
  const mousePosition = useRef<{ x: number; y: number } | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const { theme } = useTheme();
  
  // Initialize particles
  const initParticles = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    particles.current = [];
    const particleCount = Math.min(150, Math.floor(window.innerWidth * 0.05));
    
    for (let i = 0; i < particleCount; i++) {
      // Create random gentle drift for each particle
      const baseVx = (Math.random() - 0.5) * 0.2;
      const baseVy = (Math.random() - 0.5) * 0.2;
      
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.2 + 0.5,
        vx: baseVx,
        vy: baseVy,
        baseVx: baseVx,
        baseVy: baseVy
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
      
      // Determine particle color based on theme
      const particleColor = theme === "dark" ? "255, 255, 255" : "0, 0, 0";
      const opacityBase = theme === "dark" ? 0.6 : 0.3;
      
      particles.current.forEach((particle) => {
        // Default movement - gentle floating
        particle.vx = particle.baseVx;
        particle.vy = particle.baseVy;
        
        // Very subtle influence from cursor with much lower intensity
        if (mousePosition.current) {
          const dx = mousePosition.current.x - particle.x;
          const dy = mousePosition.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Only slightly influence particles within a certain range of the mouse
          if (distance < 200) {
            // Much lower influence factor (reduced by 5x)
            const influenceFactor = 0.002 * (1 - distance / 200);
            particle.vx += dx * influenceFactor;
            particle.vy += dy * influenceFactor;
          }
        }
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges instead of stopping
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle with slightly varying opacity for starry effect
        const opacity = opacityBase + Math.random() * 0.4;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${opacity})`;
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
  }, [isInitialized, theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 w-full h-full pointer-events-none"
    />
  );
};

export default Particles;

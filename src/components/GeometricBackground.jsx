import React, { useEffect, useRef } from 'react';

const GeometricBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let shapes = [];

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      shapes = [];
      const shapeCount = Math.floor(window.innerWidth / 50);
      const colors = ['#FFFFFF', '#CCCCCC', '#888888'];

      for (let i = 0; i < shapeCount; i++) {
        shapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1, // smaller particles
          opacity: Math.random() * 0.5 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          moveX: (Math.random() - 0.5) * 0.2,
          moveY: (Math.random() - 0.5) * 0.2
        });
      }
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shapes.forEach(shape => {
        shape.x += shape.moveX;
        shape.y += shape.moveY;

        if (shape.x < 0 || shape.x > canvas.width) shape.moveX *= -1;
        if (shape.y < 0 || shape.y > canvas.height) shape.moveY *= -1;
       
        ctx.beginPath();
        ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2);
        ctx.fillStyle = shape.color;
        ctx.globalAlpha = shape.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 bg-black"
        style={{ pointerEvents: 'none' }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black via-gray-900/50 to-black opacity-90" />
    </>
  );
};

export default GeometricBackground; 
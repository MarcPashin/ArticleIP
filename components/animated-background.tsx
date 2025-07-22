"use client";

import { useEffect, useState } from 'react';

export const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Removed floating particles for cleaner look

  return (
    <div className="absolute top-0 left-0 -z-10 h-full w-full overflow-hidden">
      {/* Base gradient background with more dramatic colors */}
      <div className="relative h-full w-full bg-gradient-to-br from-[#0A0E1A] via-[#1A1F36] to-[#2A1B3D]">
        
        {/* Primary Aurora Blobs - More visible */}
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-purple-500/25 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-blue-500/30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        
        {/* Secondary Aurora Effects - Enhanced */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-400/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-indigo-500/25 rounded-full filter blur-3xl animate-blob animation-delay-6000"></div>
        
        {/* Tertiary Accent Blobs - More prominent */}
        <div className="absolute top-2/3 left-1/4 w-[350px] h-[350px] bg-violet-400/18 rounded-full filter blur-2xl animate-blob animation-delay-1000"></div>
        <div className="absolute top-1/6 right-1/3 w-[400px] h-[400px] bg-blue-400/20 rounded-full filter blur-2xl animate-blob animation-delay-3000"></div>
        
        {/* Additional dramatic blobs */}
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-pink-500/15 rounded-full filter blur-3xl animate-blob animation-delay-1000 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-3/4 right-1/6 w-[250px] h-[250px] bg-teal-400/12 rounded-full filter blur-2xl animate-blob animation-delay-3000"></div>
        
        {/* Interactive mouse-following gradient - More visible */}
        <div 
          className="absolute w-[800px] h-[800px] bg-gradient-radial from-purple-500/15 via-blue-500/8 to-transparent rounded-full filter blur-3xl transition-all duration-700 ease-out pointer-events-none"
          style={{
            left: `${mousePosition.x * 0.3 - 400}px`,
            top: `${mousePosition.y * 0.3 - 400}px`,
          }}
        />
        

        

        
        {/* Enhanced corner accent gradients */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/15 via-purple-500/5 to-transparent rounded-full filter blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/15 via-blue-500/5 to-transparent rounded-full filter blur-2xl"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full filter blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full filter blur-2xl"></div>
        

        
        {/* Central radial gradient for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#0A0E1A]/30"></div>
      </div>
    </div>
  );
};
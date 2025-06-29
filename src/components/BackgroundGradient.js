import { useEffect, useState } from 'react';

const BackgroundGradient = () => {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const updateMousePosition = (ev) => {
      requestAnimationFrame(() => {
        setPosition({ x: ev.clientX, y: ev.clientY });
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      {/* Base background */}
      <div className="fixed inset-0 -z-10 bg-black" />
      
      {/* Primary gradient */}
      <div
        className="fixed inset-0 -z-10 transition-opacity duration-300"
        style={{
          background: `
            radial-gradient(
              800px circle at ${position.x}px ${position.y}px,
              rgba(139, 92, 246, 0.15),
              transparent 40%
            )
          `,
        }}
      />
      
      {/* Secondary gradient */}
      <div
        className="fixed inset-0 -z-10 transition-opacity duration-300"
        style={{
          background: `
            radial-gradient(
              600px circle at ${position.x}px ${position.y}px,
              rgba(124, 58, 237, 0.1),
              transparent 40%
            )
          `,
        }}
      />
      
      {/* Ambient corner gradients */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.1) 0%, transparent 30%),
            radial-gradient(circle at 100% 100%, rgba(124, 58, 237, 0.1) 0%, transparent 30%)
          `,
        }}
      />
    </>
  );
};

export default BackgroundGradient; 
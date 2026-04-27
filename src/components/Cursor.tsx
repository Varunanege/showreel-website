import { useEffect, useState } from 'react';

interface CursorProps {
  isHovering: boolean;
}

export default function Cursor({ isHovering }: CursorProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 pointer-events-none z-[9999] transition-transform duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Outer glow ring */}
      <div
        className={`fixed rounded-full pointer-events-none z-[9998] transition-all duration-300 ${
          isHovering
            ? 'w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl'
            : 'w-16 h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-lg'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Light sweep effect */}
      <div
        className={`fixed rounded-full pointer-events-none z-[9997] transition-all duration-500 ${
          isHovering
            ? 'w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-2xl'
            : 'w-20 h-20 bg-gradient-to-r from-blue-500/3 to-purple-500/3 blur-xl'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
}
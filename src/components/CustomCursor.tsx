import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth spring mouse tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable custom cursor with fine pointers (non-touch)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering interactive controls
      const interactive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'INPUT' || 
        target.tagName === 'SELECT' || 
        target.tagName === 'TEXTAREA' ||
        target.closest('a') ||
        target.closest('button');

      setIsHovered(!!interactive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <div id="custom-cursor-layer" className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Small Core Dot */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? 'rgba(242, 125, 38, 0.9)' : 'rgba(242, 125, 38, 0.4)',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        className="fixed w-5 h-5 rounded-full border border-[#F27D26]/50 mix-blend-difference pointer-events-none"
      />
    </div>
  );
}

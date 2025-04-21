import { useEffect, useRef } from "react";

const CursorFollower = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    const handleMouseMove = (e) => {
      const section = e.target.closest('section');
      
      if (section) {
        const rect = section.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        bg.style.setProperty('--x', `${x}px`);
        bg.style.setProperty('--y', `${y}px`);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={bgRef}
      className="cursor-follower-bg"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0
      }}
    />
  );
};

export default CursorFollower;
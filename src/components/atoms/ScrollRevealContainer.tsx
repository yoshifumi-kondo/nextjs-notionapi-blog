import { FC, useRef, useEffect, ReactNode } from 'react';

interface ScrollRevealContainerProps {
  children: ReactNode;
  move?: string;
  delay?: number;
  rotate?: {
    x?: number | undefined;
    y?: number | undefined;
    z?: number | undefined;
  };
}

const ScrollRevealContainer: FC<ScrollRevealContainerProps> = ({
  children,
  move,
  delay = 40,
  rotate = { x: 0, y: 0, z: 0 },
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    async function animate() {
      if (sectionRef.current) {
        //Dynamic import
        const sr = (await import('scrollreveal')).default;
        sr().reveal(sectionRef.current, {
          delay,
          opacity: 0,
          origin:
            move === 'left'
              ? 'left'
              : move === 'right'
              ? 'right'
              : move === 'top'
              ? 'top'
              : 'bottom',
          distance: '40px',
          duration: 1500,
          easing: 'ease-in-out',
          rotate,
        });
      }
    }
    animate();
  }, [delay, move, rotate, sectionRef]);
  return <div ref={sectionRef}>{children}</div>;
};
export default ScrollRevealContainer;

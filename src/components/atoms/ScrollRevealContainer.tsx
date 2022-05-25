import { FC, useRef, useEffect, ReactNode } from 'react';
import scrollReveal from 'scrollreveal';

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
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        delay,
        opacity: 0,
        origin:
          move === 'left' ? 'left' : move === 'right' ? 'right' : move === 'top' ? 'top' : 'bottom',
        distance: '40px',
        duration: 1500,
        easing: 'ease-in-out',
        rotate,
      });
  }, [delay, move, rotate, sectionRef]);

  return <section ref={sectionRef}>{children}</section>;
};
export default ScrollRevealContainer;

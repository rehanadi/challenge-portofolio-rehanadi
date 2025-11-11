'use client';

import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from 'react';
import { cn } from '@/lib/utils';

interface TextFitProps extends ComponentPropsWithoutRef<'div'> {
  minSize?: number;
  maxSize?: number;
}

const TextFit = ({
  children,
  className,
  minSize = 50,
  maxSize = 500,
  ...props
}: TextFitProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.scrollWidth;
        const newScale = Math.min(
          containerWidth / textWidth,
          maxSize / minSize
        );
        setScale(newScale);
      }
    };

    calculateScale();
    window.addEventListener('resize', calculateScale);

    return () => window.removeEventListener('resize', calculateScale);
  }, [children, minSize, maxSize]);

  return (
    <div
      ref={containerRef}
      className='w-full overflow-hidden leading-none'
      {...props}
    >
      <div
        ref={textRef}
        className={cn(
          'inline-block origin-left leading-none whitespace-nowrap',
          className
        )}
        style={{
          transform: `scale(${scale})`,
          fontSize: `${maxSize}px`,
          lineHeight: '1',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default TextFit;

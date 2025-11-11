import React from 'react';

import { cn } from '@/lib/utils';

import RotateMotion from './rotate-motion';

type FeatureCardProps = {
  children: React.ReactNode;
  className?: string;
  animationRotate?: number;
  animationDelay?: number;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  children,
  className,
  animationRotate,
  animationDelay,
}) => {
  return (
    <RotateMotion asChild delay={animationDelay} rotate={animationRotate}>
      <div
        className={cn('p-x rounded-2xl bg-[#FDFDFD1A]', className)}
        style={{
          width: 'clamp(6.375rem, 15.89vw, 12rem)',
          borderRadius: 'clamp(0.25rem, 0.66vw, 0.5rem)',
          backdropFilter: 'blur(40px)',
        }}
      >
        <div
          className='flex flex-col rounded-2xl bg-[#28282833]'
          style={{
            borderRadius: 'clamp(0.25rem, 0.66vw, 0.5rem)',
            padding: 'clamp(0.5rem, 1.25vw, 1rem)',
          }}
        >
          {children}
        </div>
      </div>
    </RotateMotion>
  );
};

export default FeatureCard;

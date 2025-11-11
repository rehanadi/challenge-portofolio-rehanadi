'use client';

import { Slot } from '@radix-ui/react-slot';
import { HTMLMotionProps, motion } from 'framer-motion';
import React from 'react';

interface RotateMotionProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  rotate?: number;
  asChild?: boolean;
}

const MotionSlot = motion.create(Slot);
const MotionDiv = motion.div;

const RotateMotion: React.FC<RotateMotionProps> = ({
  children,
  duration = 0.5,
  delay = 0,
  rotate = 3,
  asChild = false,
  ...motionProps
}) => {
  const Comp = asChild ? MotionSlot : MotionDiv;

  return (
    <Comp
      animate={{ rotate }}
      transition={{ duration, delay }}
      {...motionProps}
    >
      {children}
    </Comp>
  );
};

export default RotateMotion;

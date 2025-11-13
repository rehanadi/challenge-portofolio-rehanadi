import { cn } from '@/lib/utils';
import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  title?: string;
  id?: string;
  className?: string;
};

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  id,
  className,
}) => {
  return (
    <div
      className={cn(
        'custom-container flex flex-col gap-6 py-10 md:gap-16 md:py-20',
        className
      )}
      id={id}
    >
      {/* heading */}
      {title && (
        <div className='text-center'>
          <h2 className='display-sm-bold md:display-lg-bold text-neutral-950'>
            {title}
          </h2>
        </div>
      )}

      {/* content */}
      <div>{children}</div>
    </div>
  );
};

import FeatureCard from '@/components/ui/feature-card';
import TextFit from '@/components/ui/textfit';
import { FULLNAME } from '@/constants/profile-data';
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      className='relative h-screen overflow-hidden pt-25 text-white md:pt-36'
      id='hero'
    >
      <div className={cn('custom-container', 'max-w-400')}>
        <TextFit
          minSize={50}
          maxSize={100}
          className='absolute z-20 leading-none font-extrabold uppercase'
        >
          {FULLNAME}
        </TextFit>
      </div>
      <div className='flex-center absolute inset-x-0 bottom-0 z-40 mx-auto h-5/7'>
        <Image
          src='/images/hero-person.png'
          alt='hero person'
          fill
          objectFit='contain'
        />
      </div>
      <div className='flex-center absolute inset-x-0 bottom-0 z-10 mx-auto h-5/7'>
        <Image
          src='/images/hero-bg.png'
          alt='hero bg'
          fill
          objectFit='contain'
        />
      </div>
      <FeatureCard
        animationRotate={3.15}
        animationDelay={0.2}
        className='absolute top-[45%] right-1/2 z-30 -translate-x-[50%] gap-1'
      >
        <h4 className='text-neutral-25 text-[2.5rem] leading-14 font-bold'>
          5.0
        </h4>
        <div className='flex-center'>
          {Array.from({ length: 5 }).map((_, index) => (
            <Icon
              key={index}
              icon='material-symbols:star-rounded'
              className='text-secondary-200 size-8'
            />
          ))}
        </div>
        <p className='text-sm-medium text-neutral-25'>
          Many Client Trust with me
        </p>
      </FeatureCard>
      <FeatureCard
        animationRotate={5.31}
        animationDelay={0.2}
        className='absolute top-[62%] left-1/2 z-30 translate-x-[80%] gap-2'
      >
        <h4 className='text-neutral-25 text-[2.5rem] leading-14 font-bold'>
          50+
        </h4>
        <p className='text-sm-medium text-neutral-25'>Global Clients</p>
        <div className='flex-center'>
          <Image
            src='/images/avatar-1.png'
            alt='avatar'
            width={52}
            height={52}
          />
          <Image
            src='/images/avatar-2.png'
            alt='avatar'
            width={52}
            height={52}
            className='-ms-2'
          />
          <Image
            src='/images/avatar-3.png'
            alt='avatar'
            width={52}
            height={52}
            className='-ms-2'
          />
          <Image
            src='/images/avatar-4.png'
            alt='avatar'
            width={52}
            height={52}
            className='-ms-2'
          />
        </div>
      </FeatureCard>
      <FeatureCard
        animationRotate={-3.24}
        animationDelay={0.2}
        className='absolute top-[78%] right-1/2 z-30 w-[283px] -translate-x-[80%]'
      >
        <h4 className='text-neutral-25 text-2xl leading-9 font-bold'>
          Frontend Developer
        </h4>
        <div className='flex-start gap-0.5'>
          <Icon
            icon='bitcoin-icons:verify-filled'
            className='size-6 text-white'
          />
          <p className='text-sm-medium text-neutral-25'>React Expert</p>
        </div>
      </FeatureCard>
    </section>
  );
};

export default Hero;

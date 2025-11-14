import { Section } from '@/components/layouts/section';
import {
  type ExperienceData,
  experienceData,
} from '@/constants/experience-data';
import Image from 'next/image';

const WorkExperience = () => {
  return (
    <Section title='My Work Experience'>
      <div className='flex flex-col gap-6 md:gap-16'>
        {experienceData.map((experience, index) => (
          <ExperienceCard
            key={index}
            {...experience}
            isShowBorder={index !== experienceData.length - 1}
          />
        ))}
      </div>
    </Section>
  );
};

export default WorkExperience;

const ExperienceCard = ({
  title,
  description,
  image,
  company,
  period,
  isShowBorder = true,
}: ExperienceData & { isShowBorder?: boolean }) => {
  return (
    <div className='relative flex w-full flex-col gap-2 ps-10 md:flex-row md:gap-[135px] md:ps-0'>
      <div className='absolute top-0 left-0 z-20 aspect-square size-6 rounded-full border border-dashed border-neutral-400 bg-white p-[4.8px] md:left-[232px] md:size-10 md:p-2'>
        <div className='bg-primary-200 aspect-square h-full w-full rounded-full'></div>
      </div>
      {isShowBorder && (
        <>
          <div className='absolute top-0 left-2.75 z-10 h-full w-px border border-dashed border-neutral-400 md:left-[251px]'></div>
          <div className='absolute -bottom-6 left-2.75 z-10 h-6 w-px border border-dashed border-neutral-400 md:-bottom-16 md:left-[251px] md:h-16'></div>
        </>
      )}
      <div className='flex w-full flex-col gap-1 md:w-[152px] md:shrink-0 md:gap-3'>
        <div className='relative h-8 w-[102px] md:h-12 md:w-[152px]'>
          <Image src={image} alt={company} fill />
        </div>
        <h2 className='text-md-semibold md:text-xl-semibold'>{company}</h2>
        <p className='text-sm-regular md:text-md-regular text-neutral-700'>
          {period}
        </p>
      </div>
      <div className='flex flex-col gap-1 md:flex-1 md:gap-4'>
        <h3 className='text-md-semibold md:text-xl-semibold'>{title}</h3>
        <p className='text-sm-regular md:text-md-regular text-neutral-700'>
          {description}
        </p>
      </div>
    </div>
  );
};

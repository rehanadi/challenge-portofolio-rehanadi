import { Section } from '@/components/layouts/section';
import { workData } from '@/constants/work-data';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const LatestWork = () => {
  return (
    <Section title='My Latest Work'>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-x-5 md:gap-y-10'>
        {workData.map((work, index) => (
          <WorkCard
            key={index}
            category={work.category}
            year={work.year}
            title={work.title}
            image={work.image}
            href={work.href}
          />
        ))}
      </div>
    </Section>
  );
};

export default LatestWork;

const WorkCard = ({
  category,
  year,
  title,
  image,
  href,
}: {
  category: string;
  year: string;
  title: string;
  image: string;
  href: string;
}) => {
  return (
    <div className='flex flex-col gap-4 md:gap-5'>
      <div className='flex-between'>
        <div className='py-x text-xs-regular md:text-sm-regular rounded-full border border-dashed border-neutral-400 px-4'>
          {category}
        </div>
        <div className='py-x text-xs-regular md:text-sm-regular rounded-full border border-dashed border-neutral-400 px-4'>
          {year}
        </div>
      </div>

      <div className='relative h-[269.09px] w-full rounded-lg md:h-[284px] md:rounded-xl'>
        <Image src={image} alt={title} fill />
      </div>

      <h3 className='text-md-semibold md:text-xl-semibold'>{title}</h3>

      <Link
        href={href}
        className='flex-start text-primary-300 text-sm-medium md:text-md-medium gap-2'
      >
        <span>Visit Website</span>
        <ArrowRight className='size-6' />
      </Link>
    </div>
  );
};

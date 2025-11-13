import { Section } from '@/components/layouts/section';
import { advantageData } from '@/constants/advantage-data';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Advantage = () => {
  return (
    <Section title='Why Choose Me' className='bg-neutral-100'>
      <div className='w-full rounded-xl bg-white px-3 py-4 md:rounded-2xl md:p-6'>
        <div className='bg-primary-200 text-sm-semibold md:text-lg-semibold grid h-14 grid-cols-[2fr_1fr_1fr] rounded-full text-white md:grid-cols-3'>
          <div className='flex-center'>Skill</div>
          <div className='flex-center'>Me</div>
          <div className='flex-center'>Other</div>
        </div>
        {advantageData.map((advantage, index) => (
          <AdvantageCard
            key={index}
            title={advantage}
            className={
              index === advantageData.length - 1 ? 'border-b-0' : 'border-b'
            }
          />
        ))}
      </div>
    </Section>
  );
};

export default Advantage;

const AdvantageCard = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'text-sm-medium md:text-lg-medium grid h-[72px] grid-cols-[2fr_1fr_1fr] border-b border-neutral-300 md:grid-cols-3',
        className
      )}
    >
      <div className='flex-center'>{title}</div>
      <div className='flex-center'>
        <Image src='/icons/check.svg' alt='react' width={24} height={24} />
      </div>
      <div className='flex-center'>
        <Image src='/icons/uncheck.svg' alt='react' width={24} height={24} />
      </div>
    </div>
  );
};

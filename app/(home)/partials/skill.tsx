import { Section } from '@/components/layouts/section';
import { skillData } from '@/constants/skill-data';
import { chunkSkills } from '@/lib/skills';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from '@/components/ui/carousel';

const Skill = () => {
  const columns = chunkSkills(skillData, 3);

  return (
    <Section title='My Profesional Skill' className='md:gap-12 md:pt-10'>
      <Carousel>
        <CarouselContent>
          {columns.map((column, columnIndex) => (
            <CarouselItem
              key={columnIndex}
              className='md:basis-1/2 lg:basis-1/2'
            >
              <div key={columnIndex} className='flex flex-col gap-4 md:gap-5'>
                {column.map((skill, rowIndex) => (
                  <SkillCard
                    key={rowIndex}
                    title={skill.title}
                    image={skill.image}
                    description={skill.description}
                    progress={skill.progress}
                  />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation />
      </Carousel>
    </Section>
  );
};

export default Skill;

const SkillCard = ({
  title,
  image,
  description,
  progress,
}: {
  title: string;
  image: string;
  description: string;
  progress: number;
}) => {
  return (
    <div className='flex h-[172px] flex-col gap-3 rounded-xl p-3 shadow md:h-[184px] md:rounded-2xl md:p-4'>
      <div className='flex flex-col gap-2'>
        <div className='flex-start gap-3'>
          <Image src={image} alt={title} width={40} height={40} />
          <h4 className='text-md-semibold'>{title}</h4>
        </div>
        <p className='text-sm-regular md:text-md-regular text-neutral-700'>
          {description}
        </p>
      </div>
      <div className='flex-between gap-4'>
        <div className='h-3.5 flex-1 rounded-full bg-neutral-300'>
          <div
            className='bg-primary-300 h-full rounded-full'
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className='text-sm-semibold md:text-lg-semibold shrink-0'>
          {progress}%
        </span>
      </div>
    </div>
  );
};

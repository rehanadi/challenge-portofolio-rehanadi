import { Section } from '@/components/layouts/section';
import { Button } from '@/components/ui/button';
import { Marquee } from '@/components/ui/marquee';
import TextFit from '@/components/ui/textfit';
import {
  jobTitles,
  portofolioThumbnails,
  skillIcons,
} from '@/constants/profile-data';
import { Icon } from '@iconify/react';
import { Mail, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Profile = () => {
  return (
    <Section className='mt-40'>
      <div className='flex flex-col gap-6 md:gap-12'>
        <div className='flex flex-col gap-3 md:gap-4'>
          <h3 className='text-md-semibold md:text-lg-semibold'>
            Hi, I’m Rehan Adi Purwana 👋
          </h3>
          <p className='md:text-display-md text-xl font-semibold'>
            Building digital products with a focus on crafting visually engaging
            and seamless user interfaces using React.js.{' '}
            <span className='text-neutral-400'>
              Prioritizing responsive design, performance optimization, and
              user-centric features to deliver exceptional web experiences.
            </span>
          </p>
        </div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5'>
          {/* why choose me */}
          <div className='bg-secondary-300 h-[374px] rounded-2xl md:h-[395px]'>
            <div className='flex flex-col px-4 pt-8 text-white md:gap-4 md:px-6 md:pt-6'>
              <h4 className='text-display-sm md:text-display-md font-bold'>
                Why Choose Me
              </h4>
              <p className='md:text-md text-sm'>
                Delivering excellence with innovative solutions and seamless
                execution.
              </p>
            </div>

            <div className='mt-6 flex flex-col gap-4 overflow-hidden md:mt-13'>
              <Marquee className='p-0'>
                <div className='flex-center gap-3'>
                  {jobTitles.slice(0, 4).map((title, index) => (
                    <SkillCard key={index}>{title}</SkillCard>
                  ))}
                </div>
              </Marquee>

              <Marquee reverse className='p-0'>
                <div className='flex-center gap-3'>
                  {jobTitles.slice(4, 8).map((title, index) => (
                    <SkillCard key={index}>{title}</SkillCard>
                  ))}
                </div>
              </Marquee>

              <Marquee className='p-0'>
                <div className='flex-center gap-3'>
                  {jobTitles.slice(8, 12).map((title, index) => (
                    <SkillCard key={index}>{title}</SkillCard>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>

          {/* expert skill */}
          <div className='h-[374px] rounded-2xl bg-neutral-900 px-4 pt-8 md:h-[395px] md:px-6 md:pt-7.25'>
            <div className='flex flex-col gap-2 text-white md:gap-3'>
              <h4 className='text-display-sm md:text-display-md font-bold'>
                Expert Skill
              </h4>
              <div className='flex-start'>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Icon
                    key={index}
                    icon='material-symbols:star-rounded'
                    className='text-secondary-200 size-8'
                  />
                ))}
              </div>
              <p className='md:text-md text-sm'>
                Mastering modern technologies to deliver impactful and efficient
                solutions
              </p>
            </div>

            <div className='mt-8 grid grid-cols-5 gap-x-4 gap-y-6 md:mt-7.75'>
              {skillIcons.map((skill, index) => (
                <SkillImage key={index}>
                  <Image src={skill.src} alt={skill.alt} fill />
                </SkillImage>
              ))}
            </div>
          </div>

          {/* years experience */}
          <div
            className='relative flex h-[374px] flex-col items-center overflow-hidden rounded-2xl px-6.5 pb-7.25 md:h-[395px] md:px-9 md:pb-8'
            style={{
              backgroundImage: "url('/images/experience.png')",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
            }}
          >
            {/* Gradient Overlay */}
            <div
              className='absolute inset-0 z-0'
              style={{
                background:
                  'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.2573) 25.73%, rgba(0, 0, 0, 0) 80%)',
              }}
            />

            <div className='flex-center relative z-10 flex-1'>
              <h4 className='text-display-sm md:text-display-md text-center font-bold text-white'>
                5+ Years Experience
              </h4>
            </div>

            <div className='grid h-17.75 w-full shrink-0 grid-cols-3 gap-3'>
              {portofolioThumbnails.map((thumbnail, index) => (
                <div key={index} className='relative h-full w-full rounded-md'>
                  <Image src={thumbnail.src} alt={thumbnail.alt} fill />
                </div>
              ))}
            </div>
          </div>

          {/* hire me */}
          <div className='bg-primary-300 relative h-[374px] overflow-hidden rounded-2xl md:h-[395px]'>
            <div className='absolute inset-0 z-20 h-full w-full'>
              <Image
                src='/images/hero/hero-person-small.png'
                alt='person'
                fill
                objectFit='cover'
              />
            </div>

            <div className='flex-center absolute z-10 flex h-full w-full items-center text-[#F39C3F]'>
              <TextFit className='text-center font-bold wrap-break-word uppercase'>
                Rehan
                <br />
                Adi
                <br />
                Purwana
              </TextFit>
            </div>

            <div className='flex-center absolute inset-x-0 bottom-7.25 z-30'>
              <Button asChild className='h-12 w-[233px]' variant='secondary'>
                <Link href='#contact' className='items-center gap-2'>
                  <Mail className='size-5' />
                  <span>Hire Me</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* building digital products */}
          <div className='relative h-[452px] overflow-hidden rounded-2xl bg-linear-to-r from-[#002C6E] to-[#0C4EAF] md:col-span-2 md:h-[395px]'>
            <div
              className='absolute h-full w-full'
              style={{
                backgroundImage: "url('/icons/world-map.svg')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right center',
                backgroundSize: 'contain',
              }}
            ></div>

            <div className='flex-center absolute inset-x-4 top-8 w-full max-w-80 md:inset-x-6 md:top-6'>
              <h4 className='text-display-sm md:text-display-md inline font-bold text-white'>
                Building Digital Products{' '}
                <Sparkles className='inline size-6 text-white' />
              </h4>
            </div>

            <div className='text-neutral-25 absolute bottom-9 left-4.5 flex w-full flex-col gap-6 md:inset-x-8 md:bottom-8 md:grid md:grid-cols-3 md:gap-9.75'>
              <AchievementCard
                title='50+'
                description='Global Client’s Handle'
              />
              <AchievementCard
                title='99%'
                description='Client Satisfaction Rate'
              />
              <AchievementCard title='100+' description='Project Delivered ' />
            </div>

            <Image
              src='/images/flag/ger.png'
              alt='Germany Flag'
              width={50}
              height={32}
              objectFit='cover'
              className='absolute top-[100px] right-[113px] md:top-[150px] md:right-[300px]'
            />

            <Image
              src='/images/flag/usa.png'
              alt='USA Flag'
              width={50}
              height={32}
              objectFit='cover'
              className='absolute top-52 right-9 md:top-[100px] md:right-[80px]'
            />

            <Image
              src='/images/flag/ina.png'
              alt='Indonesia Flag'
              width={50}
              height={32}
              objectFit='cover'
              className='absolute top-[342px] right-[55px] md:top-[200px] md:right-[40px]'
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Profile;

const SkillCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='text-sm-regular shrink-0 rounded-full bg-white px-4 py-1'>
      {children}
    </div>
  );
};

const SkillImage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex-center relative aspect-square w-full rounded-full bg-neutral-800'>
      {children}
    </div>
  );
};

const AchievementCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className='w-full'>
      <h5 className='text-display-lg font-bold'>{title}</h5>
      <p className='text-sm-medium'>{description}</p>
    </div>
  );
};

import { Marquee } from '@/components/ui/marquee';
import Image from 'next/image';

const Roles = () => {
  return (
    <section className='absolute z-40 w-full -translate-y-6 -rotate-0 overflow-hidden bg-neutral-950 py-10 transition'>
      <Marquee className='gap-6'>
        <SparkleIcon />
        <RoleTitle title='Expert React' />
        <SparkleIcon />
        <RoleTitle title='Programmer' />
        <SparkleIcon />
        <RoleTitle title='Mobile Developer' />
        <SparkleIcon />
        <RoleTitle title='Frontend Developer' />
      </Marquee>
    </section>
  );
};

export default Roles;

const SparkleIcon = () => (
  <Image src='/icons/sparkle.svg' alt='sparkle' width={48} height={52.5} />
);

const RoleTitle = ({ title }: { title: string }) => {
  return (
    <h4 className='text-neutral-25 shrink-0 text-5xl font-bold'>{title}</h4>
  );
};

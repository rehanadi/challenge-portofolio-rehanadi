import Logo from '@/components/ui/logo';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-primary-400'>
      <div className='custom-container flex flex-col gap-5 py-10 md:flex-row md:items-center md:justify-between md:py-6'>
        <div className='flex flex-col gap-5 md:flex-row md:gap-4'>
          <Logo />
          <p className='text-neutral-25 text-sm-regular md:text-md-regular'>
            © 2025 Rehan Adi Purwana. All rights reserved.
          </p>
        </div>

        <div className='flex-start gap-4'>
          <Image
            src='/icons/socmed/dribble.svg'
            alt='dribble'
            width={48}
            height={48}
          />
          <Image
            src='/icons/socmed/instagram.svg'
            alt='instagram'
            width={48}
            height={48}
          />
          <Image
            src='/icons/socmed/linkedin.svg'
            alt='linkedin'
            width={48}
            height={48}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

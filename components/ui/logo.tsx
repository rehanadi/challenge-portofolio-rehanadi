import Image from 'next/image';

interface LogoProps {
  variant?: 'light' | 'dark';
}

const Logo = ({ variant = 'light' }: LogoProps) => {
  return (
    <Image
      src={
        variant === 'light' ? '/icons/logo-light.svg' : '/icons/logo-dark.svg'
      }
      alt='logo'
      width={141}
      height={32}
      className='max-md:h-8 max-md:w-35.25'
    />
  );
};

export default Logo;

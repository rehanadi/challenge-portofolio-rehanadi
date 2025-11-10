'use client';

import { Mail, Menu } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from '@/components/ui/sheet';

import { navigationData } from '@/constants/navigation-data';
import Logo from '@/components/ui/logo';

interface NavLinksProps {
  children: React.ReactNode;
}

interface NavLinkProps {
  href: string;
  label: string;
}

const Navbar = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(12,13,13,0', 'rgba(12,13,13,0.5)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );

  return (
    <motion.header
      style={{
        background,
        backdropFilter: backdropBlur,
      }}
      className='fixed top-0 z-50 w-full'
    >
      <div className='flex-between custom-container h-20 md:h-21.25'>
        <Logo />
        <nav className='hidden lg:block'>
          <NavLinks>
            {navigationData.map((data) => (
              <NavLink key={data.label} href={data.href} label={data.label} />
            ))}
          </NavLinks>
        </nav>
        <Button asChild className='hidden w-43 lg:flex' variant='secondary'>
          <Link href='#contact' className='hidden items-center gap-2 lg:flex'>
            <Mail className='size-5' />
            <span>Hire Me</span>
          </Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Menu className='cursor-pointer text-white lg:hidden' />
          </SheetTrigger>
          <SheetContent title={<Logo variant='dark' />}>
            <nav className='mt-24'>
              <ul className='flex flex-col gap-4'>
                {navigationData.map((data) => (
                  <li key={data.label}>
                    <SheetClose asChild>
                      <Link
                        href={data.href}
                        className='hover:text-primary-200 p-2'
                      >
                        {data.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>

            <Button asChild className='w-full'>
              <SheetClose asChild>
                <Link href='#contact' className='flex-center gap-2'>
                  <Mail className='size-5' />
                  <span>Hire Me</span>
                </Link>
              </SheetClose>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Navbar;

const NavLinks = ({ children }: NavLinksProps) => {
  return <ul className='flex-start gap-8'>{children}</ul>;
};

const NavLink = ({ href, label }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className='hover:text-primary-200 p-2 text-white transition'
    >
      {label}
    </Link>
  );
};

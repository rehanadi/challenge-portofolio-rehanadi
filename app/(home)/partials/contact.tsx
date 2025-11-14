import { Section } from '@/components/layouts/section';
import { Button } from '@/components/ui/button';
import { type ContactData, contactData } from '@/constants/contact-data';
import { Send } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/contact-bg.png')",
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    >
      <Section id='contact'>
        <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
          <div className='flex max-w-full flex-col gap-6 md:max-w-[453px] md:gap-10'>
            <div className='flex flex-col gap-5.5'>
              <h2 className='text-display-md md:text-display-2xl font-bold'>
                I've been waiting for you.
              </h2>
              <p className='text-md-medium md:text-lg-medium'>
                Fill in the form or Send us an email
              </p>
            </div>
            <div className='flex flex-col gap-6 md:gap-8'>
              {contactData.map((contact, index) => (
                <ContactCard
                  key={index}
                  icon={contact.icon}
                  title={contact.title}
                />
              ))}
            </div>
          </div>

          <form className='flex flex-col gap-4 rounded-xl bg-white p-4 shadow lg:min-w-2/5'>
            <h3 className='text-lg-semibold'>Send a Message</h3>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-1.5'>
                <label htmlFor='name' className='text-sm-semibold'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  className='text-sm-regular h-12 rounded-xl border border-neutral-200 bg-white px-4 py-2 outline-none'
                />
              </div>

              <div className='flex flex-col gap-1.5'>
                <label htmlFor='email' className='text-sm-semibold'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  className='text-sm-regular h-12 rounded-xl border border-neutral-200 bg-white px-4 py-2 outline-none'
                />
              </div>

              <div className='flex flex-col gap-1.5'>
                <label htmlFor='message' className='text-sm-semibold'>
                  Message
                </label>
                <textarea
                  id='message'
                  className='text-sm-regular h-30 resize-none rounded-xl border border-neutral-200 bg-white px-4 py-2 outline-none'
                />
              </div>

              <Button asChild className='h-12 w-full' variant='primary'>
                <Link href='#contact' className='items-center gap-2'>
                  <Send className='size-5' />
                  <span>Submit</span>
                </Link>
              </Button>
            </div>
          </form>
        </div>
      </Section>
    </div>
  );
};

export default Contact;

const ContactCard = ({ icon, title }: ContactData) => {
  return (
    <div className='flex-start gap-2 md:gap-4'>
      <div className='relative aspect-square size-10 rounded-full md:size-12'>
        <Image src={icon} alt={title} fill />
      </div>
      <p className='text-md-regular md:text-lg-regular text-black'>{title}</p>
    </div>
  );
};

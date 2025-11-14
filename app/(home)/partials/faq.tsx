import { Section } from '@/components/layouts/section';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQData } from '@/constants/faq-data';

const FAQ = () => {
  return (
    <Section>
      <div className='flex flex-col gap-5 rounded-2xl border border-neutral-300 bg-neutral-50 px-4 py-5'>
        <div className='flex flex-col gap-4'>
          <Image src='/icons/chat.svg' alt='chat' width={48} height={48} />
          <h2 className='text-display-md font-bold'>Have Questions?</h2>
        </div>

        <Accordion type='single' collapsible className='-mt-5'>
          {FAQData.map((item, index) => (
            <AccordionItem key={index} value={index.toString()}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className='flex flex-col gap-4 rounded-xl border border-neutral-300 bg-white p-4'>
          <div className='relative aspect-square size-15 overflow-hidden'>
            <Image src='/images/avatar/avatar-main.png' alt='avatar' fill />
          </div>
          <p className='text-sm-regular'>
            Have more questions? Send me a message.
          </p>
          <Button asChild className='h-12 w-full' variant='primary'>
            <Link href='#contact'>Get in Touch</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default FAQ;

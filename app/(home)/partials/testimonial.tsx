import { Section } from '@/components/layouts/section';
import Stars from '@/components/ui/stars';
import {
  type TestimonialData,
  testimonialData,
} from '@/constants/testimonial-data';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <Section title='Success Stories from Clients'>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
        {testimonialData.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </Section>
  );
};

export default Testimonial;

const TestimonialCard = ({ image, review, name, role }: TestimonialData) => {
  return (
    <div className='flex min-h-[336px] w-full flex-col items-center gap-5 rounded-xl p-4 shadow-md md:gap-8 md:rounded-2xl'>
      <div className='flex flex-col items-center gap-3 md:gap-4'>
        <div className='relative h-8 w-[102px] md:h-12 md:w-[114px]'>
          <Image src={image} alt={name} fill />
        </div>
        <p className='text-sm-medium md:text-md-medium text-center'>{review}</p>
      </div>
      <div className='flex flex-col items-center gap-3 md:gap-4'>
        <Stars />
        <div className='flex flex-col items-center'>
          <h4 className='text-sm-semibold md:text-md-semibold'>{name}</h4>
          <p className='text-sm-regular md:text-md-regular text-neutral-600'>
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

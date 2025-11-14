import { Icon } from '@iconify/react';

const Stars = () => {
  return (
    <div className='flex-center'>
      {Array.from({ length: 5 }).map((_, index) => (
        <Icon
          key={index}
          icon='material-symbols:star-rounded'
          className='text-secondary-200 size-8'
        />
      ))}
    </div>
  );
};

export default Stars;

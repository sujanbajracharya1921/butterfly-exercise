import { useRouter } from 'next/router';
import { useState } from 'react';
import Footer from '../common/footer';

const Thankyou = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push('/');
  }, 3000);

  return (
    <div className='h-screen bg-[#166e78] pt-6 pl-4 md:pl-12 pr-4'>
      <div className='absolute w-0 h-0 mt-8 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white -ml-2'></div>
      <div className='w-full md:max-w-md pl-12 pt-12 h-36 bg-white rounded-sm mr-10 md:mr-0'>
        <div className='text-[#2ce6ce] font-bold text-xl'>THANK YOU!</div>
        <div>
          You're extra feedback has been sent.
          <h6>Have a lovely day.</h6>
        </div>
      </div>

      <div className='flex justify-center items-center h-[70%]'>
        <Footer />
      </div>
    </div>
  );
};
export default Thankyou;

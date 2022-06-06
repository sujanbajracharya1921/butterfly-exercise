import Icon from '../common/icon';
import Moods from '../components/Moods';

const Home = () => {
  return (
    <div className='bg-[#2ce6ce] h-screen flex justify-center items-center px-10'>
      <div className='justify-center items-center w-full md:max-w-lg'>
        <div className='flex p-4 justify-between'>
          <div className='flex'>
            <Icon name='butterfly' height={70} width={70} />
            <p className='font-bold text-md text-white pt-9'>Butterfly</p>
          </div>
          <div className='self-center pt-8 font-bold text-[#606060]'>
            <p className='text-sm'>Your Team's Happiness Manager</p>
          </div>
        </div>
        <div className='bg-[#f7f7f7] h-56 rounded-sm'>
          <div className='text-center pt-4 text-[#606060] flex justify-center'>
            <p className='font-bold text-sm'>DEMO INC.</p>
            <p className='text-sm'> would like to know:</p>
          </div>
          <div className='text-center p-4'>
            <p className='text-[#606060] font-bold text-2xl'>How is your week going?</p>
          </div>
          <div className='flex justify-center items-center gap-1 md:gap-3'>
            <Moods className='rounded-[50%] border-2 border-white' />
          </div>
          <div className='text-center pt-4 text-[#606060]'>Your answer will always remain anonymous</div>
        </div>
      </div>
    </div>
  );
};

export default Home;

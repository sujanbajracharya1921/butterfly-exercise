import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from '../../common/footer';
import Icon from '../../common/icon';

function Layout({ children }: any) {
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState<any>('');

  useEffect(() => {
    setActiveRoute(router.pathname);
  }, [router]);

  return (
    <div className='flex'>
      {activeRoute != '/' && activeRoute != 'thankyou' && (
        <div className='bg-[#0d4d54] w-12 md:w-10 justify-center p-1 pt-2 overflow-hidden'>
          <div className='bg-[#2ce6ce] flex justify-center items-center h-6 w-[80%] rounded-sm'>
            <Icon name='butterfly' height={14} width={18} />
          </div>
          <div className='flex justify-center items-center h-full'>
            <Icon name='info' height={14} width={18} />
          </div>
        </div>
      )}
      <div className='w-full'>
        <main className='grow overflow-hidden'>{children}</main>
        {activeRoute != '/' && activeRoute != 'thankyou' && <Footer className={'pl-5 md:pl-12 pt-10'} />}
      </div>
    </div>
  );
}

export default Layout;

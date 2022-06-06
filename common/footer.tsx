const Footer = (props: any) => {
  return (
    <div className={`bg-[#166e78] w-full text-white ${props.className}`}>
      <div className='mb-2'>Butterfly.</div>
      <div className='mb-2'>
        <a href='' className='text-[#2ce6ce]'>
          Support | Terms of Service | Privacy Policy
        </a>
      </div>
      <div className='pb-8'>©2022 Appynest, Inc.</div>
    </div>
  );
};

export default Footer;

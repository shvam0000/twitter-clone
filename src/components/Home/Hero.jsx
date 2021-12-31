import { Feed, AddNew, SideBar } from '.';

const Hero = () => {
  return (
    <div className='flex justify-between px-10'>
      <div className='w-1/4 text-2xl border-r-2'>
        <SideBar />
      </div>
      <div className='w-1/2'>
        <Feed />
      </div>
      <div className='w-1/4 border-l-2 px-2'>
        <AddNew />
      </div>
    </div>
  );
};

export default Hero;

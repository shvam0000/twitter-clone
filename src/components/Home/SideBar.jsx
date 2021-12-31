import { Link } from 'react-router-dom';

import { Home, Profile } from '../../utils/icons/index';

const SideBar = () => {
  return (
    <div>
      <Link
        to='/home'
        className='flex justify-center items-center text-base-blue hover:text-blue-500'>
        <span className='px-2'>
          <Home />
        </span>
        <span className='px-2 '>Home</span>
      </Link>
      <Link
        to='/profile'
        className='flex justify-center items-center text-base-blue hover:text-blue-500'>
        <span className='px-2'>
          <Profile />
        </span>
        <span className='px-2'>Profile</span>
      </Link>
    </div>
  );
};

export default SideBar;

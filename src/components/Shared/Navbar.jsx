import { Link } from 'react-router-dom';
import { Logo } from '../../utils/icons/index';

const Navbar = () => {
  return (
    <div className='text-base-blue py-4 text-3xl pl-36'>
      <Link to='/home'>
        <Logo />
      </Link>
    </div>
  );
};

export default Navbar;

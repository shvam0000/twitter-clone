import { useState, useEffect } from 'react';
import axios from 'axios';
import { profileData } from '../../utils/data/Profile';
import { Location, Female } from '../../utils/icons/index';
import { Link } from 'react-router-dom';

const Hero = () => {
  // const [profileData, setProfileData] = useState();

  // useEffect(() => {
  //   axios({
  //     url: 'http://tweets.free.beeceptor.com/profile',
  //     method: 'get',
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       setProfileData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className='w-full text-center text-xl'>
      <h1>Hello, {profileData.first_name}👋</h1>
      <h1 className='flex justify-center items-center'>
        <span>
          <Location />
        </span>
        Sweden
      </h1>
      <h1 className='flex justify-center items-center'>
        <span>
          <Female />
        </span>
        Female
      </h1>
      <div className=' my-2'>
        <Link to='/' className='bg-base-blue px-2 py-1 rounded-lg text-white'>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Hero;

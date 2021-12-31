import { useState, useEffect } from 'react';
import axios from 'axios';
import { feedData } from '../../utils/data/Feed';
import { Date } from '../../utils/icons/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Feed = () => {
  // const [feedData, setFeedData] = useState();

  // useEffect(() => {
  //   axios({
  //     url: 'https://tweets.free.beeceptor.com/tweets/all',
  //     method: 'get',
  //   })
  //     .then((res) => {
  //       setFeedData(res.data);
  //     })
  //     .catch((err) => {
  //       toast.error('Something went wrong, please try again');
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div>
      <div>
        {feedData.map((data) => (
          <div key={data.id} className='mb-4'>
            <h1 className='text-xl font-bold text-gray-800'>{data.userName}</h1>
            <p className='my-2 font-medium text-gray-500'>{data.tweet}</p>
            <h3 className='flex items-center my-2 text-base-blue font-bold'>
              <span className='px-2 '>
                <Date />
              </span>
              {data.date}
            </h3>
            <br />
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Feed;

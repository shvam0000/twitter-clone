import { useState } from 'react';
import { feedData } from '../../utils/data/Feed';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { profileData } from '../../utils/data/Profile';

const AddNew = () => {
  const [tweet, setTweet] = useState('');

  const newData = {
    id: profileData.id,
    userName: profileData.first_name + ' ' + profileData.last_name,
    tweet: tweet,
    date: new Date().toJSON().slice(0, 10),
  };

  const submitHandler = (e) => {
    e.preventDefault();
    feedData.push(newData);
    console.log(newData);
    toast.success('Tweet Successfull');
  };

  return (
    <div>
      <h1 className='my-5 text-center font-medium text-xl'>
        What's happening?
      </h1>
      <form onSubmit={submitHandler} className='flex flex-col justify-center'>
        <textarea
          onChange={(e) => setTweet(e.target.value)}
          className='border-2 border-black'></textarea>
        <button className='my-2 bg-base-blue hover:bg-blue-500 mx-28 rounded-lg text-white font-medium py-1'>
          Tweet
        </button>
      </form>
      <ToastContainer autoClose='3000' />
    </div>
  );
};

export default AddNew;

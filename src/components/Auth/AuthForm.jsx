import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitHandler = () => {
    if (
      validator.isEmail(email) &&
      validator.isStrongPassword(password, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      navigate('/home');
    } else {
      toast.error('Something went wrong, please try again');
    }
  };

  return (
    <div>
      <div className='relative mt-10 flex flex-col sm:justify-center items-center'>
        <div className='relative sm:max-w-sm w-full'>
          <div className='card bg-base-blue shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6'></div>
          <div className='relative w-full rounded-3xl  px-6 py-4 bg-white shadow-md'>
            <label
              htmlFor=''
              className='block mt-3 text-xl font-bold text-gray-700 text-center'>
              Login
            </label>
            <form className='mt-10' onSubmit={submitHandler}>
              <div></div>
              <div className='mt-7'>
                <label className='font-semibold'>Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type='email'
                  placeholder='johndoe@gmail.com'
                  className='mt-1 px-4 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 focus:outline-none'
                  required
                />
                <div className='mt-7'>
                  <label className='font-semibold'>Password</label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    placeholder='********'
                    className='mt-1 px-4 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 focus:outline-none'
                    required
                  />
                </div>
              </div>
              <div className='mt-7'>
                <button className='bg-base-blue w-full my-3 py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105'>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AuthForm;

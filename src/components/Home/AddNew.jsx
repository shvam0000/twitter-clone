const AddNew = () => {
  return (
    <div>
      <h1 className='my-5 text-center font-medium text-xl'>
        What's happening?
      </h1>
      <form className='flex flex-col justify-center'>
        <textarea className='border-2 border-black'></textarea>
        <button className='my-2 bg-base-blue hover:bg-blue-500 mx-28 rounded-lg text-white font-medium py-1'>
          Tweet
        </button>
      </form>
    </div>
  );
};

export default AddNew;

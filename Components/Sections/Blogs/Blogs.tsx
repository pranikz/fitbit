const Blogs = () => {
  return (
    <div className=" mx-5 md:mx-56 gap-10">
      <h5 className="text-gray-900 text-4xl md:text-6xl font-medium mb-2 text-['Manrope']">
        Our Blogs
      </h5>
      <div className="border-2 md:border-4 w-24 md:w-36 border-buttonblue md:mt-5"></div>
      <div className=" flex flex-col md:flex-row md:justify-between  items-center justify-center w-full ">
        <div className=" text-white md:first-letter w-[350px] h-96 md:w-[599px] bg-center md:h-[599px] mt-10 md:mt-5 bg-[url('https://res.cloudinary.com/dg6y2dtpl/image/upload/v1666201028/fitbit/Rectangle_18_zfpysu.jpg')] p-5 flex items-end">
          <div className="space-y-4">
            <div className="text-4xl  ">How to stay Healthy?</div>
            <button className=" flex items-center  text-['Manrope'] text-base px-5 border border-white rounded-full h-12 hover:bg-white hover:text-buttonblue">
              Browse
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-10 mt-5 md:mt-0 items">
          <div className="text-white w-[350px] md:w-[599px] h-60 md:h-72 bg-center bg-[url('https://res.cloudinary.com/dg6y2dtpl/image/upload/v1666201027/fitbit/Rectangle_20_n4zcxf.jpg')] p-5 flex items-end">
            <div className="space-y-4">
              <div className="text-4xl  ">Workout for Beginners</div>
              <button className=" flex items-center  text-['Manrope'] text-base px-5 border border-white rounded-full h-12 hover:bg-white hover:text-buttonblue">
                Browse
              </button>
            </div>
          </div>
          <div className=" text-white w-[350px] md:w-[599px] h-60 md:h-72 bg-center bg-[url('https://res.cloudinary.com/dg6y2dtpl/image/upload/v1666201027/fitbit/Rectangle_19_rqj8ra.jpg')] p-5 flex items-end">
            <div className="space-y-4">
              <div className="text-4xl  ">Is Cardio Important?</div>
              <button className=" flex items-center  text-['Manrope'] text-base px-5 border border-white rounded-full h-12 hover:bg-white hover:text-buttonblue">
                Browse
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

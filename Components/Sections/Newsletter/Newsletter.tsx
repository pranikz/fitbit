const Newsletter = () => {
  return (
    <div className="w-full lg:w-4/5 mx-auto relative p-5 md:p-9">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-12 bg-black p-10 lg:p-[60px] ">
        <div>
          <h3 className="text-white  text-3xl md:text-6xl font-semibold">
            Subscribe to our newsletter.
          </h3>
        </div>

        <div>
          <div className="flex justify-start md:justify-end items-center md:my-10">
            <button className="bg-buttonblue text-white hover:bg-white hover:text-buttonblue flex items-center gap-2 text-['Manrope'] text-base px-7 rounded-full h-12 ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

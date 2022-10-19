const CardSection = () => {
  return (
    <div className="flex justify-center font-['Manrope'] p-10 md:p-0">
      <div className="flex  justify-evenly flex-col md:flex-row w-full rounded-lg bg-white ">
        <div className="flex flex-col justify-start">
          <div className="mt-0 md:mt-24 ">
            <h5 className="text-gray-900 text-4xl md:text-6xl font-medium mb-2">
              About Us.
            </h5>
            <div className="border-2 md:border-4 w-24 md:w-36 border-buttonblue md:mt-5"></div>
            <p className=" text-lg md:text-2xl mb-4 mr-24 max-w-xl mt-5 text-grayweb">
              Fitbit was founded in 2020 as a family owned and operated business
              specialising in supplying high-quality gym equipment at great
              prices.
            </p>
          </div>
        </div>
        <img
          className=" w-full h-96 md:h-[510px]  md:w-[510px] "
          src="https://res.cloudinary.com/dg6y2dtpl/image/upload/v1666194986/fitbit/Rectangle_8_zg0z5b.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default CardSection;

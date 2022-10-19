const NumberSection = () => {
  return (
    <div className="flex flex-col md:flex-row  gap-10 justify-around  md:h-[283px] mx-40 ">
      <div className="flex justify-center items-center p-10 hover:shadow-xl">
        <div className="flex-row justify-center">
          <div className="text-6xl flex justify-center">50+</div>
          <div className="flex justify-center">outlets</div>
        </div>
      </div>
      <div className="flex justify-center items-center p-10  hover:shadow-xl">
        <div className="flex-row justify-center ">
          <div className=" flex justify-center text-6xl text-buttonblue ">
            100k+
          </div>
          <div className="flex justify-center">Students</div>
        </div>
      </div>
      <div className="flex justify-center items-center  p-10 hover:shadow-xl ">
        <div className="flex-row justify-center">
          <div className="text-6xl flex justify-center">200+</div>
          <div className="flex justify-center">Trainers</div>
        </div>
      </div>
      <div className="flex justify-center items-center p-10 hover:shadow-xl">
        <div className="flex-row justify-center">
          <div className="text-6xl flex justify-center">50k+</div>
          <div className="flex justify-center">members</div>
        </div>
      </div>
    </div>
  );
};

export default NumberSection;

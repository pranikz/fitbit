const BrowseSection = () => {
  return (
    <div className="flex flex-col gap-4   items-center justify-center w-full">
      <div className=" flex-row md:flex md:flex-row md:gap-40 space-2 space-y-5 md:space-y-0">
        <div className="bg-workout bg-auto bg-no-repeat w-80 md:w-[670px] h-[240px] md:h-[500px] bg-center p-5 md:p-20 flex items-end text-white">
          {" "}
          <div className="space-y-5">
            <div className="text-4xl  ">
              <p>Workout </p>
              <p> Classes</p>
            </div>
            <button className=" hover:bg-white hover:text-buttonblue flex items-center gap-2 text-['Manrope'] text-base px-7 border border-white rounded-full h-12 ">
              Browse
            </button>
          </div>
        </div>
        <div className="bg-equipment bg-auto bg-no-repeat w-80 md:w-[670px] h-[240px] md:h-[500px] bg-center p-5 md:p-20 flex items-end text-white">
          <div className="space-y-5">
            <div className="text-4xl  ">
              <p>Browse</p>
              <p>Equipments</p>
            </div>
            <button className=" hover:bg-white hover:text-buttonblue flex items-center gap-2 text-['Manrope'] text-base px-7 border border-white rounded-full h-12 ">
              Browse
            </button>
          </div>
        </div>
      </div>
      <div className=" flex-row md:flex md:flex-row md:gap-40 space-2 space-y-5 md:space-y-0">
        <div className="bg-yoga  bg-auto bg-no-repeat w-80 md:w-[670px] h-[240px] md:h-[500px] bg-center p-5 md:p-20 flex items-end text-white">
          <div className="space-y-5">
            <div className="text-4xl  ">
              <p>Yoga</p>
              <p>Classes</p>
            </div>
            <button className=" hover:bg-white hover:text-buttonblue flex items-center gap-2 text-['Manrope'] text-base px-7 border border-white rounded-full h-12 ">
              Browse
            </button>
          </div>
        </div>
        <div className="bg-brand  bg-auto bg-no-repeat w-80 md:w-[670px] h-[240px] md:h-[500px] bg-center p-5 md:p-20 flex items-end text-white">
          <div className="space-y-5">
            <div className="text-4xl  ">
              <p>Brand</p>
              <p>Store</p>
            </div>
            <button className=" hover:bg-white hover:text-buttonblue flex items-center gap-2 text-['Manrope'] text-base px-7 border border-white rounded-full h-12 ">
              Browse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseSection;

{
  /* <div className="">
      <div className=" grid md:grid-cols-2 col-span-1  place-items-center grid-rows-1 text-['Manrope']">
        <div className="bg-workout md:h-96 md:w-7/12 w-full h-[400px] text-white flex items-end p-10 ">
          <div className="space-y-5">
            <div className="text-4xl  ">
              <p>Workout </p>
              <p> Classes</p>
            </div>
            <button className=" flex items-center gap-2 text-['Manrope'] text-base px-3 border border-white rounded-full h-12 ">
              Browse
            </button>
          </div>
        </div>
        <div className="bg-equipment md:h-96 md:w-7/12 w-full h-[400px] text-white flex items-end p-10">
          <div className="space-y-5">
            <div className="text-4xl  ">
              <p>Browse</p>
              <p> Equipments</p>
            </div>
            <button className=" flex items-center gap-2 text-['Manrope'] text-base px-3 border border-white rounded-full h-12 ">
              Browse
            </button>
          </div>
        </div>
        <div className="bg-yoga md:h-96 md:w-7/12 w-full h-[400px] text-white flex items-end p-10">
          <div className="space-y-5">
            <div className="text-4xl  ">
              <p>Yoga</p>
              <p> Classes</p>
            </div>
            <button className=" flex items-center gap-2 text-['Manrope'] text-base px-3 border border-white rounded-full h-12 ">
              Browse
            </button>
          </div>
        </div>
        <div className="bg-brand md:h-96 md:w-7/12 w-full h-[400px] text-white flex items-end p-10">
          <div className="space-y-5">
            <div className="text-4xl  ">
              <p>Brand </p>
              <p>Store</p>
            </div>
            <button className=" flex items-center gap-2 text-['Manrope'] text-base px-3 border border-white rounded-full h-12 ">
              Browse
            </button>
          </div>
        </div>
      </div>
    </div> */
}

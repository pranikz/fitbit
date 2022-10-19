import Image from "next/image";
import React from "react";

const CardSection = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row md:min-w-full m-auto rounded-lg bg-white ">
        <div className="p-6 flex flex-col justify-start">
          <h5 className="text-gray-900 text-6xl font-medium mb-2">About Us.</h5>
          <div></div>
          <p className="text-gray-700 text-base mb-4 md:max-w-md">
            Fitbit was founded in 2020 as a family owned and operated business
            specialising in supplying high-quality gym equipment at great
            prices.
          </p>

        </div>
        <img
          className=" w-full h-96 md:h-auto object-cover md:w-48 "
          src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default CardSection;

import React from "react";
const products = [
  {
    imageSrc:
      "https://res.cloudinary.com/dg6y2dtpl/image/upload/v1666206672/fitbit/image_2_dvv1gq.jpg",
    imageAlt: "shoe item",
    href: "/",
    name: "Nike Metcon 7",
    desc: "Training Shoes",
    price: "120",
    id: "1",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dg6y2dtpl/image/upload/v1666206672/fitbit/image_3_qbdqhl.jpg",
    imageAlt: "bag item",
    href: "/",
    name: "Nike Heritage",
    desc: "Crossbody Bag",
    price: "11.99",
    id: "2",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dg6y2dtpl/image/upload/v1666206672/fitbit/image_4_xpo3ha.jpg",
    imageAlt: "pant item",
    href: "/",
    name: "Nike Pro Dri-FIT",
    desc: "Women's Training Leggings",
    price: "25.00",
    id: "3",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dg6y2dtpl/image/upload/v1666206673/fitbit/image_5_nzn71w.jpg",
    imageAlt: "tote item",
    href: "/",
    name: "Nike One",
    desc: "Women's Training Tote Bag",
    price: "45.00",
    id: "4",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dg6y2dtpl/image/upload/v1666206673/fitbit/image54_brgncn.jpg",
    imageAlt: " mask item",
    href: "/",
    name: "Nike Venturer",
    desc: "Performance Face Mask",
    price: "34.99",
    id: "5",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dg6y2dtpl/image/upload/v1666206672/fitbit/image_6_evmggd.jpg",
    imageAlt: "shoe item",
    href: "/",
    name: "Nike Metcon 4",
    desc: "Women's Training Shoes",
    price: "105.00",
    id: "6",
  },
];
const ProductSection = () => {
  return (
    <div>
      <div className="md:mx-56">
        <div className="flex flex-col md:flex  md:flex-row md:justify-between items-center">
          <div>
            <h5 className="text-gray-900 text-4xl md:text-6xl font-medium mb-2">
              Nike New Launches!
            </h5>
            <div className="border-2 md:border-4 w-24 md:w-36 border-buttonblue md:mt-5"></div>
          </div>
          <div className="mt-10 md:mt-0">
            <button className=" rounded-full text-['Manrope'] text-base border border-black text-black h-12 px-7 font-semibold hover:bg-buttonblue hover:border-none hover:text-white">
              View All
            </button>
          </div>
        </div>
        <div className="mx-auto max-w-4xl py-16 px-4 sm:py-24  lg:max-w-7xl ">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-40">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-700">
                      <a href={product.href}>
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 "
                        />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.desc}</p>
                  </div>
                  <span className="text-sm flex items-baseline">
                    $
                    <p className="text-xl font-thin text-gray-900">
                      {product.price}
                    </p>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;

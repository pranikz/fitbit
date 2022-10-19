import { useState } from "react";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <header>
      <nav className="w-full bg-white shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-2">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="/">
                <h2 className="text-2xl font-bold font-['Manrope']">
                  Fitbit<span className="text-blue-500">.</span>
                </h2>
              </a>
              <div className="md:hidden flex items-center gap-5">
                <button className=" rounded-full bg-buttonblue text-white  px-5 h-10 ">
                  login
                </button>
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-[Manrope] text-base ">
                <li className="text-gray-600 font-bold  hover:text-grayweb">
                  <a href="/">Browse Classes</a>
                </li>
                <li className="text-gray-600 font-bold hover:text-grayweb">
                  <a href="/">Shop</a>
                </li>
                <li className="text-gray-600 font-bold hover:text-grayweb">
                  <a href="/">Pricing</a>
                </li>
                <li className="text-gray-600 font-bold hover:text-grayweb">
                  <a href="/">Blog</a>
                </li>
                <li className="text-gray-600 font-bold hover:text-grayweb">
                  <a href="/">About Us</a>
                </li>
                <li className="text-gray-600 font-bold hover:text-grayweb">
                  <a href="/">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <button className="hidden md:inline-block border rounded-full bg-buttonblue text-white  px-5 h-10">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

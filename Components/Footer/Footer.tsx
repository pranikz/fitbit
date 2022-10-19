import ChevDown from "../../assets/ChevDown";

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-[#F7F7F7]">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-6 ">
        <div className="grid grid-cols-1 gap:8 lg:gap-16 lg:grid-cols-3">
          <div>
            <span className="block text-3xl lg:text-6xl font-bold font-['Manrope'] ">
              Fitbit<span className="text-blue-500">.</span>
            </span>

            <div className="mt-5 flex gap-6 text-grayweb text-2xl">
              <a
                className="hover:opacity-75"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Instagram </span>

                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                className="hover:opacity-75"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Twitter </span>

                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                className="hover:opacity-75"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Facebook </span>

                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div>
              <nav
                aria-label="Footer Nav"
                className="mt-4 md:mt-0 flex flex-col space-y-2 text-lg text-grayweb lg:text-2xl"
              >
                <a className="hover:opacity-75" href="">
                  Browse Classes
                </a>
                <a className="hover:opacity-75" href="">
                  Shop Now
                </a>
                <a className="hover:opacity-75" href="">
                  Our Studios
                </a>
              </nav>
            </div>

            <div>
              <nav className=" flex flex-col space-y-2  text-grayweb text-lg lg:text-2xl">
                <a className="hover:opacity-75" href="">
                  Services
                </a>
                <a className="hover:opacity-75" href="">
                  Pricing
                </a>
                <a className="hover:opacity-75" href="">
                  Our Blogs
                </a>
              </nav>
            </div>

            <div>
              <nav className=" flex flex-col space-y-2 text-lg text-grayweb lg:text-2xl">
                <a className="hover:opacity-75" href="">
                  About Us
                </a>
                <a className="hover:opacity-75" href="">
                  Contact Us
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="container mt-14 lg:mt-36 lg:items-center  md:flex mx-auto text-sm md:text-lg  font-normal md:justify-between text-center  ">
          <div>
            <span className="text-sm sm:text-center  ">
              © 2022 All Rights Reserved.
            </span>
          </div>
          <div className="flex">
            <ul className="flex flex-wrap items-center mx-auto gap-3 text-sm mt-3 sm:mt-0">
              <li className="hover:underline">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  Privacy policy
                </a>
              </li>
              <li className="hover:underline">
                <a href="/"> Cookie policy</a>
              </li>
              <li className="hover:underline">
                <a href="/"> Sitemap</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center mt-5 md:mt-0">
            <button className="border border-black px-2 rounded-2xl h-8">
              <span className="text-sm flex gap-2 text-grayweb  items-center">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 21 21"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="#ED4C5C"
                      d="M15.153 2.9122c-1.4728-.90877-3.165-1.4415-5.0138-1.4415v1.4415h5.0138Z"
                    />
                    <path
                      fill="#fff"
                      d="M10.1392 4.35311h6.7687c-.5327-.53272-1.1281-1.03411-1.7549-1.44149h-5.0138v1.44149Z"
                    />
                    <path
                      fill="#ED4C5C"
                      d="M10.1392 5.79599h7.9282c-.3447-.53273-.7208-1.00278-1.1282-1.4415h-6.8v1.4415Z"
                    />
                    <path
                      fill="#fff"
                      d="M10.1392 7.2369h8.6803c-.2194-.50139-.4701-1.00277-.7521-1.44149h-7.9282V7.2369Z"
                    />
                    <path
                      fill="#ED4C5C"
                      d="M10.1392 8.6788h9.1503c-.1253-.50139-.282-.97144-.47-1.4415h-8.6803v1.4415Z"
                    />
                    <path
                      fill="#fff"
                      d="M10.1392 10.1515h9.3697c-.0314-.50143-.1254-.97149-.2194-1.44154h-9.1503v1.44154Z"
                    />
                    <path
                      fill="#ED4C5C"
                      d="M19.5085 10.1519h-9.3697v.7207H.737793c0 .2507 0 .4701.031337.7207H19.5085c.0314-.2506.0314-.47.0314-.7207 0-.2507 0-.5014-.0314-.7207Z"
                    />
                    <path
                      fill="#fff"
                      d="M.988889 13.0343H19.2896c.1253-.4701.188-.9401.2193-1.4415H.769531c.031337.47.125347.9714.219358 1.4415Z"
                    />
                    <path
                      fill="#ED4C5C"
                      d="M1.45882 14.4757H18.8194c.188-.4701.3447-.9401.4701-1.4415H.98877c.12535.5014.28203.9714.47005 1.4415Z"
                    />
                    <path
                      fill="#fff"
                      d="M2.21107 15.9176H18.0675c.282-.4701.5327-.9401.7521-1.4415H1.45898c.21936.5014.47006.9714.75209 1.4415Z"
                    />
                    <path
                      fill="#ED4C5C"
                      d="M3.33906 17.3585H16.9392c.4074-.4387.8148-.9401 1.1282-1.4415H2.21094c.31337.5327.72074 1.0028 1.12812 1.4415Z"
                    />
                    <path
                      fill="#fff"
                      d="M5.09422 18.8004H15.1847c.658-.4074 1.2221-.9088 1.7548-1.4415H3.33936c.53272.564 1.12812 1.0341 1.75486 1.4415Z"
                    />
                    <path
                      fill="#ED4C5C"
                      d="M10.139 20.2731c1.8488 0 3.5724-.5327 5.0452-1.4728H5.09375c1.47283.9401 3.19635 1.4728 5.04525 1.4728Z"
                    />
                    <path
                      fill="#428BC1"
                      d="M5.12495 2.9122c-.65808.40737-1.25348.90876-1.7862 1.44149-.43872.43871-.81476.9401-1.12813 1.44149-.28203.47005-.56406.94011-.75208 1.44149-.18802.47006-.34471.94011-.470053 1.4415-.125347.47005-.18802.9401-.219357 1.44153-.031337.2507-.031337.5013-.031337.752H10.1388v-9.401c-1.84884 0-3.54103.53273-5.01385 1.4415Z"
                    />
                    <path
                      fill="#fff"
                      d="m7.946 1.78418.15668.47005h.47005l-.37604.31337.12535.47005-.37604-.28203-.37605.28203.12535-.47005-.37604-.31337h.47005l.15669-.47005Zm1.25347 1.88021.15668.47005h.47005l-.37604.31337.12535.47005-.37604-.28203-.37604.28203.12534-.47005-.37604-.31337h.47005l.15669-.47005Zm-2.50695 0 .15669.47005h.47005l-.37604.31337.12535.47005-.37605-.28203-.37604.28203.12535-.47005-.37604-.31337h.47005l.15668-.47005ZM7.946 5.5446l.15668.47005h.47005l-.37604.31337.12535.47005-.37604-.28203-.37605.28203.12535-.47005-.37604-.31337h.47005L7.946 5.5446Zm-2.50695 0 .15669.47005h.47005l-.37604.31337.12534.47005-.37604-.28203-.37604.28203.12535-.47005-.37604-.31337h.47005l.15668-.47005Zm-2.50694 0 .15668.47005h.47005l-.37604.31337.12535.47005-.37604-.28203-.37604.28203.12534-.47005-.37604-.31337h.47005l.15669-.47005Zm6.26736 1.8802.15668.47006h.47005l-.37604.31336.12535.47006-.37604-.28203-.37604.28203.12534-.47006-.37604-.31336h.47005l.15669-.47006Zm-2.50695 0 .15669.47006h.47005l-.37604.31336.12535.47006-.37605-.28203-.37604.28203.12535-.47006-.37604-.31336h.47005l.15668-.47006Zm-2.50694 0 .15668.47006h.47006l-.37605.31336.12535.47006-.37604-.28203-.37604.28203.12534-.47006-.37604-.31336h.47006l.15668-.47006ZM7.946 9.30501l.15668.47005h.47005l-.37604.31334.12535.4701-.37604-.282-.37605.282.12535-.4701-.37604-.31334h.47005l.15669-.47005Zm-2.50695 0 .15669.47005h.47005l-.37604.31334.12534.4701-.37604-.282-.37604.282.12535-.4701-.37604-.31334h.47005l.15668-.47005Zm-2.50694 0 .15668.47005h.47005l-.37604.31334.12535.4701-.37604-.282-.37604.282.12534-.4701-.37604-.31334h.47005l.15669-.47005Zm.87743-4.38715.37604-.28203.37604.28203-.15668-.47005.37604-.31337h-.47005l-.12535-.47005-.15668.47005h-.43872l.37604.28203-.15668.50139ZM1.30259 8.67828l.37604-.28203.37605.28203-.15669-.47006.37604-.31336h-.43871l-.15669-.47006-.15668.47006h-.31337c0 .03133-.03133.06267-.03133.09401l.25069.18802-.12535.50139Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path
                        fill="#fff"
                        d="M0 0h20.0556v20.0556H0z"
                        transform="translate(.111328 .844238)"
                      />
                    </clipPath>
                  </defs>
                </svg>{" "}
                United States <ChevDown />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

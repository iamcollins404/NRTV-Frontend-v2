import React from 'react'

function Footer() {
  return (
    <div>
         <footer className="relative py-12 bg-white sm:py-16 lg:py-20">
      <div className="absolute inset-0">
        <img className="object-cover w-full h-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/footer/2/grid-pattern.png" alt="" />
      </div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-16 lg:gap-x-16">
          <div>
            <p className="text-base font-bold text-gray-900">
              Quick Navigation
            </p>

            <ul className="mt-6 space-y-5">
              <li>
                <a href="#" title=""
                  className="flex text-base font-normal text-gray-900 transition-all duration-200 transform hover:translate-x-1">
                  About
                </a>
              </li>

              <li>
                <a href="#" title=""
                  className="flex text-base font-normal text-gray-900 transition-all duration-200 transform hover:translate-x-1">
                  Live Streams
                </a>
              </li>

              <li>
                <a href="#" title=""
                  className="flex text-base font-normal text-gray-900 transition-all duration-200 transform hover:translate-x-1">
                  Watch Now
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-base font-bold text-gray-900">
              More Links
            </p>

            <ul className="mt-6 space-y-5">
              <li>
                <a href="#" title=""
                  className="flex text-base font-normal text-gray-900 transition-all duration-200 transform hover:translate-x-1">
                  Customer Support
                </a>
              </li>

              <li>
                <a href="#" title=""
                  className="flex text-base font-normal text-gray-900 transition-all duration-200 transform hover:translate-x-1">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" title=""
                  className="flex text-base font-normal text-gray-900 transition-all duration-200 transform hover:translate-x-1">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 xl:col-span-3 xl:pl-64">
            <p className="text-base font-bold text-gray-900">
              Subscribe to stay upto date
            </p>
            <p className="mt-4 text-base font-normal leading-7 text-gray-500">
              Stay upto date on Nrtv News Letters, Offers, Updates and much more!
            </p>

            <form action="#" method="POST" className="flex mt-6">
              <div className="flex-1">
                <label for="" className="sr-only">
                  Email address
                </label>
                <div>
                  <input type="email" name="" id=""
                    className="block w-full px-4 py-3 sm:py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-l-lg sm:text-sm focus:border-gray-900 focus:ring-gray-900"
                    placeholder="Enter email address" />
                </div>
              </div>
              <button type="submit"
                className="inline-flex items-center justify-center px-8 py-3 sm:py-3.5 text-base font-semibold text-white bg-gray-900 border border-transparent rounded-r-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                Sign Up
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-start md:justify-end md:order-last">
            <span className="text-base font-normal text-gray-900">
              Follow us on:
            </span>

            <ul className="flex items-center justify-end ml-3 space-x-3">
              <li>
                <a href="#" title=""
                  className="inline-flex items-center justify-center p-2 text-gray-500 transition-all duration-200 bg-transparent rounded-full hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z">
                    </path>
                  </svg>
                </a>
              </li>

              <li>
                <a href="#" title=""
                  className="inline-flex items-center justify-center p-2 text-gray-500 transition-all duration-200 bg-transparent rounded-full hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z">
                    </path>
                  </svg>
                </a>
              </li>

              <li>
                <a href="#" title=""
                  className="inline-flex items-center justify-center p-2 text-gray-500 transition-all duration-200 bg-transparent rounded-full hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="m2.6 13.083 3.452 1.511L16 9.167l-6 7 8.6 3.916a1 1 0 0 0 1.399-.85l1-15a1.002 1.002 0 0 0-1.424-.972l-17 8a1.002 1.002 0 0 0 .025 1.822zM8 22.167l4.776-2.316L8 17.623z">
                    </path>
                  </svg>
                </a>
              </li>

              <li>
                <a href="#" title=""
                  className="inline-flex items-center justify-center p-2 text-gray-500 transition-all duration-200 bg-transparent rounded-full hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z">
                    </path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <p className="mt-6 text-base font-normal text-gray-900 md:mt-0">
            © Copyright 2022, All Rights Reserved by Nrtv
          </p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
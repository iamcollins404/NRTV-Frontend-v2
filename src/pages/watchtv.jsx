import React from 'react'
import NavBar from '../components/landingComponents/NavBar'
import Footer from '../components/landingComponents/Footer'
import ShopProducts from '../components/landingComponents/ShopProducts'
import Live from '../components/account/liveTvFetch'
import Videocard from '../components/videoscontent/videocard'
import TvShowImage from '../assets/images/tv-show.png'
import axios from 'axios'
import ReactGA from 'react-ga'
import { Link } from "react-router-dom";
import Helmet from 'react-helmet'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function Watchtv() {
  const [wait, setWait] = React.useState(true)

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2700,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const showsCategories = ["News", "Kids", "Documentaries", "Reality Shows", "Movies and Drama", "Sports"]

  const correctShowsCategories = ["All", "News", "Kids", "Documentaries", "Reality Shows", "Movies and Drama", "Sports"]

  const [shows, setShows] = React.useState([])

  const [contentId, setContentId] = React.useState([])
  const [showCategoryFilter, setshowCategoryFilter] = React.useState("All")
  console.log(showCategoryFilter)

  // wait function
  const timeOut = setTimeout(navigateFunction, 500)

  function navigateFunction() {
    setWait(false)
  }
  // Make a request and get all shows 
  React.useEffect(() => {
    axios.get('https://hammerhead-app-4pz5b.ondigitalocean.app/watch/')
      .then(function (response) {

        // handle success
        setShows(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  });

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })

  if (showCategoryFilter === "All") {
    return (
      <section>
        <Helmet>
          <meta charSet="utf-8" />
          <title>NRTV - Watch Now</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <NavBar />

        <section class="overflow-hidden bg-black">

          <section className="py-12 bg-black sm:py-16 lg:py-20">
            <div className="px-4 text-center text-white font-bold mx-auto max-w-7xl sm:px-6 lg:px-8">
              NRTV ON DEMAND TV - ADVERTISEMENT - ADVERTISE HERE
            </div>
          </section>

          {
            !wait &&
            <div>
              <div class="bg-black px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

                <header className="bg-black lg:border-b lg:border-gray-200">
                  <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">

                      <div className="flex ml-6 mr-auto xl:ml-0">

                        <nav className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-12">

                          {correctShowsCategories.map((shopCategory) =>
                            <Link to="/watch" onClick={() => { setshowCategoryFilter(shopCategory) }}>
                              <a title="" className="text-base font-medium text-white transition-all duration-200 font-pj hover:text-opacity-50  focus:ring-gray-900 focus:ring-offset-2">
                                {shopCategory}
                              </a>
                            </Link>

                          )}

                        </nav>
                      </div>

                    </div>
                  </div>
                </header>

                <div>
                  <h2 className='mt-4 text-xs font-bold text-white sm:text-sm md:text-base'>Displaying {showCategoryFilter} Shows</h2>
                </div>

                <section className="bg-black mt-10">
                  <div className="max-w-7xl">
                    {
                      <div className="grid bg-black grid-cols-1 gap-6 px-8 mt-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:px-0">
                        {shows.map((shows) =>
                          <section>
                            <Link to={`/account/watch/${shows._id}`}>
                              <div className="group" onClick={() => { setContentId(shows._id) }}>
                                <div className="contentCard relative overflow-hidden transition-all duration-300 bg-black border border-gray-100 rounded-lg group hover:shadow-xl">
                                  <div className="overflow-hidden aspect-w-4 aspect-h-3">
                                    <img className="imageForContentCard object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110" src={shows.contentCoverImageUrl} alt="" />
                                  </div>
                                  <div className="px-3 py-4 sm:px-4 sm:py-5">
                                    <h3 className="mt-3 text-xs font-bold text-white sm:text-sm md:text-base">
                                      <a title="">
                                        {shows.contentTitle}
                                        <span className="absolute inset-0" aria-hidden="true"></span>
                                      </a>
                                    </h3>

                                    <div className="mt-2">
                                      <div className="flex items-center mt-4 space-x-2">
                                        <p className="text-sm watchCardText font-medium text-white">
                                          <a href="#" title="" className="mb-10">
                                            {shows.contentDescription}
                                          </a>
                                        </p>
                                      </div>
                                    </div>

                                    <div className="mt-3">
                                      <span className="text-xs font-semibold text-gray-900 bg-gray-50 border border-gray-300 rounded-full inline-flex items-center px-2.5 py-1">  
                                      <p className='my-1'>
                                      {shows.contentCategory}
                                      </p> </span>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </Link>
                          </section>
                        )}
                      </div>
                    }

                  </div>
                </section>

              </div>
            </div>
          }
        </section>

        <Footer />
      </section>
    )

  } else {
    return (
      <section>
        <Helmet>
          <meta charSet="utf-8" />
          <title>NRTV - Watch Now</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <NavBar />

        <section class="overflow-hidden bg-black">

          <section className="py-12 bg-black sm:py-16 lg:py-20">
            <div className="px-4 text-center text-white font-bold mx-auto max-w-7xl sm:px-6 lg:px-8">
              NRTV ON DEMAND TV - ADVERTISEMENT - ADVERTISE HERE
            </div>
          </section>

          {
            !wait &&
            <div>
              <div class="bg-black px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

                <header className="bg-black lg:border-b lg:border-gray-200">
                  <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                      {/* <div className="flex items-center -m-2 xl:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 text-white bg-black rounded-lg hover:text-white hover:bg-black focus:outline-none focus:ring-2 
                        focus:ring-offset-2 focus:ring-indigo-600">
                          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                          </svg>
                        </button>
                      </div> */}

                      <div className="flex ml-6 mr-auto xl:ml-0">

                        {/* <div className="flex items-center flex-shrink-0">
                          <h5 className="block text-white w-auto h-8 lg:hidden">Watch Shows</h5>
                        </div> */}

                        <nav className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-12">

                          {correctShowsCategories.map((shopCategory) =>
                            <Link to="/watch" onClick={() => { setshowCategoryFilter(shopCategory) }}>
                              <a title="" className="text-base font-medium text-white transition-all duration-200 font-pj hover:text-opacity-50  focus:ring-gray-900 focus:ring-offset-2">
                                {shopCategory}
                              </a>
                            </Link>

                          )}

                        </nav>
                      </div>

                    </div>
                  </div>
                </header>

                <div>
                  <h2 className='mt-4 text-xs font-bold text-white sm:text-sm md:text-base'>Displaying {showCategoryFilter} Shows</h2>
                </div>

                <section className="bg-black mt-10">
                  <div className="max-w-7xl">
                    {
                      <div className="grid bg-black grid-cols-1 gap-6 px-8 mt-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:px-0">
                        {shows.filter(show => show.contentCategory === showCategoryFilter).map((shows) =>

                          <section>
                            <Link to={`/account/watch/${shows._id}`}>
                              <div className="group" onClick={() => { setContentId(shows._id) }}>
                                <div className="contentCard relative overflow-hidden transition-all duration-300 bg-black border border-gray-100 rounded-lg group hover:shadow-xl">
                                  <div className="overflow-hidden aspect-w-4 aspect-h-3">
                                    <img className="imageForContentCard object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110" src={shows.contentCoverImageUrl} alt="" />
                                  </div>
                                  <div className="px-3 py-4 sm:px-4 sm:py-5">
                                    <h3 className="mt-3 text-xs font-bold text-white sm:text-sm md:text-base">
                                      <a title="">
                                        {shows.contentTitle}
                                        <span className="absolute inset-0" aria-hidden="true"></span>
                                      </a>
                                    </h3>

                                    <div className="mt-2">
                                      <div className="flex items-center mt-4 space-x-2">
                                        <p className="text-sm watchCardText font-medium text-white">
                                          <a href="#" title="" className="mb-10">
                                            {shows.contentDescription}
                                          </a>
                                        </p>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </Link>
                          </section>
                        )}
                      </div>
                    }

                  </div>
                </section>

              </div>
            </div>
          }

        </section>

        <Footer />
      </section>
    )
  }
}

export default Watchtv
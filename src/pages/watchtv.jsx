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

const tvCategories = ["Clothing", "Accessories", "Electronics", "Stationery", "Self Care"]

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

  const showsCategories = ["kids", "documentaries", "realityshows", "moviesanddrama", "news", "sports"]

  const [shows, setShows] = React.useState([])

  const [contentId, setContentId] = React.useState([])

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

  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NRTV - Watch Now</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <NavBar />

      <section class="overflow-hidden bg-gray-50">

        <section>
          <div className="relative overflow-hidden bg-gray-100">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mb-6">
              <section className="relative">
                <Slider {...settings}>
                  <div>
                    <img className='sliderImages' src="https://img.freepik.com/free-photo/young-adult-feeling-frustrated-about-lost-video-games-competition-playing-shooting-game-tv-console-losing-sad-man-being-angry-after-gaming-strategy-lose-relaxing-with-friends_482257-48119.jpg?w=1380&t=st=1679915159~exp=1679915759~hmac=a38096d5d0c8b7d00c8835cdfa89a15600adb043f50eb77cf8be20f9318fc9ad" alt="" />
                  </div>

                  <div>
                    <img className='sliderImages' src="https://img.freepik.com/free-photo/man-watching-tv-eating-chips_23-2148868675.jpg?w=1380&t=st=1679915162~exp=1679915762~hmac=c5b16999621170bbdd4d38234ecbbe02d7c7716ad4afb6773f8c9f85ff72329e" alt="" />
                  </div>

                  <div>
                    <img className='sliderImages' src="https://img.freepik.com/premium-photo/popcorn-tv-remote-brown-wooden-table-concept-watching-movies-home-view-from_262193-867.jpg" alt="" />
                  </div>

                  <div>
                    <img className='sliderImages' src="https://img.freepik.com/premium-photo/young-freelancer-using-digital-tablet-with-touch-screen-work-online-person-with-entrepreneur-job-holding-gadget-working-from-home-with-modern-technology-man-using-internet_482257-28362.jpg" alt="" />
                  </div>

                </Slider>
              </section>
            </div>
          </div>
        </section>



        {
          !wait &&
          <div>
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

              <header className="bg-white border-b border-gray-200">
                <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                  <div className="flex justify-between h-16">
                    <div className="flex items-center -m-2 xl:hidden">
                      <button type="button" className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-lg hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </button>
                    </div>

                    <div className="flex ml-6 mr-auto xl:ml-0">

                      <div className="flex items-center flex-shrink-0">
                        <h5 className="block w-auto h-8 lg:hidden">Nrtv Shop</h5>
                      </div>

                      <div className="hidden xl:flex xl:space-x-10">
                        <a href="#" title="" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-indigo-600 transition-all duration-200 border-b-2 border-indigo-600"> All </a>
                        {showsCategories.map((shopCategory) =>
                          <a href="#" title="" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-900">{shopCategory}</a>
                        )}

                      </div>
                    </div>

                    <div className="flex items-center justify-end">
                      <div className="flex-1 hidden max-w-xs ml-auto lg:block">
                        <label for="" className="sr-only"> Search </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>

                          <input type="search" name="" id="" className="block w-full py-2 pl-10 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm" placeholder="Search here" />
                        </div>
                      </div>

                      <div className="flex items-center space-x-6 sm:ml-5">

                        <div className="relative">
                          <button type="button" className="p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>

                          </button>
                          <span className="inline-flex items-center px-1.5 absolute -top-px -right-1 py-0.5 rounded-full text-xs font-semibold bg-indigo-600 text-white">0</span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </header>


              <Live />

              <section className="bg-gray-50 mt-10">
                <div className="max-w-7xl">
                  {
                    showsCategories.map((category) =>
                      <div>
                        <div className="my-8 flex items-center justify-center lg:justify-between">
                          <div className="text-center sm:flex sm:items-end sm:space-x-16 sm:text-left">
                            <p className="text-2xl font-bold text-gray-900">
                              {category}
                            </p>
                          </div>
                          <div className="hidden lg:flex">
                            <a title="" className="inline-flex items-center justify-center p-1 -m-1 text-sm font-bold text-gray-600 transition-all duration-200 rounded-md focus:text-gray-900 focus:ring-gray-900 focus:ring-2 focus:ring-offset-2 focus:outline-none hover:text-gray-900">
                              VIEW ALL
                              <svg className="w-5 h-5 ml-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </a>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 px-8 mt-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:px-0">
                          {shows.filter(show => show.contentCategory === category).map((shows) =>

                            <section>
                              <Link to={`/account/watch/` + category}>
                                <div className="group" onClick={() => { setContentId(shows._id) }}>
                                  <div className="contentCard relative overflow-hidden transition-all duration-300 bg-white border border-gray-100 rounded-lg group hover:shadow-xl">
                                    <div className="overflow-hidden aspect-w-4 aspect-h-3">
                                      <img className="imageForContentCard object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110" src={shows.contentCoverImageUrl} alt="" />
                                    </div>
                                    <div className="px-3 py-4 sm:px-4 sm:py-5">
                                      <h3 className="mt-3 text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                                        <a title="">
                                          {shows.contentTitle}
                                          <span className="absolute inset-0" aria-hidden="true"></span>
                                        </a>
                                      </h3>
                                      <div className="mt-2">
                                        <div className="flex items-center mt-4 space-x-2">
                                          <p className="text-sm font-medium text-gray-900">
                                            <a href="#" title="" className="">
                                              {shows.contentDuration}
                                            </a>
                                          </p>
                                          <span className="text-sm font-medium text-gray-900">
                                            •
                                          </span>
                                          <p className="text-sm font-medium text-gray-900">
                                            {shows.dateUploaded}
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
                      </div>
                    )
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

export default Watchtv
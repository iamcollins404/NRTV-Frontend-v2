import React from 'react'
import HomePageBarner from '../../assets/images/homepageBarner.jpg'
import { Link } from "react-router-dom";
import TopRectangleAd from './topRectangleAd';

function CallToAction() {
    return (
        <div className='bg-gray-100 pb-10'>
            <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
                <div className="relative py-12 bg-white sm:py-16 lg:py-20 ">
                    <div className="absolute inset-0">
                        <img className="backdrop-blur shadow object-cover object-right w-full h-full lg:object-center" src={HomePageBarner} alt="" />
                    </div>

                    <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>

                    <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl py-14">
                        <div className="max-w-lg mx-auto text-center xl:max-w-2xl">
                            <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl">World Class Entertainment Beyond your imagination!</h1>
                            <p className="max-w-lg mx-auto mt-6 text-base font-normal leading-7 text-gray-300">Welcome to Nrtv the best and hottest new TV station in Zimbabwe. We provide Unlimited movies, TV shows, and more. We are the future of Zimbabwean Broadcasting.</p>

                            <form className="max-w-xl mx-auto mt-10">
                                <div>
                                    <label for="" className="sr-only">Livestream Shows Now</label>

                                </div>

                                <div>
                                    <Link to="/watch">
                                        <button
                                            className="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-bold tracking-widest text-white uppercase transition-all duration-200 bg-gray-800 
                                    border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white hover:bg-gray-700"
                                        >
                                            Livestream Shows Now
                                        </button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div>

            <TopRectangleAd />

        </div>
    )
}

export default CallToAction


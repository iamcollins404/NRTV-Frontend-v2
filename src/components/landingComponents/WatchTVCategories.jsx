import React from 'react'
import { Link } from "react-router-dom";
import LiveTV  from '../../assets/images/livestream.png'
import MoviesandDrama  from '../../assets/images/moviesanddrama.png'
import RealityShows  from '../../assets/images/realityshows.png'
import Documentaries  from '../../assets/images/Documentaries.png'
import Sports  from '../../assets/images/sports.png'
import Kids  from '../../assets/images/kids.png'

function WatchTVCategories() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-black">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <Link to="/watch">
                <div className="flex items-center justify-center text-center md:justify-between sm:text-left">
                    <h2 className="text-2xl font-bold text-white sm:text-3xl">Watch Shows Online</h2>

                    <div className="hidden md:block">
                        <a title="" className="inline-flex items-center p-1 -m-1 text-xs font-bold tracking-wide text-white uppercase transition-all duration-200 rounded hover:text-white focus:ring-2 focus:text-white focus:ring-gray-900 focus:ring-offset-2 focus:outline-none" role="button">
                            Browse All Categories
                            <svg className="w-4 h-4 ml-1.5 -mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                    </Link>


                <div className="grid grid-cols-1 mt-8 text-center sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 sm:text-left">

                    <Link to="/watch">
                        <div className="relative group mb-5">
                            <div className="overflow-hidden aspect-w-4 aspect-h-2 rounded-2xl">
                                <img className="indexShowsImages object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={LiveTV} alt="" />
                            </div>

                            <h3 className="mt-5 text-lg font-bold text-white">
                                <a title="">
                                    Trending Shows
                                    <span className="absolute inset-0" aria-hidden="true"></span>
                                </a>
                            </h3>
                            <p className="text-xs text-white font-medium mt-1.5">readily available</p>
                        </div>
                    </Link>

                    <Link to="/watch">
                        <div className="relative group mb-5">
                            <div className="overflow-hidden aspect-w-4 aspect-h-2 rounded-2xl">
                                <img className="indexShowsImages object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={MoviesandDrama} alt="" />
                            </div>

                            <h3 className="mt-5 text-lg font-bold text-white">
                                <a title="">
                                    Movies and Drama
                                    <span className="absolute inset-0" aria-hidden="true"></span>
                                </a>
                            </h3>
                            <p className="text-xs text-white font-medium mt-1.5">readily available</p>
                        </div>
                    </Link>

                    <Link to="/watch">
                        <div className="relative group mb-5">
                            <div className="overflow-hidden aspect-w-4 aspect-h-2 rounded-2xl">
                                <img className="indexShowsImages object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={Documentaries} alt="" />
                            </div>

                            <h3 className="mt-5 text-lg font-bold text-white">
                                <a title="">
                                    Documentaries
                                    <span className="absolute inset-0" aria-hidden="true"></span>
                                </a>
                            </h3>
                            <p className="text-xs text-white font-medium mt-1.5">readily available</p>
                        </div>
                    </Link>

                    <Link to="/watch">
                        <div className="relative group mb-5">
                            <div className="overflow-hidden aspect-w-4 aspect-h-2 rounded-2xl">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={Sports} alt="" />
                            </div>

                            <h3 className="mt-5 text-lg font-bold text-white">
                                <a title="">
                                    Sports
                                    <span className="absolute inset-0" aria-hidden="true"></span>
                                </a>
                            </h3>
                            <p className="text-xs text-white font-medium mt-1.5">readily available</p>
                        </div>
                    </Link>

                    <Link to="/watch">
                        <div className="relative group mb-5">
                            <div className="overflow-hidden aspect-w-4 aspect-h-2 rounded-2xl">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={Kids} alt="" />
                            </div>

                            <h3 className="mt-5 text-lg font-bold text-white">
                                <a title="">
                                    Kids
                                    <span className="absolute inset-0" aria-hidden="true"></span>
                                </a>
                            </h3>
                            <p className="text-xs text-white font-medium mt-1.5">readily available</p>
                        </div>
                    </Link>

                    <Link to="/watch">
                        <div className="relative group mb-5">
                            <div className="overflow-hidden aspect-w-4 aspect-h-2 rounded-2xl">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={RealityShows} alt="" />
                            </div>

                            <h3 className="mt-5 text-lg font-bold text-white">
                                <a title="">
                                   Entertainment
                                    <span className="absolute inset-0" aria-hidden="true"></span>
                                </a>
                            </h3>
                            <p className="text-xs text-white font-medium mt-1.5">readily available</p>
                        </div>
                    </Link>
                </div>

                <div className="block mt-8 text-center md:hidden">
                    <a title="" className="inline-flex items-center p-1 -m-1 text-xs font-bold tracking-wide text-white uppercase transition-all duration-200 rounded hover:text-white focus:ring-2 focus:text-white focus:ring-gray-900 focus:ring-offset-2 focus:outline-none" role="button">
                        All Categories
                        <svg className="w-4 h-4 ml-1.5 -mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default WatchTVCategories
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/nrtvLogo.png'
import MobileNavigationMenu from './mobileNavigation';

const LoggedinAccountLayout = (props) => {
    const location = useLocation()
    const { window, children } = props;

    const setBgColor = (path) => {
        if (location.pathname === path) {
            return "bg-indigo-600 text-white"
        }
    }

    const [showMenuIcon, setshowMenuIcon] = useState(false);

    return (
        <div className=" flex flex-col flex-1 bg-white">
            <header className="bg-white  sticky top-0 z-50 border-b border-gray-200">
                <div className="px-4 mx-auto">
                    <div className="flex items-center justify-between h-16">

                        <div className="flex mr-auto lg:ml-2">
                            <div className="flex items-center flex-shrink-0">
                                <div className="flex-shrink-0">
                                    <Link to="/account">
                                        <img className="nrtvLogoImage" src={Logo} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-end space-x-4 sm:ml-5">
                            <div className="relative lg:hidden">
                                <Link to="/account">
                                    <button type="button" className="p-2 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100">
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>

                            <button type="button" className="flex items-center max-w-xs rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                <img className="object-cover w-8 h-8 bg-gray-300 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/vertical-menu/1/avatar-male.png" alt="" />
                                <span className="hidden ml-2 text-sm text-gray-900 md:block font-bold">USER ACCOUNT</span>
                            </button>

                            <div className="flex items-center justify-end space-x-4 sm:ml-5 mr-5">
                                <div className="flex lg:hidden">

                                    {/* show and hide */}
                                    <button type="button" className="text-gray-900">

                                        {!showMenuIcon &&
                                            <span aria-hidden="true" onClick={() => { setshowMenuIcon(true) }}>
                                                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
                                                </svg>
                                            </span>
                                        }

                                        {showMenuIcon &&
                                            <span aria-hidden="true" onClick={() => { setshowMenuIcon(false) }}>
                                                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </span>
                                        }

                                    </button>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </header>

            {showMenuIcon &&
                    <nav x-show="expanded" x-collapse className='bg-stone-100 transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)'>
                        <div className="px-1 my-8 text-center">
                            <div className="grid gap-y-7">

                                <Link to="/account">
                                    <a title="" className="text-base font-medium text-gray-900 transition-all duration-200 font-pj hover:text-opacity-50  focus:ring-gray-900 focus:ring-offset-2">
                                    Browse
                                    </a>
                                </Link>

                                <Link to="/account/watch/live">
                                    <a title="" className="text-base font-medium text-gray-900 transition-all duration-200 font-pj hover:text-opacity-50  focus:ring-gray-900 focus:ring-offset-2">
                                    Live TV Broadcasts
                                    </a>
                                </Link>

                                <Link to="/account/watch/news">
                                    <a title="" className="text-base font-medium text-gray-900 transition-all duration-200 font-pj hover:text-opacity-50  focus:ring-gray-900 focus:ring-offset-2">
                                    News & Current Affairs
                                    </a>
                                </Link>

                                <Link to="/account/watch/moviesanddrama">
                                    <a title="" className="text-base font-medium text-gray-900 transition-all duration-200 font-pj hover:text-opacity-50  focus:ring-gray-900 focus:ring-offset-2">
                                    Movies & Drama
                                    </a>
                                </Link>

                                <Link to="/account/watch/entertainment">
                                    <a title="" className="text-base font-medium text-gray-900 transition-all duration-200 font-pj hover:text-opacity-50  focus:ring-gray-900 focus:ring-offset-2">
                                    Entertaiment Shows
                                    </a>
                                </Link>

                                <Link to="/account/watch/realityshows">
                                    <a title="" className="text-base font-medium text-gray-900 transition-all duration-200 font-pj hover:text-opacity-50  focus:ring-gray-900 focus:ring-offset-2">
                                    Reality Shows
                                    </a>
                                </Link>

                                <Link to="/account/watch/documentaries">
                                    <a title="" className="text-base font-medium text-gray-900 transition-all duration-200 font-pj hover:text-opacity-50  focus:ring-gray-900 focus:ring-offset-2">
                                    Documentaries
                                    </a>
                                </Link>

                                <Link to="/account/watch/sports">
                                    <a title="" className="text-base font-medium text-gray-900 transition-all duration-200 font-pj hover:text-opacity-50  focus:ring-gray-900 focus:ring-offset-2">
                                    Sports
                                    </a>
                                </Link>

                                <Link to="/account/watch/moviesanddrama">
                                    <a title="" className="text-base font-medium text-gray-900 transition-all duration-200 font-pj hover:text-opacity-50  focus:ring-gray-900 focus:ring-offset-2">
                                    Reality Shows
                                    </a>
                                </Link>

                                <Link to="/auth/signup">
                                    <a title="" className="inline-flex items-center justify-center px-5 py-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-200 bg-transparent border border-gray-900 rounded-xl font-pj
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white"
                                    role="button">
                                        Account Logout
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </nav>
                }

            <div className="flex flex-1 bg-gray-50">
                <div className="min-h-full h-screen sticky top-0 sideNav hidden bg-gray-100 md:flex md:w-64 md:flex-col">
                    <div className="mt-14 flex flex-col pt-8 overflow-y-auto whitespace-nowrap scrollbar-hide">

                        <div className="flex flex-col flex-1 px-3 mt-2">
                            <div className="space-y-4">
                                <nav className="flex-1 space-y-2">

                                    <Link to="/account">
                                        <a title="" className={`flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group ${setBgColor("/account")}`}>
                                            <svg className="flex-shrink-0 w-5 h-5 mr-4 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                            </svg>
                                            Browse
                                        </a>
                                    </Link>

                                    <Link to="/account/watch/live">
                                        <a className={`mt-1 flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group ${setBgColor("/account/watch/live")}`}>
                                            <svg className="flex-shrink-0 w-5 h-5 mr-4 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                                <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                                            </svg>
                                            Live TV Broadcasts
                                        </a>
                                    </Link>

                                    <Link to="/account/watch/news">
                                        <a className={`mt-1 flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group ${setBgColor("/account/watch/news")}`}>
                                            <svg className="flex-shrink-0 w-5 h-5 mr-4 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                            </svg>
                                            News & Current Affairs
                                        </a>
                                    </Link>

                                    <Link to="/account/watch/moviesanddrama">
                                        <a className={`mt-1 flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group ${setBgColor("/account/watch/moviesanddrama")}`}>
                                            <svg className="flex-shrink-0 w-5 h-5 mr-4 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
                                            </svg>
                                            Movies & Drama
                                        </a>
                                    </Link>

                                    <Link to="/account/watch/entertainment">
                                        <a className={`mt-1 flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group ${setBgColor("/account/watch/entertainment")}`}>
                                            <svg className="flex-shrink-0 w-5 h-5 mr-4 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                            </svg>
                                            Entertaiment Shows
                                        </a>
                                    </Link>

                                    <Link to="/account/watch/realityshows">
                                        <a className={`mt-1 flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group ${setBgColor("/account/watch/realityshows")}`}>
                                            <svg className="flex-shrink-0 w-5 h-5 mr-4 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                                            </svg>
                                            Reality Shows
                                        </a>
                                    </Link>

                                    <Link to="/account/watch/documentaries">
                                        <a className={`mt-1 flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group ${setBgColor("/account/watch/documentaries")}`}>
                                            <svg className="flex-shrink-0 w-5 h-5 mr-4 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                            </svg>
                                            Documentaries
                                        </a>
                                    </Link>

                                    <Link to="/account/watch/sports">
                                        <a className={`mt-1 flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group ${setBgColor("/account/watch/sports")}`}>
                                            <svg className="flex-shrink-0 w-5 h-5 mr-4 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                                            </svg>
                                            Sports
                                        </a>

                                    </Link>

                                    <Link to="/account/watch/kids">
                                        <a className={`mt-1 flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group ${setBgColor("/account/watch/kids")}`}>
                                            <svg className="flex-shrink-0 w-5 h-5 mr-4 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                            </svg>
                                            Kids
                                        </a>
                                    </Link>
                                </nav>

                                <hr className="border-gray-200" />

                                <nav className="flex-1 space-y-2">
                                    <Link to="/account/admincorner">
                                        <a className={`mt-1 flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group ${setBgColor("/account/admincorner")}`}>
                                            <svg className="flex-shrink-0 w-5 h-5 mr-4 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                                            </svg>
                                            Admin Corner
                                        </a>
                                    </Link>

                                    {/* <Link to="/account/admin-analytics">
                                        <a className={`mt-1 flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group ${setBgColor("/account/admin-analytics")}`}>
                                            <svg className="flex-shrink-0 w-5 h-5 mr-4 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                                            </svg>
                                            Analytics
                                        </a>
                                    </Link> */}

                                    <Link to="">
                                        <a className={`mt-1 flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group ${setBgColor("")}`}>
                                            <svg className="flex-shrink-0 w-5 h-5 mr-4 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                            </svg>
                                            Ads & Monetisation
                                        </a>
                                    </Link>

                                    {/* <Link to="/account/shop">
                                        <a className={`mt-1 flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group ${setBgColor("/account/shop")}`}>
                                            <svg className="flex-shrink-0 w-5 h-5 mr-4 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                            Shop Online
                                        </a>
                                    </Link>

                                    <Link to="/account/settings">
                                        <a className={`mt-1 flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group ${setBgColor("/account/settings")}`}>
                                            <svg className="flex-shrink-0 w-5 h-5 mr-4 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                            </svg>
                                            Orders
                                        </a>
                                    </Link> */}

                                    <Link to="/account/settings">
                                        <a className={`mt-1 flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group ${setBgColor("/account/settings")}`}>
                                            <svg className="flex-shrink-0 w-5 h-5 mr-4 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                                />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            Account Settings
                                        </a>
                                    </Link>

                                    <Link to="">
                                        <a className="mt-1 flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group">
                                            <svg class="flex-shrink-0 w-5 h-5 mr-4 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                            </svg>
                                            Log Out
                                        </a>
                                    </Link>
                                </nav>

                                <div className="sideNavprivacytextdiv px-5 pb-8 mt-16">
                                    <div className="flex items-center space-x-6">
                                        <a title="" class="text-xs font-medium text-gray-500 hover:text-gray-900"> Privacy Policy</a>
                                    </div>
                                    <div className="flex items-center space-x-6 mt-3">
                                        <a title="" class="text-xs font-medium text-gray-500 hover:text-gray-900"> Terms of Service </a>
                                    </div>
                                    <p className="mt-4 text-xs font-medium text-gray-500">© 2023 Nrtv. All Rights Reserved</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <main>
                        <div className="py-8">
                            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                                {children}
                            </div>
                        </div>

                        <MobileNavigationMenu />
                    </main>
                </div>
            </div>
        </div>

    )
}


export default LoggedinAccountLayout;